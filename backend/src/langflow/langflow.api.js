import axios from "axios";
import dotenv from "dotenv";
import ngrok from "ngrok";

dotenv.config({
  path: "../../.env",
});

// Start ngrok once when the server starts
let publicUrl;

const startNgrok = async () => {
  try {
    publicUrl = await ngrok.connect(3000); // Assuming your server is running on port 3000
    console.log(`Ngrok is running at: ${publicUrl}`);
  } catch (error) {
    console.error("Error starting ngrok:", error.message);
    process.exit(1); // Exit the process if ngrok cannot be started
  }
};

// Call ngrok start once when the app starts
startNgrok();

export const runLangFlow = async () => {
  const token = process.env.LANGFLOW_TOKEN;
  const inputValue = "static";

  if (!publicUrl) {
    throw new Error("Ngrok URL is not available.");
  }

  // The dataUrl is now fixed to the public ngrok URL
  const dataUrl = `${publicUrl}/data`;

  const url =
    "https://api.langflow.astra.datastax.com/lf/6f5d319d-0f28-4d22-bbee-a976d981680d/api/v1/run/f268c20a-a94f-484a-96d9-23b8f115c0ac?stream=false";

  // Initialize payload with tweaks object
  const payload = {
    input_value: inputValue,
    output_type: "chat",
    input_type: "chat",
    tweaks: {
      "APIRequest-NPp4t": {
        urls: [dataUrl], // Use the ngrok URL here
      },
      "ParseData-qPubJ": {
        sep: "\n",
        template: "{result}",
      },
      "Prompt-r82pU": {},
      "ChatInput-AwsLA": {},
      "ChatOutput-pqVuM": {},
      "GroqModel-vKAET": {},
    },
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.outputs[0].outputs[0].results.message.text;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error("Failed to fetch data from LangFlow API");
  }
};

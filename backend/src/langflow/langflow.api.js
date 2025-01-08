import axios from "axios";
import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

export const runLangFlow = async () => {
  const url =
    "https://api.langflow.astra.datastax.com/lf/6f5d319d-0f28-4d22-bbee-a976d981680d/api/v1/run/f268c20a-a94f-484a-96d9-23b8f115c0ac?stream=false";
  const token = process.env.LANGFLOW_TOKEN;
  const inputValue = "static";
  const payload = {
    input_value: inputValue,
    output_type: "chat",
    input_type: "chat",
    tweaks: {
      "APIRequest-NPp4t": {},
      "ParseData-qPubJ": {
        sep: "\n",
        template:
          "Reel Like: {result[0][total_likes]}\\n\nReel Shares: {result[0][total_shares]}\\n\nReel Comments: {result[0][total_comments]}\\n\nCarousel Like: {result[1][total_likes]}\\n\nCarousel Shares: {result[1][total_shares]}\\n\nCarousel Comments: {result[1][total_comments]}\\n\nStatic Like: {result[2][total_likes]}\\n\nStatic Shares: {result[2][total_shares]}\\n\nStatic Comments: {result[2][total_comments]}\\n",
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

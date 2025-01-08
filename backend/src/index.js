import express from "express";
import { queryDatabase } from "./db/db.js";
import { runLangFlow } from "./langflow/langflow.api.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/data", async (req, res) => {
  try {
    const resultData = await queryDatabase();
    res.status(200).json(resultData);
  } catch (error) {
    console.error("Error handling /data request:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.get("/langflow", async (req, res) => {
  try {
    const data = await runLangFlow();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error handling /langflow request:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

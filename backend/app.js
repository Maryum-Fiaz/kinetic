import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.post("/api/coach", async (req, res) => {
  try {
    // get data from frontend
    const { prompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{
          role: "user",
          parts: [{ text: prompt, }],
        }],
    });

    // send back response to frontend
res.json({  advice: response.text })

  } catch (error) {
    console.log("AI Error: ", error);
    res.status(500).json({error: "The Coach is resting. Try again!"})
    
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*import { Gem } from "lucide-react";
import { GEMINI_API_KEY } from "../config/config";
import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-001",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  
};

export const AIChatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [],
});*/
/*const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const AIChatSession = {
  sendMessage: async (prompt) => {
    const response = await fetch(
      "https://ai.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GEMINI_API_KEY}`,
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    return response.json();
  },
};
*/

export const AIChatSession = {
  sendMessage: async (prompt) => {
    const response = await fetch("http://localhost:5000/api/ai/summary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("AI request failed");
    }

    return response.json();
  },
};



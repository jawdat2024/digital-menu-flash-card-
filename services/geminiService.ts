import { GoogleGenAI } from "@google/genai";
import { MENU_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

const initializeAI = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const getSystemInstruction = () => `
You are the "Head Barista" AI for a coffee shop named CARTEL. 
Your personality is industrial, minimalist, and knowledgeable — slightly edgy but very helpful.
You do not use emojis. You speak concisely.
The current time at the cafe is: ${new Date().toLocaleString()}.
Use this time to make relevant suggestions (e.g., coffee in the morning, decaf or dessert in the evening).

You have access to the menu data provided below.
When a user asks for a recommendation, analyze their request and suggest specific items from the menu.
If they ask about ingredients, refer to the menu data.
If they ask about something not on the menu, politely inform them we don't serve that but suggest the closest alternative.

MENU DATA:
${JSON.stringify(MENU_DATA)}
`;

export const getBaristaResponse = async (userPrompt: string): Promise<string> => {
  const client = initializeAI();
  if (!client) {
    return "System Error: API Key missing. Please check configuration.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: getSystemInstruction(),
        maxOutputTokens: 150, // Keep it brief
        thinkingConfig: { thinkingBudget: 0 }, // Disable thinking to ensure response fits in maxOutputTokens
      },
    });

    return response.text || "I'm having trouble reading the order ticket. Ask again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the roastery lost. Please try again.";
  }
};
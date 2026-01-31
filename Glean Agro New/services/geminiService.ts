import { GoogleGenAI } from "@google/genai";

export class AgroAIService {
  // Use a private property to store the GoogleGenAI instance initialized with the environment variable.
  private ai: GoogleGenAI;

  constructor() {
    // API key is obtained directly from process.env.API_KEY as per guidelines.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getAdvice(prompt: string): Promise<string> {
    try {
      // Querying GenAI with model and prompt in a single generateContent call.
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are the Glean Agro AI Assistant. You provide expert advice on sustainable farming, organic crop production, soil health, and agritech. Be professional, helpful, and concise. Only answer agricultural related questions.",
          temperature: 0.7,
        },
      });

      // Directly accessing the .text property from GenerateContentResponse.
      return response.text || "I'm sorry, I couldn't process that request right now.";
    } catch (error) {
      console.error("AI Service Error:", error);
      return "An error occurred while communicating with the Agro Assistant.";
    }
  }
}

export const agroAI = new AgroAIService();

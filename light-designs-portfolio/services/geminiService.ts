
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY || '';
  if (!apiKey) {
    console.warn('GEMINI_API_KEY is not set');
  }
  return new GoogleGenAI({ apiKey });
};

export const generateProjectConsultation = async (prompt: string) => {
  const ai = getAIClient();
  const systemInstruction = `
    You are the AI Assistant for LightDzyns, an IT startup. 
    You help potential clients brainstorm their projects. 
    Our services include:
    1. Web Development (Full-stack, eCommerce, Dashboards)
    2. Graphic Design (Branding, Logos, UI/UX)
    3. Digital Skills Training (Coding, Design, Productivity)
    
    When a user asks for advice or a quote, provide a friendly, professional response that includes:
    - A brief encouragement.
    - A suggested roadmap or list of steps.
    - Which of our services fits best.
    Keep the tone "bright", "innovative", and "encouraging".
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to my creative circuits right now. Please try again or reach out via our contact form!";
  }
};

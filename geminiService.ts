
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePostIdeas = async (niche: string, packageType: string): Promise<AIResponse> => {
  const prompt = `Generate 3 highly creative social media post ideas and a brief 1-sentence growth strategy for a social media agency client.
  Niche: ${niche}
  Package Tier: ${packageType}
  
  If the package is "Viral", focus on high-energy, trend-jacking, and controversial/engaging hooks.
  If the package is "Business", focus on authority building, professional aesthetics, and conversion-led copy.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          ideas: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                hook: { type: Type.STRING },
                caption: { type: Type.STRING },
                hashtags: { type: Type.ARRAY, items: { type: Type.STRING } },
                platform: { type: Type.STRING, enum: ['Instagram', 'TikTok', 'X', 'LinkedIn'] }
              },
              required: ['hook', 'caption', 'hashtags', 'platform']
            }
          },
          strategy: { type: Type.STRING }
        },
        required: ['ideas', 'strategy']
      }
    }
  });

  return JSON.parse(response.text) as AIResponse;
};

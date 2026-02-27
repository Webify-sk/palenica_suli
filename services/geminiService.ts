
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDistillerAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Si 'Majster Destilatér' v prémiovej slovenskej pálenici. Tvojou úlohou je radiť zákazníkom o ovocných destilátoch (slivovica, hruškovica, marhuľovica atď.), procese pálenia a párovaní k jedlám. Odpovedaj v slovenskom jazyku, tónom, ktorý je odborný, ale priateľský a hrdý na tradíciu. Používaj výrazy ako 'dobrá pálenka', 'kotol', 'kvások'.",
        temperature: 0.8,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ospravedlňujem sa, môj medený kotol momentálne vyžaduje pozornosť. Skúste to prosím neskôr.";
  }
};

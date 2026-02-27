// Ai Coach
import { GoogleGenAI } from "@google/genai";


// **************** SELECT ITEMS ****************
const aiCoachBtn = document.getElementById("aiCoachBtn");
const aiOverlay = document.getElementById("aiOverlay");
const closeCoach = document.getElementById("closeCoach");
const aiResponse = documen.getElementById("aiResponse");

// **************** VARIABLES ***************
// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-3-flash-preview",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();

// **************** EVENT LISTENERS ****************

aiCoachBtn.addEventListener('click', () => {
console.log('clicking coach btn...');
aiOverlay.classList.remove("hidden")

})

closeCoach.addEventListener('click', () => {
    console.log('clicking close coach');
aiOverlay.classList.add("hidden")
})
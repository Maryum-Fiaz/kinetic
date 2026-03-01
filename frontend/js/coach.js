// Ai Coach
import { saveInStorage, getFromStorage } from "./storage/storage.js";


// **************** SELECT ITEMS ****************
const aiCoachBtn = document.getElementById("aiCoachBtn");
const aiOverlay = document.getElementById("aiOverlay");
const closeCoach = document.getElementById("closeCoach");
const aiResponse = document.getElementById("aiResponse");

// **************** VARIABLES ***************

let arr = getFromStorage("workoutList");
console.log('arr in coach: ', arr);

// **************** EVENT LISTENERS ****************

aiCoachBtn.addEventListener('click', async () => {
console.log('clicking coach btn...');
aiResponse.innerHTML = "<div class='spinner'></div>"
aiOverlay.classList.remove("hidden");

const advice = await getAiAdvice();
console.log("advice ", advice);
aiResponse.innerText = advice;

})

closeCoach.addEventListener('click', () => {
    console.log('clicking close coach');
aiOverlay.classList.add("hidden")
aiResponse.innerText = "Thinking...";

})




function convertToString(workoutArray) {
    const newArr = workoutArray.map(obj => {
        let finished = obj.isFinished === true ? "completed" : "have pending";
        finished = obj.isNotCompleted === true ? "couldn't complete" : finished;
       return `I ${finished} ${obj.type} on ${obj.day}`
    }
    )

    return newArr;
}

console.log("convertToString: ", convertToString(arr).join(". "));

async function getAiAdvice() {
    arr = getFromStorage("workoutList");
    const dataString = convertToString(arr).join(". ");
    const prompt = "You are my fitness Coach. Here is my data: " + dataString + ". According to this data give me 1 sentence advice for what to do next.";
    const url = "http://localhost:5000/api/coach";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                prompt: prompt
            })
        })

        const data = await response.json();
        const advice = data.advice;
        console.log('ai coach data: ', advice);
        
        return advice;
    } catch (error) {
        console.log('AI Error on frontend: ', error);
        return "Keep moving! Consistency is the key to success.";
    }
}

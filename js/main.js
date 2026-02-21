import { Activity, Running, Cycling, Gym } from "./activity.js";
import { saveInStorage, getFromStorage } from "./storage/storage.js";

// **************** SELECT ITEMS ****************
const addWorkout = document.getElementById("openModalBtn");
const dialog = document.getElementById("workoutModal");
const closeDialogBtn = document.getElementById("closeModalBtn");
const dropdown = document.getElementById("type");
const duration = document.getElementById("duration");
const distance = document.getElementById("distance");
const workoutForm = document.getElementById("workoutForm");
const emptyState = document.getElementById("emptyState");
const dashboard = document.getElementById("dashboard");

// **************** VARIABLES ***************
const ulList = document.createElement("ul");
let arr = getFromStorage("workoutList");
console.log("get data from storage: ", arr);

// **************** ON FIRST LOAD **************
renderDashboard(arr);

// **************** EVENT LISTENERS ****************

addWorkout.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

dropdown.addEventListener("change", (e) => {
  if (e.target.value === "Gym") {
    distance.value = 0;
    distance.disabled = true;
  } else {
    distance.value = "";
    distance.disabled = false;
  }
});

// 1.
workoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const type = dropdown.value;
  const dur = Number(duration.value);
  const dist = Number(distance.value);

  console.log("type: ", type, " dur: ", dur, " dist ", dist);

  let activity;

  switch (type) {
    case "Running":
      activity = new Running(dist, dur);
      break;
    case "Cycling":
      activity = new Cycling(dist, dur);
      break;
    case "Gym":
      activity = new Gym(dur);
      break;
  }

  workoutArray(activity); // data entered --> array
  saveInStorage("workoutList", arr);
  console.log("dataArray   ----- ", arr);

  renderDashboard(arr);
  distance.value = "";
  duration.value = "";
  dialog.close();
});

// 2.
ulList.addEventListener("click", (e) => {
  const listToBeDel = e.target.closest("li");
  const targetId = listToBeDel.dataset.id;
  console.log("tttargettt id: ", targetId, " listto be del: ", listToBeDel);

  // delete
  if (e.target.classList.contains("remove")) {
    arr = arr.filter((obj) => obj.id !== targetId);
    saveInStorage("workoutList", arr);

    console.log("new arr:  ", arr);
    renderDashboard(arr);
  }

  // mark as finished
  if (e.target.classList.contains("finished-btn")) {

    arr.forEach((obj) => {
      if (obj.id === targetId) {
        obj.isFinished = !obj.isFinished;
      }
    });
    renderDashboard(arr);
    saveInStorage("workoutList", arr);
  }

  // not completed
  if (e.target.classList.contains("notCompleted-btn")) {
    console.log(" not completed btn");
    arr.forEach((obj) => {
      if (obj.id === targetId) {
        obj.isNotCompleted = !obj.isNotCompleted;
      }
    });
    renderDashboard(arr);
    saveInStorage("workoutList", arr);
  }
});

// ************ FUNCTION *************

// 1.
function workoutArray(activity) {
  arr = [...arr, activity];
  return arr;
} // converting data into array

// 2.
function renderDashboard(workArray) {

  if (workArray.length === 0) {
    dashboard.innerHTML = `<div id="emptyState"><p>No workouts logged yet. Time to move! 💪</p></div>`;
    return; // Stop the function here
}

  dashboard.innerHTML = "";

  ulList.setAttribute("id", "ulList");

  const listItems = workArray
    .map((obj) => {
      let finishedToggle = obj.isFinished ? "toggle" : "";
      let notCompletedToggle = obj.isNotCompleted ? "is-failed" : "";

      let notCompletedDisable = '';
      let finishedDisable = '';

      if(finishedToggle){
        notCompletedDisable = 'disabled';
      } else if (notCompletedToggle) {
        finishedDisable = 'disabled';
      }

      return `
        <li class='workout-List ${finishedToggle}' data-id = '${obj.id}'>
        ${obj.type} - ${obj.duration} mins <span class = 'remove'>❌</span>
        <button class='finished-btn' ${finishedDisable}>Mark As Finished</button>
        <button class='notCompleted-btn ${notCompletedToggle}' ${notCompletedDisable}>Not Completed</button>
        </li>
        `;
    })
    .join("");
  ulList.innerHTML = listItems;

  dashboard.appendChild(ulList);
}

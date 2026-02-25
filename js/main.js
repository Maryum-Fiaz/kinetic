import { Activity, Running, Cycling, Gym, Swimming, JumpingRope, CustomActivity } from "./activity.js";
import { saveInStorage, getFromStorage } from "./storage/storage.js";
import { rehydration } from "./utils.js";

// **************** SELECT ITEMS ****************
const addWorkout = document.getElementById("openModalBtn");
const dialog = document.getElementById("workoutModal");
const closeDialogBtn = document.getElementById("closeModalBtn");
const dropdown = document.getElementById("type");
const duration = document.getElementById("duration");
const day = document.getElementById("day");
const workoutForm = document.getElementById("workoutForm");
const dashboard = document.getElementById("dashboard");
const filterContainer = document.querySelector(".filter-container");
const filterDay = document.getElementById("filter-day");


// **************** VARIABLES ***************
const ulList = document.createElement("ul");
let arr = getFromStorage("workoutList");
arr = rehydration(arr)
console.log("get data from storage arr: ", arr);


// **************** ON FIRST LOAD **************
renderDashboard(arr);


// **************** EVENT LISTENERS ****************

filterDay.addEventListener('change', (e) => {
  let arrayOfWorkouts = arr;
  const selectedDayValue = e.target.value;
  console.log(selectedDayValue);
  if(selectedDayValue === 'All'){
    renderDashboard(arrayOfWorkouts);
  }
  else{
    arrayOfWorkouts = arr.filter(obj => obj.day === selectedDayValue)
    renderDashboard(arrayOfWorkouts)
  }
  console.log('arr now: ', arr);
  console.log('and arrayOfWorkouts: ', arrayOfWorkouts);
  
})



addWorkout.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

dropdown.addEventListener("change", (e) => {
  const value = e.target.value;
    const hiddenActivity = document.querySelector('.hidden-Activity');
    hiddenActivity.classList.toggle('show', value === 'Others')
});


const customActivityType = document.getElementById('activity-type');
// 1.
workoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const type = dropdown.value === 'Others'? customActivityType.value : dropdown.value;
  const dur = Number(duration.value);
  const dayValue = day.value;

  console.log("type: ", type, " dur: ", dur, "day: ", dayValue);

  let activity;

  switch (dropdown.value) {
    case "Running":
      activity = new Running(dur, dayValue);
      break;
    case "Cycling":
      activity = new Cycling(dur, dayValue);
      break;
    case "Gym":
      activity = new Gym(dur, dayValue);
      break;
    case "Swimming":
      activity = new Swimming(dur, dayValue);
      break;
    case "Jumping-rope":
      activity = new JumpingRope(dur, dayValue);
      break;
    case "Others":
      activity = new CustomActivity(dur, dayValue, type);
    break;
  }

  workoutArray(activity); // data entered --> array
  saveInStorage("workoutList", arr);
  console.log("dataArray   ----- ", arr);

  renderDashboard(arr);
  duration.value = "";
  customActivityType.value = "";
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
  filterContainer.style.visibility = 'hidden';
    dashboard.innerHTML = `
      <div id="emptyState">
        <p>No workouts logged yet. Time to move! 💪</p>
        <img src="images/workout.png" alt="workout" class="empty-state-img">
      </div>`;
    return;
  }

  dashboard.innerHTML = "";
  filterContainer.style.visibility = 'visible';
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
        <span class="workout-day">${obj.day}</span>
        <div class="workout-content">
            ${obj.getSummary()}
        </div>
        <span class = 'remove'>❌</span>
        <button class='finished-btn' ${finishedDisable}>Mark As Finished</button>
        <button class='notCompleted-btn ${notCompletedToggle}' ${notCompletedDisable}>Not Completed</button>
        </li>
        `;
    })
    .join("");
  ulList.innerHTML = listItems;

  dashboard.appendChild(ulList);
}

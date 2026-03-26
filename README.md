# MOVE - A modern fitness dashboard.
> A high-performance fitness tracker with automated coaching insights.

**MOVE** is a full-stack application built to track physical activity and provide data-driven advice. By integrating the **Google Gemini 2.5 Flash API**, the app analyzes your workout list and generates professional coaching feedback with a single click.

---

## 📸 Screenshots

![Main Dashboard](/preview/noworkouts.png)
![AI Coach Analysis](/preview/coachAi.png)
![Workouts](/preview/workouts.png)

---

## ✨ Key Features
* **Automated Coaching:** One-click analysis of your workout list to provide personalized recovery and performance advice.
* **Activity Logging:** Dynamic tracking for multiple exercise types including Running, Gym, Swimming and more.
* **LocalStorage:** Persistent data storage so your activities remain saved even after refreshing the page.
* **Status Management:** Ability to mark "Not Completed" and "Finished" status.
* **Advanced Filters:** Filter your workout history by specific days or completion status.
* **Modern UI:** A clean, professional dashboard built with a focus on user experience and dark-themed aesthetics.
* **Secure Backend:** Node.js backend proxy to handle API requests and protect your private keys.

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS, Vanilla JavaScript.
* **Backend:** Node.js, Express.js.
* **API:** Google Gemini (`gemini-2.5-flash`).

---

## 📂 Project Structure
* `frontend/` - UI components and client-side logic.
* `backend/` - Server-side API handling and Gemini integration.

---

## 🚀 How to Run Locally

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YourUsername/js-fitness.git](https://github.com/YourUsername/js-fitness.git)
    ```

2.  **Setup the Backend:**
    * Go to the `backend` folder and run `npm install`.
    * Create a `.env` file and add your `API_KEY`.
    * Start the server using `node app.js`.

3.  **Launch the Frontend:**
    * Open `index.html` from the `frontend` folder using a local server (like Live Server).

---
**Developed by Maryum Fiaz**
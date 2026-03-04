# 🚀 Technical Task Document: Dynamic JavaScript Quiz Engine

| **Project Name** | **Dynamic Quiz Engine (SPA)** |
| --- | --- |
| **Role** | Frontend Developer |
| **Difficulty** | Month 1 Capstone (Intermediate) |
| **Estimated Time** | 12 - 15 Hours |
| **Focus Area** | DOM Manipulation, State Management, Array Logic, Event Handling |

### **1. Project Overview**

**Summary:**
The goal is to build a Single Page Application (SPA) that tests a user's knowledge against a dataset of technical questions. The app must transition smoothly between screens without reloading the page, enforce time limits per question, track scoring logic, and persist high scores using the browser's storage.

**Why this builds Month 1 Skills:**
* **Data Structures:** You will manipulate an Array of Objects (Week 1 & 3).
* **Logic:** You will implement scoring algorithms and conditional checks (Week 2).
* **DOM:** You will create, append, and remove HTML elements dynamically (Week 4).
* **Events:** You will handle user clicks and input changes (Week 4).
* **Timing:** You will manage setInterval for the countdown (Week 4).
* **Storage:** You will use localStorage for data persistence (Week 4).

### **2. Visuals & Behavior**

#### **Frontend (UI) Behavior**

The application consists of three distinct "views" or "containers" that share the same HTML file. Only one view is visible at a time.

1. **View 1: The Start Screen**
   * **Visuals:** Centered Card. Title "JS Mastery Quiz". Input field for "Enter Name". Large "Start Quiz" button.
   * **Behavior:** On click, validates name is not empty, hides this view, and shows View 2.

2. **View 2: The Quiz Interface**
   * **Visuals:**
     + **Header:** Shows Question Text.
     + **Options Grid:** Buttons displaying potential answers.
     + **Footer:** A "Next Question" button.
   * **Behavior:**
     + **Clicking an Option:**
       - **If Correct:** Button turns Green.
       - **If Wrong:** Button turns Red, and the *correct* answer button automatically turns Green (User Feedback).
       - All buttons become disabled.
     + **Clicking Next Question:** Increments question index or shows results if at the end.

3. **View 3: The Result Screen**
   * **Visuals:** "Quiz Over!". Final Score (e.g., "8/10"). "Restart" Button.
   * **Behavior:** Clicking Restart resets all state variables and returns to the Start Screen.

#### **Backend (Data Layer)**

* **Primary Data Source:** A hardcoded const array of objects within the JavaScript file.
* **Storage (Planned):** logic for high scores in localStorage.

### **3. Tech Stack**

* **HTML5:** Semantic tags (<main>, <section>).
* **CSS3:** Flexbox for layout, CSS Variables for colors, Classes for state changes (.hide, .correct, .wrong).
* **JavaScript (ES6+):**
  + const / let.
  + Arrow Functions.
  + Template Literals.
  + DOM Manipulation.

### **4. Assets**

* **Fonts:** 'Outfit' (Import from Google Fonts).
* **Icons:** None required.
* **Colors (CSS Variables):**
  + --primary: #8B5CF6 (Violet)
  + --success: #10B981 (Emerald)
  + --error: #EF4444 (Red)
  + --bg-dark: #0F172A (Dark Blue)

### **5. Features Scope**

| **Feature** | **Type** | **Description** |
| --- | --- | --- |
| **Question Rendering** | **MVP** | Dynamically inject question text and buttons from the Array. |
| **Answer Logic** | **MVP** | Validate clicks, update score, change button colors. |
| **State Management** | **MVP** | Track currentQuestionIndex and userScore in a gameState object. |
| **Timer System** | *Stretch* | countdown per question (Not implemented). |
| **High Scores** | *Stretch* | Save/Load top 5 scores using LocalStorage (Not implemented). |
| **Progress Bar** | *Stretch* | Visual bar at top filling up as user progresses. |
| **Shuffle Algorithm** | *Stretch* | Randomize the order of questions. |

### **6. Folder Structure**

```
/quiz-engine
├── index.html              # Single HTML file with 3 main sections
├── /assets
│   ├── /css
│   │   └── style.css       # All styles (Layout + State Classes)
│   └── /js
│       └── script.js       # All Logic
└── README.md               # Documentation
```

### **7. Data Structure & State (The Model)**

**The Question Data (quizData):**

```javascript
const quizData = [
  {
    id: 1,
    question: "Who invented JavaScript?",
    options: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Guido van Rossum"
    ],
    answer: "Brendan Eich"
  },
  // ... minimum 5 questions
];
```

**The Application State (gameState):**

```javascript
const gameState = {
  playerName: "",
  score: 0,
  currentQuestionIndex: 0
};
```

### **8. Logical Flow**

**1. Initialization:**
Initial call to `showScreen("start")` -> Render Start Screen.

**2. Start Quiz:**
User enters Name -> Click Start -> Check if name is empty -> gameState.playerName set -> Hide Start Screen -> Call loadQuestion().

**3. loadQuestion() Logic:**
* Get currentQuestionIndex from gameState.
* **DOM:** questionText.innerText = quizData[index].question.
* **DOM:** Clear old optionsGrid -> Loop through options -> Create new buttons with click listeners.

**4. checkAnswer(selectedOption, clickedBtn) Logic:**
* Compare selectedOption vs quizData[index].answer.
* **If Correct:** Add .correct class, increment gameState.score.
* **If Wrong:** Add .wrong class, highlight the correct answer with .correct.
* Disable all buttons in optionsGrid.

**5. showResults() Logic:**
* Hide Quiz Screen -> Show Result Screen.
* **DOM:** Display final score text in finalScore element.
* (Optional) Render High Score list from localStorage.

**6. Restart Logic:**
* Reset gameState (score, index, name).
* Clear name input.
* Return to Start Screen.

### **9. Step-by-Step Implementation Plan**

**Day 1: Structure & Data**
1. Create the HTML skeleton with the 3 main div containers.
2. Write CSS to style the cards and button states (.correct, .wrong).
3. Create script.js and define the quizData array and gameState object.
4. Write the "View Switcher" logic (functions to hide/show screens).

**Day 2: Core Logic**
1. Implement loadQuestion(): Render text and buttons dynamically.
2. Implement checkAnswer(): Add click events to the generated buttons.
3. Add logic to handle "Correct" vs "Wrong" selection (CSS class toggling).
4. Implement the "Next Button" functionality to increment the index.

**Day 3: Timing & Persistence**
1. Add the setInterval logic to loadQuestion.
2. Handle the "Time's Up" scenario (auto-disable buttons).
3. Implement endQuiz() to show results.
4. Integrate localStorage to save and display the leaderboard.
5. **Refactor:** Check variable names, add comments, ensure no console errors.
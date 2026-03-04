
// Data: Array of quiz questions
const quizData = [
    {
        id: 1,
        question: "Who invented JavaScript?",
        options: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Guido van Rossum"],
        answer: "Brendan Eich"
    },
    {
        id: 2,
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
        answer: "Netscape"
    },
    {
        id: 3,
        question: "What is the original name of JavaScript?",
        options: ["Mocha", "LiveScript", "JScript", "ECMAScript"],
        answer: "Mocha"
    },
    {
        id: 4,
        question: "Is JavaScript a case-sensitive language?",
        options: ["Yes", "No", "Sometimes", "Depends on the browser"],
        answer: "Yes"
    },
    {
        id: 5,
        question: "Which of the following is a JavaScript framework?",
        options: ["Laravel", "Django", "React", "Spring"],
        answer: "React"
    }
];

// State: Manages the quiz's state
const gameState = {
    playerName: "",
    score: 0,
    currentQuestionIndex: 0
};

// DOM Elements: References to HTML elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const restartBtn = document.getElementById("restart-btn");
const playerNameInput = document.getElementById("player-name-input");
const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");
const finalScore = document.getElementById("final-score");

// Views: Switches between different screens for a SPA feel.
function showScreen(screenName) {
    // Hide all screens initially to ensure a clean slate.
    startScreen.classList.add("hide");
    quizScreen.classList.add("hide");
    resultScreen.classList.add("hide");

    // Based on the 'screenName' provided, unhide the corresponding screen.
    if (screenName === "start") {
        startScreen.classList.remove("hide");
    } else if (screenName === "quiz") {
        quizScreen.classList.remove("hide");
    } else if (screenName === "result") {
        resultScreen.classList.remove("hide");
    }
}

// Event Listener: Starts the quiz when the user clicks the start button.
startQuizBtn.addEventListener("click", () => {
    // Retrieve the player's entered name from the input field.
    const playerName = playerNameInput.value;

    // Basic input validation to check for an empty name.
    if (playerName.trim() === "") {
        alert("Please enter your name");
        return; // Stops the function execution if no name is entered.
    }

    // Store the validated player name in the central game state.
    gameState.playerName = playerName;

    showScreen("quiz");
    loadQuestion();
});

// Load and display the current question with its options
function loadQuestion() {
    // Get the current question index
    const currentQuestionIndex = gameState.currentQuestionIndex;

    // Update the question text
    questionText.innerText = quizData[currentQuestionIndex].question;

    // Clear previous options
    optionsGrid.innerText = "";

    // Create buttons for each option
    quizData[currentQuestionIndex].options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.addEventListener("click", () => {
            // We pass the specific text of THIS button, and the button itself
            checkAnswer(option, btn);
        });
        optionsGrid.appendChild(btn);
    });
};

// Function to check the selected answer and provide visual feedback
function checkAnswer(selectedOption, clickedBtn) {
    // Get the correct answer for the current question
    const correctAnswer = quizData[gameState.currentQuestionIndex].answer;

    // Compare selected option with correct answer
    if (selectedOption === correctAnswer) {
        clickedBtn.classList.add("correct");
        gameState.score++;
    } else {
        clickedBtn.classList.add("wrong");
        optionsGrid.querySelectorAll("button").forEach(button => {
            if (button.innerText === correctAnswer) {
                button.classList.add("correct");
            }
        });
    }

    //Disabling the buttons after the user has selected an option
    optionsGrid.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    })
}

// Event listener for the next question button
nextQuestionBtn.addEventListener("click", () => {
    gameState.currentQuestionIndex++;

    // Check if there are more questions
    if (gameState.currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Display the quiz results
function showResults() {
    showScreen("result");
    finalScore.innerText = `You scored ${gameState.score} out of ${quizData.length}`;
};

// Handle restart button click
restartBtn.addEventListener("click", () => {
    // Reset game state
    gameState.score = 0;
    gameState.currentQuestionIndex = 0;
    gameState.playerName = "";
    playerNameInput.value = "";
    showScreen("start");
});

// Initial View
showScreen("start");
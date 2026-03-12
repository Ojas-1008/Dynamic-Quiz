# 🧠 Dynamic Quiz - JS Mastery Challenge

A beautiful, interactive **Single Page Application (SPA)** quiz engine that tests your JavaScript knowledge with instant feedback, visual cues, and score tracking. Built with vanilla HTML, CSS, and JavaScript with a modern dark mode aesthetic.

![Quiz Screenshot](https://img.shields.io/badge/Status-Complete-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

🔗 **Live Demo:** [https://ojas-1008.github.io/Dynamic-Quiz/](https://ojas-1008.github.io/Dynamic-Quiz/)

---

## 🎯 Features

### Core Features
- ✅ **Dynamic Question Loading** - Questions and options generated from a data array
- ✅ **Real-time Answer Validation** - Immediate visual feedback on correct/wrong answers
- ✅ **Score Tracking** - Track your score throughout the quiz
- ✅ **Visual Feedback** - Correct answers highlighted in green, wrong answers in red
- ✅ **Smooth Screen Transitions** - Seamless SPA navigation between start, quiz, and results screens
- ✅ **Responsive Design** - Works beautifully on desktop and mobile devices
- ✅ **Player Name Input** - Personalized quiz experience

### Non-MVP Features (Stretch Goals)
- ⏳ Timer System - Countdown per question
- 📊 High Scores - Persistent leaderboard using LocalStorage
- 📈 Progress Bar - Visual progress indicator
- 🔀 Question Shuffling - Randomized question order

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup & structure |
| **CSS3** | Modern styling (Flexbox, CSS Variables, Animations) |
| **JavaScript (ES6+)** | DOM manipulation, state management, event handling |
| **Google Fonts** | 'Outfit' font family for modern typography |

---

## 📋 Project Structure

```
Dynamic Quiz/
├── index.html           # HTML markup with 3 main sections
├── script.js            # JavaScript logic & state management
├── style.css            # Complete styling & animations
├── TTD.md              # Technical requirements document
└── README.md           # This file
```

### Key Components

**HTML Sections:**
- `#start-screen` - Name input and quiz initiation
- `#quiz-screen` - Question display and answer options
- `#result-screen` - Final score and restart button

---

## 🚀 Getting Started

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/yourusername/dynamic-quiz.git
   cd "Dynamic Quiz"
   ```

2. **No dependencies required!** This is a vanilla JavaScript project.

### Running the Application

Simply open `index.html` in your web browser:

```bash
# Using a local server (recommended)
python -m http.server 8000
# or
npx http-server

# Then visit: http://localhost:8000
```

Or double-click `index.html` to open directly in your browser.

---

## 📖 How to Use

1. **Start Screen**: Enter your name and click "Start Quiz"
2. **Quiz Screen**: 
   - Read each question carefully
   - Click on your answer choice
   - Receive instant feedback (green = correct, red = wrong)
   - Click "Next Question" to continue
3. **Results Screen**: View your final score and click "Restart" to try again

---

## 💡 How It Works

### State Management
The app uses a centralized `gameState` object to track:
```javascript
const gameState = {
    playerName: "",              // Player's name
    score: 0,                    // Current score
    currentQuestionIndex: 0      // Which question we're on
};
```

### Quiz Data Structure
Questions are stored as an array of objects:
```javascript
{
    id: 1,
    question: "Who invented JavaScript?",
    options: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Guido van Rossum"],
    answer: "Brendan Eich"
}
```

### Answer Validation Flow
1. User clicks an option button
2. `checkAnswer()` compares selected option with correct answer
3. Visual feedback applied (green for correct, red for wrong)
4. All buttons disabled to prevent multiple selections
5. User proceeds to next question via "Next Question" button

### Screen Management
The `showScreen()` function:
- Hides all screens initially
- Shows only the requested screen based on game progress
- Enables smooth SPA-like transitions

---

## 🎨 Design & Styling

### Color Palette
- **Background**: Dark blue (`#0f172a`)
- **Cards**: Slate (`#1e293b`)
- **Primary**: Violet (`#8b5cf6`)
- **Success**: Emerald (`#10b981`)
- **Danger**: Red (`#ef4444`)

### Visual Effects
- Gradient background with subtle radial gradients
- Smooth animations for screen transitions
- Scale animations on correct answers
- Hover effects on buttons
- Box shadows for depth

### Responsive Features
- Flexbox-based layout for flexible sizing
- Mobile-first design approach
- Scales beautifully from 320px to 4K displays

---

## 👨‍💻 Author

**Ojas Shrivastava**
- GitHub: (https://github.com/Ojas-1008)

---

**Happy Quizzing! 🎉**

*Last Updated: March 2026*

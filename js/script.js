// Select the choices div
var choicesDiv = document.querySelector('.choices');
var startBtn = document.querySelector('#start');
var startWrap = document.querySelector('.start-wrap');
var questionWrap = document.querySelector('.question-wrap');
var timeOutput = document.querySelector('#time-output');
var scoreWrap = document.querySelector('.score-wrap');
var saveBtn = document.querySelector('#save-score');

// Store a variable that tracks which question the user is currently on
var questionIndex = 0;
// Store a vriable that tracks the seconds left
var time = 60;
// Store a variable that hlds the interval
var timer;

// Store a variable that will be used to determine if a user has already clicked answer
var clicked = false;

// Clears the timer
// Shows the user's score
// Resets all values for the user to play the game again
function endGame() {
    // Stop(clear) the timer interval
    clearInterval(timer);


    // Hide the question wrap
    questionWrap.classList.add('hide');

    //Select the score output h2
    var scoreOutput = document.querySelector('#score-output');

    // Set the score output h2 innerText to their score(time)
    scoreOutput.innerText = 'Score: ' + time;

    // Show user their score wrap
    scoreWrap.classList.remove('hide');
}


// Function that checks if the button pressed contains the correct answer
// Utilizing event delegation to capture the button click
function checkAnswer(eventObj) {
    eventObj.stopPropagation();

    // If the user has clicked an answer already, don't let them click another answer until the next question
    if (clicked) {
        // Exit the function on this line
        // No code below will run
        return;
    }

    var currentQuestionObj = questions[questionIndex];

    // Grab the targeted element that was clicked
    var el = eventObj.target;

    // Determine conditionally if the el was a button
    if (el.tagName === 'BUTTON') {
        // Store the user's answer
        var userAnswer = el.innerText;

        //Select the answer alert paragraph
        var answerAlert = document.querySelector('.answer-alert');
        // Determine if the user's answer (button text) is equal to the current question's corect answer
        if (userAnswer === currentQuestionObj.correctAnswer) {
            // Show the anser alert with the text of "Correct!"
            answerAlert.innerText = 'Correct!';

            // Show the answer alert paragraph
            answerAlert.classList.add('show');

        } else {
            // Show the answer alert with the text of "Wrong!" 
            answerAlert.innerText = 'Wrong!';

            // Show the answer alert paragraph
            answerAlert.classList.add('show');
            // Decrease the time by 10 seconds
            time -= 5;

            // If time minus 15 is less than zero than set time to zero, else -= 15 from time
            time = (time - 15) < 0 ? 0 : time - 15;

        }

        clicked = true;

        //wait 1.5 seconds and then move on to the next question
        setTimeout(function () {
            //Hide the answer alert paragraph
            answerAlert.classList.remove('show');
            // Increase questionIndex by one
            questionIndex++;
            // If questionIndex is equal to questions.length -1, then endGame
            if (questionIndex === questions.length) {
                endGame();
            } else {
                // Else call displayQuestion
                displayQuestion();
                // Allow the user to click again
                clicked = false;
            }
        }, 1500);
    }
}

// Create a function that gets the current question and outputs the question text to our h2 and outputs a button for each choice string in the choices array for the current question object
function displayQuestion() {
    // Store a variable that holds the current question object
    var currentQuestionObj = questions[questionIndex];

    // Output the currentQuestion questionText to the h2 within our question-wrap html
    // Select the h2 from the DOM
    var textEl = document.querySelector('.question-text');

    // Set the innerText of our textEl to the currentQuestion questionText property
    textEl.innerText = currentQuestionObj.questionText;


    // Empty the choices div
    choicesDiv.innerHTML = '';

    // Loop over each choice string in the currentQuestion choices array, and for each string output a button into the choices div with the innerText tof the choice string
    for (var i = 0; i < currentQuestionObj.choices.length; i++) {

        // Create a button element
        var choiceBtn = document.createElement('button');

        // Set the text of the button to the current choice string in the loop
        choiceBtn.innerText = currentQuestionObj.choices[i];

        // Output (inject)/append the button to the choices div within our question warp
        // Append the button to the div
        choicesDiv.append(choiceBtn);
    }
}

// Start the timer countdown and decrease the time variable by one every second until time runs out
function startCountdown() {
    // Set the inner text of the timeOutput to say 60 seconds
    timeOutput.innerText = 'Time: ' + time;

    //Start an interval that repeats every second(1000ms)
    //Store the interval to a variable so we can clear or stop it later on
    timer = setInterval(function () {
        // Decrease out time variable by one
        time = (time - 1) < 0 ? 0 : time - 1;
        // Set the inner text of the timeOutput element to our time variable value
        timeOutput.innerText = 'Time: ' + time;
        // Check if time is less than or equal to zero and if so, end the game
        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

//Get the old scores from local Storage and using the initials and time variable, add a new object to the highscore
//Then overwrite the old highscores array with the newly updated array
function saveScore() {
    // Select the input from the DOM
    var initialInput = document.querySelector('#initial-input');
    // Get the user's initials from the input
    var initialValue = initialInput.value;
    //Pull the raw highscores array from localStorage
    var rawData = localStorage.getItem('highscore');
    var highscores = JSON.parse(rawData) || [];

    // Push a new object to the highscores array
    highscores.push({
        initials: initialValue,
        score: time
    });

    // Store the highscores to localStorage
    localStorage.setItem('highscores', JSON.stringify)
}

// show the first quiz question, hide the start wrap and start the timer
function startQuiz() {
    // Reset the time 
    time = 60;
    // Reset the question index
    questionIndex = 0;
    // Hide the start wrap
    startWrap.classList.add('hide');
    // Show the question wrap
    questionWrap.classList.remove('hide');
    // Display the first question
    displayQuestion();
    // Start the countdown
    startCountdown();
}

// Set a click listener on the parent div of all the choices buttons
choicesDiv.addEventListener('click', checkAnswer);

// Add a click listener to the start button
startBtn.addEventListener('click', startQuiz);

//Add a click listener to the save button
saveBtn.addEventListener('click', saveScore);

// // Select the first button from the DOM
// var btn = document.querySelector('button');

// // Add a click listener to the button
// btn.addEventListener('click', checkAnswer)


// var h1 = document.querySelector('h1');
// var time = 10;
// var timer;

// // Set message when time runs out
// function endGame() {
//     clearInterval(timer);

//     var messageParagraph = document.querySelector('#message');

//     messageParagraph.innerText = 'Time Over';
//     messageParagraph.style.display = 'initial';
// }

// // Start the quiz
// function startGame() {
//     timer = setInterval(function () {
//         // Decrease time by one
//         time--;
//         // Set the text of our h1 to 'Time Left: <time>'
//         h1.innerText = 'Time Left: ' + time;

//         // If the time variable equals zero, stop the interval
//         // Pass interval into the clearInterval function
//         if (time <= 0) {
//             endGame();
//         }
//     }, 1000);
// }

// var questionWrap = document.querySelector
//     ('#question-wrap');

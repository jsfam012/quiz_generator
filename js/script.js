// Select the choices div
var choicesDiv = document.querySelector('.choices');
var startBtn = document.querySelector('#start');
var startWrap = document.querySelector('.start-wrap');
var questionWrap = document.querySelector('.question-wrap');
var timeOutput = document.querySelector('#time-output');

// Store a variable that tracks which question the user is currently on
var questionIndex = 0;
// Store a vriable that tracks the seconds left
var time = 60;
// Store a variable that hlds the interval
var timer;

// Function that checks if the button pressed contains the correct answer
// Utilizing event delegation to capture the button click
function checkAnswer(eventObj) {
    eventObj.stopPropagation();

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

        }

        //wait 1.5 seconds and then move on to the next question
        setTimeout(function() {
            //Hide the answer alert paragraph
            answerAlert.classList.remove('show');
            // Increase questionIndex by one
            questionIndex++;
            // If questionIndex is equal to questions.length -1, then endGame
            if (questionIndex === question.length - 1) {
                endGame();
            } else {
            // Else call displayQuestion
            displayQuestion();
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

// Clears the timer
// Shows the user's score
// Resets all values for the user to play the game again
function endGame() {
    // Stop(clear) the timer interval
    clearInterval(timer);
    
    // Reset the time
    time = 60;
    // Reset the question index
    questionIndex = 0;
    
    // Hide the question wrap
    questionWrap.classList.add('hide');
    // Show user their score wrap
}

// Start the timer countdown and decrease the time variable by one every second until time runs out
function startCoundown() {
    // Set the inner text of the timeOutput to say 60 seconds
    timeOutput.innerText = 'Time: ' + time;

    //Start an interval that repeats every second(1000ms)
    //Store the interval to a variable so we can clear or stop it later on
    timer = setInterval(function () {
        // Decrease out time variable by one
        time--;
        // Set the inner text of the timeOutput element to our time variable value
        timeOutput.innerText = 'Time: ' + (time >= 0 ? time : 0);
        // Check if time is less than or equal to zero and if so, end the game
        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

// show the first quiz question, hide the start wrap and start the timer
function startQuiz() {
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

// // Select the first button from the DOM
// var btn = document.querySelector('button');

// // Add a click listener to the button
// btn.addEventListener('click', checkAnswer)


var h1 = document.querySelector('h1');
var time = 10;
var timer;

// Set message when time runs out
function endGame() {
    clearInterval(timer);

    var messageParagraph = document.querySelector('#message');

    messageParagraph.innerText = 'Time Over';
    messageParagraph.style.display = 'initial';
}

// Start the quiz
function startGame() {
    timer = setInterval(function () {
        // Decrease time by one
        time--;
        // Set the text of our h1 to 'Time Left: <time>'
        h1.innerText = 'Time Left: ' + time;

        // If the time variable equals zero, stop the interval
        // Pass interval into the clearInterval function
        if (time <= 0) {
            endGame();
        }
    }, 1000);
}

var questionWrap = document.querySelector
    ('#question-wrap');

// questionWrap.innerHTML =
//     '<div>' + '<h3>' + questions[0].questionsText + '</h3>' + "</div>'"

// startGame();


// Below is with tutor

// // Select the choices div
// var choicesDiv = document.querySelector('.choices');
// var index = 0
// // Function that checks if the button pressed contains the correct answer
// function checkAnswer(eventObj) {
//     //Grab the targeted element that was clicked
//     var el = eventObj.target;

//     // Determine conditionally if the el was a button
//     if (el.tagName === 'BUTTON') {

//         // Store the suer's answer
//         var userAnswer = el.textContent;

//         if (userAnswer === questions[index].correctAnswer) {
//             alert("correct")
//         } else {
//             alert("incorrect")
//         }


//     }
//     index++
//     // If statement check if last question go to saved high score page


//     //else render next questions
//     document.querySelector("#question").textContent = questions[index].questionText
//     document.querySelector("#btn1").textContent = questions[index].choices[0]
//     document.querySelector("#btn2").textContent = questions[index].choices[1]
//     document.querySelector("#btn3").textContent = questions[index].choices[2]
//     document.querySelector("#btn4").textContent = questions[index].choices[3]
// }

// // Set a click listener on the parent div of all the choice buttons
// choicesDiv.addEventListener('click', checkAnswer);













// for (var i = 0; i < btns.length; i++) {
//     // Add a click listenre to the button
//     btns[i].addEventListener('click', checkAnswer);
// }
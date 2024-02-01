// Select the choices div
var choicesDiv = document.querySelector('.choices');

// Function that checks if the button pressed contains the correct answer
function checkAnswer(eventObj) {
    // Grab the targeted element that was clicked
    var el = eventObj.target;

    // Determine conditionally if the el was a button
    if (el.tagName === 'BUTTON') {
        // Store the user's answer
        var userAnswer = el.innerText;

        if (userAnswer === questions[0].correctAnswer) {

        } else {
            
        }
    }
}

// Set a click listener on the parent div of all the choices buttons
choicesDiv.addEventListener('click', checkAnswer);

// Select the first button from the DOM
var btn = document.querySelector('button');

// Add a click listener to the button
btn.addEventListener('click', checkAnswer)










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

var questionWrap = document.querySelector
('#question-wrap');

questionWrap.innerHTML =
    '<div>' + '<h3>' + questions[0].questionsText + '</h3>' + "</div>'"

}

startGame();


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
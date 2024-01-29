// Select the choices div
var choicesDiv = document.querySelector('.choices');
var index = 0
// Function that checks if the button pressed contains the correct answer
function checkAnswer(eventObj) {
    //Grab the targeted element that was clicked
    var el = eventObj.target;
    
    // Determine conditionally if the el was a button
    if (el.tagName === 'BUTTON') {
        
        // Store the suer's answer
        var userAnswer = el.textContent;
        
        if (userAnswer === questions[index].correctAnswer){
            alert("correct")
        }else {
            alert("incorrect")
        }
        
        
    }
    index++
    // If statement check if last question go to saved high score page

    
    //else render next questions
    document.querySelector("#question").textContent=questions[index].questionText
    document.querySelector("#btn1").textContent=questions[index].choices[0]
    document.querySelector("#btn2").textContent=questions[index].choices[1]
    document.querySelector("#btn3").textContent=questions[index].choices[2]
    document.querySelector("#btn4").textContent=questions[index].choices[3]
}

// Set a click listener on the parent div of all the choice buttons
choicesDiv.addEventListener('click', checkAnswer);













// for (var i = 0; i < btns.length; i++) {
//     // Add a click listenre to the button
//     btns[i].addEventListener('click', checkAnswer);
// }
// Select the highscores output
var highscoreOutput = document.querySelector('.highscores-output');

// Retrieve the highscores array from localstorage and output a div into the DOM for teach highscore object
function outputHighscores() {
     //Pull the raw highscores array from localStorage
     var rawData = localStorage.getItem('highscores');
     // Pull the highscores array if it already exists.  If it doesn't, create an empty aray
     var highscores = JSON.parse(rawData);

     // Loop over the highscores array and for each highscore object, create a div with two element (h3, p)
     // The h3 will hold the user's initials
     // The p will hold the user's score
     // Output the div to the highscore output element
     for (var i = 0; i < highscores.length; i++) {
        console.log(highscores[i]);
        // Create a div
        var div = document.createElement('div');
        // Create an h3
        var h3 = document.createElement('h3');
        // Create a paragraph
        var p = document.createElement('p');
        // Store a reference variable of the current object/item in the loop
        var scoreObj = highscores[i];

        // Set the text of each element to the corresponding value
        h3.innerText = 'Initials: ' + scoreObj.initials;
        p.innerText = 'Score: ' + scoreObj.score;

        // Append the two text elements to the div
        div.append(h3,p);

        // Append the newly created div to the highscores output element
        highscoreOutput.append(div);
    }

}

outputHighscores();
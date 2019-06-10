//array of word options
var wordList = ['wedge', 'lowers', 'zuma', 'pipe', 'jaws', 'bondi']
wordSplit = [];
var emptyDiv = [];
var underScoreArr = [];
var wordBank = [];
var repeatedLetters = [];
var guessesLeft = 10;
var win = [];
//pick random word
var word = wordList[Math.floor(Math.random() * wordList.length)];
console.log("computer choice: " + word)
//split word into strings 
console.log(word)
var split = word.split('')
console.log(split)
//create spaces for word 
var replace = function () {
    for (var i = 0; i < word.length; i++) {
        underScoreArr.push(' _ ')
        var underScore = document.createElement('span');
        underScore.setAttribute("id", `Div: ${split[i]}`);
        underScore.textContent = underScoreArr[i]
        document.getElementById('word').appendChild(underScore);
    }
}
replace()

var youWin = function() {
    var divLeft = 0; 
    for (var i = 0; i < underScoreArr.length; i++) {
        if (underScoreArr[i] === ' _ ') {
            divLeft++ 
        } //else if(underScoreArr[i] !== ' _ '){
            //divLeft--
        //}
    }
    console.log(divLeft)
    if (divLeft === 0) {
        alert("you win")
    }
}
youWin()
//creating game
console.log(underScoreArr)
//on key up function 

document.onkeyup = function (e) {
    var userInput = e.key
    var userPick = false;
    var match = true;
    wordBank.forEach(function (item) {
        if (userInput === item) {
            match = false;
            console.log(`array.item: ${item}`);
            console.log(`======= MATCH! =======\n`);
        }
    })
    //if the key pressed = the letters in the split array 
    for (var i = 0; i < split.length; i++) {
        if (userInput === split[i]) {
            userPick = true
            underScoreArr[i] = split[i];
            document.getElementById(`Div: ${split[i]}`).textContent = userInput;
        }
    }
    if (!userPick && match) {
        wordBank.push(userInput);
        wordBank.toString();
        document.getElementById('guesses').innerHTML = "Guesses: " + wordBank;
        guessesLeft--;
        guess()
    } else if (!match) {
        repeatedLetters.push(userInput)
        console.log(repeatedLetters)
    }
    if (guessesLeft === 0) {
        alert("You Lose")
    }
    youWin()
}


var guess = function () {
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft
}

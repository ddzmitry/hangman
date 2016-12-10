
var wordslist = ["apple","orange","bannana"];

var chosenword = "";

var lettersinchosenword = [];

var numblanks = 0;

var blanksandsuccesses = [];

var wrongguesses = [];

var letterguessed = "";

var wincounter = 0;

var losscounter = 0;

var numguesses = 9;

var letterToCheck= "";

var chosenword = wordslist[Math.floor(Math.random(wordslist.length))];



console.log(chosenword);
function wordToBlanks() {
    for (letters in chosenword) {

   	
        lettersinchosenword.push("_");
        return;

    }
}  

console.log(lettersinchosenword);




document.onkeyup = function(event) { // for input fron keyboard! 


	if (event.key.match(/^[A-Za-z]$/)) { // ONLY ABC letters! 
		var letterToCheck = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(letterToCheck);
		
	}

}
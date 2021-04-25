// const { question } = require("readline-sync");
var readlineSync = require('readline-sync');
readlineSync.setDefaultOptions({limit: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']}); //dit is een test

const { displayWordSoFar, isGameWon, isGameLost, faults } = require("./gamelogic");


function game(word, guesses) {
  
  if (isGameWon(word, guesses)) {
    console.log("je hebt Gewonnen") + console.log(displayWordSoFar(word, guesses));
    return;
  }

  if (isGameLost(word, guesses)) {
    console.log("Je hebt verloren") + console.log(displayWordSoFar(word, guesses));
    return;
  }

  console.log("Dit heb je tot nu toe geraden: ", guesses);
  console.log(faults(word, guesses));
  
  console.log(displayWordSoFar(word, guesses));



 
  var letter = readlineSync.question("Raad een letter: ");

  letter=letter.toLowerCase()


  // // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}


console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
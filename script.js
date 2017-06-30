var BasicCard = require("./basiccard.js")

var firstPresident = new BasicCard(
  "Who was the first president of the United States?", "George Washington"
);

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

basicQuery();

var ClozeCard = require("./clozecard.js")

var firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "George Washington");


// console.log(firstPresidentCloze.partial());

// console.log(firstPresidentCloze.cloze); 

// console.log(firstPresidentCloze.fullText);

var brokenCloze = new ClozeCard("this doesn't work", "oops");

// console.log(brokenCloze.partial());

// console.log(brokenCloze.cloze); 

// console.log(firstPresidentCloze.fullText);

var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
function basicQuery(){
  inquirer
    .prompt([
      {
        type: "input",
        message: firstPresident.front,
        name: "basicResponse"
      }
    ])
    .then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.basicResponse === firstPresident.back) {
        console.log("Correct!");
      }
      else {
        console.log("Wrong!");
      }
      console.log(firstPresident.back + " was the correct answer");
      clozeQuery();
    });
  }

function clozeQuery(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "Complete this sentence: " + firstPresidentCloze.partial(),
        name: "clozeResponse"
      }
    ])
    .then(function(inquirerResponse) {
      // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      if (inquirerResponse.clozeResponse === firstPresidentCloze.cloze) {
        console.log("Correct!");
      }
      else {
        console.log("Wrong!");
      }
      console.log("The correct answer was: " + firstPresidentCloze.fullText);
    });
  }

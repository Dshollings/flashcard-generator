var BasicCard = require("./basiccard.js")

var firstPresident = new BasicCard(
  "Who was the first president of the United States?", "George Washington"
);

var ClozeCard = require("./clozecard.js")

var firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "George Washington");


var brokenCloze = new ClozeCard("this doesn't work", "oops");

var inquirer = require("inquirer");

function basicQuery(){
  inquirer.prompt([
      {
        type: "input",
        message: firstPresident.front,
        name: "basicResponse"
      }
    ])
    .then(function(inquirerResponse) {
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
  basicQuery();

function clozeQuery(){
  inquirer.prompt([
      {
        type: "input",
        message: "Complete this sentence: " + firstPresidentCloze.partial(),
        name: "clozeResponse"
      }
    ])
    .then(function(inquirerResponse) {

      if (inquirerResponse.clozeResponse === firstPresidentCloze.cloze) {
        console.log("Correct!");
      }
      else {
        console.log("Wrong!");
      }
      console.log("The correct answer was: " + firstPresidentCloze.fullText);
    });
  }
  

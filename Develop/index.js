// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown")


// Create an array of questions for user input. Questions go here with PROPER COMMAs.
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your application?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of your application.",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "installation",
    message: "How does the user install this application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How does the user run this application?",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license you are using.",
    choices: ["MIT", "Mozilla", "Apache", "N/A"],
  },
  {
    type: "input",
    name: "collaborators",
    message: "List any collaborators by name (first and last).",
  },
  {
    type: "input",
    name: "tests",
    message: "Were any tests run?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  const outputString = generateMarkdown(data)
  fs.writeFile(fileName, outputString, function(err){
    if(err){console.log(err)}
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(responses){
      console.log(responses)
      writeToFile("./output/newReadMe.md", responses)
    });
}

// Function call to initialize app
init();

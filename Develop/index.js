// Include packages needed for this application
const inquirer = require('inquirer')
const fs = required('fs')


// Create an array of questions for user input. Questions go here with PROPER COMMAs.
const questions = [
  {
    type = "input",
    name = "title",
    question = "What is the title of your application?",
  },
  {
    type = "input",
    name = "description",
    question = "Give a brief description of your application.",
  },
  {
    type = "input",
    name = "githubLink",
    question = "What is your GitHub deployment url?",
  },
  {
    type = "input",
    name = "installation",
    question = "How does the user install this application?",
  },
  {
    type = "input",
    name = "usage",
    question = "How does the user run this application?",
  },
  {
    type = "list",
    name = "license",
    message = "Select the license you are using.",
    choices = ["MIT", "Mozilla", "Apache"],
  },
  {
    type = "input",
    name = "collaborators",
    question = "List any collaborators.",
  },
  {
    type = "input",
    name = "tests",
    question = "Were any tests run?",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {}

// Function call to initialize app
init();

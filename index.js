// TODO: Include packages needed for this application

// import inquirer from 'inquirer'
const inquirer = require("inquirer")

// import generateMarkdown from './utils/generateMarkdown'
const generateMarkdown = require('./utils/generateMarkdown')

// import fs from 'fs'
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a short description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Describe any installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how to use your project."
    },
    {
        type: "list",
        name: "license",
        message: "What is your project license under?",
        choices: ["Apache", "MIT", "Gnu", "Mozilla", "ISC", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How can someone else contribute?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please include any test instructions."
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        fs.writeFileSync("README3.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();

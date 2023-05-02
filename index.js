// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Explain your project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests and examples for this application, and how to run them.'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeTemplate = generateMarkdown(answers);
    writeToFile('README.md', readmeTemplate);
    });
}

// Function call to initialize app
init();

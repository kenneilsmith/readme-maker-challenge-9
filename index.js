// TODO: Include packages needed for this application

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'What is your GitHub username?', 'What is your email address?', 'How do you install  your project', 'Please write a short description of your project', 'What kind of license should your project have?', 'What are the features of your project?', 'How do you run tests?', 'What credits do you want to provide for your project', 'How can people contribute to your project?'];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'description'
        },
        {
            type: 'list',
            message: questions[5],
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: questions[6],
            name: 'features'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'test'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'credits'
        },
        {
            type: 'input',
            message: questions[9],
            name: 'contribute'
        }
    ])
        .then((response) => {
            console.log(response)
            const fileName = 'README.md'
            const data = generateMarkdown(response)
            writeToFile(fileName, data)

        })

}

// Function call to initialize app
init();

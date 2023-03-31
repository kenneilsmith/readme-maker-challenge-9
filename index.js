

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'What is your GitHub?', 'What is your email address?', 'How do you install  your project', 'Please write a short description of your project', 'What kind of license should your project have?', 'What are the features of your project?', 'How do you run tests?', 'What credits do you want to provide for your project', 'How can people contribute to your project?'];



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

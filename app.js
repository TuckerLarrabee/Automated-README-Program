// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = require('./utils/createFile');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptProject = () => {
    return inquirer.prompt([
        //PROJECT TITLE
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title?',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log("Please enter the Project Title!")
                }
            }
        },
        //DESCRIPTION SECTION
        {
            type: 'input',
            name: "motivation",
            message: 'What was your motivation for this project?',
            validate: motivation => {
                if (motivation) {
                    return true;
                } else {
                    console.log("Please enter your motivation behind this project!")
                }
            }
        },
        {
            type: 'input',
            name: 'why',
            message: "Why did you build this project?",
            validate: why => {
                if (why) {
                    return true;
                } else {
                    console.log("Please enter why you build this project!")
                }
            }
        },
        {
            type: 'input',
            name: 'solved',
            message: "What problem does it solve?",
            validate: solved => {
                if (solved) {
                    return true;
                } else {
                    console.log("Please enter what problem this project solves!")
                }
            }
        },
        {
            type: 'input',
            name: 'learn',
            message: "What did you learn?",
            validate: learn => {
                if (learn) {
                    return true;
                } else {
                    console.log("Please enter what you learned from this project!")
                }
            }
        },
        //INSTALLATION SECTION
        {
            type: 'input',
            name: 'install',
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            validate: install => {
                if (install) {
                    return true;
                } else {
                    console.log("Please enter step-by-step installation instructions!")
                }
            }
        },
        //USAGE SECTION
        {
            type: 'input',
            name: 'use',
            message: "What are typical use cases for this Project?",
            validate: use => {
                if (use) {
                    return true;
                } else {
                    console.log("Please enter examples for use!")
                }
            }
        },
        //LICENSE
        {
            type: 'list',
            name: 'license',
            message: "What license, if any, were used for this project?",
            choices: ['Apache License 2.0', "MIT License", "GNU General Public License v3.0", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License", "Creative Commons Zero v1.0 Universal", "None"],
        },
        //HOW TO CONTRIBUTE
        {
            type: 'input',
            name: 'contribute',
            message: "How can other developers contribute to this project?",
            validate: contribute => {
                if (contribute) {
                    return true;
                } else {
                    console.log("Please inform other developers how they can contribute to your project!")
                }
            }
        },
        //TESTS
        {
            type: 'input',
            name: 'test',
            message: "Please provide testing instruction for this application?",
            validate: test => {
                if (test) {
                    return true;
                } else {
                    console.log("Please inform other developers how they test this application!")
                }
            }
        },
        // QUESTIONS
        {
            type: 'input',
            name: 'github',
            message: "Please provide your GitHub username.",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please provide your GitHub username!")
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide your email address",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please provide your email address!")
                }
            }
        }

    ])
}

promptProject()
    .then(data => {
        console.log(data)
        return generateMarkdown(data)
    })
    .then(READMEdata => {
        writeToFile(READMEdata)
    })


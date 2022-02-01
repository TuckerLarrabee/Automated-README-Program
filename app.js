// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = require('./createFile');
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
            choices: ['licenseOne', "licenseTwo", "licenseThree", "licenseFour", "none"],
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
        }
    ])
}

// const promptInstallation = () => {
//     console.log(`
//   =================
//   Add Installation Instructions
//   =================
// `);
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'learn',
//             message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
//             validate: install => {
//                 if (install) {
//                     return true;
//                 } else {
//                     console.log("Please enter step-by-step installation instructions!")
//                 }
//             }
//         }
//     ])
// }


//TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

promptProject()
    .then(data => {
        console.log(data)
        return generateMarkdown(data)
    })
    .then(READMEdata => {
        writeToFile(READMEdata)
    })


// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const inquirer = require('inquirer');






// TODO: Create an array of questions for user input
const promptProject = () => {
    return inquirer.prompt([
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
        }
    ])
}

const promptDescription = (projectData) => {
    if (!projectData) {
        projectData = []
    };
    console.log(`
  =================
  Add Project Description
  =================
`);
    return inquirer.prompt([
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
        }
    ])
}

const promptInstallation = () => {
    console.log(`
  =================
  Add Installation Instructions
  =================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'learn',
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            validate: install => {
                if (install) {
                    return true;
                } else {
                    console.log("Please enter step-by-step installation instructions!")
                }
            }
        }
    ])
}

const promptUsage = () => {
    console.log(`
  =================
  Add Usage Information
  =================
`);
    return inquirer.prompt([
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
        }
    ])
}

// USAGE
// - Provide instructions and examples for use. Include screenshots as needed.
// - To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// TABLE OF CONTENTS (Optional)
// hyperlinks:
// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)



// USAGE
// - Provide instructions and examples for use. Include screenshots as needed.
// - To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// CREDITS

// - List your collaborators, if any, with links to their GitHub profiles.
// - If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
// - If you followed tutorials, include links to those here as well.

// LICENSE
// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// CONTRIBUTE
// - If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// TESTS
// - Go the extra mile and write tests for your application. Then provide examples on how to run them here.

// QUESTIONS

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

promptProject()
    .then(title => {
        console.log(title)
    })
    .then(promptDescription)
    .then(projectData => {
        console.log(projectData)
    })
    .then(promptInstallation)
    .then(install => {
        console.log(install)
    })
    .then(promptUsage)
    .then(usage => {
        console.log(usage)
    })

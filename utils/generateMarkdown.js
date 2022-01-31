// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {

  return `
  //license badge?

  # ${projectData.title}

  ## Description
  - ${projectData.motivation}
  - ${projectData.why}
  - ${projectData.solved}
  - ${projectData.learn}

  ## TABLE OF CONTENTS 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  - ${projectData.install}

  ## Usage
  - ${projectData.use}



  ## Contributing
  - ${projectData.contribute}

  ## Tests

  ## Questions
  - link to GitHub profile: 
  - email address with instructions on how to reach me with any additional questions
`;
}

module.exports = generateMarkdown;

//${renderLicenseSection(license)}
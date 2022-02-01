// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "BSD 2-Clause 'Simplified' License") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license === "Boost Software License") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === "None") {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
  // console.log(projectData.license)

  return `
  ${renderLicenseBadge(projectData.license)}

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
  - ${projectData.test}

  ## Questions
  - GitHub profile: github.com/${projectData.github}
  - If you have any additional questions, please send an email to following: ${projectData.email}
`;
}

module.exports = generateMarkdown;

//${renderLicenseSection(license)}
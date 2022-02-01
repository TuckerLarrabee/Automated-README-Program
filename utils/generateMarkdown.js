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
    return "The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development."
  } else if (license === "MIT License") {
    return "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility."
  } else if (license === "GNU General Public License v3.0") {
    return "The GNU General Public License is a series of widely used free software licenses that guarantee end users the four freedoms to run, study, share, and modify the software."
  } else if (license === "BSD 2-Clause 'Simplified' License") {
    return "This license has also been called the 'Simplified BSD License' and the 'FreeBSD License'."
  } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
    return "This license has also been called the 'New BSD License' or 'Modified BSD License'."
  } else if (license === "Boost Software License") {
    return "The Boost Software License specifies the terms and conditions of use for all Boost libraries and tools."
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return "The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law."
  } else if (license === "None") {
    return '- None'
  }
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
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  - ${projectData.install}

  ## Usage
  - ${projectData.use}

  ## License
  ${renderLicenseLink(projectData.license)}

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


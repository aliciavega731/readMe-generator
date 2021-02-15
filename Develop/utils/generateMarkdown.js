// TODO: Create a function that returns a license badge based on which license is passed in


function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  if (license == "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  }
  if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  }
  if (license == "N/A") {
    return `No license attributed.`
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Github Link
${data.githubLink}

## Table of Contents
- [Application Name](#title)
- [Description](#description)
- [Github Link](#githubLink)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is licensed by ${renderLicenseBadge} ${data.license}

## Contributors
The following people contributed to the creation of this application: ${data.collaborators} 

## Tests
${data.tests} were done to ensure the success of this application.

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license == "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
  if (license == "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
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
<a href="https://github.com/${data.githubUsername}"> Github Profile Link </a>

## Table of Contents
- [Application Name](#title)
- [Description](#description)
- [Github Link](#githubUsername)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#collaborators)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is licensed by ${renderLicenseBadge(data.license)}.

## Contributors
The following people contributed to the creation of this application: ${data.collaborators}.

## Tests
${data.tests} tests were done to ensure the success of this application.

## Questions
If you have any other questions or concerns, please reach out via email ${data.email} or via <a href="https://github.com/${data.githubUsername}"> Github</a>.
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) { // If there is no license, return an empty string
  if (license !== null) {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
- Usage(#usage)

## Installation
${data.installation}

## Usage
${data.usage}

## License

`;
}

module.exports = generateMarkdown;

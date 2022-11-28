// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.license ? data.license : ''}


## Table of Contents
  [Description] (#description)<br />
  [Installation] (#installation)<br />
  [Usage] (#usage)<br />
  [Contributions] (#contributions)<br />
  [Testing] (#test)<br />
  [Questions] (#questions)<br />

## Description

${data.description}

## Installation 

${data.installation}

## Usage

${data.usage}

## Contributions

${data.contributions}

## Testing

${data.test}

## Questions
- Github: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;

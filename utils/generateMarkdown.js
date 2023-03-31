// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n [License](![GitHub](https://img.shields.io/github/license/kenneilsmith/readme-maker-challenge-9))\n`

    )
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `This project is licensed under the ${license} license.`
    )
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title} 
  ## Description 
   ${data.description}
  ## Table of Contents
  - [Installation](#installation) 
  - [Features](#features)
  - [Contributing](#contributing) 
  - [Tests](#tests)
  - [License](#license)
  - [Credits](#credits) 
  - [Contact](#contact) 
  
  ## Installation  
  ${data.installation}
  ## Features
  ${data.features}
  ## Contributing
  ${data.contribute}
  ## Testing
  ${data.test}
  ## License
  ${renderLicenseBadge(data.license)} 
  ${renderLicenseLink(data.license)} 
  ${renderLicenseSection(data.license)} 
  ## Credits
  ${data.credits}
  ## Contact
  ${data.github}\n
  ${data.email}`
}

module.exports = generateMarkdown

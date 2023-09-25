// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Function to render the license badge based on the selected license
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '![License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache License 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GNU GPLv3':
      return '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    default:
      return ''; // Return an empty string if there's no license specified
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Function to render the license link based on the selected license
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return 'For more details, see the [MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache License 2.0':
      return 'For more details, see the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'GNU GPLv3':
      return 'For more details, see the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    default:
      return ''; // Return an empty string if there's no license specified
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Function to render the license section of README
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  // Return the license section with badge and link
  return `${badge}\n${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description 

  ${data.description}

  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}

  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions
  
  * [Github](https://github.com/${data.github})
  * For any more questions, reach me at my [email](${data.email})
  
  ## Credits
  
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
`;
}

module.exports = generateMarkdown;

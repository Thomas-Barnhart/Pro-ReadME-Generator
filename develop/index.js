// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: [
        'MIT License',
        'Apache License 2.0',
        'GNU GPLv3',
      ],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run tests for your project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
    
// TODO: Create a function to write README file
function generateMarkdown(input) {
  return `# ${input.title}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [Credits](#credits)

## Description 
${input.description}
## Installation 
${input.installation}
## Usage
${input.usage}
## License
${input.license}
## Contributing
${input.contributing}
## Testing
${input.tests}
## Questions 
GitHub: [${input.github}](https://github.com/${input.github})
Email: [${input.email}](mailto:${input.email})
## Credits
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      // Generate README content based on user's answers
      const readmeContent = generateMarkdown(answers);
  
      // Write the README file
      writeToFile('README.md', readmeContent);
    });
  }

// Function call to initialize app
init();

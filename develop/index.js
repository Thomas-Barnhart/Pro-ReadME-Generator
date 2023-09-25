// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateMarkdown(answers);

    await writeFileAsync('README.md', readmeContent, 'utf8');
    console.log('YAY! You have created a README.md!');
  } catch (error) {
    console.error('Sorry, there was an error:', error);
  }
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const userAnswers = await inquirer.prompt(questions);
    console.log('Thank you! The current data is being processed into your README.md: ', userAnswers);
    // Get markdown template from generateMarkdown.js passing the answers as parameter
    const myMarkdown = generateMarkdown(userAnswers);
    console.log(myMarkdown);
    // Write the README file after the markdown is made
    await writeFileAsync('README1.md', myMarkdown);
  } catch (error) {
    console.log('Sorry there was an error.' + error);
  }
};

// Function call to initialize app
init();

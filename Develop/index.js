// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What do you want your README file to be named?',
    name: 'fileName'
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'What is the description of your project?',
    name: 'description'
},
{
    type: 'input',
    message: 'State the installation instructions.',
    name: 'installation'
},
{
    type: 'input',
    message: 'State the usage information.',
    name: 'usage'
},
{
    type: 'input',
    message: 'State the contribution guidelines.',
    name: 'contributions'
},
{
    type: 'input',
    message: 'State the test instructions.',
    name: 'test'
},
{
    type: 'list',
    message: 'What license do you choose for this project?',
    name: 'license',
    choices: [
        {name:'Boost', value:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"}, 
        {name: 'Apache 2.0' ,value:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" },
        {name:'CC0' ,value:'[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'},
        {name:'GNU',value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
        {name:'ISC' ,value:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
        {name:'MIT' ,value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
    ]
},
{
    type: 'input',
    message: 'What is the link to your Github?',
    name: 'github'
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init(); {
    inquirer.prompt (questions)
    .then(response => {
        const md = generateMarkdown (response)
        writeToFile(`${response.fileName}.md`, md)
    })
}
// Function call to initialize app
init ();
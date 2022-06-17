const inquirer = require("inquirer");
const fs = require("fs");
const emailValidator = require("email-validator");

// This is a Welcome message

console.log("Hi, welcome to Node ReadMeGenerator...");

const ReadMeGenerator = (answersArray) =>
  `
# ${answersArray.title} ![License](https://img.shields.io/badge/${answersArray.license}-License-green)

# Table of Contents

- [Description](#description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Description

${answersArray.description}

## Installation

Please follow the instructions below:

\`\`\`
${answersArray.installation}
\`\`\`

## Usage

${answersArray.usage}

# License

${answersArray.license}

## Contributing

${answersArray.contributing}

## Tests

${answersArray.testInstructions}

## Questions:

Contact me through:

GitHub: https://github.com/${answersArray.userName} 

Email: ${answersArray.email}
    `;
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter your project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter your project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter your project installation steps:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter your project Usage",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a project license:",
    choices: ["MIT", "apache-2.0", "afl-3.0"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Please enter your project contribution guidelines:",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Please enter your project Testing steps:",
  },
  {
    type: "input",
    name: "userName",
    message: "Please enter your github name:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address name:",
    validate: emailValidator.validate,
  },
];

inquirer.prompt(questions).then((response) => {
  console.log(response);
  fs.writeFile("./output/readMe.md", ReadMeGenerator(response), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
});

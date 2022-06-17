const inquirer = require("inquirer");
const fs = require("fs");

// This is a Welcome message

console.log("Hi, welcome to Node ReadMeGenerator...");

const ReadMeGenerator = (answersArray){
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

${answersArray.Tests}

## Questions:

Contact me through:
GitHub: https://github.com/${answersArray.userName}
Email: ${answersArray.email}
    `
}
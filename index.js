#!/usr/bin/env node

// Import the necessary libraries
const chalk = require('chalk');
const boxen = require('boxen');
const inquirer = require('inquirer');
const open = require('open');

// Define the options for Boxen
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
  backgroundColor: '#555555',
  title: 'Sourjya Biswas',
  titleAlignment: 'center'
};

// Define your personal information using Chalk for colors
const data = {
  work: chalk.white('Full time student for now'),
  bio: chalk.white('I love building things with code and drinking coffee. ☕'),
  twitter: chalk.gray('https://x.com/') + chalk.cyan('sourjya_biswas'),
  github: chalk.gray('https://github.com/') + chalk.green('rocketpoweredbengali'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.blue('sourjya-biswas-113107274'),
  instagram: chalk.gray('https://www.instagram.com/') + chalk.magenta('rocketpoweredbengali'),
  npx: chalk.red('npx') + ' ' + chalk.white('sourjya-biswas'),

  labelWork: chalk.white.bold('       Work:'),
  labelBio: chalk.white.bold('        Bio:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelInstagram: chalk.white.bold('  Instagram:'),
  labelCard: chalk.white.bold('       Card:'),

  // The text for the interactive menu
  motto: chalk.italic('I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will try my best to get back to you!'),
  tip: chalk.gray('Tip: Try cmd/ctrl + click on the links above'),

  // URLs for the interactive menu
  resumeURL: 'https://github.com/rocketpoweredbengali', // CHANGE THIS to a direct link to your resume PDF
};

// Build the output string for the box
const card = `
${data.labelWork}  ${data.work}
${data.labelBio}  ${data.bio}

${data.labelTwitter}  ${data.twitter}
${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelInstagram}  ${data.instagram}

${data.labelCard}  ${data.npx}

${'\n'}${data.motto}
${'\n'}${data.tip}
`;

// Display the card
console.log(boxen(card, boxenOptions));

// --- Interactive Menu ---

const promptQuestions = [
    {
        type: 'list',
        name: 'action',
        message: chalk.green('What would you like to do?'),
        choices: [
            {
                name: `Send me an ${chalk.bold('email')}?`,
                value: () => {
                    console.log(`\nHere's my email: ${chalk.cyan.bold('sourjyabiswas03@gmail.com')}\n`);
                }
            },
            {
                name: `Download my ${chalk.bold('Resume')}?`,
                value: () => open(data.resumeURL)
            },
            {
                name: 'Just quit.',
                value: () => console.log('Goodbye!\n')
            }
        ]
    }
];

// Run the prompt
inquirer.prompt(promptQuestions).then(answer => {
    // The answer.action function is called which executes the code for the selected choice.
    if (answer.action) {
        answer.action();
    }
});

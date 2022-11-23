const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ managerName, managerID, managerEmail, managerOfficeNum, engineerOrIntern, engineerName, engineerId, engineerEmail, engineerGitHub}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Generated Webpage</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="managerContainer">
    <h1>Hello. I am the team manager. My name is ${managerName}.</h1>
    <h3>My info,<h3>
    <ul>
      <li>My Employee ID - ${managerID}</li>
      <li>My office number - ${managerOfficeNum}</li>
      <li><a href="gmail.com" My Email:></a></a>${managerEmail}</li>
    </ul>
    <h2>These are my team members</h2>
    <h4>${engineerName}(Engineer)</h4>
    <ul>
      <li>My Id:${engineerId}</li>
      <li><a href="gmail.com" My Email:</a>My Email:${engineerEmail}</li>
      <li><a href="github.com" My GitHub:</a>${engineerGitHub}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the team managers name?',
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'What is the team managers ID?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is your team managers email adress',
    },
    {
      type: 'input',
      name: 'managerOfficeNum',
      message: 'What is your team managers office number?',
    },
    {
      type: 'input',
      name: 'engineerYorN',
      message: 'Would you like to add an engineer or intern to your team?',
        validate: engineerOrIntern => {
          if (engineerOrIntern == "engineer") {
            return true;
          } else {
            return true;
          }
        }
    },
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the name of your engineer?',
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What is your engineers ID?',
    },
    {
      type: 'input',
      name: 'engineerGitHub',
      message: 'What is you engineers GitHub?',
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is you engineers Email?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created you teampage website!')
    );
  });
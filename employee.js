//Import packages for application
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

//Import files
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

//Create Employee Questions
const EmployeeQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: [Manager, Engineer, Intern],
    },
  ]);
};

//Create function to initialize Questions
function init() {
  EmployeeQuestions().then((data) => {
    const htmlFile = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="container">
<header>
<h1 class="name"> ${data.name} </h1>
<h2 class="role"> ${chooseRole(data.role)}</h2>
</header>
<ul class="info">
<li>ID: ${data.employeeID}</li>
</ul>
<li><a href = "mailto: ${data.email}">Email: ${data.email}</a></li>
</div>
</body>
</html>`;

    //function to choose other employee prompts
    function chooseRole(role) {
      if (role === "Manager") {
        ManagerQuestions();
      } else if (role === "Engineer") {
        EngineerQuestions();
      } else role === "Intern";
      InternalQuestions();
    }

    fs.writeFile(htmlFile, html, (err, data) => {
      err ? console.error(err) : console.log("Success!");
    });
  });
}

// Function call to initialize app
init();

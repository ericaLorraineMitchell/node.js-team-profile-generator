//THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

const ManagerQuestions = () => {
    return inquirer.prompt([
    {
     type: "input",
     name: "office",
     message: "What is your office number?",
    },
    ]);
};

//append office number to HtmlFile

//move to Engineer and Intern questions if choosen

module.exports = Manager;
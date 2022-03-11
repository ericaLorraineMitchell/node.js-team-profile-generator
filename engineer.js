//WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

const EngineerQuestions = () => {
    return inquirer.prompt([
    {
     type: "input",
     name: "GitHub",
     message: "What is your Github username?",
    },
    ]);
};

//append GitHub username link to HtmlFile


module.exports = Engineer;
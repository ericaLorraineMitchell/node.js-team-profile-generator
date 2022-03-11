// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

const InternQuestions = () => {
    return inquirer.prompt([
    {
     type: "input",
     name: "school",
     message: "What is the name of your school?",
    },
    ]);
};

//append school name to htmlFile

module.exports = Intern;
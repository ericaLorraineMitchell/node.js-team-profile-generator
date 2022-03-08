//Import packages for application
const fs = require("fs");
const inquire = require("inquire");
const jest = require("jest");

//Create Employee Questions
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "",
            message: "",
        },
const inquirer = require("inquirer")
// const path = require("path")
const fs = require("fs")

const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

const {generateEngineerCard,
    generateInternCard,
    generateManagerCard,
    baseHtml} = require("./src/htmlGen")

const teamMemberHtmlArr = [];

function init() {
    function managerCreate() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Managers name?',
              },
              {
                type: 'input',
                name: 'email',
                message: 'Whats your email?',
              },
              {
                type: 'input',
                name: 'id',
                message: 'What is your id number?',
              },
              {
                type: 'input',
                name: 'office',
                message: 'What is your office phone number?',
              },
        ])
        .then(({name, id, email, officeNumber}) => {
                const manager = new Manager( name, id, email, officeNumber);
                teamMemberHtmlArr.push(generateManagerCard(manager));
                mainMenu();
        });
        
    }
    function mainMenu() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addedRole',
                message: 'Would you like to add another Employee?',
                choices: ['Engineer', 'Intern', "No, I'm Done"],
            },
        ])
        .then(answers => {
            switch (answers.addedRole) {
                case "Engineer":
                    return engineerCreate();
                case "Intern":
                    return internCreate()
                default: 
                    return generateHtml;
            }
        })
    }
    function engineerCreate() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?',
              },
              {
                type: 'input',
                name: 'email',
                message: 'Whats your email?',
              },
              {
                type: 'input',
                name: 'id',
                message: 'What is the Engineer Id number?',
              },
              {
                type: 'input',
                name: 'github',
                message: 'What is your Github?',
              },
        ])
        .then(({name, id, email, github}) => {
                const engineer = new Engineer(name, id, email, github);
                teamMemberHtmlArr.push(generateEngineerCard(engineer));
                mainMenu();
        });

    }
    function internCreate() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Interns name?',
              },
              {
                type: 'input',
                name: 'email',
                message: 'Whats your email?',
              },
              {
                type: 'input',
                name: 'id',
                message: 'What is the Interns Id number?',
              },
              {
                type: 'input',
                name: 'school',
                message: 'What is your school?',
              },
        ])
        .then(({name, id, email, school}) => {
                const intern = new Intern(name, id, email, school);
                teamMemberHtmlArr.push(generateInternCard(intern));
                mainMenu();
        });

    };

    function generateHtml (){
        fs.watchFile(
          "./dist/index.html", 
          baseHtml(teamMemberHtmlArr), 
          (err) => {
            err ? console.log(err) : console.log(" Generated HTML File ")
        });
    };

    managerCreate();

}
init();

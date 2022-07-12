const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
const generatePage = require('../src/template');
const {writeFile} = require('../utils/generateHtml');

/* Prompts for user input and uses the template to render a team profile*/
class Generator {
    constructor() {
        this.team = []; // array of team members
        this.employee;
    }

    //Prompter for Intern data
    promptIntern() {
        return inquirer.prompt({
            type: 'text',
            message: 'What is the name of the interns school?',
            name: 'school',
            validate: intSchool => {
                if (intSchool) {
                    return true;
                } else {
                    console.log('');
                    console.log('Please Enter the Interns School Name!');
                    return false;
                }
            }
        })
    }

    promptEngineer() {
        return inquirer.prompt({
            type: 'text',
            message: 'What is the engineers GitHub username?',
            name: 'github',
            validate: engGithub => {
                if (engGithub) {
                    return true;
                } else {
                    console.log('');
                    console.log('Please Enter the Engineers Github Username!');
                    return false;
                }
            }
        })
    }

    addEntries() {
        return inquirer.prompt({
            type: 'confirm',
            message: 'Would you like to add more employees?',
            name: 'newEntry'
        })
    }

    prompter() {
        let employeeName;
        let employeeEmail;

        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is this team members name?',
                validate: empName => {
                    if (empName) {
                        return true;
                    } else {
                        console.log('');
                        console.log('Please Enter a Name!');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                validate: empEmail => {
                    if (empEmail.includes("@") && empEmail.includes(".")) {
                        return true;
                    } else {
                        console.log('');
                        console.log('Please Enter a Valid Email!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'What is the employees role?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern'],
                validate: empRole => {
                    if (empRole) {
                        return true;
                    } else {
                        console.log('');
                        console.log('Please Make a Selection!');
                        return false;
                    }
                }
            }
        ]).then(employeeData => {
            employeeName = employeeData.name;
            employeeEmail = employeeData.email;
            console.log(employeeData);

            if (employeeData.role.includes('Intern')) {
                this.promptIntern()
                    .then(internData => {
                        // create intern object
                        this.employee = new Intern(employeeData.name, employeeData.email, internData.school);
                        this.team.push(this.employee);

                        inquirer.prompt({
                            type: 'confirm',
                            name: 'newEntry',
                            message: 'Would you like to enter another employee profile?'
                        }).then(response => {
                            if (response.newEntry == false) {
                                return writeFile(generatePage(this.team));
                            } else {
                                this.prompter();
                            }
                        })
                    })
            } else if (employeeData.role.includes('Engineer')) {
                this.promptEngineer()
                    .then(engData => {
                        // create engineer object
                        this.employee = new Engineer(employeeData.name, employeeData.email, engData.github);
                        this.team.push(this.employee);

                        inquirer.prompt({
                            type: 'confirm',
                            name: 'newEntry',
                            message: 'Would you like to enter another employee profile?'
                        }).then(response => {
                            if (response.newEntry == false) {
                                return writeFile(generatePage(this.team));
                            } else {
                                this.prompter();
                            }
                        })
                    })
            } else {
                console.log('Manager');
                this.employee = new Manager(employeeData.name, employeeData.email);
                this.team.push(this.employee);

                inquirer.prompt({
                    type: 'confirm',
                    name: 'newEntry',
                    message: 'Would you like to enter another employee profile?'
                }).then(response => {
                    if (response.newEntry == false) {
                        return writeFile(generatePage(this.team));
                    } else {
                        this.prompter();
                    }
                })
            }
        });
    }

    startPrompter() {
        this.prompter();
    }
}

module.exports = Generator;
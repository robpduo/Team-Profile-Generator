const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');

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
            message: 'What is the name of your school?',
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

    prompter() {
        let employeeName;
        let employeeEmail;

        inquirer.prompt([
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
                        console.log(internData);
                    })
            } else {
                console.log('other');
            }
        });
    }
}

module.exports = Generator;
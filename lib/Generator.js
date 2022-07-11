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
                    if (empEmail.includes("@")) {
                        return true;
                    } else {
                        console.log('');                        
                        console.log('Please Enter a Valid Email!');
                        return false;
                    }
                }
            }
        ]).then(employeeData => {
            employeeName = employeeData.name;
            employeeEmail = employeeData.email;
            console.log(employeeData);
        });
    }
}

module.exports = Generator;
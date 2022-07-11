const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor (name, email, school) {
        super(name, email);

        this.role = 'Intern';
        this.school = school;
    }
}

module.exports = Intern;

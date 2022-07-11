const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor (name, email, school) {
        super(name, email);

        this.role = 'Intern';
        this.school = school;
    }

    getSchool () {
        return this.school;
    }
}

module.exports = Intern;

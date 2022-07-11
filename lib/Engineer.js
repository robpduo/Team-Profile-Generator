const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(name, email, school) {
        super(name, email);

        this.school = school;
        this.role = 'Engineer';
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
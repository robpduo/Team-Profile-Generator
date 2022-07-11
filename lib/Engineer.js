const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(name, email, school) {
        super(name, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Engineer;
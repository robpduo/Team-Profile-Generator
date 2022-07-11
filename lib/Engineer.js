const Employee = require('../lib/Employee');
class Engineer extends Employee {
    constructor(name, email) {
        super(name, email);
    }
}

module.exports = Engineer;
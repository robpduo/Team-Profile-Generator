const { Module } = require("module");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email) {
        super(name, email);

        this.officeNumber = Math.floor(Math.random() * 3);
        this.role = 'Manager';
    }

    getOffice () {
        return this.officeNumber;
    }
}

module.exports = Manager;
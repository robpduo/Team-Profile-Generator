class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000);
    }
}

module.exports = Employee;
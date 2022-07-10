class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000);
    }

    getName() {
        if (this.name.length) {
            return this.name;
        }

        return 'no employee found';
    }
}

module.exports = Employee;
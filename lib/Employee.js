class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000);
        this.role = 'Employee';
    }

    getName() {
        if (this.name.length) {
            return this.name;
        }

        return 'no employee name found';
    }

    getId() {
        if (this.name.length) {
            return this.id;
        }

        return 'no employee id found';
    }

    getEmail() {
        if (this.name.length) {
            return this.email;
        }

        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;
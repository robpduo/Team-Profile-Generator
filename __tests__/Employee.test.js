const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Robert Duong', 'robpduo@gmail.com');

    expect(employee.name).toBe('Robert Duong');
    expect(employee.email).toBe('robpduo@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
});
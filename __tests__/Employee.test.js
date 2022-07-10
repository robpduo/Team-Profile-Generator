const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Robert Duong', 'robpduo@gmail.com');

    expect(employee.name).toBe('Robert Duong');
    expect(employee.email).toBe('robpduo@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
});

test('retrieve employee name', () => {
    const employee = new Employee('Robert Duong', 'robpduo@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('retrieve employee Id', () => {
    const employee = new Employee('Robert Duong', 'robpduo@gmail.com');

    expect(employee.getId()).toBeGreaterThanOrEqual(0);
    expect(employee.getId()).toBeLessThanOrEqual(1000);
});
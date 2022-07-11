const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager('Robert Manager', 'robpduo@gmail.com');

    expect(manager.name).toBe('Robert Manager');
    expect(manager.email).toBe('robpduo@gmail.com');
    expect(manager.id).toBeGreaterThan(0);
});

test('retrieve managers office number', () => {
    const manager = new Manager('Robert Manager', 'robpduo@gmail.com');

    expect(manager.getOffice()).toBeGreaterThanOrEqual(0);
    expect(manager.getOffice()).toBeLessThanOrEqual(3);
});
const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Robert Engineer', 'robpduo@gmail.com');

    expect(engineer.name).toBe('Robert Engineer');
    expect(engineer.id).toBeLessThanOrEqual(1000);
    expect(engineer.id).toBeGreaterThanOrEqual(0);
});
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Robert Intern', 'robpduo@gmail.com', 'University of Toronto');

    expect(intern.name).toBe('Robert Intern');
    expect(intern.email).toBe('robpduo@gmail.com');
    expect(intern.id).toBeGreaterThanOrEqual(0);
    expect(intern.id).toBeLessThanOrEqual(1000);
});

test('retrieve interns school name', () =>{
    const intern = new Intern('Robert Intern', 'robpduo@gmail.com', 'University of Toronto');

    expect(intern.getSchool()).toBe('University of Toronto');
});

test('retrive interns role', () => {
    const intern = new Intern('Robert Intern', 'robpduo@gmail.com', 'University of Toronto');
    
    expect(intern.getRole()).toBe('Intern');
});
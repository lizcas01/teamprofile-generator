const Intern = require('../lib/Intern')

describe('Employee Test Suite', ()=>{
        it("Values from constructor", () => {
            const employee = new Intern('Chris','1981','chris@fakemail.com','school name');
        
            expect(employee.getSchool()).toBe('school name');
            expect(employee.getRole()).toBe('Intern')
        })
        it("Set values", () => {
            const employee = new Intern('Chris','1981','chris@fakemail.com','school name');
            expect(typeof employee.email).toBe('string')
            expect(employee.school).toBe('school name');
        })

})
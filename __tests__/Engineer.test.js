const Engineer = require('../lib/Engineer')

describe('Employee Test Suite', ()=>{
        it("Values from constructor", () => {
            const employee = new Engineer('Chris','1981','chris@fakemail.com','git username');
            
            expect(employee.getGithub()).toBe('git username');
            expect(employee.getRole()).toBe('Engineer')
        })
        it("Set values", () => {
            const employee = new Engineer('Chris','1981','chris@fakemail.com','git username');
            expect(typeof employee.name).toBe('string')
            expect(employee.github).toBe('git username');
        })

})
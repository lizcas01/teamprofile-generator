const Employee = require('../lib/Employee')

describe('Employee Test Suite', ()=>{
        it("Values from constructor", () => {
            const employee = new Employee('Chris','1981','chris@fakemail.com');
            
            expect(employee.getName()).toBe('Chris');
            expect(employee.getId()).toBe('1981');
            expect(employee.getEmail()).toBe('chris@fakemail.com');
            expect(employee.getRole()).toBe('Employee')
        })
        it("Set values", () => {
            const employee = new Employee('Chris','1981','chris@fakemail.com');
            expect(typeof employee).toBe('object')
            expect(employee.name).toBe('Chris');
            expect(employee.id).toBe('1981');
            expect(employee.email).toBe('chris@fakemail.com');
        })

})
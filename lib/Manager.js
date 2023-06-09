const Employee = require("./Employee");

const managerQuestionsFile = [

    {
        type: 'input',
        name: 'name',
        message: "Please type in the manager's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Please type in the manager's ID"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please type in the manager's email."
    },
    {
        type: 'input',
        name: 'office',
        message: "Please type in the manager's office number."
    }

]

class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole() {
        return 'Manager'
    }

	getOfficeNumber() {
		return this.office;
	}
}

module.exports = { Manager, managerQuestionsFile } ;

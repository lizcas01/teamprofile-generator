const Employee = require("./Employee");

const internQuestionsFile = [

    {
        type: 'input',
        name: 'name',
        message: "Please type in the intern's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Please type in the intern's ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Please type in the intern's email."
    },
    {
        type: 'input',
        name: 'school',
        message: "Please type in the school the intern attends."
    }

]

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = { Intern, internQuestionsArr };

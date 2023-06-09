const Employee = require("./Employee");

const engineerQuestionsFile = [

    {
        type: 'input',
        name: 'name',
        message: "Please type in the engineer's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Please type in the engineer's ID."
    },
    {
        type: 'input',
        name: 'email',
        message: "Please type in the engineer's email."
    },
    {
        type: 'input',
        name: 'github',
        message: "Please type in the engineer's GitHub username."
    }

]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

	getRole() {
		return 'Engineer';
	}
	getGithub() {
		return this.github;
	}

}

module.exports = { Engineer, engineerQuestionsFile };

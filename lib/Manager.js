const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.office = officeNum;
    }

    getRole () {
        return 'Manager'
    }

	getOfficeNumber () {
		return this.officeNum;
	}
}

module.exports = Manager;
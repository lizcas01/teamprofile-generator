const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const htmlGenerator = require('./src/htmlGenerator');
const team = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            name: "name",
            type: "input",
            message: "What is the name of the manager?", 
        },
        {
            name: "id",
            type: "input",
            message: "What is the manager's ID number?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email?",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?"
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            name: "role",
            type: "list",
            message: "Which employee type would you like to add?",
            choices: ['Engineer', 'Intern']
        },
        {
            name: "name",
            type: "input",
            message: "What is the name of the employee?"
        },
        {
            name: "id",
            type: "input",
            message: "What is the employee's ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is the employee's email?"
        },
        {
            name: "github",
            type: "input",
            message: "What is the employee's GitHub username?"

        },
        {
            name: "school",
            type: "input",
            message: "What school does the intern attend?",
            when: (input) => input.role === "Intern",
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Add more employees?",
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        team.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(team); 
        } else {
            return team;
        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profiles have been generated!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(team => {
    return generateHTML(team);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
  
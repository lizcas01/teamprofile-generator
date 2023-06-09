const inquirer = require('inquirer')
const page = require('./src/page.js')
const fileGenerator = require('./src/file-generator.js')
const { Manager, managerQuestionsFile } = require('./lib/Manager');
const { Engineer, engineerQuestionsFile } = require('./lib/Engineer');
const { Intern, internQuestionsFile } = require('./lib/Intern');
const employeesFile = []

const init = () => { managerQuestions() }

const managerQuestions = () => {
    inquirer.prompt(managerQuestionsFile)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesFile.push(answers);
        return employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsFile)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesFile.push(answers);
        return employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionsFile)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesFile.push(answers);
        return employeePrompt();
    })
}

const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {
            let html = page(employeesFile)
            console.log('...');
            fileGenerator(html);
        }
    })
}

init();
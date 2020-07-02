const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "./output");

const render = require("./lib/htmlRenderer");
let teamInfo = [];
// Here is where I wrote my code to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerQuests = [
  {
    type: "input",
    name: "managerName",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "managerId",
    message: "What is your ID number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office phone number?",
  }
];

const engineerQuests = [
  {
    type: "input",
    name: "engName",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "engId",
    message: "What is your ID number?",
  },
  {
    type: "input",
    name: "engEmail",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your github username?",
  }
];

const internQuests = [
  {
    type: "input",
    name: "internName",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "internId",
    message: "What is your ID number?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "school",
    message: "What school do you attend?",
  }
];

const teammate = [ {
  type: "list",
  name: "employeeType",
  choices: ["Manager", "Engineer", "Intern", "I don't have any more members to add"],
  message: "What type of team member are you adding?"
}]

const teammateType = () => {
  inquirer.prompt(teammate).then(function(data) {
    switch (data.employeeType) {
      case "Manager": askManager(); break;
      case "Engineer": askEngineer(); break;
      case "Intern": askIntern(); break;
      default: makeWebpage();
    }
  })
}

const askManager = function() {
  inquirer.prompt(managerQuests).then(data => {
    teamInfo.push(new Manager(data.managerName, data.managerId, data.officeNumber, data.managerEmail));
    teammateType();
  })
}
const askEngineer = function() {
  inquirer.prompt(engineerQuests).then(data => {
    teamInfo.push(new Engineer(data.engName, data.engId, data.Github, data.engEmail));
    teammateType();
  })
}
const askIntern = function() {
  inquirer.prompt(internQuests).then(data => {
    teamInfo.push(new Intern(data.internName, data.internId, data.school, data.internEmail));
    teammateType();
  })
}

const makeWebpage = function () {
  fs.writeFile("team.html", render(teamInfo), (err) => {
    if (err) throw err;
    console.log("New team webpage has been created.")
  })
}
teammateType();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

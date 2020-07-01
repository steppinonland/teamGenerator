// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
fs.require(inquirer);

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email) {
    getGithub()

    getRole() // Overridden to return 'Engineer'
  }
}
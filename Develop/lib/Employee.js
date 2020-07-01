// TODO: Write code to define and export the Employee class
// * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole()


// require all the other code in this directory to run 'employee'
// const inquirer = require("inquirer");
// const engineer = require("./Engineer");
// const intern = require("./Intern");
// const manager = require("./Manager");

// create the employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
  }
  module.exports = Employee;
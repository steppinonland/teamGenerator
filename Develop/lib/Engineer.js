// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// take the employee class and forms the engineer type of employee
class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email);
    this.Github = Github;
  }
    getGithub() {
        return this.Github;
    }
    // Role is overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    } 
    } 

    module.exports = Engineer;

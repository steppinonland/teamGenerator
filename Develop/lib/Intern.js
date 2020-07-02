
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // * store the school value 
  getSchool() {
      return this.school;
  }
  // * getRole() // Overridden to return 'Intern'
  getRole() {
    return "Intern";
  }

}


module.exports = Intern;
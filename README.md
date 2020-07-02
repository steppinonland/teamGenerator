# Team Generator Summary

Three things I know for sure about code: it must be readable, reliable, and maintainable. Oftentimes, *how* code is designed is just as important as the code itself. In this homework assignment, I built a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. I'll also be ensuring that all unit tests pass.


## What is this?
This is a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This also passed all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. I've framed this challenge as follows:

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

How did I deliver this? Here's how:

* I used the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* The app runs as a Node CLI to gather information about each employee.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

This was my general workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

## More Information:
* I created multiple HTML templates for each teammate and the main HTML page:

  * `main.html`

  * `engineer.html`
  
  * `intern.html`
  
  * `manager.html`

* The different employee types  all inherit some methods and properties from a base class of `Employee`.

* In your HTML template files, I added a placeholder character that helps tge program identify where the dynamic markup begins and ends.

### Classes
The project has these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)
  
  ## So are you ready to make your team a brand new website?!

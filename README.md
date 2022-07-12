# Team-Profile-Generator

Link to Video Demonstration: https://drive.google.com/file/d/1MriU05GguMOTFiTt8Sk0e3FdOLt7pgUT/view

# Description
This application generates a team profile page based on user input on the command line

# Technologies Used
Javascript
Node.js
  Jest
  Inquirer
  File System

# Features
Users are able to select whether to add an Intern, Manager, or Engineer to their team profile
A Manager profile consists of an office number that is randomly generated between 0 - 3.
An Engineer profile will consists of a github username which links the team profile viewer to the github repository
An Intern's profile will display their school name

Each employee profile consists of a name and email
Each employee profile consists of a randomly generated ID from 0 - 1000

Input validation was implemented for the following prompts:
    Email: must contain @ and .
    Name: required field, cannot be left blank
    School Name: required field, cannot be left blank
    
Users may click on the email link on the team profile page to open their default mail app with the recipient field pre populated
Users may click on the github repository link to be directed to the engineer's github repository page

# Testing
Unit tests were conducted for the following service layers: Intern.js, Employee.js, Engineer.js, and Manager.js
Unit tests were done with Jest

# To Run (from the root directory)
Install dependencies: npm install
Run tests: npm run test
Run application: node index.js 

## Future Imporvements
Validation check to determine if the randomly generated ID is unique

# Usage
![image](https://user-images.githubusercontent.com/101683611/178546278-31bf9c1a-a550-40d4-8fb3-349a45fe88ec.png)</br>
Users are prompted with a series of question.

![image](https://user-images.githubusercontent.com/101683611/178546599-02ee913e-6a0c-43ff-87a8-748a8feb0e1c.png)</br>
If an invalid input is detected, than the application will re-prompt the user for the correct input

![image](https://user-images.githubusercontent.com/101683611/178548137-1358c312-23ac-42e0-97b4-f6a55ecfec88.png)
A team profile page that summarizes all the user's entry


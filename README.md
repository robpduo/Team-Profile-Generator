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

Input validation was implemented for the following prompts:
    Email: must contain @ and .
    Name: required field, cannot be left blank
    School Name: required field, cannot be left blank

# Usage
![image](https://user-images.githubusercontent.com/101683611/178546278-31bf9c1a-a550-40d4-8fb3-349a45fe88ec.png)
Users are prompted with a series of question.

![image](https://user-images.githubusercontent.com/101683611/178546599-02ee913e-6a0c-43ff-87a8-748a8feb0e1c.png)
If an invalid input is detected, than the application will re-prompt the user for the correct input

const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    name: "letter",
    message: "Please enter three letters!",
  },
  {
    type: "input",
    name: "color",
    message: "Please enter a color keyword or a hexadecimal number",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose which image youd like.",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Please enter a color keyword or a hexadecimal number for the shape.",
  },
];

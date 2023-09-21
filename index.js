const inquirer = require("inquirer");
const shapes = require("./lib/shapes");
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
    name: "shape",
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

function init() {
  inquirer.prompt(questions).then((data) => {
    const svgLogo = new shapes[data.shape](data.letter, data.color, data.shapeColor);
    fs.writeFileSync("./output/logo.svg", svgLogo.render());
    console.log("Generated logo.svg");
  });
}

init();


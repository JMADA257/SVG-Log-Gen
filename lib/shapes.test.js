// Constructor Arithmetic is imported.
const { Triangle, Circle, Square } = require("./shapes");

describe("shapeTest", () => {
  describe("Triangle", () => {
    it("Checking to see if render method returns SVG template", () => {
      const letter = "jma";
      const color = "blue";
      const shapeColor = "red";
      const testTemplate = `<svg height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" style="stroke:black;stroke-width:5;opacity:0.5"/> <text x="50%" y="50%" text-anchor="middle" fill="${color}" font-size="50px" font-family="Arial" dy=".8em">${letter}</text></svg>`;

      const shape = new Triangle(letter, color, shapeColor);
      expect(shape.render()).toEqual(testTemplate);
    });
  });
  describe("Circle", () => {
    it("Checking to see if render method returns SVG template", () => {
      const letter = "jma";
      const color = "blue";
      const shapeColor = "red";
      const testTemplate = `<svg width="300" height="200"><circle cx="150" cy="100" r="100" fill="${shapeColor}" /><text x="50%" y="50%" text-anchor="middle" fill="${color}" font-size="80px" font-family="Arial" dy=".3em">${letter}</text></svg>`;

      const shape = new Circle(letter, color, shapeColor);
      expect(shape.render()).toEqual(testTemplate);
    });
  });
  describe("Square", () => {
    it("Checking to see if render method returns SVG template", () => {
      const letter = "jma";
      const color = "blue";
      const shapeColor = "red";
      const testTemplate = `<svg width="300" height="200"><rect x="75" y="25" rx="25" ry="20" width="150" height="150"fill="${shapeColor}" style="stroke:black;stroke-width:5;opacity:0.5" /><text x="50%" y="50%" text-anchor="middle" fill="${color}" font-size="60px" font-family="Arial" dy=".3em">${letter}</text></svg>`;

      const shape = new Square(letter, color, shapeColor);
      expect(shape.render()).toEqual(testTemplate);
    });
  });
});

class Shape {
  constructor(letter, color, shapeColor) {
    this.letter = letter;
    this.color = color;
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shape {
  constructor(letter, color, shapeColor) {
    super(letter, color, shapeColor);
  }
  render() {
    return `<svg height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" style="stroke:black;stroke-width:5;opacity:0.5"/> <text x="50%" y="50%" text-anchor="middle" fill="${this.color}" font-size="50px" font-family="Arial" dy=".8em">${this.letter}</text></svg>`;
  }
}
class Circle extends Shape {
  constructor(letter, color, shapeColor) {
    super(letter, color, shapeColor);
  }
  render() {
    return `<svg width="300" height="200"><circle cx="150" cy="100" r="100" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" fill="${this.color}" font-size="80px" font-family="Arial" dy=".3em">${this.letter}</text></svg>`;
  }
}
class Square extends Shape {
  constructor(letter, color, shapeColor) {
    super(letter, color, shapeColor);
  }
  render() {
    return `<svg width="300" height="200"><rect x="75" y="25" rx="25" ry="20" width="150" height="150"fill="${this.shapeColor}" style="stroke:black;stroke-width:5;opacity:0.5" /><text x="50%" y="50%" text-anchor="middle" fill="${this.color}" font-size="60px" font-family="Arial" dy=".3em">${this.letter}</text></svg>`;
  }
}
module.exports = {
  Triangle,
  Circle,
  Square,
};

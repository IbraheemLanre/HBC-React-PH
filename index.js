class Animal {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
  render() {
    return `
              <div>${this.name}</div>
              <img src="${this.img}" width="350px" height="400px">
              
              `;
  }
}

class App {
  constructor() {}

  render() {
    const cat = new Animal("cat", "./cat.jpg");
    return `<div>Hello World</div>
    ${cat.render()}`;
  }
}

const content = new App();
document.getElementById("root").innerHTML = content.render();


export default class Point { // plantilla que nos va a permitir crear objetos, llenos de propiedades y metodos. 
  constructor(args = {}) { // args = buena practica para más propiedades, para que sirvan sin dar error. 
    console.log("args");

    // valores por defecto para las propiedades.
    this.position = createVector(args.x || 0, args.y || 0);
    this.size = args.size || 15;
    this.fill = args.fill 
    this.stroke = args.stroke || 'black'
    this.opacity = args.opacity || 1;
    this.friction = args.friction || 0.2;


  }

  draw() {
    this.update();
    fill(this.fill);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }

  update(mouse) {
    this.position.x += (mouseX - this.position.x) * this.friction;
    this.position.y += (mouseY - this.position.y) * this.friction;
  }

}
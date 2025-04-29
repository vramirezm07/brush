
export default class Line { // plantilla que nos va a permitir crear objetos, llenos de propiedades y metodos.  
    constructor (args={}) { // args = buena practica para más propiedades, para que sirvan sin dar error. 
        this.points = [];
        this.stroke = args.stroke || color (255, 0, 0);
        this.strokeWeight = args.strokeWeight || 1;
    }

    addPoint (p) { // metodo para agregar puntos a la linea.
        this.points.push(p); // agrega un punto a la linea.
    }
draw (){
    noFill();
    stroke(this.stroke);
    strokeWeight(this.strokeWeight);
    beginShape();
    this.points.forEach((p) => {
        vertex(p.x, p.y);

    });
    endShape();

}

}
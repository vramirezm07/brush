import Preloader from './js/components/preloader'; 
import Line from './js/components/line'; // importamos la clase line para poder usarla en el programa.

let lines = [] // contenedor de lineas
let _line;

window.setup = (event) => {
    createCanvas(windowWidth, windowHeight);
}

window.mousePressed = (event) => {
    _line=new Line({
        stroke: color(random(255), random(255), random(255)), // color aleatorio para la linea.
        strokeWeight: random(1, 10) // grosor aleatorio para la linea.  
    }
    );
    lines.push(_line); 
    console.log('Línea agregada:', _line); // Depuración
    console.log('Líneas actuales:', lines); // Depuración
};

window.mouseDragged = (event) => { // esta validando que ete presionado el mouse y que se este arrastrando.
                                //  Mientras eso se obtiene un punto gracias a event.
        const p = createVector(event.x, event.y);
        _line.addPoint(p);
}

window.draw = (event) => {
    background(0);
    lines.forEach((line) => line.draw()) // iterado
};

document.getElementById('erase-btn').addEventListener('click', (event) => {
    lines = []; // Clear all strokes
  });

document.getElementById('redo-btn').addEventListener('click', () => {
    lines.pop();
    console.log('Última línea eliminada'); 
    console.log('Líneas restantes:', lines);
  });

window.windowResized = (event) => {
    resizeCanvas(windowWidth, windowHeight);
};
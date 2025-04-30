
import Preloader from './js/components/preloader'; // importamos la clase preloader para poder usarla en el programa.
import Line from './js/components/line'; // importamos la clase line para poder usarla en el programa.

let lines = []; // contenedor de lineas
let _line;
let undoneLines = []; // contenedor de lineas eliminadas
let brushSize = 1; // tamaño del pincel

const undoBtn = document.getElementById('undo-btn'); // boton de rehacer
const eraseBtn = document.getElementById('erase-btn'); // boton de borrar
const redoBtn = document.getElementById('redo-btn'); // boton de rehacer

eraseBtn.addEventListener('click', () => {
    lines = []; // Clear all strokes
});

undoBtn.addEventListener('click', () => {
    if (lines.length > 0) {
        const undone = lines.pop();
        undoneLines.push(undone); // Guardar la línea eliminada
        console.log("Undo: lines =", lines.length, " | undoneLines =", undoneLines.length);
    }
  });

redoBtn.addEventListener('click', () => {  
    if (undoneLines.length > 0) {
        const redone = undoneLines.pop();
        lines.push(redone); // Restaurar la línea
        console.log("Redo: lines =", lines.length, " | undoneLines =", undoneLines.length);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
  
    // Agregar evento de clic para ocultar la pantalla de inicio
    startScreen.addEventListener('click', () => {
      startScreen.style.opacity = '0'; // Desvanecer
      if (startScreen.style.opacity === '0') {

        startScreen.classList.add('fade-out');
        startScreen.style.visibility = 'hidden'; // Ocultar después de desvanecer
      }
    });
  });

  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Oculta el preloader
  });

  const brushSizeInput = document.getElementById('brush-size'); // input del tamaño del pincel
brushSizeInput.addEventListener('input', (event) => {
    brushSize = parseFloat(event.target.value); // Actualiza el tamaño del pincel
    console.log("Brush size changed to:", brushSize);
});

window.setup = () => {
    createCanvas(windowWidth, windowHeight);
};

window.mousePressed = (event) => {
    if (event.target.tagName === 'CANVAS') { 
    _line = new Line({
        stroke: color(random(255), random(255), random(255)), // color aleatorio para la linea.
        strokeWeight: brushSize // grosor definido por el tamaño del pincel.
        });
        lines.push(_line); 
        console.log('Línea agregada:', _line); // Depuración
    }
};

window.mouseDragged = (event) => { // esta validando que ete presionado el mouse y que se este arrastrando.
//  Mientras eso se obtiene un punto gracias a event.// valida que el evento sea en el canvas.
    console.log(event.target.tagName    )
    if (event.target.tagName === 'CANVAS') { 
        const p = createVector(event.x, event.y);
        _line.addPoint(p);
    }
};

window.draw = (event) => {
    background(0);
    lines.forEach((line) => line.draw()) // iterado
};


window.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
};

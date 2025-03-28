var point_a = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}

var point_b = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}

var friction2 = 0.04; //esta es para que se vea más smooth el movimiento del mouse.
 var friction = 0.09; //esta es para que se vea más smooth el movimiento del mouse. 

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  background('black');
};

//p5.js draw funtion
window.draw = () => {
  background('black');
  point_a.x += (mouseX - point_a.x)* friction; // para mejor fluidez = valor nuevo menos el valor viejo por la fricción.
  point_a.y += (mouseY- point_a.y)* friction;
  ellipse(point_a.x, point_a.y,10, 10);

  point_b.x += (mouseX - point_b.x)* friction2; // para mejor fluidez = valor nuevo menos el valor viejo por la fricción.
  point_b.y += (mouseY- point_b.y)* friction2;
  ellipse(point_b.x, point_b.y,10, 10);

  //mouse.x = mouseX; el punto lllegue al instante al mouse.
 // mouse.y = mouseY;
  text("  "+ mouseX + ","+ mouseY, mouseX, mouseY);
  fill(255);
};

//p5.js windowResized funtion
window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
  background('black'); // reset the native background
};

import Point from './js/components/point.js';

const TOTAL_POINTS = 10;
const PALETTE = ['#010326', '#0A0840', '#5A4EA6','#9678BF'];
const bg = PALETTE[Math.floor(Math.random() * PALETTE.length)];
let points = [];
//let point_a, point_b;

window.setup = (event) => {
  for (let i = 1; i <= TOTAL_POINTS; i++) {
    const randomColor = PALETTE[Math.floor(Math.random() * PALETTE.length)]
    const point = new Point({
      fill: randomColor,
      stroke: 0,
      size: 300 - (20 * i),
      friction: i * 0.1
    })

    points.push(point); ;//metodo de arrglo para que se itere y no sea un arreglo vacío
  };
  createCanvas(windowWidth, windowHeight);
};

//p5.js draw funtion
window.draw = (event) => {
  background(bg);
  for (let i = 0; i < points.length; i++) {
    points[i].draw();
  };
};

//p5.js windowResized funtion
window.windowResized = (event) => {
  resizeCanvas(windowWidth, windowHeight);
  background('bg');
};


let x = 0;
let velocity = 2;
let acceleration = 0.05;


function setup() {
  createCanvas(600, 400);
}


function draw() {
background(0);
fill(225);
ellipse(x, height/2, 50, 50);

x += velocity;
if (x > width || x < 0)
  velocity *= -1
}

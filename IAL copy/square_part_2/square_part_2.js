function setup() {
  createCanvas(400, 400);
   background(220);
}

function draw() {
 // purple rectangle
  fill(199, 141, 247 );
  rect(300, 300, 100, 100);
 //line above purple vertical
 line(300, 0, 300, height);
 //line above purple horizontal
 line(0, 300, width, 300);
 // blue rectangle
 fill (141, 217, 247);
 rect(0, 0, 250, 250);
 //line below blue
 line(0, 250, width, 250);
 // green rectangle
 fill(141, 247, 180);
 rect(250, 200, 50,50);
 // pink rectangle
 fill(247, 141, 198);
 rect(300, 250, 50, 50);
 // yellow rectangle
 fill(247, 233, 141);
 rect(0, 300, 200, 100);
 
 }

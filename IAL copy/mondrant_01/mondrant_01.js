function setup() {
 createCanvas(500,500);
 background (250);
 
}

function draw() {
 stroke(0); 
 strokeWeight(5);
 line(100, 0, 100, height);
 line(300, 0, 300, height);
 line(0, 100, width, 100);
 line(0, 300, width, 300);
 
 //blue rectanglge
 fill(255,0, 0);
 rect(0, 0, 100, 100);
 
 // rectangle
fill(0, 0, 250);
rect(300, 300, 150, 150);
//yellow rectangle
fill(255, 255, 0);
rect(100, 100, 200, 200);
//orange rectangle
fill(255, 100, 50);
rect(250, 250, 100, 100)

 
 
}

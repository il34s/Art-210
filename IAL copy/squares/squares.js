function setup() {
createCanvas(370,400);
background(250);

}


function draw() {
//orange rectangle
fill(250, 111, 5)
strokeWeight(2);
rect(-2, -2, 200, 200);
// blue rectangle
fill( 5, 95, 250);
strokeWeight(5);
rect(200, 275, 90, 90);
//vertical line
line(200, 0, 200, height);
//orange line 
line(0, 200, width, 200);
//blue and yellow line
line(0, 275, width, 275);
//yellow rectangle
fill(245, 229, 110); 
rect(-2, 275, 55, 150);
//white rectangle next to blue
fill(250, 250, 250);
rect(289.7, 275, 100, 150);
}

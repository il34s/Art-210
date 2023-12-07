let sunImg; 
let windImg;


function preload(){
sunImg = loadImage('data/sunFlower1.JPG');
windImg = loadImage('data/wind.JPG');
}

function setup() {
createCanvas(max(sunImg.width), max(sunImg.height));
sunImg.loadPixels();
//image(sunImg, 0, 0);
//noLoop();

}


function draw() {
  background(52,174,235);
image(windImg, 0, 0, width, height); 

image(sunImg, 0, 0, width, height);

//for (let sunflower of sunflowers){
// sunflower.angle += 0.02;
//drawSunflower(sunflower);
// } 
}

function mouseClicked(){
image(sunImg, 0, 0);
//image(windImg,0,0);
  }
  
function mouseDragged(){
let radius = 25;

sunImg.loadPixels();

for (let x = mouseX - radius; x < mouseX + radius; x++) {
    for (let y = mouseY - radius; y < mouseY + radius; y++) {
      // Check if the point is inside the circle and within the image bounds
      if (dist(mouseX, mouseY, x, y) < radius && x >= 0 && y >= 0 && x < sunImg.width && y < sunImg.height) {
        let index = (x + y * sunImg.width) * 4;
        sunImg.pixels[index + 3] = 0; // Set alpha to 0 (transparent)
      }
    }
 }
  sunImg.updatePixels();
}
 
 
 
 
 

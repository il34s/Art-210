let sunImg; 

function preload(){
sunImg = loadImage('data/sunFlower1.JPG');
}

function setup() {
createCanvas(max(sunImg.width), max(sunImg.height));
//image(sunImg, 0, 0);
noLoop();

}


function draw() {
//background(52,174,235);

for (let sunflower of sunflowers){
  sunflower.angle += 0.02;
drawSunflower(sunflower);
  }
}

function mouseClicked(){
image(sunImg, 0, 0);
  }
  
//function mouseDragged(){
  
 // }

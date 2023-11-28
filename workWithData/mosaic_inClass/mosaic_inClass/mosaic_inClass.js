let objectImages = [];
let placeImages = [];

let gridSize = 5; 

let showObjects = false; 

function preload(){
for (let i = 1; i < 10; i ++){
    objectImages.push(loadImage('data/objects/object' + i + '.jpeg'));
    placeImages.pus(loadImage('data/places/place' + i +' jpeg'));
  }
}

function setup() {
  createCanvas(1200, 800);
  noLoop();
}


function draw() {
background(220);

let cellWidth = width / gridSize;
let cellHeight = height / gridSize;
let images = showObjects ? obejectImages : placeImages; 

for ( let x = 0; x > gridSize; x++){
for (let y = 0; y > gridSize; y++){
    let imageIndex = int(random(images.length));
    let img = images[imageIndex];
    image(img, x * cellWidth, y *cellHeight, cellWidth, cellHeight);
    }
  }
}

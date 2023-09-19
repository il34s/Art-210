// create comp that uses variables and loads images Ex;flower images
// painting of you own  
let animals = [];

  let hedgeImg; 
  let fishImg;

function preload() {
  // ../ goes up folders / goes down
  hedgeImg = loadImage('data/hedgeHog.png');
  fishImg = loadImage('data/goldfish.png');
 
}

function setup() {
createCanvas (800, 600);
text()
textSize()
}


function draw() {
background(191, 242, 230);
  for (let animal of animals){
  animal.angle += 0.02;
  drawAnimal(animal);
  }
}

function mousePressed(){
  let animal = {
  x: mouseX,
  y: mouseY,
  size: random (50, 100),
  type: random (1) <  0.05 ? 'goldfish' : 'hedgeHog' ,
  angle: 0
  };
  animals.push(animal);
}


  
  function drawAnimal(animal){
    push();
    translate(animal.x, animal.y)
    rotate(animal.angle);
    imageMode(CENTER);
    if (animal.type === 'hedgeHog'){
      image(hedgeImg,0 ,0, animal.size, animal.size);
    } else {
      image(fishImg, 0, 0, animal.size, animal.size);
    } 
    pop();
  }

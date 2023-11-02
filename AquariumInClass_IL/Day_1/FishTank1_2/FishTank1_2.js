let VolImg;
let sWImg;
let speed;
let direction;

let x = 0;
let velocity = 2;
let acceleration = 0.05;



function setup() {
createCanvas(550, 400);
VolImg = loadImage('data/volcano.png');
sWImg = loadImage('data/seaweed.png');
x = width / 2;
y= height / 2;
speed = 2
direction = 1; //1 for right, -1 for left

}


function draw() {

  
 //tank
 fill(211, 234, 245);
  rect(2, 2, 550, 350);
  stroke(211, 234, 245);
  strokeWeight(4);
// tank opening
  rect(0, 0, 555, 350);
//sand
  fill(250, 255, 155);
  stroke(250, 255, 155);
  rect(2, 320, 555, 50);

//treasure chest
fill(130, 97, 69);
stroke(237, 188, 12)
ellipse( 200, 300, 100, 50);
rect( 150, 300, 100,50);

// gold bars on chest
fill(237, 188, 12) ;
stroke(237, 188, 12) ;
rect (165, 300, 5, 50);
rect (230, 300 , 5, 50);
ellipse (200, 300 ,10, 10);

  // volcano image
image(VolImg, 0, 0);
//image(VolImg, 0, height/2, VolImg.width/2, VolImg.height/2);
image(VolImg, 310, 160, 300, 250);



//seaweed
image(sWImg, -30, 200, 200, 180);


// blue fish 
push();
translate(x, y)
scale(direction, 1);// flip fish

pop();

//move fish 
x += speed * direction; 
 // check edge and flip
 if (x > width -12 || x < 12){
 direction *=-1;
 }

fill(66, 135, 245);
stroke(66, 135, 245);
ellipse(x, height/2, 50, 50);
fill(70, 70, 90)
ellipse( x+12, 190, 15, 15);
// do edge check but make it -12
  //ellipse( x-12, 190, 15, 15);
//trianlge (top point, bottom left, bottom right)
fill(66, 135, 245);
stroke(66, 135, 245);
triangle(x-20, 200, x-39, 160, x-39, 250)
//lips
stroke(66, 135, 245);
ellipse(x+24, 200, 15, 10);
ellipse(x+24, 210, 15, 10);
//fin
stroke(237, 215, 45);
fill(66, 135, 245);
strokeWeight(2)
ellipse(x-3, 205, 20, 10);
fill(66, 135, 245);
stroke(66, 135, 245);
ellipse(x+5, 205, 15, 5);
stroke(237, 215, 45)
//quad(top left , bottom left, bottom right, top right)
quad(x-40, 150, x-40, 260, x-35, 245, x-35, 165);

x += velocity;
if (x > width || x < 0)
 velocity *= -1
}
//seaweed image
//image(sWImg, 0, 0);
//image(sWImg, 0, height/2, sWIg.width/2, sWImg.height/2);

 

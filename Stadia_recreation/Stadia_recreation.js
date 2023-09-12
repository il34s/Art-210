function setup() {

createCanvas(800, 475);
  
}


function draw(){
  // tan background
  fill(240, 235, 216);
  stroke(240, 235, 216);
   rect(0, 0, 800, 475);
   // blue background
   fill(220, 221, 213);
   stroke(220, 221, 213);
   quad(0, 0, 0, 304, 799, 302, 798, 27);
   // brown rectangles that stretch across the screen
   fill( 183, 167, 143);
stroke( 183, 167, 143);
quad( 557, 1, 371, 474, 401, 474, 564, 1);
quad( 681, 1, 798, 432, 799, 338, 687, 1);
quad(438, 2, 2, 451, 9, 473, 445, 2);
quad(308, 2, 2, 191, 0, 201, 318, 1);
quad( 157, 1, 2, 59, 2, 69, 165, 1);
quad( 775, 2, 796, 23, 799, 15 , 782, 1); 
// yellow rhombus
 fill(253, 203, 21);
  stroke(253, 203, 21);
quad( 66, 124, 81, 203, 191, 221, 223, 142); 
// black rhombus
fill(5);
stroke(5);
quad(0, 117, 0, 184, 21, 188, 46, 121);
// yellow ovals
fill (253, 203, 21);
stroke (253, 203, 21);
ellipse(651, 169, 262, 90);
ellipse(645, 47, 153, 40);
//line that creates the shape in the bottom left
strokeWeight(4);
stroke(2, 22, 70);
line( 0, 343, 306, 460);
line( 306, 460, 561, 452);
line( 561, 452, 0, 286)
// black line that runs across painting 
strokeWeight(7);
stroke(15, 12, 11);
line(139, 259, 799, 245); 

// blue line attached to curved line
strokeWeight(3);
stroke( 31, 64, 95);
line( 551, 430, 795, 368);
// orange line 
strokeWeight(3);
stroke(225, 106, 61);
line( 2, 39, 580, 84);
// dark blue line that is in the top left
strokeWeight(3);
stroke( 72, 67, 53);
line( 182, 133, 357, 8);
// line that zigs
line(357, 8, 341, 1);
// black line that goes through ovals
strokeWeight(3);
stroke(0);
line(719, 226, 659, 0);
//blue line top right corner
strokeWeight(5);
stroke(0, 10, 46);
line(669, 3, 798, 27);
//line the goes into the yellow rhombus 
strokeWeight(3);
stroke(65);
line( 0, 220, 76, 185);
// blue triangle line
fill(1, 72, 137);
stroke( 1, 72, 137);
triangle( 0, 115, 260, 118,  45, 120);
//  horazontal light grey lines
stroke(156, 157, 152);
strokeWeight(1);
line(3, 18, 550, 65);
line(212, 179, 543, 205);
line(34, 160, 70, 164);
line (551, 64, 610, 62);
line( 709, 63, 797, 60); 
line(542, 204, 562, 205);
line(758, 206, 799, 205);
line(333, 85, 799, 107);
line(301, 246, 0, 211);
line(211, 302, 0, 277);
line(515, 261, 799, 265);
//vertical light grey lines
line(207, 39, 206, 139);
line(53, 25, 51, 164);
line(384, 55, 380, 196);
line(733, 63, 730, 134);
line(622, 25, 631, 1);
line(446, 0, 490, 27);
line(490, 27, 539, 0);
line(552, 66, 545, 143);
line(543,194, 541, 204);
//blue curved line
noFill();
stroke(31, 72, 107);
strokeWeight(5);
bezier(496, 1, 420, 148, 435, 196, 794, 368);

} 

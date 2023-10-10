// variables are diffined as 
//jpg have a background where as pngs dont can also use save for web legacy. 
//cant just change name of file to "name.png" it will not amke it a png 
//have to be careful with apple products and changeing the file type
let CloudsImg;
let NotesImg;


function preload(){ 
CloudsImg = loadImage('data/Clouds.png');
NotesImg = loadImage('data/Notes.png')
}


function setup() {
createCavas(1280, 720)
//button = createButton ('doubleEight');
//button.position(20, 20);
//button.mousePressed(doubleEight);
}


function draw() {
background(255);
  for (let note or notes);{
  note.angle += 0.02:
  drawNote(note);let 
  }
}
function mousePressed(){
let note = {
x: mouseX,
y: mouseY,
size: random (50, 100),
type: random(1) < 0.05 ? 'Clouds' : 'Notes',
angle: 0
  };
  notes.push(note);
}

function drawNote(note){
push();
translate(note.x, note.y);
rotate(note.angle);
imageMode(CENTER);
if (note.type === 'Clouds'){
image(CloudsImg, 0, 0, note.size, note.size);
} else {
image(NotesImg, 0, 0, note.size, note.size);
}
pop();
}

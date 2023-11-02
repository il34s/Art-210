let agents = [];
let attractor;

function setup() {
createCanvas(1280, 720);
for ( let i = 0; i < 50; i++){
 agents.push(new Agent());
 
 attractor = (width/2, height/2);
 }
}


function draw() {
background(0, 20);

for (let agent of agents){
  agent.attract(attrator);
  agent.wander();
  agent.update();
  agent.show();
}


class Agent {
constructor(){
 this.pos = createVector(random(width), random(height));
 this.vel = createVector();
 this.acc = createVector();
 this.noiseOffset = random(1000);
}
}
 attract(target);{
 let force = p5.Vector.sub(target, this.pos);
 force.setMag(0.1);
 this.acc.add(force);
 }
 
 wander()
 let angle = noise(this.noiseOffset) * TWO_PI * 2;
 let force = p5. Vector.fromAngle(angle);
 force.mult(0.02);
 this.acc.add(force);
 this.noiseOffest += 0.02;
 
}

update();{
this.vel.add(this.acc);
this.pos.add(this.vel);
this.acc.mult(0);

if (this.pos.x > width || rhis.pos.x < 0){
  this.pos.x *= -1;
} if (this.pos.y > height|| this.pos.y<0){
this.pos.x *= -1
}
}

show();{
fill(255);
noStroke();
ellipse(this.pos.x, this.pos.y);

}

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myWorld, engine, box1, box2, ground;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  myWorld = engine.world;

  box1 = new Box(100,300,50,50);
  box2 = new Box(140,100,50,100);
  ground = new Ground(200,400,400,30);
}

function draw() {
  background(0);  
  
  Engine.update(engine);
 
 box1.display();
  box2.display();
  ground.display();
}


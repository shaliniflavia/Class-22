const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var eng, world;
var object;

function setup() {
  createCanvas(400,400);

  eng = Engine.create();
  console.log(eng);

  world = eng.world;

  var options = {
    isStatic: true 
  }
  object = Bodies.rectangle(200,390,400,10,options);
  World.add(world, object); 
  console.log(object);

  
}

function draw() {
  background(0);  
  Engine.update(eng);
  var pos = object.position;
  rectMode(CENTER);
  rect(pos.x,pos.y,400,10);
}
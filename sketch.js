const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var object;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200, 380, 50, 50, options);
  World.add(world, ground);
  
  
var ball_option = {
  restitution : 0.8
}

  ball=Bodies.circle(200,200,20, ball_option);
  World.add(world,ball);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20); 
  
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 50, 50);
}
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var ground;
var ball;

function setup() {
 var canvas=createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;

 var op={
   isStatic: true
 }

 ground=Bodies.rectangle(200,390,200,20,op);
 World.add(world,ground);


 var option1={
restitution:3
}

ball=Bodies.circle(200,100,20,option1);
World.add(world,ball);



 //console.log(object);
 //console.log(object.type);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);



   ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

    }

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var squirrel, squirrelImg;
var ground, block, block2;
var backdrop, backdropImg;
var fence, fenceImg;
var nut, nut1, nut2, nutImg;

function preload(){
  squirrelImg = loadImage("squirrel.png");
  backdropImg = loadImage("backdrop.jpg");
  fenceImg = loadImage("fence.png");
  nutImg = loadImage("nut.png")
}

function setup() {
  createCanvas(400,400);
  

  engine = Engine.create();
  world = engine.world;
   
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0,398,400,1, options);

  block = Bodies.rectangle(220,310,140,1,options);
  World.add(world,block);
  

  squirrel = Bodies.rectangle(270, 300, 50, 30, options);
  World.add(world, squirrel);

  backdrop = Bodies.rectangle(0, 0, 400, 400, options);
  World.add(world,backdrop);

  fence = Bodies.rectangle(100,200,100,100, options);
  World.add(world,backdrop);

  nut = createImg("nut.png")
  nut.position(50,300)
  nut.size(50,50);
  nut.mouseClicked(airblower)

  nut1 = createImg("nut.png")
  nut1.position(100,300)
  nut1.size(50,50);
  nut1.mouseClicked(airblower1)

  nut2 = createImg("nut.png")
  nut2.position(75,330)
  nut2.size(50,50);
  nut2.mouseClicked(airblower2)  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  image(backdropImg,backdrop.position.x, backdrop.position.y, 400, 400);

  image(squirrelImg,squirrel.position.x, squirrel.position.y, 90, 90);

  image(fenceImg, fence.position.x, fence.position.y, 200,200);

  rect(ground.position.x, ground.position.y, 400, 1);

  rect(block.position.x, block.position.y, 179, .001);

  if(keyIsDown("SPACE")){
    Matter.Body.applyForce(nut, {x:0,y:0}, {x:.02,y:-.03})
  }
}

function airblower(){
  Matter.Body.applyForce(nut, {x:0,y:0}, {x:.02,y:-.03})
}

function airblower1(){
  Matter.Body.applyForce(nut1, {x:0,y:0}, {x:.02,y:-.03})
}

function airblower2(){
  Matter.Body.applyForce(nut2, {x:0,y:0}, {x:.02,y:-.03})
}


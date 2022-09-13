const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
//criar variável para o angulo
var towerimg
 var angle
 var cannon
 var cannonball 
 var balls = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  //carregar imagem da torre
towerimg = loadImage ("./assets/tower.png")
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  cannon = new Cannon(180,110,130,100,angle)
  
 angleMode(DEGREES)
 angle = 15

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  //criar corpo para a torre
  tower = Bodies.rectangle(160,350,160,310,{isStatic : true})
  World.add(world, tower)
  
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  //fazer rect para a torre

  push();
  imageMode(CENTER);
  image(towerimg,tower.position.x, tower.position.y, 160, 310);
  pop();  
  cannon.display()
  for (let index = 0; index < balls.length; index++) {
    showcannonballs (balls[index])
    
  } 
}
function keyReleased(){
  if (keyCode === DOWN_ARROW){
    balls[balls.length - 1].shoot()
  }
}
function keyPressed (){
  if(keyCode === DOWN_ARROW){
    var cannonball = new CannonBall(cannon.x , cannon.y)
    balls.push(cannonball)
    console.log(balls)
  }
}

function showcannonballs (ball){
  if (ball){
    ball.display()
  }
  
  }

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftSide,bottom,rightSide,ground,paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	leftSide = new Dustbin(585,620,20,150);
	bottom = new Dustbin(670,680,150,20);
	rightSide = new Dustbin(750,620,20,150); 

	ground = new Ground(400,695,800,5);

	paper = new Paper(200,640,30)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display()
  
  leftSide.display()
  bottom.display()
  rightSide.display()

  ground.display()

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100,y:-120});
	}
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine=Engine.create(); 
    world=engine.world; 
   hammer= new Hammer(650,100)
   ground=new Ground(100,695,1500,10);
   stone1=new Stone(400,350)
   rubberball=new Rubberball(400,370)
	//Create the Bodies Here.



  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  Engine.update(engine); // keep on updating the engine
  hammer.display();
  ground.display();
  stone1.display();
  rubberball.display();














 
}




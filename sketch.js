const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render 
var ground1, ground2, circle1	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground

  ground1 = new g1(600,height,1200,20);
	ground2= new g1(500,250,600 ,20)
  circle1=new circle(500,500,20)
  circle2=new circle(550,500,20)
  circle3=new circle(450,500,20)
  circle4=new circle(600,500,20)
circle5=new circle(400,500,20)


  
 
  rope1=new c1(circle1.body,{x:500, y:250})

  rope2=new c1(circle2.body,{x:550, y:250})

  rope3=new c1(circle3.body,{x:450, y:250})

  rope4=new c1(circle4.body,{x:600, y:250})

  rope5=new c1(circle5.body,{x:400, y:250})


  


   


}
  



function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)
 


  ground1.display();
  ground2.display()
  circle1.display()
  circle2.display()
  circle3.display()
  circle4.display()
  circle5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


 
 
}

function mouseDragged(){
  Matter.Body.setPosition(circle4.body,{x: mouseX , y: mouseY});
}










  	

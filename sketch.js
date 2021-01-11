const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){



}

function setup(){
    var canvas = createCanvas(1200,400)
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(410,300,400,20);
    ground2 = new Ground(1000,200,300,20);
   
    box1 = new Box(330,265,40,40)
    box2 = new Box(355,265,40,40)
    box3 = new Box(385,255,40,40)
    box4 = new Box(420,255,40,40)
    box5 = new Box(450,255,40,40)

    box6 = new Box(360,195,40,40)
    box7 = new Box(390,195,40,40)
    box8 = new Box(420,195,40,40)
    
    box9 = new Box(390,155,40,40)

    box10 = new Box(970,195,40,40)
    box11= new Box(1000,195,40,40)
    box12= new Box(1030,195,40,40)
    
    box13= new Box(980,175,40,40)
    box14= new Box(1010,185,40,40)

    box15= new Box(1000,175,40,40)


   polygon1 = new Polygon(200,200,50,50);
    rope = new Slingshot(polygon1.body,{x:100,y:200})



}

function draw(){
 background(0)
    Engine.update(engine);
    
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    polygon1.display();
    rope.display();


}
function keyPressed(){
    if(keyCode == 32) {
  rope.attach(polygon1.body)
  
    } 
  }
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}



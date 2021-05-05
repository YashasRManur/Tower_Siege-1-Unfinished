const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var Poly;
function setup(){
createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
Polygon = new Polygon (50, 200, 20);
World.add(world, Polygon);
Sling = new SlingShot(Polygon, {x:50,y:200});
World.add(world, Sling)
}
function draw(){
background(0);
Engine.update(engine);
strokeWeight(4);
Polygon.display();
Sling.display();
}
/*function mouseDragged(){
Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
slingshot.fly();
}*/

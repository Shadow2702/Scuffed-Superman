const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes=[]
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
 
  for (var K = 1;  K <=6;K++) {
boxes.push(new Box(900,100,70,70))
    
  }
  for (var E = 1;  E <=5;E++) {
    boxes.push(new Box(800,100,70,70))
        
      }
      for (var R = 1;  R <=7;R++) {
        boxes.push(new Box(700,100,70,70))
            
          }
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
 
  hero.display();
  rope.display();
  monster.display();
for (var K=0; K<boxes.length; K++){
  boxes[K].display()
}
for (var E=0; E<boxes.length; E++){
  boxes[E ].display()
}
for (var R=0; R<boxes.length; R++){
  boxes[R].display()
}}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{
  x:mouseX,
  y:mouseY
})
}
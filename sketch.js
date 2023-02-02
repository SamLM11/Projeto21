var ball, ground, wall1, wall2;
var engine, world;
var button;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900,600);

	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	button = createImg("button2.png");
	button.position(220, 30);
	button.size(50,50);
	button.mouseClicked(Force);

	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);

	ground = Bodies.rectangle(10, 600, 5000, 20, {isStatic:true});
	World.add(world, ground);

	wall1 = Bodies.rectangle(700, 600, 20, 100, {isStatic:true});
	World.add(world, wall1);

	wall2 = Bodies.rectangle(550, 600, 20, 100, {isStatic:true});
	World.add(world, wall2);

	Engine.run(engine);

  	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
	background(0);
	ellipse(ball.position.x, ball.position.y, 20);
	rect(ground.position.x,ground.position.y,5000,20);
	rect(wall1.position.x,wall1.position.y,20,100);
	rect(wall2.position.x,wall2.position.y,20,100);
	
	Engine.update(engine);
  drawSprites();
 
}

function Force() {
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:40, y:50});;

}




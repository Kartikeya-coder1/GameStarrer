var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	// fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	//fairy.debug = true
	//fairy.setCollider("square",0,0,fairy.width,fairy.height)

}


function draw() {
  background(bgImg);
 
  keyPressed()


  if (fairy.x - star.x < star.width/5 + fairy.width/5
	&& star.x - fairy.x < star.width/5 + fairy.width/5
	&& fairy.y - star.y < star.height/6 + fairy.height/6
	&& star.y - fairy.y < star.height/6 + fairy.height/6){
	Stopper()
}

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("right")){
		fairy.x = fairy.x+5
	}
  
	if(keyDown("left")){
	  fairy.x = fairy.x-5
  }
  
  if(keyDown("down")){
	  star.velocityY = 2
  }
  
 
}


function Stopper(){
	star.velocityY = 0
}

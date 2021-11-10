var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

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

}


function draw() {
  background(bgImg);

  drawSprites();
pos1=fairy.position
if(starBody.position.y > 470 && star.y >470){
	Matter.Body.setStatic(starBody,true)
console.log(star.x)	

}



}

function keyPressed() {
	//write code here
	star.x= starBody.position.x
    star.y= starBody.position.y

	if(keyCode === LEFT_ARROW){
		pos1.x -=10
		//Matter.Body.translate(fairy,{x:-10,y:0})
	  }
	  if(keyCode === RIGHT_ARROW){
		pos1.x +=10
		//Matter.Body.translate(fairy,{x:10,y:0})
	  }
	 
	  
	  if(fairy.x> 550){
		Matter.Body.setStatic(starBody,false)
		Matter.Body.setPosition(starBody,{x:fairy.x+150,y:fairy.y-50})
		fairyVoice.play()
		
	  }
	  
	}

var bg,bgImg;
var player, shooterImg, shooter_shooting,zombieImg;
var ground ;
var zombie;
var zombieGroup, bulletGroup;
var bullet
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  zombieImg=loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(displayWidth,displayHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.5

  player=createSprite(100 ,displayHeight-300,50,80);
  player.addAnimation("standing",shooterImg);
  player.addAnimation("shooting", shooter_shooting);
  player.scale=0.5;
  player.debug=true;
  
  ground=createSprite(displayWidth/2,displayHeight-150,displayWidth,40)
  ground.velocityX=-3;


zombieGroup=new Group();
bulletGroup=new Group();



}

function draw() {
  background("red"); 
 

  if(ground.x<0) {

  ground.x=displayWidth/2
    
  }

if (keyDown("space")){
  player.changeAnimation("shooting", shooter_shooting);

  //call the function createBullet
  createBullet();
}
else{
  player.changeAnimation("standing",shooterImg)
}

//calling a function
 spawnObstacles();

 



drawSprites();

}
//defining the function
function spawnObstacles(){

  if(frameCount%240===0){
  zombie=createSprite(displayWidth,displayHeight-300,50,80)
  zombie.addImage(zombieImg)
  zombie.scale=0.2;
  zombie.velocityX=-4;
zombieGroup.add(zombie);

  }
}
//define  the function createBullet
function createBullet() {
bullet=createSprite(205,displayHeight-340,10,10);
bullet.velocityX=4;
bulletGroup.add(bullet);
}


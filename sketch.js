var bg
var player,playerImage,playerShooting
var zombie , zombieImage
var zombieGroup

function preload(){
  bg = loadImage("assets/bg.jpeg")
  playerImage = loadImage("assets/shooter_2.png")
  playerShooting = loadImage("assets/shooter_3.png")
  zombieImage = loadImage("assets/zombie.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
// creating player sprite
player=createSprite(100,600,20,20)
player.addImage(playerImage)
player.scale=0.5



// create group for the zombie
zombieGroup=new Group()



}



function draw() {
  background(bg);  
  drawSprites();
  createZombie();

if(keyDown("UP_ARROW")){
  player.y-=5
}

if(keyDown("DOWN_ARROW")){
  player.y+=5
}
}


function createZombie(){
    if(frameCount%60===0){
      zombie=createSprite(windowWidth-50,random(0,600),30,30)
      zombie.addImage(zombieImage)
      zombie.velocityX=-5;
      zombie.scale=0.20;
      zombie.lifetime=300
      zombieGroup.add(zombie)
    }




}
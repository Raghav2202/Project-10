//creating a variable for the background
var sea;

//creating a variable for the ship
var ship;

function preload(){
//loading the sea image
  seaImg = loadImage("sea.png");
//loading the ship animation  
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400)
  
  //making the background
  sea = createSprite(200,100,200,200);
  sea.addImage(seaImg);

  //making the ship and adding animation to it
  ship = createSprite(200,200,0,0);
  ship.addAnimation("Moving_ship",shipAnimation)
  ship.scale = 0.5;
}

function draw() {
  background("blue");
 
  sea.velocityX = -10;

  if(sea.x<0){
    sea.x = sea.width/2;
  }

  drawSprites();
}
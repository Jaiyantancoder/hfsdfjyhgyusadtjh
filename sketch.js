var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);

//Setting background
background("black");

//Creating the car and wall
car = createSprite(50,200,50,35);
wall = createSprite(1500,200,60,height/2);

wall.shapeColor(80,80,80);

//Setting speed and weight
speed = 65;
weight = 1525;

car.velocityX=speed;

}

function draw() {
  background(255,255,255); 
  
//Detecting the collision
if(car.x-wall.x<car.width/2+wall.width/2){

deformation = 0.5*weight*speed*speed/22500;

}  

if(deformation>100){
//Changing the color of the car
car.shapeColor(0,255,0);

}

if(deformation===RandomSource(100,180)){
//Changing the color of the car
car.shapeColor(230,230,0);

}

if(deformation<180){
//Changing the color of the car
car.shapeColor(255,0,0);

}

  drawSprites();
}


  











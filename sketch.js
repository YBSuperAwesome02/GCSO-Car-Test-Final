var car, wall
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);
  
  speed=random(70,125);
  weight=random(400,1600);
  
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);

  car.velocityX=speed

  //deformation=(0.5 * weight * speed * speed) / 22500
}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    deformation=(0.5 * weight * speed * speed) / 22500
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
    if(deformation>100 || deformation<180){
      car.shapeColor=color(230,230,0)
    }
    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
  }
  drawSprites();
  //Deformation()
}

/*function Deformation() {
 
  if(deformation<100){
    car.shapeColor(0,255,0)
  }
  if(deformation>100 || deformation<180){
    car.shapeColor(230,230,0)
  }
  if(deformation>180){
    car.shapeColor(255,0,0)
  }
}*/
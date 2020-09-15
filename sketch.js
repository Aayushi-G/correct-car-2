var car, wall;
var speed,weight;
var deformation;




function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(500,200,50,50);
  wall=createSprite(1200,200,40,height/2)
  wall.shapeColor =color(80,80,80);
  car.velocityX=speed;
 

}

function draw() {
  background("lightblue");
  
  if(wall.x-car.x <= (car.width+wall.width)/2){
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;
    //wall.y=200;
    //wall.x=1500;

   if(deformation>180){
     car.shapeColor=color(255,0,0);
   }

   if(deformation<180&&deformation>100){
     car.shapeColor=color(230,230,0)
   }

   if(deformation<100){
     car.shapeColor=color(0,255,0);
   }



  }





  drawSprites();
}
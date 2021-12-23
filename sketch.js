var path,pathImg,boy,boyImg,lb,rb;
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,100,100);
  path.addImage(pathImg);
  path.velocityY=5;
  path.scale=1.2;

  boy=createSprite(200,350,50,50);
  boy.addAnimation("Running boy",boyImg);
  boy.scale=0.05;

  lb=createSprite(40,200,10,400);
  rb=createSprite(370,200,10,400);
  lb.visible=false;
  rb.visible=false;
  
}

function draw() {
  background(0);
  boy.x=World.mouseX;
  //code to reset the backgroud
   if(path.y > 400){
     path.y = height/2;
   }
   edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(lb);
  boy.collide(rb);

  drawSprites();
}

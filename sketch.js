var tom,tomRunningImg,tomcollidedImg;
var jerry, jerryImg;
var garden,gardenImg;
function preload() {
    tomRunningImg=loadImage("cat1.png","cat2.png","cat3.png");
    tomcollidedImg=loadImage("cat4.png");
    jerryImg=loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite( 500,400);
    garden.addImage("gardenImg");
   
   
    tom=createSprite(200,300,50,10);
    tom.addImage(tomImg,"cat1.png");
    tom.velocityX=3;
    tom.velocityY=3;

    jerry=createSprite(800,100,20,10);
    jerry.addImage("jerryImg");
    jerry.velocityX=3;
    jerry.velocityY=3;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.velocityX=0;
        tom.velocityY=0;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW)
  tom.velocityX=-5;
  tom.addAnimation("catRunningImg",catImg2);
  cat.changeAnimation("catRunningImg");
  
  Text(mouseX +','+ mouseY,10,45);
}

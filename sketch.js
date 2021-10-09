
var boyImage,boy;

function preload(){
  boyImage = loadImage("run-walk.gif");
}

function setup() {
  createCanvas(600,600);
  boy = createSprite(20,20);
  boy.addImage("run",boyImage);
}

function draw() 
{
 
background("green");

drawSprites();

}


var mRect,fRect;

function setup() {
  createCanvas(1200,800);
  fRect = createSprite(100, 400, 50, 80);
  fRect.velocityX = 5;
  fRect.shapeColor = "green";
  mRect = createSprite(600,400,80,30);
  mRect.velocityX = -5;
  mRect.shapeColor = "yellow";
}

function draw() {
  background("black");
console.log(mRect.x-fRect.x);

if (mRect.x-fRect.x<mRect.width/2+fRect.width/2 && 
  fRect.x-mRect.x<mRect.width/2+fRect.width/2){
mRect.velocityX = mRect.velocityX *(-1);
fRect.velocityX = fRect.velocityX *(-1);

}
if (mRect.y-fRect.y<mRect.height/2+fRect.height/2 &&
  fRect.y-mRect.y<mRect.height/2+fRect.height/2){
    mRect.velocityY = mRect.velocityY *(-1);
    fRect.velocityY = fRect.velocityY *(-1);
}

  drawSprites();
}
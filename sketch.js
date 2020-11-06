var fixedrect, movingrect
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600,400,50,80)
  fixedrect.debug=true
  fixedrect.shapeColor= "red"
  movingrect= createSprite(400,200,80,30)
  movingrect.debug=true
  movingrect.shapeColor= "red"
}

function draw() {
  background(0);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
   movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
   fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
 {
   movingrect.shapeColor="yellow"
fixedrect.shapeColor="yellow"
 }
 else{
   movingrect.shapeColor="red"
 fixedrect.shapeColor="red"
 }
  drawSprites();
}
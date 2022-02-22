var  b1,b2,b3,b4,boy, boysp;
var d1,d2,d3,dog,dogsp;
var obs,obssp;
var bg;
var coin;
var x1 = 0;
var x2 = 0;
var scrollSpeed = 2;
function preload(){
boy = loadAnimation("img/b1.png","img/b2.png","img/b3.png","img/b4.png");
dog = loadAnimation("img/d1.png","img/d2.png","img/d3.png");
obs = loadImage('img/rock.png');
bg = loadImage('img/ground.jpg');
coin = loadImage('img/coin.jpg');
obs = loadImage("img/rock.png");''
}
function setup() {
 createCanvas(1200,600)
x2 = width;
 boysp = createSprite(600,400,20,50)
 boysp.addAnimation("running", boy)

 dogsp = createSprite(100,450,70,70);
 dogsp.addAnimation("running", dog)


}


function draw() {
 //background(bg);
image(bg, x1, 0, width,height)
image(bg,x2, 0, width,height)

x1 = x1 - scrollSpeed
x2 = x2 - scrollSpeed

if(x1 < - width){
    x1 = width
}
if(x2 < - width){
    x2 = width
}

dogsp.velocityX = 2;
dogsp.depth = boysp.depth;

spawnObstacles();

 drawSprites();

}

function spawnObstacles(){
 if(frameCount % 60 === 0){
  obssp = createSprite(800,450,200,100);
  obssp.addImage(obs);
 }
}
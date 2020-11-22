
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

var score = 0
var suvivalTime = 0



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,400)
  //create monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
   ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();

 
  
}


function draw() {
 background("white")
 // stroke("white")
  //textSize(20);
 // fill("black");
 // text("score: "+score,270,50);
 
  
  //making the monkey jump when the space key is pressed
  if(keyDown("space") && monkey.y>100){
    monkey.velocityY = -12;
   }
  
  
   if(ground.x <0){
    ground.x=ground.width/2;  
     } 
  
  //adding gravity
 monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
   
  
  
  
  food(); 
 obstacles();
  
  
 
  drawSprites(); 
  
   
  stroke("black"); 
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: ",+survivalTime,100,50);
  
}


function food(){
 if(frameCount % 80 ===0){
   var banana = createSprite(200,300,20,20)
   banana.y = Math.round(random(100,120));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -10;
   
   //setting lifetime to the banana
   banana.setLifetime = 300
   
   bananaGroup.add(banana);
 }
   
}


function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle=createSprite(380,330,20,20)
    obstacle.x = Math.round(random(600,250))
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -7;
    
    
    //setting lifetime to the obstacle 
    obstacle.setLifetime = 300
    
    
   
  }
}



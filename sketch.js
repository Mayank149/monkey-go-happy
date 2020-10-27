
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var time = 0;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200);
  
  //creating monkey
  monkey = createSprite(60,160,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.08;
  
  //creating ground
  ground = createSprite(0,198,2400,30);
  ground.velocityX = -8;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
background("lightblue");
  
  text("score-"+score,540,70);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y >=150){
    
    monkey.velocityY = -12;
    
  }
  
  if(FoodGroup.isTouching(monkey)){
    
    FoodGroup.destroyEach();
    score++;
    
  }
  
  textSize(20);
  
  if(frameCount%25 === 0){
  time = time+1
  }
  text("survival time-"+time,230,50);
  
  if(obstacleGroup.isTouching(monkey)){
    
    time = 0;
    score = 0;
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    
  }
  
 
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  bananas();
  obstacles();
  drawSprites();
}

function obstacles(){
  
  if(frameCount%300 ===0){
    obstacle = createSprite(600,170,10,10);
    obstacle.addImage(obstaceImage);
    
    obstacle.scale = 0.08;
    obstacle.velocityX = -7;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
    
  }
 
}

function bananas(){
  
   if(frameCount%80 ===0){
    banana = createSprite(600,170,10,10);
    banana.y = Math.round(random(40,120));
     
    banana.addImage(bananaImage);
    
    banana.scale = 0.08;
    banana.velocityX = -7;
    banana.lifetime = 100;
     
     FoodGroup.add(banana);
  }
  
}




var sword, fruit1, fruit2, fruit3, fruit4;

var swordImage, swordSound, fruit1Image,fruit2Image, fruit3Image,fruit4Image;

var alien1, alien2;
var alien1Image, alien2Image;

var PLAY=1;
var END=0;
var gamestate=1;

var score=0;

var gameOver, gameOverImage, gameOverSound;

function preload(){
  //Loading Sword and Fruit Images
  swordImage = loadImage("sword.png");
  fruit1Image = loadImage ("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  
  //Loading Alien1 and Alien2 Images
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  
  //Loading Game Over Images
  gameOverImage=loadImage("gameover.png");
  
  //Loading the Sounds
swordSound=loadSound("knifeSwooshSound.mp3");

gameOverSound=loadSound("gameover.mp3");
}






function setup(){
  createCanvas(600,600);
   //Adding Images and Creating Sprites
  sword = createSprite(40,200,20,20);
  sword.addImage("sword",swordImage);
  sword.scale = 0.5;
  
  gameOver=createSprite(300,100);
  gameOver.addImage(gameOverImage);
  
  fruitGroup = new Group();
  alienGroup = new Group();
  
    sword.setCollider("rectangle",0,0,sword.width,sword.height);
    sword.debug=true;
  
}

function draw(){
  background("lightblue");
  
  //Displaying the Score
    text("Score:"+score,500,50);

  
  //move sword with mouse 
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  
  
  
  spawnFruit();
  spawnAlien();
  
  if(gamestate === PLAY){
    gameOver.visible=false;

    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+3;
    } 
    
    if(alienGroup.isTouching(sword)){
      score=0;
       gameOver.visible=true;
      
      alien.velocityX=0;
      fruit.velocityX=0;
      sword.velocityX=0;
      
      sword.x=200;
      sword.y=200;
    }
  }
  
  if(gamestate===END){
    
  }
  
  
  
  drawSprites();
}

function spawnFruit(){
  
  if(World.frameCount%80===0){
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    
   r=Math.round(random(1,4));

      if(r==1){
        fruit.addImage(fruit1Image);
      }
    else if(r==2){
      fruit.addImage(fruit2Image)
    }
    
    else if(r==3){
      fruit.addImage(fruit3Image);
    }
    
    else if(r==4){
      fruit.addImage(fruit4Image);
    }
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);

  }
}

function spawnAlien(){
  if(World.frameCount%200===0){
    alien = createSprite(400,200,20,20);
    alien.addAnimation("moving",alien1Image);
    alien.addAnimation("moving2",alien2Image);
    alien.y=Math.round(random(100,300));
    alien.velocityX=-8;
    alien.setLifetime=50;
    alienGroup.add(alien);
  }
}

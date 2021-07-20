var bath,brush,drink,eat,gym,bg,move,sleep;
var bathing,brushing,drinking,eating,gymming,background,moving,sleeping;
var astronaut;

function preload(){
 bg = loadImage("images/iss.png"); 
 sleep = loadImage("images/sleep.png");
 brush = loadImage("images/brush.png");
 gym = loadImage("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
 eat = loadImage("images/eat1.png","images/eat2.png");
 drink = loadImage("images/drink1.png","images/drink2.png");
 move = loadImage("images/move.png","images/move1.png");
 bath = loadImage("images/bath1.png","images/bath2.png");
 
}


function setup() {
  createCanvas(800,400);

  astronaut=createSprite(300,230);
  astronaut.addImage("bg",bg);
  astronaut.scale = 0.1;

  astronaut=createSprite(300,230);
  astronaut.addImage("drinking",drink);
  astronaut.scale = 0.1;

 
  
  
}

function draw(){
  background("bg");  
  drawSprites();
    
       
    textSize(20);
    fill("white");
    text("Instruction:",30,35);
    textSize(15);
    text("Up Arrow = Brushing",20,55);
    text("Down Arrow = Gymming",20,70);
    text("Left Arrow = Eating",20,85);
    text("Right Arrow = Bathing",20,100);
    text("m key = Moving",20,115);
    
     
    edges=createEdgeSprites();
    astronaut.bounceOff(edges);

    if(keydown("UP_ARROW")){
      astronaut.addAnimation("brushing",brush);
      astronaut.changeAnimation("brushing");
      astronaut.y = 350;
      astronaut.velocityX = 1;
      astronaut.velocityY = 1; 
    }
    
    if(keydown("DOWN_ARROW")){
      astronaut.addAnimation("gymming",gym);
      astronaut.changeAnimation("gymming");
      astronaut.y = 350;
      astronaut.velocityX = 1;
      astronaut.velocityY = 1; 
    }

    if(keydown("LEFT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 350;
      astronaut.velocityX = 0.5;
      astronaut.velocityY = 0.5; 
    }
    
    if(keydown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing",bath);
      astronaut.changeAnimation("bathing");
      astronaut.y = 350;
      astronaut.velocityX = 1;
      astronaut.velocityY = 1; 
    }

    if(keydown("M_key")){
      astronaut.addAnimation("moving",move);
      astronaut.changeAnimation("moving");
      astronaut.y = 350;
      astronaut.velocityX = 1;
      astronaut.velocityY = 1; 
    }
}

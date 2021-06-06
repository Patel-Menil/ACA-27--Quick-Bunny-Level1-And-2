function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  player=createSprite(400,560,15,15)
  player.shapeColor='white'
  target=createSprite(200,40,30,30)
  target.shapeColor='orange'
  obs1=createSprite(170,400,50,10)
  obs1.shapeColor='pink'
  obs2=createSprite(530,200,50,10)
  obs2.shapeColor='pink'
  obs3=createSprite(370,400,50,10)
  obs3.shapeColor='pink'
  obs4=createSprite(570,400,50,10)
  obs4.shapeColor='pink'
  obs5=createSprite(330,200,50,10)
  obs5.shapeColor='pink'
  obs6=createSprite(130,200,50,10)
  obs6.shapeColor='pink'
  obs7=createSprite(10,10,50,10)
  obs7.shapeColor='black'
  obs8=createSprite(590,10,50,10)
  obs8.shapeColor='black'
  obs9=createSprite(300,300,50,10)
  obs9.shapeColor='red'
  obs10=createSprite(150,1,50,10)
  obs10.shapeColor='red'
  obs11=createSprite(450,1,50,10)
  obs11.shapeColor='red'
  obs1.velocityX=4
  obs2.velocityX=-4
  obs3.velocityX=4
  obs4.velocityX=4
  obs5.velocityX=-4
  obs6.velocityX=-4
  obs7.velocityX=5
  obs7.velocityY=5
  obs8.velocityX=-5
  obs8.velocityY=-5
  obs9.velocityY=5
  obs10.velocityY=5
  obs11.velocityY=5
  edges=createEdgeSprites()
}

function draw() {
  background("green");  
  drawSprites()
  obs1.bounceOff(edges[1])
  obs1.bounceOff(edges[0])
  obs2.bounceOff(edges[1])
  obs2.bounceOff(edges[0])
  obs3.bounceOff(edges[1])
  obs3.bounceOff(edges[0])
  obs4.bounceOff(edges[1])
  obs4.bounceOff(edges[0])
  obs5.bounceOff(edges[1])
  obs5.bounceOff(edges[0])
  obs6.bounceOff(edges[1])
  obs6.bounceOff(edges[0])
  obs7.bounceOff(edges[1])
  obs7.bounceOff(edges[0])
  obs7.bounceOff(edges[3])
  obs7.bounceOff(edges[2])
  obs8.bounceOff(edges[1])
  obs8.bounceOff(edges[0])
  obs8.bounceOff(edges[3])
  obs8.bounceOff(edges[2])
  obs9.bounceOff(edges[3])
  obs9.bounceOff(edges[2])
  obs10.bounceOff(edges[3])
  obs10.bounceOff(edges[2])
  obs11.bounceOff(edges[3])
  obs11.bounceOff(edges[2])
  if(keyDown("w")){
    player.y=player.y-3;
  }
  if(keyDown("s")){
    player.y=player.y+3;
  }
  if(keyDown("a")){
    player.x=player.x-3;
  }
  if(keyDown("d")){
    player.x=player.x+3;
  }
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(player.isTouching(obs1)){
    obs1.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs2)){
    obs2.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(target)){
    target.velocityX=0;
    text("YOU WON",200,200);
  }
  if(player.isTouching(obs1)){
    obs1.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs2)){
    obs2.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs3)){
    obs3.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs4)){
    obs4.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs4)){
    obs4.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs5)){
    obs5.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs6)){
    obs6.velocityX=0;
    text("YOU LOSE",200,200)
  }
  if(player.isTouching(obs7)){
    obs7.velocityX=0;
    obs7.velocityY=0;
    text("DO NOT COME IN CONTACT WITH THIS MOVING OBJECTS AGAIN",200,200)
  }
  if(player.isTouching(obs8)){
    obs8.velocityX=0;
    obs8.velocityY=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(obs9)){
    obs9.velocityY=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(target)){
    target.velocityX=0;
    text("YOU WON",200,200);
  }
}

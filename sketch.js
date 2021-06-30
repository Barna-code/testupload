//all variables here
var trex, trex_running, ground, groundImage;
var edges;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
}



function setup() {
  createCanvas(600, 200);

  edges = createEdgeSprites();



  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20)
  ground.velocityX = -3;
  ground.addImage(groundImage);
  ground.x = ground.width / 2;
}

function draw() {
  background("white")

  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  //adding gravity
  trex.velocityY = trex.velocityY + 0.8

  //bottom edge
  //trex.collide(edges[3])
  trex.collide(ground)

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  drawSprites();
}

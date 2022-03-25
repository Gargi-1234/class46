const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var startButton, clickHereButton
var ball, ground, slingshot1, slingshot1Img
var background1Img, backgroundSprite, background2Img, background3Img
var gate, gateImg, invisibleSprite1, invisibleSprite2, instructionBox2, instructionBox2Img
var carnival1, carnival1Img, carnival2, carnival2Img, carnival5, carnival5Img, carnival6, carnival6Img
var carnival3, carnival3Img, carnival4, carnival4Img
var ticket, ticketImg, ticketBooth, ticketBoothImg
var welcome, welcomeImg, instructionBox1, instructionBox1Img
var play, clickHere
var gameState = 0 

// maze, maze visuals, map for the maze, entrance and exit , gameState = 3 >> maze , gameState = 4 >> maze end  

function preload(){
  background1Img = loadImage("images/background.jpg")
  background2Img = loadImage("images/carnival/1.jpg")
  background3Img = loadImage("images/background2.jpg")
  welcomeImg = loadImage("images/welcome.png")
  carnival1Img = loadImage("images/carnival/1.jpg")
  carnival2Img = loadImage("images/carnival/2.jpg")
  carnival3Img = loadImage("images/carnival/3.jpg")
  carnival4Img = loadImage("images/carnival/4.jpg")
  carnival5Img = loadImage("images/carnival/5.jpg")
  carnival6Img = loadImage("images/carnival/6.jpg")
  gateImg = loadImage("images/gate.png")
  play = loadImage("images/play.png")
  clickHere = loadImage("images/clickHere.png")
  ticketImg = loadImage("images/ticket.png")
  ticketBoothImg = loadImage("images/ticketBooth.png")
  instructionBox1Img = loadImage("images/Instruction1.png")
  instructionBox2Img = loadImage("images/Instruction2.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  startButton = createSprite(width/2,height/2)
  startButton.addImage(play)
  startButton.scale = 0.9

  gate = createSprite(340,200)
  gate.addAnimation("carnivalGate",gateImg)
  gate.visible = false
  gate.scale = 1.1

  ticket = createSprite(width/2,height/2)
  ticket.addImage(ticketImg)
  ticket.visible = false
  
  ticketBooth = createSprite(700,220)
  ticketBooth.addImage(ticketBoothImg)
  ticketBooth.visible = false
  
  clickHereButton = createSprite(-705,-310)
  clickHereButton.addImage(clickHere)
  clickHereButton.scale = 0.5

  instructionBox1 = createSprite(400,50)
  instructionBox1.addImage(instructionBox1Img)
  instructionBox1.scale = 0.5
  instructionBox1.visible = false

  instructionBox2 = createSprite(650,320)
  instructionBox2.addImage(instructionBox2Img)
  instructionBox2.scale = 0.7
  instructionBox2.visible = false

  carnival6 = createSprite(width/2,height/2)
  carnival6.addImage(carnival6Img)
  carnival6.scale = 0.7
  carnival6.visible = false

  carnival5 = createSprite(width/2,height/2)
  carnival5.addImage(carnival5Img)
  carnival5.scale = 0.7
  carnival5.visible = false

  carnival4 = createSprite(width/2,height/2)
  carnival4.addImage(carnival4Img)
  carnival4.scale = 0.7  
  carnival4.visible = false

  carnival3 = createSprite(width/2,height/2)
  carnival3.addImage(carnival3Img)
  carnival3.scale = 0.7
  carnival3.visible = false

  carnival2 = createSprite(width/2,height/2)
  carnival2.addImage(carnival2Img)
  carnival2.scale = 0.7
  carnival2.visible = false

  carnival1 = createSprite(width/2,height/2)
  carnival1.addImage(carnival1Img)
  carnival1.scale = 0.7
  carnival1.visible = false

  welcome = createSprite(100,100,20,20)
  welcome.addImage(welcomeImg)
  welcome.visible = false

  invisibleSprite1 = createSprite(100,10)
  invisibleSprite1.visible = false

  invisibleSprite2 = createSprite(300,10)
  invisibleSprite2.visible = false

  ground = new Ground(250,300,250,8)

  // creating Blocks 
  block1 = new Block(300,280,30,30)
  block2 = new Block(340,280,30,30)
  block3 = new Block(300,280,30,30)
  block4 = new Block(340,280,30,30)
  block5 = new Block(300,280,30,30)

  block6 = new Block(340,280,30,30)
  block7 = new Block(300,280,30,30)
  block8 = new Block(340,280,30,30)

  block9 = new Block(300,280,30,30)
 
  ball = new Ball(50,300,10)

  slingshot1 = new Slingshot(ball.body,{x:40,y:310})

}

function draw() {
    Engine.update(engine);

    console.log(block1.body.position.y)

  if(gameState === 0){
  background(background1Img);  
  }

  if(mousePressedOver(startButton)){
    startButton.destroy()
    welcome.visible = true
    welcome.velocityX = 4
  
    ticketBooth.visible = true
   // ticket.visible = true
    gate.visible = true
    gameState = 1
    //text(" instructions ")
  }
  if(gameState === 1){
    
    background(background2Img)
    clickHereButton.x = 705
    clickHereButton.y = 310

  }

  if(mousePressedOver(clickHereButton)){
    
    ticketBooth.visible = false
    gate.visible = false

    ticket.visible = true
    ticket.lifetime = 15
    clickHereButton.destroy()

    carnival1.visible = true
    carnival1.lifetime = 20

    carnival2.visible = true
    carnival2.lifetime = 25

    carnival3.visible = true
    carnival3.lifetime = 30

    carnival4.visible = true
    carnival4.lifetime = 35

    carnival5.visible = true
    carnival5.lifetime = 40

    carnival6.visible = true
    carnival6.lifetime = 45

    instructionBox1.visible = true

    invisibleSprite1.velocityX = 2.5
  }

  if(invisibleSprite1.isTouching(invisibleSprite2)){
    background(carnival6Img)
    invisibleSprite2.velocityX = 2.5
  }

  if(gameState === 2){
    background(background3Img)

    ground.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    ball.display()
    slingshot1.display()
    instructionBox2.visible = true
  
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32)
  {
    gameState = 2
    instructionBox1.visible = false
  }
}

function mouseDragged(){

}

function mouseRealsed(){

}
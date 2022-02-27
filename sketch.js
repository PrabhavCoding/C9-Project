var box;
var ball

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 20, 20);
  box.shapeColor = "blue"
  ball = createSprite(200,200,20,20)
}

function draw() {
  background("black");
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 2;
  background("red");
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 2;
  background("yellow");
  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 2;
    background("green");
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 2;
    background("red");
  }




  drawSprites();
}





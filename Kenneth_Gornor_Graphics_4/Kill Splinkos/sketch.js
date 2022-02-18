/* Kenneth Gornor CSC 2463 Assignment 4
Bug Squish - Kill Splinkys
Due 15th Feb, 2022 */
let spelunker = []
let sprite1, sprite2, sprite3;
let count = 50;
let startTime;
let gameState = 'wait';
let kills = 0;

function preload() {
  sprite1 = loadImage("Guy.png");
  sprite2 = loadImage("Liz.png");
  sprite3 = loadImage("VanHelsing.png");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 19);
  imageMode(CENTER);
  speed = random(1);
  for (i = 0; i < count; i++) {
    spelunker[i] = new Spelunker(random([sprite1, sprite2, 
                   sprite3]), random(width), 
                   random(height, 80), random(1, 5),
                   random([-1, 1]));
  }
}

function draw() {
  background(240);
  if (gameState == 'wait') {
    textSize(30);
    textAlign(CENTER, CENTER);
    text('Press mouse button to start', (width - (width/2)), height - (height/2));
    if (mouseIsPressed){
      startTime = millis();
      gameState = 'playing';
    }
  } 
  else if (gameState == 'playing') {
    for (i = 0; i < count; i++) {
      spelunker[i].draw();
    }
    text("Score:", width*(3/4), 30);
    text(kills, width*(3/4) + 80, 30);

    let time = timer();
    let totalTime = 30;
    text ("Time: " + (totalTime - time), 80, 30);
    if (time >= 30) {
      gameState = 'end';
    }
  }
  else if (gameState == 'end') {
    text("Game over", (width - (width/2)), (height - (height*(3/4))));
    text("Press mouse button to start", (width - (width/2)), (height - (height * (1/2))));
    if (mouseIsPressed){
      startTime = millis();
      gameState = 'playing';
    }
  }
}

function timer() {
  return int((millis() - startTime)/1000);
}

function mousePressed() {
  let dmin = -1;
  let spelunker_id = -1;

  for (i = 0; i < count; i++) {
    let d = spelunker[i].grabCheck();
    if (d != -1) {
      if (dmin == -1 || d < dmin) {
        dmin = d;
        spelunker_id = i;
      }
    }
  }
  if (spelunker_id != 1) {
    spelunker[spelunker_id].grab();
  }
}

//All spelunkers need to become bugs
class Spelunker {
  constructor(spriteSheet, x, y, speed, direction) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.sy = 0;
    this.x = x;
    this.y = y;
    this.move = direction;
    this.facing = direction;
    this.direction = direction;
    this.grabbed = false;
    this.spriteFrame = 0;
    this.unalived = false;
    this.speedboost = false;
    this.speed = speed;
  }

  animate() {
    let sx, sy
    if (this.move == 0) {
      if (this.grabbed) { //Animation for grabbing
                        sx = 9;
                        sy = 0;
        }
    } 
    else {  //Animation for walking
          sx = this.spriteFrame % 8 + 1; 
          sy = 0;
    }
    return [sx, sy];
  }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    //Draw sprite frame based on amination
    let [sx, sy] = this.animate();
    image(this.spriteSheet, 0, 0, 80, 80, 80 * sx, 80 * sy, 80, 80);

    //Duration of each sprite frame
    if (frameCount % 6 == 0) {
      this.spriteFrame += 1;
    }

    //Movement.
    this.x += this.speed * this.move;
    //Revert character at boundary
    //adjust the following for new sprite edge flip
    if (this.x < 30) {
      this.move = 1;
      this.facing = 1;
    } else if (this.x > width - 30) {
      this.move = -1;
      this.facing = -1;
    }
  
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

  stop() {
    this.move = 0;
  }

  grabCheck() {
    let d = -1;
    if (mouseX > this.x - 40 && mouseX < this.x + 40
      && mouseY > this.y - 40 && mouseY < this.y + 40) {
        d = dist(mouseX, mouseY, this.x, this.y);
      }
    return d;
  }

  grab() {
    {
          this.stop();
          this.grabbed = true;
          this.offsetX = this.x - mouseX;
          this.offsetY = this.y - mouseY; 
          if (this.unalived == false) {
            kills++;
            this.unalived = true;
          }
    }
  }
  drop() {
    this.go();
  }
}

/* Errors in output:
1.) As of now, there is no sprites of my own.
2.) Speed does not increase. I spent many an hour trying to implement this,
but I kept running into issues when trying to communicate to the Class on a global
or even internal function level. I ran out of time to experiment sadly.
3.) The game state reloading does not reload the state of the characters. I do
not know the workaround for this at this time.
*/
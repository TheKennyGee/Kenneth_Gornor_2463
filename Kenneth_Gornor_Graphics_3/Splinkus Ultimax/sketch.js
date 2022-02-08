/* Kenneth Gornor CSC 2463 Assignment 3
Sprite Animation - Splinkus Ultimax (with arrays for good meaasure)
Due 8th Feb, 2022 */
let spelunker = []
let sprite1, sprite2, sprite3;
let count = 15;

function preload() {
  sprite1 = loadImage("Guy.png");
  sprite2 = loadImage("Liz.png");
  sprite3 = loadImage("VanHelsing.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  for (i = 0; i < count; i++) {
    spelunker[i] = new Spelunker(random([sprite1, sprite2, sprite3]), random(windowWidth), random(windowHeight));
  }
}

function draw() {
  background(240);
  for (i = 0; i < count; i++) {
    spelunker[i].draw();
  }
}

function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    for (i = 0; i < count; i++) {
      spelunker[i].go(1);
    }
  }
  else if (keyCode == LEFT_ARROW) {
    for (i = 0; i < count; i++) {
      spelunker[i].go(-1);
    }
  }
}

function keyReleased() {
  for (i = 0; i < count; i++) {
    spelunker[i].stop();
  }
}

class Spelunker {
  constructor(spriteSheet, x, y) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;
  }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
    if (this.move == 0) {
      image(this.spriteSheet, 0, 0, 200, 200, 0, 0, 80, 80);
    }
    else {
      image(this.spriteSheet, 0, 0, 200, 200, 80 * (this.sx + 1), 0, 80, 80);
    }
    if (frameCount % 6 == 0) {
      this.sx = (this.sx + 1) % 8;
    }
    this.x += 2 * this.move;
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

}
/* Kenneth Gornor CSC 2463 Assignment 3
Sprite Animation - Splinkus Ultimax
Due 8th Feb, 2022 */
let spelunker;
let spelunker2;
let spelunker3;
let spelunker4;
let spelunker5;
let spelunker6;

function preload() {
  sprite1 = loadImage("Guy.png");
  sprite2 = loadImage("Liz.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  spelunker = new Spelunker(
    "Guy.png",
    random(windowWidth - 100),
    random(windowHeight - 100)
  );
  spelunker2 = new Spelunker(
    "Liz.png",
    random(windowWidth - 100),
    random(windowHeight - 100)
  );
  spelunker3 = new Spelunker(
    "Guy.png",
    random(windowWidth - 100),
    random(windowHeight - 100)
  );
  spelunker4 = new Spelunker(
    "Liz.png",
    random(windowWidth - 100),
    random(windowHeight - 100)
  );
  spelunker5 = new Spelunker(
    "Guy.png",
    random(windowWidth - 100),
    random(windowHeight - 100)
  );
  spelunker6 = new Spelunker(
    "Liz.png",
    random(windowWidth - 100),
    random(windowHeight - 100)
  );
}

function draw() {
  background(240);
  spelunker.draw();
  spelunker2.draw();
  spelunker3.draw();
  spelunker4.draw();
  spelunker5.draw();
  spelunker6.draw();
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    spelunker.go(+1);
    spelunker2.go(+1);
    spelunker3.go(+1);
    spelunker4.go(+1);
    spelunker5.go(+1);
    spelunker6.go(+1);
  }
  if (keyCode == LEFT_ARROW) {
    spelunker.go(-1);
    spelunker2.go(-1);
    spelunker3.go(-1);
    spelunker4.go(-1);
    spelunker5.go(-1);
    spelunker6.go(-1);
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW) {
    spelunker.stop();
    spelunker2.stop();
    spelunker3.stop();
    spelunker4.stop();
    spelunker5.stop();
    spelunker6.stop();
  }
  if (keyCode == LEFT_ARROW) {
    spelunker.stop();
    spelunker2.stop();
    spelunker3.stop();
    spelunker4.stop();
    spelunker5.stop();
    spelunker6.stop();
  }
}

class Spelunker {
  constructor(imageName, x, y) {
    this.spriteSheet = loadImage(imageName);
    this.frame = 0;
    this.x = x
    this.y = y
    this.moving = 0;
    this.facing = 0;

    this.draw = function () {
      push();
      translate(this.x, this.y);
      if (this.facing < 0) {
        scale(-1.0, 1.0);
      }

      if (this.moving == 0) {
        image(this.spriteSheet, 0, 0, 80, 80, 0, 0, 80, 80);
      } else {
        if (this.frame == 0) {
          image(this.spriteSheet, 0, 0, 80, 80, 80, 0, 80, 80);
        }
        if (this.frame == 1) {
          image(this.spriteSheet, 0, 0, 80, 80, 160, 0, 80, 80);
        }
        if (this.frame == 2) {
          image(this.spriteSheet, 0, 0, 80, 80, 240, 0, 80, 80);
        }
        if (this.frame == 3) {
          image(this.spriteSheet, 0, 0, 80, 80, 320, 0, 80, 80);
        }
        if (this.frame == 4) {
          image(this.spriteSheet, 0, 0, 80, 80, 400, 0, 80, 80);
        }
        if (this.frame == 5) {
          image(this.spriteSheet, 0, 0, 80, 80, 480, 0, 80, 80);
        }
        if (this.frame == 6) {
          image(this.spriteSheet, 0, 0, 80, 80, 560, 0, 80, 80);
        }
        if (this.frame == 7) {
          image(this.spriteSheet, 0, 0, 80, 80, 640, 0, 80, 80);
        }

        if (frameCount % 5 == 0) {
          this.frame = (this.frame + 1) % 8;
          this.x = this.x + this.moving * 8;
        }
      }
      pop();
    };

    this.go = function (direction) {
      this.moving = direction;
      this.facing = direction;
    };
    this.stop = function () {
      this.moving = 0;
      this.frame = 3;
    };
  }
}

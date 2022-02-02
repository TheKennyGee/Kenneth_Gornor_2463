/* Kenneth Gornor CSC 2463 Assignment 2
Paint App (now with brush size options!)
Due 1st Feb, 2022 */
let brushColor
let brushSize

function setup() {
  createCanvas(1024, 576);
  background(240);
  brushColor = color (0)
  brushSize = 1
}

function draw() {
  let y = 20;
  let max = 255;
  let med = 127;
  let min = 63;

  palette (0, 0, color (max, 0, 0));
  palette (0, y, color (max, med, 0));
  palette (0, y * 2, color (max, max, 0));
  palette (0, y * 3, color (0, max, 0));
  palette (0, y * 4, color (0, max, max));
  palette (0, y * 5, color (0, 0, max));
  palette (0, y * 6, color (max, 0, max));
  palette (0, y * 7, color (med, min, 0));
  palette (0, y * 8, color (255));
  palette (0, y * 9, color (0));
  palette (0, y * 14, color (240));

  size (1, 1, 210);
  size (3, 1, 230);
  size (5, 1, 250);
  size (10, 1, 270);

  if (mouseIsPressed) {
    if (mouseX <= 20) {
      if (mouseY <= 20) {
        brushColor = color (max, 0, 0)
      } else if (mouseY <= 40) {
        brushColor = color (max, med, 0)
      } else if (mouseY <= 60) {
        brushColor = color (max, max, 0)
      } else if (mouseY <= 80) {
        brushColor = color (0, max, 0)
      } else if (mouseY <= 100) {
        brushColor = color (0, max, max)
      } else if (mouseY <= 120) {
        brushColor = color (0, 0, max)
      } else if (mouseY <= 140) {
        brushColor = color (max, 0, max)
      } else if (mouseY <= 160) {
        brushColor = color (med, min, 0)
      } else if (mouseY <= 180) {
        brushColor = color (255)
      } else if (mouseY <= 200) {
        brushColor = color (0)
      } else if (mouseY <= 220) {
        brushSize = 1
      } else if (mouseY <= 240) {
        brushSize = 3
      } else if (mouseY <= 260) {
        brushSize = 5
      } else if (mouseY <= 280) {
        brushSize = 10
      } else if (mouseY <= 300) {
        brushColor = color (240)
      }
    }
    strokeWeight(brushSize);
    stroke(brushColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function palette(x, y, c1) {
  strokeWeight(1);
  stroke(1);
  fill(c1);
  square(x, y, 20);
}

function size(a, b, d) {
  strokeWeight(a);
  stroke(b);
  line(10, d, 10, d);
}
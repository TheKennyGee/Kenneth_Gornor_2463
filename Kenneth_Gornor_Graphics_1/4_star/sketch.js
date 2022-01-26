//Kenneth Gornor CSC 2463 Assignment 1
//Star emblem
//Due 25th Jan, 2022
function setup() {
  createCanvas(200, 200);
}
function draw() {
  background(0, 0, 127);
  strokeWeight(3);
  stroke(255);
  //emblem_circular_base
  fill(0, 127, 0);
  circle(100, 100, 100);
  //star
  fill(255, 0, 0);
  beginShape();
  vertex(100, 48);
  vertex(110, 84);
  vertex(150, 84);
  vertex(118, 105);
  vertex(130, 142);
  vertex(100, 120);
  vertex(70, 142);
  vertex(80, 105);
  vertex(50, 84);
  vertex(88, 84);
  endShape(CLOSE);
}
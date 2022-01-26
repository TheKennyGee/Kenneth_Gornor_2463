//Kenneth Gornor CSC 2463 Assignment 1
//Translucent venn diagram
//Due 25th Jan, 2022
function setup() {
  createCanvas(200, 200);
}
function draw() {
  noStroke();

  fill(255, 150, 150, 20);
  circle(100, 70, 100);

  fill(150, 150, 255, 20);
  circle(65, 125, 100);

  fill(150, 255, 150, 20);
  circle(132, 125, 100);
}
//had a hard time getting the colors to blend as well as they do in the visual
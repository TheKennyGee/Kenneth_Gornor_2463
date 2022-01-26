//Kenneth Gornor CSC 2463 Assignment 1
//Pac-Man and Blinky
//Due 25th Jan, 2022
function setup() {
  createCanvas(200, 100);
}
function draw() {
  background(0);
  noStroke();
  //pac-man
  fill(255, 255, 0);
  arc(50, 50, 80, 80, -2.5, -3.8, PIE);
  //blinky_body
  fill(255, 0, 0);
  square(110, 10, 80, 40, 40, 0, 0);
  //blinky_eye_left
  fill(255);
  circle(130, 50, 24);
  //blinky_eye_right
  fill(255);
  circle(170, 50, 24);
  //blinky_pupil_left
  fill(0, 0, 255);
  circle(130, 50, 14);
  //blinky_pupil_right
  fill(0, 0, 255);
  circle(170, 50, 14);
}
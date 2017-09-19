/*
1. Code below is for https://youtu.be/D1ELEeIs0j8?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
2. Code is at 7:57 seconds on drawing rectangle
*/
let inicioX;
let inicioY;
let finalX;
let finalY;

let offsetX = 1;
let offsetY = 0.25;


function setup() {
  createCanvas(1000, 400);
  background(255);

  inicioX = 0;
  inicioY = height;
  finalX = width/2;
  finalY = 0;

  stroke(0, 32);

}

function draw() {
  line(inicioX, inicioY, finalX, finalY);

  inicioX = inicioX + offsetX;
  finalY  = finalY + offsetY;
}

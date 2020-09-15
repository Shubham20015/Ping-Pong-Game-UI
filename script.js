const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const width = 400;
const height = 600;

let paddleWidth = 80;
let paddleHeight = 10;

canvas.width = width;
canvas.height = height;

// Rectangle Board
context.fillStyle = "black";
context.fillRect(0,0,width,height);

// Rectangle paddle
context.fillStyle = "white";
context.fillRect(160,10,paddleWidth,paddleHeight);
context.fillRect(160,height - 20,paddleWidth,paddleHeight);

// Center Dashed line
context.beginPath();
context.setLineDash([5]);
context.moveTo(0,height/2);
context.lineTo(width,height/2);
context.strokeStyle = "white";
context.stroke();

// Center ball
context.beginPath();
context.arc(width/2,height/2,10,2*Math.PI, false);
context.fillStyle = "white";
context.fill();

// Player Scores
context.font = "32px Josefin Sans";
context.fillText(12, 20, height/2 - 30);
context.fillText(15, 20, height/2 + 50);
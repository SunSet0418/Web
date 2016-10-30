var context;
var velocity;
var angle;
var ballV;
var ballVx;
var ballVy;
var ballX=10;
var ballY=250;
var ballRadius =10;
var score = 0;
var image = new Image();
image.src="lawn.png";
var backimage = new Image();
backimage.src="net.png";
var timer;
/*공그리기*/
function drawBall(){
  context.beginPath();
  context.arc(ballX, ballY, ballRadius, 0, 2.0 * Math.PI, true);
  context.fillStyle - "black";
  context.fill();
}
/*배경 그리기*/
function drawBackground(){
  context.drawImage(image, 0, 270);
  context.drawImage(backimage, 450, 60);
}
/*전체화면 그리기*/
function draw(){
  context.clearRect(0,0,500,300);
  drawBall();
  drawBackground();
}
/*초기화*/
function init(){
  ballX =10;
  ballY=250;
  ballRadius=10;
  context = document.getElementById('canvas').getContext('2d');
  draw();
}
/*발사 버튼*/
function start() {
  init();
  velocity = Number(document.getElementById('velocity').value);
  angle = Number(document.getElementById('angle').value);
  var angleR = angle*Math.PI /180;
  ballVx = velocity * Math.cos(angleR);
  ballVy = -velocity * Math.sin(angleR);
  draw();
  timer = setInterval(calculate, 100);
  console.log("asdf");
  return false;
}
/*공의 현재 속도와 위치를 업데이트한다*/
function calculate() {
  console.log(score);
  ballVy = ballVy + 1.98;
  ballX = ballX + ballVx;
  ballY = ballY + ballVy;
  console.log(ballY + " " + ballX);
  /*공이 목표물에 맞았을경우*/
  if((ballX>=450)&&(ballX<=480)&&(ballY >= 60)&&(ballY<=210)){
    score++;
    /*if(score==11){
      score=0;*/
    }
    document.getElementById('score').innerHTML = "점수="+score;
    clearInterval(timer);
  }
  /*공이 경계를 벗어날 경우*/
  if(ballY>=300||ballY<0){
    clearInterval(timer);
  }
  draw();
}

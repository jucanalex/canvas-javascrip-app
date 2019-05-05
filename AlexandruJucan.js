//acc18aj ==== Alexandru Jucan

var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

//plays the audio for the mouth animation
var hello = document.getElementById("helloAudio"); 
function playAudio() { 
	hello.play(); 
} 
  
//relative postion
var x = 250;
var y = 250;

//variables for the animation
var requestId, frame = 0;

//starts the drawing on canvas
drawFish1();

//resets the fish to its initial position
function resetFish(){
	context.clearRect(0, 0, 600, 600);
	x = 250;
	y = 250;
	drawFish1();
	cancelAnimationFrame(requestId);
}

//draws the dead fish
function drawDeadFish() {
  context.clearRect(0, 0, 600, 600);
  context.beginPath();
  context.moveTo(x, y+30);
  context.bezierCurveTo(x, y+14, x+35, y, x+45, y);
  context.bezierCurveTo(x+65, y, x+100, y+14, x + 100, y+30);
  context.bezierCurveTo(x+100, y+46, x+65, y+60, x+50, y+58);
  context.bezierCurveTo(x+35, y+60, x, y+46, x, y+30);
 
  //eye
  context.moveTo(x+35, y+45);
  context.lineTo(x+25, y+35);
  context.moveTo(x+35, y+35);
  context.lineTo(x+25, y+45);

  //mouth
  context.moveTo(x+2, y+23);
  context.lineTo(x+30, y+23);

  //upper fin
  context.moveTo(x+32, y+56);
  context.lineTo(x+85, y+85);
  context.moveTo(x+85, y+85);
  context.quadraticCurveTo(x+65, y+59, x+76, y+53);

  //inside fin
  context.moveTo(x+55, y+40);
  context.lineTo(x+55, y+20);
  context.moveTo(x+55, y+20);
  context.lineTo(x+75, y+30);
  context.moveTo(x+75, y+30);
  context.lineTo(x+55, y+40);

  //backtail
  context.moveTo(x+89, y+13);
  context.lineTo(x+130, y-10);
  context.moveTo(x+130, y-10);
  context.quadraticCurveTo(x+100, y+30, x+130, y+70);
  context.moveTo(x+130, y+70);
  context.lineTo(x+89, y+47);

  context.stroke();
}

//the fish with inner fin behind
function drawFish1() {
  context.clearRect(0, 0, 600, 600);

  context.beginPath();
  context.moveTo(x, y+30);
  context.bezierCurveTo(x, y+14, x+35, y, x+45, y);
  context.bezierCurveTo(x+65, y, x+100, y+14, x + 100, y+30);
  context.bezierCurveTo(x+100, y+46, x+65, y+60, x+50, y+58);
  context.bezierCurveTo(x+35, y+60, x, y+46, x, y+30);

  //eye
  context.moveTo(x+35, y+20);
  context.arc(x+30, y+20, 5, 0, Math.PI*2, true);
  

  //mouth
  context.moveTo(x+4, y+40);
  context.lineTo(x+30, y+40);


  //upper fin
  context.moveTo(x+40, y);
  context.lineTo(x+80, y-25);
  context.quadraticCurveTo(x+65, y-10, x+75, y+7);
	
	
  //inside fin
  context.moveTo(x+55, y+40);
  context.lineTo(x+55, y+20);
  context.lineTo(x+75, y+30);
  context.lineTo(x+55, y+40);
	
  //backtail
  context.moveTo(x+89, y+13);
  context.lineTo(x+130, y-10);
  context.quadraticCurveTo(x+100, y+30, x+130, y+70);
  context.lineTo(x+89, y+47);
  
  context.stroke();
}

//the fish with the inner fin infront
function drawFish2() {
  context.clearRect(0, 0, 600, 600);

  context.beginPath();
  context.moveTo(x, y+30);
  context.bezierCurveTo(x, y+14, x+35, y, x+45, y);
  context.bezierCurveTo(x+65, y, x+100, y+14, x + 100, y+30);
  context.bezierCurveTo(x+100, y+46, x+65, y+60, x+50, y+58);
  context.bezierCurveTo(x+35, y+60, x, y+46, x, y+30);

  //eye
  context.moveTo(x+35, y+20);
  context.arc(x+30, y+20, 5, 0, Math.PI*2, true);

  //mouth
  context.moveTo(x+4, y+40);
  context.lineTo(x+30, y+40);

  //upper fin
  context.moveTo(x+40, y);
  context.lineTo(x+80, y-25);
  context.quadraticCurveTo(x+65, y-10, x+75, y+7);

  //inside fin
  context.moveTo(x+60, y+40);
  context.lineTo(x+60, y+20);
  context.moveTo(x+60, y+20);
  context.lineTo(x+40, y+30);
  context.moveTo(x+40, y+30);
  context.lineTo(x+60, y+40);

  //backtail
  context.moveTo(x+89, y+13);
  context.lineTo(x+130, y-10);
  context.moveTo(x+130, y-10);
  context.quadraticCurveTo(x+100, y+30, x+130, y+70);
  context.moveTo(x+130, y+70);
  context.lineTo(x+89, y+47);

  context.stroke();
}

//the fish with the eye blinked
function blinkFish() {
  context.clearRect(0, 0, 600, 600);
	context.beginPath();
	
  context.moveTo(x, y+30);
  context.bezierCurveTo(x, y+14, x+35, y, x+45, y);
  context.bezierCurveTo(x+65, y, x+100, y + 14, x + 100, y + 30);
  context.bezierCurveTo(x+100, y+46, x+65, y+60, x+50, y+58);
  context.bezierCurveTo(x+35, y+60, x, y+46, x, y+30);

  //eye
  context.moveTo(x+35, y+20);
  context.lineTo(x+20, y+20);

  //mouth
  context.moveTo(x+4, y+40);
  context.lineTo(x+30, y+40);

  //upper fin
  context.moveTo(x+40, y);
  context.lineTo(x+80, y-25);
  context.quadraticCurveTo(x+65, y-10, x+75, y+7);

  //inside fin
  context.moveTo(x+55, y+40);
  context.lineTo(x+55, y+20);
  context.moveTo(x+55, y+20);
  context.lineTo(x+75, y+30);
  context.moveTo(x+75, y+30);
  context.lineTo(x+55, y+40);

  //backtail

  context.moveTo(x+89, y+13);
  context.lineTo(x+130, y-10);
  context.moveTo(x+130, y-10);
  context.quadraticCurveTo(x+100, y+30, x+130, y+70);
  context.moveTo(x+130, y+70);
  context.lineTo(x+89, y+47);

  context.stroke();

  setTimeout(drawFish1, 1000);
}

//the fish with open mouth
function mouthFish() {
  context.clearRect(0, 0, 600, 600);
  
 context.beginPath();
  context.moveTo(x-1, y+25);
  context.bezierCurveTo(x, y+14, x+35, y, x+45, y);
  context.bezierCurveTo(x+65, y, x+100, y + 14, x + 100, y + 30);
  context.bezierCurveTo(x+100, y+46, x+65, y+60, x+50, y+58);
  context.bezierCurveTo(x+35, y+60, x, y+46, x+6, y+45);

  //eye
  context.moveTo(x+35, y+20);
  context.arc(x+30, y+20, 5, 0, Math.PI*2, true);

  //mouth
  context.moveTo(x+30, y+40);
  context.lineTo(x+6, y+45);
  context.moveTo(x+30, y+40);
  context.lineTo(x, y+25);

  //upper fin
  context.moveTo(x+40, y);
  context.lineTo(x+80, y-25);
  context.quadraticCurveTo(x+65, y-10, x+75, y+7);

  //inside fin
  context.moveTo(x+55, y+40);
  context.lineTo(x+55, y+20);
  context.moveTo(x+55, y+20);
  context.lineTo(x+75, y+30);
  context.moveTo(x+75, y+30);
  context.lineTo(x+55, y+40);

  //backtail
  context.moveTo(x+89, y+13);
  context.lineTo(x+130, y-10);
  context.moveTo(x+130, y-10);
  context.quadraticCurveTo(x+100, y+30, x+130, y+70);
  context.moveTo(x+130, y+70);
  context.lineTo(x+89, y+47);

  context.stroke();
  playAudio();
	
  setTimeout(drawFish1, 1000);
}



//the NEXT 3 functions do the animation for the dead fish
function killFish(){
	drawDeadFish();
	setTimeout(moveKillFish, 750);
}
function moveKillFish() {
	requestId = requestAnimationFrame(moveKillFish);
	killUpdate();
	drawDeadFish();		
}
function killUpdate(){
	y = y - 1;
	if(y < 10)
		cancelAnimationFrame(requestId);
}


//animation for the fish to swim to the bottom of the aquarium
function swimFishDown() {
	requestId = requestAnimationFrame(swimFishDown);
	swimUpdate();
	if (frame < 30)
		drawFish1();
	else
		drawFish2();
}

//updates the the position for the swimFishDown function
function swimUpdate(){
	y = y + 1;
	if(y > 530){
		cancelAnimationFrame(requestId);
		swimFishLeft();
	}
	if (frame > 60)
		frame = 0;
	frame = frame + 1;
}


//animation for the fish to swim to the left
function swimFishLeft() {
	requestId = requestAnimationFrame(swimFishLeft);
	swimUpdate2();
	if (frame < 30)
		drawFish1();
	else
		drawFish2();
}

//updates the position for the swimFishLeft function
function swimUpdate2(){
	x = x - 1;
	if(x < 1)
		cancelAnimationFrame(requestId);
	if (frame > 60)
		frame = 0;
	frame = frame + 1;
}


//"teleports" the fish to a random location on the canvas
function teleportFish(){
	var rand1 = Math.random() * 380 + 35;
	var rand2 = Math.random() * 380 + 35;
	x = rand1;
	y = rand2;
	drawFish1();
}


//colors the fish for 1 second
function colorFish(){
	

	context.clearRect(0, 0, 600, 600);

  context.beginPath();
  context.moveTo(x, y+30);
  context.bezierCurveTo(x, y+14, x+35, y, x+45, y);
  context.bezierCurveTo(x+65, y, x+100, y+14, x + 100, y+30);
  context.bezierCurveTo(x+100, y+46, x+65, y+60, x+50, y+58);
  context.bezierCurveTo(x+35, y+60, x, y+46, x, y+30);
  context.fillStyle = "yellow";
  context.fill();

  //eye
  context.fillStyle = "red";
  context.fill();
  context.moveTo(x+35, y+20);
  context.arc(x+30, y+20, 5, 0, Math.PI*2, true);
  

  //mouth
  context.moveTo(x+4, y+40);
  context.lineTo(x+30, y+40);


  //upper fin
  context.moveTo(x+40, y);
  context.lineTo(x+80, y-25);
  context.quadraticCurveTo(x+65, y-10, x+75, y+7);
	
	
  //inside fin
	context.moveTo(x+55, y+40);
  context.lineTo(x+55, y+20);
  context.lineTo(x+75, y+30);
  context.lineTo(x+55, y+40);
	context.closePath();
	
	
  //backtail
  context.moveTo(x+89, y+13);
  context.lineTo(x+130, y-10);
  context.quadraticCurveTo(x+100, y+30, x+130, y+70);
  context.lineTo(x+89, y+47);
  context.fillStyle = "blue";
  context.fill();
	
  context.stroke();
  
  setTimeout(drawFish1, 1000);
	
}

//gets the mouse coordinates and returns them in x and y
function getMouseXY(e) {
  var canvas = document.getElementById("mycanvas");
  var boundingRect = canvas.getBoundingClientRect();
  var offsetX = boundingRect.left;
  var offsetY = boundingRect.top;
  //console.log("left,top: "+offsetX+", "+offsetY);
  // assumes border and padding are equal width and height
  var w = (boundingRect.width-canvas.width)/2;
  var h = (boundingRect.height-canvas.height)/2;
  //console.log("w,h: "+w+", "+h);
  offsetX += w;
  offsetY += h;
  //console.log("clientX, clientY: "+e.clientX+", "+e.clientY);
  // use clientX and clientY as getBoundingClientRect is used above
  var mx = Math.round(e.clientX-offsetX);
  var my = Math.round(e.clientY-offsetY);
  return {x: mx, y: my};
}

//checks where is the position of the mouse click and calls the appropriate function
function checkPosition(evt){
	var pos = getMouseXY(evt);
	if (pos.x >= x+20 && pos.x <= x+35 && pos.y > y+14 && pos.y < y+26)
		blinkFish();
	else if (pos.x >= x && pos.x < x + 120 && pos.y >= y && pos.y <= y + 57 )
		colorFish();
	else
		teleportFish();
}


//the button elements
var kill = document.getElementById("killbutton");
var mouth = document.getElementById("mouthbutton");
var swim = document.getElementById("swimbutton");
var clear = document.getElementById("clearbutton");

//the eventlisteners
kill.addEventListener("click", killFish);
mouth.addEventListener("click", mouthFish);
swim.addEventListener("click", swimFishDown); 
clear.addEventListener("click", resetFish);
canvas.addEventListener("click", checkPosition);
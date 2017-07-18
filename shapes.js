var x=0;
var y=250;
var speedX=4;
var speedY=4;
function setup (){
	createCanvas(700,700);
	pic = loadImage("Images/firework.jpg");
	//background(0);
}
function draw(){
background(pic);
/*quad(200,150,250,100,450,150,700,300);
//ellipse(mouseX, mouseY, 30,30);
//if(mouseIsPressed){
	//quad(200,150,250,100,450,150,700,300);
	//fill(0,255,0);
//}else{
	fill(0,0,255);*/
ellipse(x,100,30,30);
	fill(0,255,255);
	if(x>width){
	speedX = -4;
}
	if(x<0){
	speedX = 4;
}
	x=x+speedX;
ellipse(250,y,30,30);
	fill(255,0,0);
	if(y>height){
	speedY = -4;
}
	if(y<0){
	speedY = +4;
}
	y=y+speedY;
}


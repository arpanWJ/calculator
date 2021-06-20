var ans=0;
var n1,n2;//varibles to inter numbers
var b1,b2;//buttons
var num1,num2;
function setup() {
createCanvas(400, 400);
n1=createInput();//creates input textbox
n1.position(10,100);
n2=createInput();
n2.position(200,100);
b1=createButton("ADD");
b1.position(10,200);
b1.mousePressed(add);
b2=createButton("SUBTRACT");
b2.position(80,200);
b2.mousePressed(sub);
var b3=createButton("MULTIPLY");
b3.position(190,200);
b3.mousePressed(mul);
var b4=createButton("DIVIDE");
b4.position(300,200);
b4.mousePressed(div);
}
function draw() {
  background("cyan");
  num1=parseInt(n1.value());
  num2=parseInt(n2.value());
  fill("blue");
  text("ANSWER: "+ans,150,300);
  text("FIRST NUMBER",30,96);
  text("SECOND NUMBER",200,96);
  text("CALCULATOR",125,50);
}
function add(){
  ans=num1+num2;
}
function sub(){
  ans=num1-num2;
}
function mousepressed(b2){
sub();
}
function mul(){
  ans=num1*num2;
}
function div(){
  ans=num1/num2;
}
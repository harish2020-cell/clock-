let clockFont;


function setup() {
  createCanvas(windowWidth, windowHeight);
  clockFont = loadFont("digital-7.ttf");
}

function windowResized()
{
 resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
clock();
}

function clock()
{
 fill("orange");
  textFont(clockFont);
  textAlign(CENTER, CENTER);
  textSize(width/4.25);
  let Hour = hour();
  let min = minute();
  let secs = second()
  let noon = Hour >= 12? " PM" : " AM"
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, width/2, height/2); 
}
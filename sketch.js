///rainbow
let randomIndex
let fortune = [
  {name:"Heck yeah"},
  {name:"no thoughts, head empty"},
  {name:"Don't count on it"},
  {name:"Yes, definitely, absolutely"},
  {name:"Out for lunch, ask later"},
  {name:"Oh $%@&..."},
  {name:"Yea"},
  {name:"*takes off earbud* Sorry, what?"},
  {name:"Uh...outlook seems bleak, bud"},
  {name:"You got this!"},
  {name:"*dial-up noises"},
  {name:"lol good luck, loser"}];

function setup() {
  createCanvas(400, 400);

}

function draw() {
  ///bob
  strokeWeight(2)
  fill(240)
  ellipse(200,300,150);
  fill(50);
  ellipse(160,295,20);
  ellipse(230,280,20);
  line(240, 350, 160, 345)

  ///dialouge
  strokeWeight(0);
  textStyle(NORMAL);
  textSize(15)
  textAlign(CENTER);
  text("I am the all-knowing Bob.",200,50);
  text("I shall answer any Yes/No questions",200,70);

}

function mouseClicked(){
  background(200);
  fill(250)
  ellipse(120,235,20);
   ellipse(100,205,20);
   ellipse(200,150,250,80);
  randomIndex=int(random(fortune.length));
  fill(50)
  textStyle(BOLDITALIC);
  textSize(15);
  text(fortune[randomIndex].name,200,150);
  textAlign(CENTER);


 fortune.splice(randomIndex,1);
  }

const emojis = ["😃","😎","😇","😡","🫡","💀","🤢","👿","🤯","🫣"]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220.220,220);
  frameRate(5)
  for(let i = 0; i < 30; i++){ const emoji = random(emojis)
  textSize(50)
  let x = random(400);
  let y = random(400);
  text(emoji, x,y)
}
  
}

function setup() {
  createCanvas(600, 600);
  background(240, 235, 230);
  angleMode(DEGREES);

  // Draw all parts in logical order
  drawBraid();
  drawHair();
  drawEars();
  drawNeck();
  drawShirt();
  drawHead();
  drawEarrings();
  drawEyebrows();
  drawEyes();
  drawNose();
  drawMouth();
}

// ==================== HAIR & BRAID ====================
function drawBraid() {
  const braidX = 310, braidY = 230;
  const segments = 8, w = 45, h = 28, spacing = 22, sway = 8;
  const taper = 0.9;

  fill("#6D3327");
  noStroke();

  for (let i = 0; i < segments; i++) {
    let y = braidY + i * spacing;
    let bw = w * pow(taper, i);

    if (i % 2 === 0) {
      ellipse(braidX - sway, y, bw, h);
      ellipse(braidX + sway, y + spacing / 2, bw * 0.9, h);
    } else {
      ellipse(braidX + sway, y, bw, h);
      ellipse(braidX - sway, y + spacing / 2, bw * 0.9, h);
    }
  }

  // Hair tie
  fill("#333");
  ellipse(braidX, braidY + segments * spacing + 5, 20, 15);
}

function drawHair() {
  fill("#6D3327");
  noStroke();
  arc(250, 215, 141, 141, 180, 360);
  ellipse(180, 240, 20, 60);
  ellipse(320, 240, 20, 60);
}

// ==================== FACE ====================
function drawEars() {
  fill("#C9A270");
  noStroke();
  arc(320, 250, 30, 50, -90, 90, CHORD); // Right ear
  arc(180, 250, 30, 50, 90, 270, CHORD); // Left ear
}

function drawHead() {
  fill("#C9A270");
  noStroke();
  ellipse(250, 250, 150, 180);
}

function drawEyebrows() {
  noFill();
  stroke("#6D3327");
  strokeWeight(3);
  arc(210, 228, 45, 15, 210, 330);
  arc(290, 228, 45, 15, 210, 330);
}

function drawEyes() {
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(210, 232, 20, 12);
  ellipse(290, 232, 20, 12);

  fill(0);
  noStroke();
  ellipse(210, 232, 8, 8);
  ellipse(290, 232, 8, 8);
}

function drawNose() {
  fill("#A78357");
  noStroke();
  triangle(245, 260, 255, 260, 250, 285);
  ellipse(245, 288, 6, 4);
  ellipse(255, 288, 6, 4);
}

function drawMouth() {
  fill("#E00000");
  noStroke();
  arc(250, 310, 50, 15, 0, 180);  
  arc(250, 309, 45, 10, 180, 360); 
}

// ==================== ACCESSORIES ====================
function drawEarrings() {
  fill("#D6B636");
  circle(180, 280, 15);
  circle(320, 280, 15);
}

// ==================== NECK & SHIRT ====================
function drawNeck() {
  fill("#C9A270");
  noStroke();
  rectMode(CENTER);
  rect(250, 350, 40, 50, 20);
}

function drawShirt() {
  fill("#2E86AB");
  noStroke();

  // Main torso
  beginShape();
  vertex(230, 355);
  bezierVertex(220, 420, 220, 520, 200, 550);
  vertex(300, 550);
  bezierVertex(280, 520, 280, 420, 270, 355);
  endShape(CLOSE);

  // Sleeves
  drawSleeve(230, 355, 200, 370, 170, 420, 175, 470, 195, 470, 190, 430, 210, 380);
  drawSleeve(270, 355, 300, 370, 330, 420, 325, 470, 305, 470, 310, 430, 290, 380);

  // Cuffs
  fill("#1B4F72");
  rect(185, 478, 30, 10, 2);
  rect(315, 478, 30, 10, 2);

  // V-neck collar
  triangle(235, 355, 265, 355, 250, 380);
}

function drawSleeve(vx1, vy1, bx1, by1, bx2, by2, vx2, vy2, vx3, vy3, bx3, by3, bx4, by4) {
  fill("#2E86AB");
  beginShape();
  vertex(vx1, vy1);
  bezierVertex(bx1, by1, bx2, by2, vx2, vy2);
  vertex(vx3, vy3);
  bezierVertex(bx3, by3, bx4, by4, vx1, vy1);
  endShape(CLOSE);
}

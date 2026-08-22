let phase = 0;

function setup() {
  const c = createCanvas(1060, 520);
  c.parent('canvas-wrap');
  textFont('Arial');
}

function draw() {
  background(250, 248, 241);
  translate(width / 2, height / 2);

  // Orbital context (schematic scale)
  noFill();
  stroke(120);
  strokeWeight(1.5);
  ellipse(0, 0, 230, 230); // Earth reference orbit
  ellipse(0, 0, 350, 350); // Mars reference orbit

  fill(30);
  noStroke();
  circle(0, 0, 20);
  textSize(14);
  text('Sun', 14, 5);

  // Reference planets, intentionally schematic.
  fill(50);
  circle(115, 0, 10);
  text('Earth orbit', 122, -8);
  circle(-175, 0, 9);
  text('Mars orbit', -250, -12);

  // Hyperbolic-style passage: pedagogical curve, not ephemeris points.
  noFill();
  stroke(24, 84, 123);
  strokeWeight(4);
  beginShape();
  for (let t = -2.3; t <= 2.3; t += 0.03) {
    const x = 210 * sinh(t) / 3.6;
    const y = 78 * cosh(t) - 165;
    vertex(x, y);
  }
  endShape();

  // Moving comet marker.
  phase = (phase + 0.006) % 1;
  const t = map(phase, 0, 1, -2.2, 2.2);
  const cx = 210 * sinh(t) / 3.6;
  const cy = 78 * cosh(t) - 165;
  fill(188, 96, 43);
  noStroke();
  circle(cx, cy, 14);
  stroke(188, 96, 43);
  strokeWeight(3);
  line(cx, cy, cx - 28, cy + 12);

  noStroke();
  fill(20);
  textSize(16);
  text('3I/ATLAS: interstellar, hyperbolic passage', -490, -225);
  textSize(13);
  text('Perihelion: 2025-10-30 · ~1.4 AU from Sun (NASA)', -490, -200);
  text('Animated path is schematic; later version will use cached JPL Horizons ephemeris snapshots.', -490, 235);
}

function sinh(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
}

function cosh(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
}

let k;
function setup() {
 // put setup code here
 createCanvas(1001,765);
 background(255,204,0);
 k=0;
}
//Mashle magic muscle, lowbudget
function draw() {
  // put drawing code here
  background(255,204,0);
  strokeWeight(10);
  line(500,0,501,1000);
  //Head
  strokeWeight(5);
  fill(255,204,0);
  ellipse(250,500,100,100);
  strokeWeight(10);
  point(235,490);
  point(275,490);

  strokeWeight(5);
  line(230,475,240,475);
  line(270,475,280,475);
  //Curse mark
  strokeWeight(5);
  line(260,495,260,515);
  line(260,515,280,515);
  line(280,515,275,540);
  line(240,530,260,530);
  //Body
  fill(251,243,121);
  rect(200,560,100,200);
  line(250,560,250,760)//reffrence line, delete later
  //clothes
  ellipse(245,600,10,10);
  ellipse(245,650,10,10);
  ellipse(245,700,10,10);
  //Arms
  fill(20);
  rect(150,580,50,140);
  rect(300,580,50,140);

  //=================================================================Moving parts on the right

  //Head
  strokeWeight(5);
  fill(255,204,0);
  var b1 = 750 + 3 * Math.sin(PI/500*k);
  k += 1
  var b2 = 735 + 3 * Math.sin(PI/500*k);
  k += 1
  var b3 = 775 + 3 * Math.sin(PI/500*k);
  k += 1
  
  ellipse(b1,500,100,100);
  strokeWeight(10);
  point(b2,490);
  point(b3,490);

  strokeWeight(5);
  var k1 = 730 + 3 * Math.sin(PI/500*k);
  k += 1
  var k2 = 770 + 3 * Math.sin(PI/500*k);
  k += 1
  var c1 = 740 + 3 * Math.sin(PI/500*k);
  k += 1
  var c2 = 780 + 3 * Math.sin(PI/500*k);
  k += 1
  line(k1,475,c1,475);
  line(k2,475,c2,475);

  //Curse mark
  strokeWeight(5);
  var d1 = 760 + 3 * Math.sin(PI/500*k);
  k += 1
  var d2 = 780 + 3 * Math.sin(PI/500*k);
  k += 1
  var d3 = 775 + 3 * Math.sin(PI/500*k);
  k += 1
  var d4 = 740 + 3 * Math.sin(PI/500*k);
  k += 1
  line(d1,495,d1,515);
  line(d1,515,d2,515);
  line(d2,515,d3,540);
  line(d4,530,d1,530);

  //Body
  fill(251,243,121);
  var y1 = 560 + 10 * Math.sin(PI/600*k);
  k += 1  
  var y2 = 760 + 10 * Math.sin(PI/600*k);
  k += 1
  var m1 = 700 + 2 * Math.sin(PI/600*k);
  k += 1
  var m2 = 750 + 2 * Math.sin(PI/600*k);
  k += 1
  rect(m1,y1,100,200);
  line(m2,y1,m2,y2)//reffrence line, delete later

  //clothes
  var y3 = 600 + 10 * Math.sin(PI/600*k);
  k += 1
  var y4 = 650 + 10 * Math.sin(PI/600*k);
  k += 1
  var y5 = 700 + 10 * Math.sin(PI/600*k);
  k += 1
  ellipse(745,y3,10,10);
  ellipse(745,y4,10,10);
  ellipse(745,y5,10,10);

  //Arms
  fill(20);
  var x = 650 + 20 * Math.sin(PI/500*k);
  k += 1
  var x4 = 800 + 20 * Math.sin(PI/500*k);
  k += 1
  rect(x,580,50,140);
  rect(x4,580,50,140);
}

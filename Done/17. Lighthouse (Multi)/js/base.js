// js goes here

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var cssCheck = document.getElementById("cssCheck");
var svgCheck = document.getElementById("svgCheck");
var canvasCheck = document.getElementById("canvasCheck");
var p5Check = document.getElementById("p5Check");
var Y_AXIS = 1;
var b1;
var b2;

cssCheck.addEventListener("change",cssCheckEvent,false);
svgCheck.addEventListener("change",svgCheckEvent,false);
canvasCheck.addEventListener("change",canvasCheckEvent,false);
p5Check.addEventListener("change",p5CheckEvent,false);

function cssCheckEvent(e){

    if(cssCheck.checked){

        document.getElementById("cssSection").style.display = "flex";

    } else {

        document.getElementById("cssSection").style.display = "none";

    }

}

function svgCheckEvent(e){

    if(svgCheck.checked){

        document.getElementById("svgSection").style.display = "flex";

    } else {

        document.getElementById("svgSection").style.display = "none";

    }

}

function canvasCheckEvent(e){

    if(canvasCheck.checked){

        document.getElementById("canvasSection").style.display = "flex";

    } else {

        document.getElementById("canvasSection").style.display = "none";

    }

}

function p5CheckEvent(e){

    if(p5Check.checked){

        document.getElementById("p5Section").style.display = "flex";

    } else {

        document.getElementById("p5Section").style.display = "none";

    }

}

drawCanvas();

function drawCanvas(){

    var w = myCanvas.width;
    var h = myCanvas.height;

    context.clearRect(0,0,w,h);

    // background

    let grd = context.createLinearGradient(0,0,0,0.3*h);
    grd.addColorStop(0, "rgb(0, 0, 53)");
    grd.addColorStop(0.5, "rgb(0, 0, 53)");
    grd.addColorStop(1, "rgb(240, 176, 57)");

    context.fillStyle = grd;

    context.beginPath();
    context.rect(0,0,w,0.3*h);
    context.closePath();
    context.fill();

    context.fillStyle = "rgb(40, 116, 91)";

    context.beginPath();
    context.rect(0,0.3*h,w,0.7*h);
    context.closePath();
    context.fill();

    context.fillStyle = "grey";

    context.beginPath();
    context.rect(0,0.8*h,w,0.2*h);
    context.closePath();
    context.fill();

    context.fillStyle = "rgb(41, 39, 39)";

    context.beginPath();
    context.rect(0,0.8*h,w,6);
    context.closePath();
    context.fill();

    // tower

    var points = [[245,540],[250,440],[252.5,390],[255,340],[257.5,290],[260,240]];

    for(let i=0; i<(points.length)-1; i++){

        if(i%2 == 0){

            context.fillStyle = "white";

        } else {

            context.fillStyle = "red";

        }

        context.beginPath();
        context.moveTo(points[i][0],points[i][1]);
        context.lineTo(points[i+1][0],points[i+1][1]);
        context.lineTo(points[i+1][0]+((w/2)-points[i+1][0])*2,points[i+1][1]);
        context.lineTo(points[i][0]+((w/2)-points[i][0])*2,points[i][1]);
        context.closePath();
        context.fill();
        context.stroke();

    }

    context.fillStyle = "red";

    context.beginPath();
    context.moveTo(points[5][0],points[5][1]);
    context.lineTo(points[5][0]-10,points[5][1]-15);
    context.lineTo(points[5][0]-10+((w/2)+10-points[5][0])*2,points[5][1]-15);
    context.lineTo(points[5][0]+((w/2)-points[5][0])*2,points[5][1]);
    context.closePath();
    context.fill();
    context.stroke();

    // tower top

    var pX = points[5][0];
    var pY = points[5][1]-15;
    var towerTopW = ((w/2)-pX)*2;
    var towerTopH = 25+40;

    context.fillStyle = "white";

    context.beginPath();
    context.rect(pX,pY-towerTopH,towerTopW,towerTopH);
    context.closePath();
    context.stroke();
    context.fill();

    context.save();
    context.lineWidth = "3";

    var pX = points[5][0]-10;
    var pY = points[5][1]-15;
    var balconyA = 7; // amount of balcony posts
    var balconyH = 15;
    var balconyB = ((w/2)-pX)*2/balconyA;

    for(let i=0; i<=balconyA; i++){

        context.beginPath();
        context.moveTo(pX+(i*balconyB),pY-balconyH);
        context.lineTo(pX+(i*balconyB),pY);

        context.stroke();

    }

    context.beginPath();
    context.moveTo(pX,pY-balconyH);
    context.lineTo(pX+(balconyA)*balconyB,pY-balconyH);
    context.stroke();

    context.restore();

    // tower top top

    var pY = points[5][1]-80;
    var pX = points[5][0];
    var domeH = 40;

    context.fillStyle = "red";

    context.beginPath();
    context.moveTo(pX,pY);
    context.lineTo((w/2),pY-domeH);
    context.lineTo((w/2)+((w/2)-pX),pY);
    context.closePath();
    context.stroke();
    context.fill();

    var domeTopW = 10;
    var domeTopH = 15;
    var pX = (w/2)-(domeTopW/2);
    var pY = pY-domeH-domeTopH/2;

    context.fillStyle = "black";

    context.beginPath();
    context.rect(pX,pY,domeTopW,domeTopH);
    context.closePath();
    context.fill();

    var rodH = 35;
    var pX = (w/2);
    var pY = pY-rodH;

    context.save();
    context.lineWidth = "3";

    context.beginPath();
    context.moveTo(pX,pY);
    context.lineTo(pX,pY+rodH);
    context.closePath();
    context.stroke();

    context.restore();

    // headlights

    var pX = points[5][0];
    var pY = points[5][1]-80;
    var towerTopW = 10;
    var towerTopH = 40;
    var ang = 30;
    var lightRange = 200;

    context.fillStyle = "goldenrod";

    context.beginPath();
    context.rect(pX,pY,towerTopW,towerTopH);
    context.closePath();
    context.stroke();
    context.fill();

    context.save();
    context.translate(pX,pY+towerTopH/2);
    context.globalAlpha = "0.5";

    context.beginPath();
    context.moveTo(0,-towerTopH/2);
    context.arc(0,0,lightRange,(-180+ang)*Math.PI/180,(180-ang)*Math.PI/180,true);
    context.lineTo(0,towerTopH/2);
    context.lineTo(0,-towerTopW/2);
    context.closePath();
    context.fill();
    context.restore();

    context.beginPath();
    context.rect(pX+towerTopW,pY,((((w/2)-points[5][0]))-towerTopW)*2,towerTopH);
    context.closePath();
    context.fill();
    context.stroke();

    var pX = (w/2)+(((w/2)-points[5][0]))-towerTopW;

    context.beginPath();
    context.rect(pX,pY,towerTopW,towerTopH);
    context.closePath();
    context.stroke();
    context.fill();

    context.save();
    context.translate(pX+towerTopW,pY+towerTopH/2);
    context.globalAlpha = "0.5";

    context.beginPath();
    context.moveTo(0,-towerTopH/2);
    context.arc(0,0,lightRange,-ang*Math.PI/180,ang*Math.PI/180);
    context.lineTo(0,towerTopH/2);
    context.lineTo(0,-towerTopW/2);
    context.closePath();
    context.fill();
    context.restore();

}

function setup(){

    p5Canvas = createCanvas(300,300);
    p5Canvas.parent("myP5");

}

function draw(){

    clear();

    var w = 300;
    var h = 300;

    noStroke();

    // background

    fill(0,0,53);
    rect(0,0,w,0.15*h);

    b1 = color(0, 0, 53);
    b2 = color(240, 176, 57);

    setGradient(0, h*0.15, w, h*0.15, b1, b2, Y_AXIS);

    fill("rgb(40, 116, 91)");
    rect(0,0.3*h,w,0.7*h);

    fill("grey");
    rect(0,0.8*h,w,0.2*h);

    fill("rgb(41, 39, 39)");
    rect(0,0.8*h,w,6);

    // tower

    stroke("black");

    var points = [[122.5,270],[125,220],[126.25,195],[127.5,170],[128.75,145],[130,120]];

    for(let i=0; i<(points.length)-1; i++){

        if(i%2 == 0){

            fill("white");

        } else {

            fill("red");

        }

        beginShape();
        vertex(points[i][0],points[i][1]);
        vertex(points[i+1][0],points[i+1][1]);
        vertex(points[i+1][0]+((w/2)-points[i+1][0])*2,points[i+1][1]);
        vertex(points[i][0]+((w/2)-points[i][0])*2,points[i][1]);
        endShape(CLOSE);

    }

    fill("red");

    beginShape();
    vertex(points[5][0],points[5][1]);
    vertex(points[5][0]-5,points[5][1]-7.5);
    vertex(points[5][0]-5+((w/2)+5-points[5][0])*2,points[5][1]-7.5);
    vertex(points[5][0]+((w/2)-points[5][0])*2,points[5][1]);
    endShape(CLOSE);

    // tower top

    var pX = points[5][0];
    var pY = points[5][1]-7.5;
    var towerTopW = ((w/2)-pX)*2;
    var towerTopH = 12.5+20;

    fill("white");

    rect(pX,pY-towerTopH,towerTopW,towerTopH);

    push();
    strokeWeight(1.5);

    var pX = points[5][0]-5;
    var pY = points[5][1]-7.5;
    var balconyA = 7; // amount of balcony posts
    var balconyH = 7.5;
    var balconyB = ((w/2)-pX)*2/balconyA;

    for(let i=0; i<=balconyA; i++){

        beginShape();
        vertex(pX+(i*balconyB),pY-balconyH);
        vertex(pX+(i*balconyB),pY);
        endShape();

    }

    beginShape();
    vertex(pX,pY-balconyH);
    vertex(pX+(balconyA)*balconyB,pY-balconyH);
    endShape();

    pop();

    // tower top top

    var pY = points[5][1]-40;
    var pX = points[5][0];
    var domeH = 20;

    fill("red");

    beginShape();
    vertex(pX,pY);
    vertex((w/2),pY-domeH);
    vertex((w/2)+((w/2)-pX),pY);
    endShape(CLOSE);

    var domeTopW = 5;
    var domeTopH = 7.5;
    var pX = (w/2)-(domeTopW/2);
    var pY = pY-domeH-domeTopH/2;

    fill("black");
    noStroke();

    beginShape();
    rect(pX,pY,domeTopW,domeTopH);
    endShape(CLOSE);

    var rodH = 17.5;
    var pX = (w/2);
    var pY = pY-rodH;

    push();
    stroke("black");
    strokeWeight(1.5);

    beginShape();
    vertex(pX,pY);
    vertex(pX,pY+rodH);
    endShape(CLOSE);

    pop();

    // headlights

    var pX = points[5][0];
    var pY = points[5][1]-40;
    var towerTopW = 5;
    var towerTopH = 20;
    var ang = 30;
    var lightRange = 200;

    fill("rgb(218,165,32)");
    stroke("black");

    rect(pX,pY,towerTopW,towerTopH);

    push();
    translate(pX,pY+towerTopH/2);
    fill("rgba(218,165,32,0.5)");
    noStroke();

    arc(0,0,lightRange,lightRange,(180-ang)*Math.PI/180,(180+ang)*Math.PI/180,OPEN);

    beginShape();
    vertex(0,towerTopH/2);
    vertex(lightRange*0.5*Math.cos((180-ang)*Math.PI/180),lightRange*0.5*Math.sin((180-ang)*Math.PI/180));
    vertex(lightRange*0.5*Math.cos((180+ang)*Math.PI/180),lightRange*0.5*Math.sin((180+ang)*Math.PI/180));
    vertex(0,-towerTopH/2);
    vertex(0,towerTopW/2);
    endShape(CLOSE);
    
    pop();

    rect(pX+towerTopW,pY,((((w/2)-points[5][0]))-towerTopW)*2,towerTopH);

    var pX = (w/2)+(((w/2)-points[5][0]))-towerTopW;

    rect(pX,pY,towerTopW,towerTopH);

    push();
    translate(pX+(towerTopW),pY+towerTopH/2);
    fill("rgba(218,165,32,0.5)");
    noStroke();

    arc(0,0,lightRange,lightRange,-ang*Math.PI/180,ang*Math.PI/180,OPEN);

    beginShape();
    vertex(0,-towerTopH/2);
    vertex(lightRange*0.5*Math.cos(-ang*Math.PI/180),lightRange*0.5*Math.sin(-ang*Math.PI/180));
    vertex(lightRange*0.5*Math.cos(ang*Math.PI/180),lightRange*0.5*Math.sin(ang*Math.PI/180));
    vertex(0,towerTopH/2);
    vertex(0,-towerTopW/2);
    endShape(CLOSE);

    pop();

}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }

/* Structure:

    - Headlights
    - Tower
    - Tower Top
    - Tower Top Top
    - Rocks?
    - Background

    Source: https://static.vecteezy.com/system/resources/thumbnails/007/395/008/small_2x/seashore-view-on-sunset-with-lighthouse-and-ships-free-vector.jpg

*/
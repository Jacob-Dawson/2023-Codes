// js goes here

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var cssCheck = document.getElementById("cssCheck");
var svgCheck = document.getElementById("svgCheck");
var canvasCheck = document.getElementById("canvasCheck");
var p5Check = document.getElementById("p5Check");

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

    let w = myCanvas.width;
    let h = myCanvas.height;

    let stamenR = 30;
    let padR = 135;
    let startAng = -65;
    let endAng = 180-startAng;

    context.clearRect(0,0,w,h);

    context.save();
    context.translate(w/2,h/2);

    context.strokeStyle = "rgba(0,0,0,0.35)";
    context.shadowColor = "rgba(0,0,0,0.5)";
    context.shadowBlur = 3;

    // lilly pad

    context.fillStyle = "green";
    context.lineJoin = "round";

    context.beginPath();
    context.moveTo(0,-(padR-60));
    context.lineTo(padR*Math.cos(startAng*Math.PI/180),padR*Math.sin(startAng*Math.PI/180));
    context.arc(0,0,padR,startAng*Math.PI/180,endAng*Math.PI/180);
    context.lineTo(padR*Math.cos(endAng*Math.PI/180),padR*Math.sin(endAng*Math.PI/180));
    context.lineTo(0,-(padR-60));
    context.closePath();
    context.fill();
    context.stroke();

    // petals

    context.fillStyle = "#FF69B4";

    let petalW = 60;
    let petalH = 30;
    let petalX = petalW;
    let petalY = 0;
    let petalAmount = 8;
    let petalOrder = [2,6,1,5,0,4,3,7];

    for(let i=0; i<petalAmount; i++){

        let ang = petalOrder[i]*360/petalAmount;

        context.save();
        context.rotate(ang*Math.PI/180);

        context.shadowBlur = 7;

        context.beginPath();
        context.ellipse(petalX,petalY,petalW,petalH,0,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.stroke();
        
        context.restore();

    }

    // stamen

    context.fillStyle = "yellow";

    context.shadowBlur = 3;

    context.beginPath();
    context.arc(0,0,stamenR,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

}

function setup(){

    p5Canvas = createCanvas(300,300);
    p5Canvas.parent("myP5");

}

function draw(){

    clear();

    let w = 300;
    let h = 300;

    let stamenR = 15;
    let padR = 67.5;
    let startAng = -65;
    let endAng = 180-startAng;

    push();
    translate(w/2,h/2);

    stroke("rgba(0,0,0,0.35)");
    drawingContext.shadowColor = "rgba(0,0,0,0.5)";
    drawingContext.shadowBlur = 1.5;

    // lilly pad

    fill("green");
    strokeJoin(ROUND);

    beginShape();
    vertex(padR*Math.cos(startAng*Math.PI/180),padR*Math.sin(startAng*Math.PI/180));
    vertex(0,-(padR-30));    
    vertex(padR*Math.cos(endAng*Math.PI/180),padR*Math.sin(endAng*Math.PI/180));
    vertex(0,0);
    endShape(CLOSE);

    arc(0,0,padR*2,padR*2,startAng*Math.PI/180,endAng*Math.PI/180);

    // petals

    fill("#FF69B4");

    let petalW = 30;
    let petalH = 15;
    let petalX = petalW;
    let petalY = 0;
    let petalAmount = 8;
    let petalOrder = [2,6,1,5,0,4,3,7];

    for(let i=0; i<petalAmount; i++){

        let ang = petalOrder[i]*360/petalAmount;

        push();
        rotate(ang*Math.PI/180);

        drawingContext.shadowBlur = 3.5;

        ellipse(petalX,petalY,petalW*2,petalH*2);
        
        pop();

    }

    // stamen

    fill("yellow");

    drawingContext.shadowBlur = 1.5;

    circle(0,0,stamenR*2);

    pop();

}

/* Structure:

    - background (light blue)
    - lilly pad (green)
    - petals (pink)
    - stamen (yellow)

    Source: https://emojipedia.org/lotus#designs

*/
// js goes here

let canvas;
let context;
let w;
let h;
let anInterval;
let time;

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
w = canvas.width;
h = canvas.height;
time = 0;

anInterval = setInterval(function(){

    drawCanvas(time);
    time++;

},10);

function drawCanvas(t){

    context.clearRect(0,0,w,h);

    // declarations

    let conX = (w/2);
    let conY = (h/2);

    let seatW = 100;
    let seatH = 30;
    let seatX = conX;
    let seatY = conY+25;

    let aRestW = 100;
    let aRestH = 5;
    let aRestX = conX;
    let aRestY = conY-aRestH;

    let bRestW = 10;
    let bRestH = 100;
    let bRestX = conX+aRestW-2.5;
    let bRestY = conY-bRestH-2.5;

    let handleW = 50;
    let handleH = 10;
    let handleX = bRestX+20;
    let handleY = bRestY-handleH;

    let footRestW = 35;
    let footRestH = 3.75;
    let footRestX = (conX-42.5)-footRestW;
    let footRestY = (conY+seatH+77.5)-footRestH*2;

    let sWheelR = 15;
    let sWheelX = conX-2.5;
    let sWheelY = conY+seatH+92.5;
    let spokesAmount = 8;

    let bWheelR = 45;
    let bWheelX = conX+aRestW+2.5;
    let bWheelY = sWheelY-seatH;
    let bSpokesAmount = 16;

    // connectors

    context.strokeStyle = "grey";
    context.lineWidth = "5";
    context.lineJoin = "round";

    context.beginPath();
    context.moveTo(conX-2.5,conY);
    context.lineTo(conX+aRestW+2.5,conY);
    context.lineTo(conX+aRestW+2.5,conY+seatH+27.5);
    context.lineTo(conX-2.5,conY+seatH+27.5);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(conX-2.5,conY+seatH+27.5);
    context.lineTo(conX-17.5,conY+seatH+27.5);
    context.lineTo(conX-17.5,conY+seatH+77.5);
    context.lineTo(conX-2.5,conY+seatH+92.5);
    context.stroke();

    context.beginPath();
    context.moveTo(conX-17.5,conY+seatH+40);
    context.lineTo(conX-32.5,conY+seatH+40);
    context.lineTo(conX-42.5,conY+seatH+77.5);
    context.stroke();

    context.beginPath();
    context.moveTo(conX+aRestW+2.5,conY+seatH+27.5);
    context.lineTo(bWheelX,bWheelY);
    context.stroke();

    context.beginPath();
    context.moveTo(bRestX+bRestW/2,bRestY+10);
    context.lineTo(bRestX+bRestW/2,handleY+handleH/2);
    context.lineTo(handleX,handleY+handleH/2);
    context.stroke();

    // small wheel

    context.save();
    context.translate(sWheelX,sWheelY);
    context.rotate(-t*Math.PI/180);
    context.translate(-sWheelX,-sWheelY);

    context.strokeStyle = "grey";
    context.lineWidth = "3";

    for(let i=0; i<spokesAmount; i++){

        let ang = i*(360/spokesAmount);

        context.save();
        context.translate(sWheelX,sWheelY);
        context.rotate(ang*Math.PI/180);
        context.translate(-sWheelX,-sWheelY);

        context.beginPath();
        context.moveTo(sWheelX,sWheelY);
        context.lineTo(sWheelX+sWheelR,sWheelY);
        context.closePath();
        context.stroke();

        context.restore();

    }

    context.strokeStyle = "black";
    context.lineWidth = "5";

    context.beginPath();
    context.arc(sWheelX,sWheelY,sWheelR,0,Math.PI*2);
    context.closePath();
    context.stroke();

    context.restore();

    // foot rest

    context.strokeStyle = "black";
    context.lineWidth = "1";
    context.fillStyle = "steelblue";

    context.beginPath();
    context.rect(footRestX,footRestY,footRestW,footRestH);
    context.closePath();
    context.fill();

    context.strokeStyle = "black";
    context.lineWidth = "1";
    context.fillStyle = "black";

    context.beginPath();
    context.rect(footRestX,footRestY+footRestH,footRestW,footRestH);
    context.closePath();
    context.fill();

    // seat

    context.strokeStyle = "black";
    context.lineWidth = "1";
    context.fillStyle = "steelblue";

    context.beginPath();
    context.rect(seatX,seatY,seatW,seatH);
    context.closePath();
    context.fill();

    // arm rest

    context.strokeStyle = "black";
    context.lineWidth = "1";
    context.fillStyle = "steelblue";

    context.beginPath();
    context.rect(aRestX,aRestY-aRestH/2,aRestW,aRestH);
    context.closePath();
    context.fill();

    // back rest

    context.strokeStyle = "black";
    context.lineWidth = "1";
    context.fillStyle = "steelblue";

    context.beginPath();
    context.roundRect(bRestX,bRestY,bRestW,bRestH,5,5,5,5);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(bRestX+bRestW,bRestY+20);
    context.lineTo(bRestX+bRestW+10,bRestY+20+bRestH/4);
    context.lineTo(bRestX+bRestW+10,bRestY+20+(3/4)*bRestH);
    context.lineTo(bRestX+5,bRestY+20+bRestH);
    context.closePath();
    context.fill();

    // handles

    context.strokeStyle = "black";
    context.lineWidth = "1";
    context.fillStyle = "black";

    context.beginPath();
    context.moveTo(handleX,handleY);
    context.lineTo(handleX+handleW,handleY);
    context.lineTo(handleX+handleW,handleY+handleH);
    context.lineTo(handleX,handleY+handleH);
    context.closePath();
    context.fill();

    // big wheel

    context.save();
    context.translate(bWheelX,bWheelY);
    context.rotate(-t*Math.PI/180);
    context.translate(-bWheelX,-bWheelY);

    context.strokeStyle = "grey";
    context.lineWidth = "3";

    for(let i=0; i<bSpokesAmount; i++){

        let ang = i*(360/bSpokesAmount);

        context.save();
        context.translate(bWheelX,bWheelY);
        context.rotate(ang*Math.PI/180);
        context.translate(-bWheelX,-bWheelY);

        context.beginPath();
        context.moveTo(bWheelX,bWheelY);
        context.lineTo(bWheelX+bWheelR,bWheelY);
        context.closePath();
        context.stroke();

        context.restore();

    }

    context.strokeStyle = "grey";
    context.lineWidth = "3";

    context.beginPath();
    context.arc(bWheelX,bWheelY,bWheelR*0.85,0,Math.PI*2);
    context.closePath();
    context.stroke();

    context.strokeStyle = "black";
    context.lineWidth = "5";

    context.beginPath();
    context.arc(bWheelX,bWheelY,bWheelR,0,Math.PI*2);
    context.closePath();
    context.stroke();

    context.restore();

}

// https://emojipedia.org/manual-wheelchair#emoji
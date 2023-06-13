// js goes here

/*

    CSS:
    SVG:
    Canvas: Car / Van Wheels
    p5: 

    bicycle?


*/

var canvas = document.getElementById("myCanvas");
var w = canvas.width;
var h = canvas.height;
var context = canvas.getContext("2d");

drawCanvas();

function drawCanvas(){

    var baseR = 200;
    var tireR = 1;
    var owR = 0.7;
    var rR = 0.625;
    var holeRStart = 0.525;
    var holeREnd = 0.2;
    var lugPosR = 0.15;

    // tire

    context.fillStyle = "black";

    context.beginPath();
    context.arc(w/2,h/2,baseR*tireR,0,Math.PI*2);
    context.fill();
    context.closePath();

    // outer wheel

    context.fillStyle = "silver";

    context.beginPath();
    context.arc(w/2,h/2,baseR*owR,0,Math.PI*2);
    context.fill();
    context.closePath();

    // rim

    context.fillStyle = "silver";

    context.beginPath();
    context.arc(w/2,h/2,baseR*rR,0,Math.PI*2);
    context.fill();
    context.closePath();
    context.stroke();

    // holes

    context.fillStyle = "white";
    var sides = 5;

    for(let i=0; i<5; i++){

        var ang = (360/sides)*i;
        var spread = 22.5;
        var angEnd = ang-spread;
        var angStart = ang+spread;

        context.beginPath();

        // bottom left
        context.moveTo((w/2)+(holeREnd*baseR)*Math.cos(angEnd*Math.PI/180),(h/2)+(holeREnd*baseR)*Math.sin(angEnd*Math.PI/180));
        // top left
        context.lineTo((w/2)+(holeRStart*baseR)*Math.cos(angEnd*Math.PI/180),(h/2)+(holeRStart*baseR)*Math.sin(angEnd*Math.PI/180));

        // top curve
        context.arc((w/2),(h/2),(holeRStart*baseR),angEnd*Math.PI/180,angStart*Math.PI/180);

        // top right
        context.lineTo((w/2)+(holeRStart*baseR)*Math.cos(angStart*Math.PI/180),(h/2)+(holeRStart*baseR)*Math.sin(angStart*Math.PI/180));

        // bottom right
        context.lineTo((w/2)+(holeREnd*baseR)*Math.cos(angStart*Math.PI/180),(h/2)+(holeREnd*baseR)*Math.sin(angStart*Math.PI/180));

        // bottom curve
        context.arc((w/2),(h/2),(holeREnd*baseR),angStart*Math.PI/180,angEnd*Math.PI/180,true);

        context.closePath();
        context.fill();
        context.stroke();

    }

    // lug

    context.fillStyle = "white";

    var lugR = 20;

    for(let i=0; i<sides; i++){

        var ang = (360/sides)*i;

        var pX = (w/2)+lugPosR*Math.cos(ang*Math.PI/180);
        var pY = (h/2)+lugPosR*Math.sin(ang*Math.PI/180);

        context.beginPath();
        context.arc(pX,pY,lugR,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.stroke();

    }

    // hub

}
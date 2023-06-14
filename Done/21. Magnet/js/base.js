// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var pMouseX,pMouseY;
var movementFlag = false;
var nails = buildArray(500);
canvas.addEventListener("mousemove",getCurrentPosition,true);

draw(w/2,h/2);

function draw(magX,magY){

    var magnetR = 50;
    var armH = magnetR*0.6;
    var attractionR = 50;

    context.clearRect(0,0,w,h);

    // Magnet

    context.save();
    context.translate(magX,magY-magnetR);

    context.fillStyle = "red";

    context.beginPath();
    context.moveTo(magnetR,0);
    context.arc(0,0,magnetR,0,-Math.PI,true);
    context.lineTo(-magnetR,0);
    context.lineTo(-magnetR,armH);
    context.lineTo(-magnetR/2.5,armH);
    context.lineTo(-magnetR/2.5,0);
    context.arc(0,0,magnetR/2.5,-Math.PI,0);
    context.lineTo(magnetR/2.5,armH);
    context.lineTo(magnetR,armH);
    context.lineTo(magnetR,0);
    context.closePath();
    context.fill();
    context.stroke();

    context.save();
    context.translate(0,armH);

    context.fillStyle = "darkgrey";

    context.beginPath();
    context.moveTo(-magnetR,0);
    context.lineTo(-magnetR,armH*0.8);
    context.lineTo(-magnetR/2.5,armH*0.8);
    context.lineTo(-magnetR/2.5,0);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    context.save();
    context.translate(0,armH);

    context.fillStyle = "darkgrey";

    context.beginPath();
    context.moveTo(magnetR,0);
    context.lineTo(magnetR,armH*0.8);
    context.lineTo(magnetR/2.5,armH*0.8);
    context.lineTo(magnetR/2.5,0);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    context.restore();

    // Nails

    var nailW = 5;
    var nailTopW = 10;
    var nailH = 30;
    var nailTopH = 10;

    context.fillStyle = "grey";

    for(let i=0; i<nails.length; i++){

        var pX = nails[i][0];
        var pY = nails[i][1];
        var ang = nails[i][2];

        if(movementFlag === true){

            movementFlag = false;

        } else if(nails[i][3] === true){

            context.save();
            context.translate(magX+nails[i][4],magY);
            ang = nails[i][5];

        } else if(pX - magX < attractionR && pY - magY < attractionR && pX - magX > 0 && pY - magY > 0){

            nails[i][3] = true;

            context.save();
            context.translate(magX,magY);

        } else if(magX - pX < attractionR && magY - pY < attractionR && magX - pX > 0 && magY - pY > 0){

            nails[i][3] = true;
        
            context.save();
            context.translate(magX,magY);
        
        } else {

            context.save();
            context.translate(pX,pY);

        }

        context.save();
        context.rotate(ang*Math.PI/180);

        context.beginPath();
        context.moveTo(-(nailW/2),-(nailH/2));
        context.lineTo(-(nailW/2)-(nailTopW/2),-(nailH/2)-(nailTopH/2));
        context.lineTo((nailW/2)+(nailTopW/2),-(nailH/2)-(nailTopH/2));
        context.lineTo((nailW/2),-(nailH/2));
        context.lineTo((nailW/2),(nailH/2));
        context.lineTo(0,(nailH/2)+5);
        context.lineTo(-(nailW/2),(nailH/2));
        context.closePath();
        context.fill();
        context.stroke();

        context.restore();
        context.restore();

    }

}

function getCurrentPosition(event){

    movementFlag = true;
    var rect = canvas.getBoundingClientRect();
    var pX = (event.clientX - canvas.offsetLeft)*2;
    var pY = (event.clientY - canvas.offsetTop)*2;

    draw(pX,pY);

}

function buildArray(amount){

    var result = [];
    var magnetR = 50;

    for(let i=0; i<amount; i++){

        var temp = [];
        
        var pX = Math.round(Math.random()*w);
        var pY = Math.round(Math.random()*h);
        var ang = Math.random()*360;
        var pX2;
        var spread = 40;
        var ang2 = (Math.random()*spread)+(90-spread/2);

        if(Math.floor(Math.random()*2) == 0){

            ang2 += 180;

        }
        
        if(i%2 == 0){

            pX2 = -magnetR;

        } else{

            pX2 = magnetR;

        }

        result.push([pX,pY,ang,false,pX2*0.75,ang2]);

    }

    return result;

}
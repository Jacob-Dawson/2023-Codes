// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width
var h = canvas.height;
var previousPositions = [0,0,0,0,0,0,0,0,0,0];
var currAng = 0;
var finalAng = 0;
var mouseMoveFlag = false;
canvas.addEventListener("mousemove",getCurrentPosition,false);

anInterval = setInterval(function(){

    if(mouseMoveFlag === false){

        previousPositions.unshift(currAng);
        previousPositions.pop();

    } else {

        mouseMoveFlag = false;

    }

    finalAng = getAverage(previousPositions);
    drawCanvas(finalAng);

},100);

function drawCanvas(cAng){

    var innerR = 20;
    var pointerR = 150;
    var ang = 360/8;

    var dirMarkers = ["N","NE","E","SE","S","SW","W","NW"];

    context.clearRect(0,0,w,h);

    context.save();
    context.translate(0,0);

    context.lineWidth = "3";
    context.strokeStyle = "black";
    context.fillStyle = "goldenrod";

    context.beginPath();
    context.arc(w/2,h/2,215,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    context.lineWidth = "5";
    context.strokeStyle = "goldenrod";
    context.fillStyle = "skyblue";
 
    context.beginPath();
    context.arc(w/2,h/2,200,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = "rgba(255,255,255,0.25)";

    context.beginPath();
    context.arc(w/2,h/2,pointerR+25,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.lineWidth = "1";

    for(let i=0; i<8; i++){

        var radiusMult = 1;
        var angSlice = ((ang*i))*Math.PI/180;

        if(i%2 == 1){

            radiusMult = 0.75;

        }

        context.save();
        context.translate(w/2,h/2);
        context.rotate(angSlice);
        context.translate(-w/2,-h/2);

        context.fillStyle = "yellow";

        context.beginPath();
        context.moveTo((w/2)-innerR*radiusMult,(h/2));
        context.lineTo((w/2),(h/2)-pointerR*radiusMult);
        context.lineTo((w/2),h/2);
        context.closePath();
        context.fill();

        context.fillStyle = "gold";

        context.beginPath();
        context.moveTo((w/2)+innerR*radiusMult,(h/2));
        context.lineTo((w/2),(h/2)-pointerR*radiusMult);
        context.lineTo((w/2),h/2);
        context.closePath();
        context.fill();

        context.restore();

    }

    for(let i=0; i<8; i++){

        var radiusMult = 1;
        var buffer = 10;
        var fontSize = 30;

        if(i%2 == 1){

            radiusMult = 0.8;
            
        }

        var pX = (w/2)+(pointerR+buffer)*radiusMult*Math.cos((-90+(ang*i))*Math.PI/180);
        var pY = (h/2)+(pointerR+buffer)*radiusMult*Math.sin((-90+(ang*i))*Math.PI/180);

        context.font = ""+(fontSize*radiusMult)+"px Arial";
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.fillText(""+dirMarkers[i],pX,pY);
        context.strokeText(""+dirMarkers[i],pX,pY);

    }

    context.save();
    context.translate(w/2,h/2);
    context.rotate(cAng*Math.PI/180);
    context.translate(-w/2,-h/2);

    var radiusMult = 1.3;

    context.fillStyle = "red";

    context.beginPath();
    context.moveTo((w/2)-innerR,(h/2));
    context.lineTo((w/2),(h/2)-pointerR*radiusMult);
    context.lineTo((w/2)+innerR,h/2);
    context.closePath();
    context.fill();

    context.fillStyle = "blue";

    context.beginPath();
    context.moveTo((w/2)-innerR,(h/2));
    context.lineTo((w/2),(h/2)+pointerR*radiusMult);
    context.lineTo((w/2)+innerR,h/2);
    context.closePath();
    context.fill();

    context.restore();

    for(let i=0; i<72; i++){

        let ang = 360/72;
        let pX = w/2;
        let pY = h/2;

        context.save();
        context.translate(w/2,h/2);
        context.rotate(i*ang*Math.PI/180);

        context.fillStyle = "goldenrod";
        context.strokeStyle = "goldenrod";
        context.lineWidth = "5";

        context.beginPath();

        if(i%2 == 0){

            context.moveTo(0,-pointerR*1.35);
            context.lineTo(0,-pointerR*1.35+15);

        } else {

            context.moveTo(0,-pointerR*1.35);
            context.lineTo(0,-pointerR*1.35+10);

        }
    
        context.stroke();

        context.restore();

    }

    context.fillStyle = "white";

    context.beginPath();
    context.arc(w/2,h/2,15,0,Math.PI*2);
    context.closePath();
    context.fill();

}

function getCurrentPosition(e){

    var sizeFactor = 2;

    var canvasRect = canvas.getBoundingClientRect();

    var pX = (e.clientX - canvasRect.left)*sizeFactor;
    var pY = (e.clientY - canvasRect.top)*sizeFactor;

    currAng = (Math.atan2((pY-(w/2)),(pX-(h/2))) *(180/Math.PI) +90);

    previousPositions.unshift(currAng);
    previousPositions.pop();

    mouseMoveFlag = true;

}

function getAverage(arr){

    var result = 0;

    for(let i=0; i<arr.length; i++){
        
        result+= arr[i]%360;

    }

    result = result/arr.length;

    //console.log(result);

    return result;

}

// https://www.dkfindout.com/uk/maths/coordinates/how-to-read-compass/
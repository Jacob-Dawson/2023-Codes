// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var anInterval;
var t = 0;
var threadLength = 400;
var threadPoints = threadBuilder(threadLength,16);

anInterval = setInterval(function(){

    draw(t);

    if(t >= threadLength){
        
        t = 0;
        threadPoints = threadBuilder(threadLength,16);

    } else {

        t++;

    }

},10);


function draw(time){

    context.clearRect(0,0,w,h);

    var tHolderTopW = 60;
    var tHolderTopH = 120;
    var ratioFactor = 0.6;
    var threadSpacingFactor = 50;

    context.save();
    context.translate(-0.4*w,0);

    // loose thread

    context.lineWidth = "5"
    context.strokeStyle = "black";
    context.lineJoin = "round";

    context.beginPath();
    //context.moveTo(w/2,h/2);

    for(let i=0; i<threadPoints.length; i++){

        if(i > time){

            break;

        } else {

            context.lineTo((w/2)+threadSpacingFactor*(threadLength*(time-i)*(1/threadLength)),(h/2)-(45)+threadPoints[i]*((8*tHolderTopH/10)/16));

        }

    }

    context.stroke();
    context.closePath();

    context.lineWidth = "3";
    context.strokeStyle = "blue";
    context.lineJoin = "round";

    context.beginPath();
    //context.moveTo(w/2,h/2);

    for(let i=0; i<threadPoints.length; i++){

        if(i > time){

            break;

        } else {

            context.lineTo((w/2)+threadSpacingFactor*(threadLength*(time-i)*(1/threadLength)),(h/2)-(45)+threadPoints[i]*((8*tHolderTopH/10)/16));

        }

    }

    context.stroke();
    context.closePath();

    // thread holder bottom

    context.fillStyle = "sienna";
    context.lineWidth = "2";
    context.strokeStyle = "black";

    context.beginPath();
    context.rect((w/2)-(tHolderTopW/2),(h/2)+4*(tHolderTopH/10),tHolderTopW,(tHolderTopH/10));
    context.closePath();

    context.fill();
    context.stroke();

    // thread holder middle

    context.fillStyle = "sienna";
    context.lineWidth = "2";
    context.strokeStyle = "black";

    context.beginPath();
    context.rect((w/2)-ratioFactor*(tHolderTopW/2)*0.5,(h/2)-4*(tHolderTopH/10),ratioFactor*tHolderTopW*0.5,8*(tHolderTopH/10));
    context.closePath();

    context.fill();
    context.stroke();

    //

    var scaleFactor = 1-(0.82*((time%threadLength)/threadLength));

    context.save();
    context.translate(-(w/2)*(scaleFactor-1),0);
    context.scale(scaleFactor,1);

    // thread itself (outline)

    var lineThickness = 6;

    context.strokeStyle = "black";
    context.lineWidth = ""+lineThickness;
    context.lineCap = "round";

    var segmentLength = 0.1*tHolderTopH;
    var batchLength = 5; // amount of segments per row on the front
    var rowLength = 16; // the rows in the thread
    var pX = (w/2)-(tHolderTopW*0.25)-10;
    var pY = (h/2)-4*(tHolderTopH/10)+2.5;

    var threadWide = 70;

    for(let i=0; i<16; i++){

        context.beginPath();

        context.moveTo((w/2)-(threadWide/2),(h/2)-(45)+i*((8*tHolderTopH/10)/16));
        context.lineTo((w/2)+(threadWide/2),(h/2)-(45)+i*((8*tHolderTopH/10)/16));

        context.stroke();

    }

    // thread itself (main)

    var lineThickness = 5;

    context.strokeStyle = "blue";
    context.lineWidth = ""+lineThickness;
    context.lineCap = "round";

    for(let i=0; i<16; i++){

        context.beginPath();

        context.moveTo((w/2)-(threadWide/2),(h/2)-(45)+i*((8*tHolderTopH/10)/16));
        context.lineTo((w/2)+(threadWide/2),(h/2)-(45)+i*((8*tHolderTopH/10)/16));

        context.stroke();

    }

    context.restore();

    // thread holder top

    context.fillStyle = "sienna";
    context.lineWidth = "2";
    context.strokeStyle = "black";

    context.beginPath();
    context.rect((w/2)-(tHolderTopW/2),(h/2)-5*(tHolderTopH/10),tHolderTopW,(tHolderTopH/10));
    context.closePath();

    context.fill();
    context.stroke();
    
    context.restore();

}

function threadBuilder(amount,maxN){

    var result = [];
    var randNum = Math.floor(Math.random()*maxN);
    var range = 1;

    for(let i=0; i<amount; i++){

        var rangeNum = Math.round(Math.random()*(range*2))-(range);

        if(rangeNum + randNum < 0 || rangeNum + randNum > maxN){

            i--;
            continue;

        } else {

            randNum = rangeNum + randNum;

        }
        
        result.push(randNum);

    }

    //console.log(result);

    return result;

}

// source: https://emojipedia.org/thread/  
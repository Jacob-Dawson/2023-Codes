// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var frames = 0;
var cols = ["blue","green","red","yellow","purple","cyan"];
var time = 0;
var anInterval;
var mode;
var limit = 500;
var loadVal = 0;
var loadJumps = [[0,150],[1,195],[2,197],[3,198],[5,199],[10,200]];
loadLoadingBar();

anInterval = setInterval(function(){

    draw(time);
    time++;

},10);

function draw(t){

    context.clearRect(0,0,w,h);

    // spiral

    context.save();
    context.translate((w/2),0.3*h);

    var r = 5;

    for(let i=0; i<cols.length; i++){

        var factor = i/20;

        if(mode === true){

            constructSpiral(limit,5,cols[i],r,factor,i*360/cols.length,(loadVal%limit))
            
        } else {

            constructSpiral(limit,5,cols[i],r,factor,i*360/cols.length,(t%limit))

        }

    }

    context.restore();

    // bar

    let barWidth = w*0.6;
    let barX = (w/2)-(barWidth/2);
    let barHeight = 40;
    let buffer = 5;
    loadVal = loadVal + getLoadJump(loadJumps);

    if(loadVal > 500){

        loadVal = 500;

    }

    context.save();
    context.translate(0,0.75*h);

    context.fillStyle = "black";

    context.beginPath();
    context.roundRect(barX-buffer,-buffer,barWidth+(buffer*2),barHeight+(buffer*2),buffer*2);
    context.closePath();
    context.fill();

    context.fillStyle = "green";

    context.beginPath();
    context.roundRect(barX,0,(loadVal/500)*(barWidth),barHeight,5);
    context.closePath();
    context.fill();

    context.restore();

    // Text

    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "60px Belanosima, Arial";
    context.beginPath();
    context.fillText(Math.floor(loadVal/5)+"%",(w/2)+10,h*0.62);
    context.closePath();

    // Reload

    if(loadVal == 500){

        clearInterval(anInterval);
        time = 0;
        loadVal = 0;
        loadLoadingBar();

        setTimeout(function(){

            anInterval = setInterval(function(){

                draw(time);
                time++;
            
            },10);

        },2000);

    }

}

function constructSpiral(lim,lineWidth,col,radius,factor,rot,t){

    context.save();
    context.rotate(rot*Math.PI/180);

    context.lineWidth = ""+lineWidth;
    context.strokeStyle = ""+col;

    context.beginPath();
    context.moveTo(0,0);

    for(let i=0; i<t; i++){

        var factor = i/20;
        
        var pX = (radius * factor) * Math.cos(factor);
        var pY = (radius * factor) * Math.sin(factor);
        context.lineTo(pX,pY);

    }

    context.stroke();

    context.restore();

}

function loadLoadingBar(){

    let randNum = Math.floor(Math.random()*2);

    if(randNum == 0){

        mode = true;

    } else {

        mode = false;

    }

}

function getLoadJump(jumps){

    let randNum = Math.floor(Math.random()*jumps[jumps.length-1][1]);

    for(let i = 0; i<jumps.length; i++){

        if(randNum < jumps[i][1]){

            result = jumps[i][0];
            break;

        }

    }

    return result;

}
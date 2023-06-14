// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var frames = 0;
var time = 0;
var anInterval;
var sColours = getCols(256);

anInterval = setInterval(function(){

    draw(time);

    if(time > 1000){

        time = 0;
        sColours = getCols(256);

    } else {

        time++;

    }

},10);

function draw(t){

    context.clearRect(0,0,w,h);

    var scaleFactor = 1.75;

    context.save();
    context.translate(-(w/2)*(scaleFactor-1),-(h/2)*(scaleFactor-1));
    context.scale(scaleFactor,scaleFactor);

    // stick

    var stickW = 10;
    var stickH = (h/2)-75;

    context.strokeStyle = "black";
    context.lineWidth = 1;

    context.save();
    context.translate((w/2)-(stickW/2),(h/2)-(stickH/2)+25);

    context.fillStyle = "burlywood";

    context.beginPath();
    context.rect(0,0,stickW,stickH);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    // swirl

    var swirlR = 5;

    context.save();
    context.translate(w/2,(h/2)-100);

    context.beginPath();
    context.arc(0,0,swirlR*10,0,Math.PI*2);
    context.clip();
    
    context.lineWidth = swirlR*1.66;

    //

    for(let j=0; j<sColours.length; j++){

        context.save();
        context.rotate(j*Math.PI/2);

        context.strokeStyle = ""+sColours[j];

        context.beginPath();
        context.moveTo(0,0);

        for(let i=0; i<100; i+=0.05){

            var pX = swirlR*i*Math.cos(i);
            var pY = swirlR*i*Math.sin(i);
            context.lineTo(pX,pY);

        }

        context.stroke();

        context.restore();

    }

    context.restore();

    // wrapper

    let wrapperH = 110;
    let wrapperW = 110;

    context.save();

    context.translate(w/2,(h/2)-100-(t));

    context.fillStyle = "rgba(200,200,255,0.3)";
    context.strokeStyle = "rgba(0,0,0,0.3)";

    context.beginPath();
    context.roundRect(-(wrapperW/2),-55,wrapperW,wrapperH,5);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    context.restore();

}

function getCols(max){

    let result;
    let rCol1,rCol2,rCol3,rCol4;
    let gCol1,gCol2,gCol3,gCol4;
    let bCol1,bCol2,bCol3,bCol4;
    let randNum = Math.floor(Math.random()*max);
    let randNum2 = Math.floor(Math.random()*max);
    let randNum3 = Math.floor(Math.random()*max);

    bCol1 = randNum;
    bCol2 = bCol1;
    bCol3 = max-1-bCol1;
    bCol4 = bCol3;

    gCol1 = randNum2;
    gCol2 = bCol3;
    gCol3 = max-1-gCol1;
    gCol4 = bCol1;
    
    rCol1 = bCol3;
    rCol2 = randNum3;
    rCol3 = bCol1;
    rCol4 = max-1-rCol2;

    result = [""+makeRGB(rCol1,gCol1,bCol1),""+makeRGB(rCol2,gCol2,bCol2),""+makeRGB(rCol3,gCol3,bCol3),""+makeRGB(rCol4,gCol4,bCol4)];

    return result;

}

function makeRGB(r,g,b){

    result = "rgb("+r+","+g+","+b+")";

    return result;

}

// https://emojipedia.org/lollipop/

/*

    Tetradic

    rgb(202, 67, 53)
    rgb(114, 202, 53)
    rgb(53, 188, 202)
    rgb(141, 53, 202)


*/
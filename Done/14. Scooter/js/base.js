// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var t = 0;
var anInterval;
var treeMatrix = buildMatrix(30);

anInterval = setInterval(function(){

    draw(t%(w*2));
    t++;

},10);

function draw(time){

    var wheelR = 25;
    var wheelSpokes = 6;
    var fPlatformW = 175;
    var fPlatformH = 10
    var vBarW = 10;
    var vBarH = 140;

    context.clearRect(0,0,w,h);

    // background

    context.save();
    context.translate(time,0);

    // sky

    context.fillStyle = "lightgrey";

    context.beginPath();
    context.rect(-2*w,0,3*w,h*0.45);
    context.fill();
    context.closePath();

    // grass

    context.fillStyle = "rgb(100,200,100)";

    context.beginPath();
    context.rect(-2*w,h*0.45,3*w,h*0.55);
    context.fill();
    context.closePath();

    // trees

    let treeSmallW = 5;
    let treeBigW = 20;
    let treeTopH = 50;
    let treeBottomH = 20;

    for(let i=0; i<30; i++){

        let pX = -treeMatrix[i][0]+(w);
        let pY = treeMatrix[i][1];

        context.fillStyle = "brown";
        context.beginPath();
        context.rect(pX-(treeSmallW/2),pY,treeSmallW,treeBottomH);
        context.fill();
        context.closePath();

        context.fillStyle = "green";
        context.beginPath();
        context.moveTo(pX-(treeBigW/2),pY);
        context.lineTo(pX-(treeSmallW/2),pY-treeTopH);
        context.lineTo(pX+(treeSmallW/2),pY-treeTopH);
        context.lineTo(pX+(treeBigW/2),pY);
        context.fill();
        context.closePath();

    }

    // path

    context.fillStyle = "sienna";

    context.beginPath();
    context.rect(-2*w,(h/2)-35+110,w*3,70);
    context.fill();
    context.closePath();

    context.restore();

    // scooter

    context.save();
    context.translate(w/2,(h/2)+100);
    context.scale(1.3,1.3);
    context.translate(-w/2,-(h/2));

    // wheel arcs

    context.save();
    context.translate(100,0);

    context.fillStyle = "gold";

    context.beginPath();
    context.moveTo(w/2,h/2);
    context.lineTo((w/2)-wheelR*1.2,(h/2));
    context.arc(w/2,h/2,wheelR*1.2,-180*Math.PI/180,-80*Math.PI/180);
    context.moveTo((w/2)+wheelR*1.2*Math.cos(10*Math.PI/180),(h/2)+wheelR*1.2*Math.sin(10*Math.PI/180));
    context.lineTo(w/2,h/2);
    context.closePath();
    context.fill();

    context.restore();

    context.save();
    context.translate(-100,0);

    context.fillStyle = "gold";

    context.beginPath();
    context.moveTo((w/2),h/2);
    context.lineTo((w/2)+wheelR*1.5*Math.cos(-75*Math.PI/180),(h/2)+wheelR*1.5*Math.sin(-75*Math.PI/180));
    context.arc((w/2),h/2,wheelR*1.5,-75*Math.PI/180,5*Math.PI/180);
    context.moveTo((w/2)+wheelR*1.5*Math.cos(5*Math.PI/180),(h/2)+wheelR*1.5*Math.sin(5*Math.PI/180));
    context.lineTo((w/2),h/2);
    context.closePath();
    context.fill();

    context.restore();

    // wheels

    // back wheel

    context.save();
    context.translate(100,0);
    context.translate(w/2,h/2);
    context.rotate(-time*Math.PI/180);
    context.translate(-w/2,-h/2);

    context.fillStyle = "black";

    context.beginPath();
    context.arc(w/2,h/2,wheelR,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.fillStyle = "silver";

    context.beginPath();
    context.arc(w/2,h/2,wheelR*0.8,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.fillStyle = "sienna";

    context.beginPath();
    context.arc(w/2,h/2,wheelR*0.7,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.fillStyle = "silver";

    for(let i=0; i<wheelSpokes; i++){

        context.save();
        context.translate((w/2),(h/2));
        context.rotate((i+0.5)*60*Math.PI/180);
        context.translate(-(w/2),-(h/2));

        context.beginPath();
        context.rect((w/2),(h/2)-2.5,wheelR*0.7,5);
        context.closePath();
        context.fill();

        context.restore();

    }

    context.restore();

    // front wheel

    context.save();
    context.translate(-100,0);
    context.translate(w/2,h/2);
    context.rotate(-time*Math.PI/180);
    context.translate(-w/2,-h/2);

    context.fillStyle = "black";

    context.beginPath();
    context.arc(w/2,h/2,wheelR,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.fillStyle = "silver";

    context.beginPath();
    context.arc(w/2,h/2,wheelR*0.8,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.fillStyle = "sienna";

    context.beginPath();
    context.arc(w/2,h/2,wheelR*0.7,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.fillStyle = "silver";

    for(let i=0; i<wheelSpokes; i++){

        context.save();
        context.translate((w/2),(h/2));
        context.rotate((i+0.5)*60*Math.PI/180);
        context.translate(-(w/2),-(h/2));

        context.beginPath();
        context.rect((w/2),(h/2)-2.5,wheelR*0.7,5);
        context.closePath();
        context.fill();

        context.restore();

    }

    context.restore();

    // foot platform

    context.save();
    context.translate(17.5,0);

    context.fillStyle = "gold";

    context.beginPath();
    context.roundRect((w/2)-(fPlatformW/2),(h/2)-(fPlatformH/2),fPlatformW,fPlatformH,5);
    context.closePath();
    context.fill();

    context.restore();

    // vertical bar

    context.save();
    context.translate(-100,0);
    context.translate(w/2,h/2);
    context.rotate(15*Math.PI/180);
    context.translate(-w/2,-h/2);

    context.fillStyle = "silver";
    
    context.beginPath();
    context.rect((w/2)-(vBarW/2),(h/2)-vBarH-40,vBarW,vBarH);
    context.closePath();
    context.fill();

    context.fillStyle = "grey";
    
    context.beginPath();
    context.rect((w/2)-((vBarW+5)/2),(h/2)-vBarH-40,vBarW+5,35);
    context.closePath();
    context.fill();

    context.fillStyle = "goldenrod";
    
    context.beginPath();
    context.rect((w/2)-((vBarW+5)/2),(h/2)-50,vBarW+5,25);
    context.closePath();
    context.fill();

    context.restore();

    // front wheel holder

    // handle bar

    context.save();
    context.translate(-100,0);
    context.translate(w/2,h/2);
    context.rotate(15*Math.PI/180);
    context.translate(-w/2,-h/2);

    context.fillStyle = "red";

    context.beginPath();
    context.arc((w/2),(h/2)-vBarH-35,10,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.restore();

    context.restore();

}

function buildMatrix(amount){

    var maxW = 3*w;
    var maxH = h*0.1;
    let result = [];

    for(let i=0; i<amount; i++){

        let temp = [];

        temp.push(Math.random()*(maxW));
        temp.push((Math.random()*(maxH))+0.45*h);

        result.push(temp);

    }

    result.sort(compareSecondColumn);

    return result;

}

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}
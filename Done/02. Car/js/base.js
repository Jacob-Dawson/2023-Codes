// js goes here

var canvas = document.getElementById("myCanvas");
var w = canvas.width;
var h = canvas.height;
var context = canvas.getContext("2d");
var time = 0;
var amount = 50;
var treeAreaW = w*5;
var treeAreaH = ((0.4*h)-(0.3*h));
var trees = buildTrees(amount,treeAreaW,treeAreaH);

anInterval = setInterval(function(){

    drawCanvas(-time);
    time+=1.5;

},10);

function drawCanvas(posA){

    context.clearRect(0,0,w,h);

    // background
    
    context.fillStyle = "skyblue";

    context.beginPath();
    context.rect(0,0,w,0.3*h);
    context.closePath();
    context.fill();

    context.fillStyle = "rgb(0,210,0)";

    context.beginPath();
    context.rect(0,0.3*h,w,0.7*h);
    context.closePath();
    context.fill();

    context.fillStyle = "grey";

    context.beginPath();
    context.rect(0,(h/2)-25,w,75);
    context.closePath();
    context.fill();
    context.stroke();

    var treeTopW = 15;
    var treeTopH = 80;
    var treeBottomW = 10;
    var treeBottomH = 40;

    for(let i=0; i<trees.length; i++){

        var pX = (trees[i][0]+time)%(treeAreaW);
        var pY = trees[i][1]-10;

        context.fillStyle = "brown";

        context.beginPath();
        context.rect(pX-(treeBottomW/2),pY,treeBottomW,treeBottomH);
        context.closePath();
        context.fill();
        context.stroke();

        context.fillStyle = "green";

        context.beginPath();
        context.moveTo(pX-(treeBottomW/2)-treeTopW,pY);
        context.lineTo(pX,pY-treeTopH);
        context.lineTo(pX+(treeBottomW/2)+treeTopW,pY);
        context.closePath();
        context.fill();
        context.stroke();

    }

    context.fillStyle = "steelblue";

    context.beginPath();
    context.roundRect(((0.2*w)+time)%treeAreaW,0.7*h,300,200,150);
    context.closePath();
    context.fill();
    context.stroke();

    // car

    drawCar();

    // wheels

    drawWheel(1.75*w,h/0.4,posA);
    drawWheel(3.25*w,h/0.4,posA);

    // antannae

}

function drawCar(){

    var carW = 350;
    var carH = 125;
    var buffer = 5;

    // main car

    context.fillStyle = "red";

    context.beginPath();

    context.moveTo((w/2)-(carW/2)+25,(h/2));
    context.lineTo((w/2)-(carW/2)+25,(h/2)-(carH/2)+20);
    context.lineTo((w/2)-(carW/3),(h/2)-(carH/2));
    context.lineTo((w/2)+(carW/2),(h/2)-(carH/2));
    context.lineTo((w/2)+(carW/2),(h/2));
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();

    context.moveTo((w/2)-(carW/3),(h/2)-(carH/2));
    context.lineTo((w/2)-(carW/6),(h/2)-(carH));
    context.lineTo((w/2)+(carW/2)-60,(h/2)-(carH));
    context.lineTo((w/2)+(carW/2),(h/2)-(carH/2));
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo((w/2)-(carW/2)+25,(h/2)-10);
    context.lineTo((w/2)+(carW/2),(h/2)-10);
    context.stroke();

    context.beginPath();

    context.arc((w/2)-90,(h/2),45,-Math.PI,0);

    context.fill();
    context.stroke();

    context.beginPath();

    context.arc((w/2)+90,(h/2),45,-Math.PI,0);

    context.fill();
    context.stroke();

    // windows

    context.fillStyle = "cyan";

    context.beginPath();
    
    context.moveTo((w/2)-(carW/3)+buffer*3,(h/2)-(carH/2)-buffer);
    context.lineTo((w/2)-(carW/6)+buffer,(h/2)-(carH)+buffer);
    context.lineTo((w/2)+(carW/2)-60-buffer,(h/2)-(carH)+buffer);
    context.lineTo((w/2)+(carW/2)-buffer*3,(h/2)-(carH/2)-buffer);
    context.closePath();
    context.fill();
    context.stroke();

    //

    context.fillStyle = "red";

    context.beginPath();

    context.rect((w/2)+35,(h/2)-120,35,55);
    context.fill();

    context.beginPath();

    //context.rect((w/2)-50,(h/2)-120,15,55);

    context.moveTo((w/2)-50,(h/2)-120);
    context.lineTo((w/2)-35,(h/2)-120);
    context.lineTo((w/2)-65,(h/2)-65);
    context.lineTo((w/2)-80,(h/2)-65);
    context.closePath();
    context.fill();

    context.beginPath();

    context.roundRect((w/2)-65,(h/2)-75,25,20,[50,15,15,50]);
    context.fill();
    context.stroke();
    context.closePath();

    context.fillStyle = "rgba(255,255,255,0.9)";

    context.beginPath();

    context.moveTo((w/2)-(carW/2)+25,(h/2)-10);
    context.lineTo((w/2)-(carW/2)+25,(h/2)-(carH/2)+25);
    context.lineTo((w/2)-(carW/2)+45,(h/2)-(carH/2)+25);
    context.lineTo((w/2)-(carW/2)+35,(h/2)-10);
    context.fill();

    context.closePath();

   // antennae

   context.fillStyle = "black";

   context.beginPath();

   context.moveTo((w/2)+(carW/2)-75,(h/2)-(carH));
   context.lineTo((w/2)+(carW/2)-40,(h/2)-(carH)-40);
   context.lineTo((w/2)+(carW/2)-65,(h/2)-(carH));
   context.closePath();

   context.fill();


}

function drawWheel(posX,posY,posA){

    var baseR = 200;
    var tireR = 1;
    var owR = 0.7;
    var rR = 0.625;
    var holeRStart = 0.525;
    var holeREnd = 0.2;
    var lugPosR = 0.15;

    context.save();
    context.scale(0.2,0.2);
    context.translate(posX,posY);
    context.save();
    context.rotate(posA*Math.PI/180);

    // tire

    context.fillStyle = "black";

    context.beginPath();
    context.arc(0,0,baseR*tireR,0,Math.PI*2);
    context.fill();
    context.closePath();

    // outer wheel

    context.fillStyle = "silver";

    context.beginPath();
    context.arc(0,0,baseR*owR,0,Math.PI*2);
    context.fill();
    context.closePath();

    // rim

    context.fillStyle = "silver";

    context.beginPath();
    context.arc(0,0,baseR*rR,0,Math.PI*2);
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
        context.moveTo((holeREnd*baseR)*Math.cos(angEnd*Math.PI/180),(holeREnd*baseR)*Math.sin(angEnd*Math.PI/180));
        // top left
        context.lineTo((holeRStart*baseR)*Math.cos(angEnd*Math.PI/180),(holeRStart*baseR)*Math.sin(angEnd*Math.PI/180));

        // top curve
        context.arc(0,0,(holeRStart*baseR),angEnd*Math.PI/180,angStart*Math.PI/180);

        // top right
        context.lineTo((holeRStart*baseR)*Math.cos(angStart*Math.PI/180),(holeRStart*baseR)*Math.sin(angStart*Math.PI/180));

        // bottom right
        context.lineTo((holeREnd*baseR)*Math.cos(angStart*Math.PI/180),(holeREnd*baseR)*Math.sin(angStart*Math.PI/180));

        // bottom curve
        context.arc(0,0,(holeREnd*baseR),angStart*Math.PI/180,angEnd*Math.PI/180,true);

        context.closePath();
        context.fill();
        context.stroke();

    }

    // lug

    context.fillStyle = "white";

    var lugR = 20;

    for(let i=0; i<sides; i++){

        var ang = (360/sides)*i;

        var pX = lugPosR*Math.cos(ang*Math.PI/180);
        var pY = lugPosR*Math.sin(ang*Math.PI/180);

        context.beginPath();
        context.arc(pX,pY,lugR,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.stroke();

    }

    //

    context.restore();
    context.restore();

}

function buildTrees(n,a,b){

    var result = [];

    for(let i=0; i<n; i++){

        var pX = Math.random()*a;
        var pY = Math.random()*b;

        result.push([pX,pY+(0.3*h)]);

    }

    return result;

}
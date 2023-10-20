// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var frames = 0;
var anInterval;

anInterval = setInterval(function(){

    draw();
    frames++;

},10);

function draw(){

    context.clearRect(0,0,w,h);
    context.beginPath();
    context.rect(0,0,w,h);
    context.closePath();
    context.fill();

    var triW = 500;
    var triH = Math.sqrt(3)*250;

    var sTriW = triW/2;
    var sTriH = triH/2;

    var maxScale = 50;
    var scaleFactor = maxScale*Math.sin((frames%180)*Math.PI/180);

    console.log(scaleFactor);

    context.clearRect(0,0,w,h);

    context.fillStyle = "gold";

    context.save();

    context.translate((w/2)-(triW/2),(h/2)-(triH/2));
    context.save();

    context.strokeStyle = "gold";
    context.globalAlpha = 1-(scaleFactor/(maxScale+15));
    context.lineWidth = scaleFactor;

    context.beginPath();
    context.moveTo(triW/2,0);
    context.lineTo(triW,triH);
    context.lineTo(0,triH);
    context.closePath();
    context.stroke();

    context.restore();
    context.restore();

    context.save();
    context.translate((w/2)-(triW/2),(h/2)-(triH/2));

    context.save();
    context.translate(sTriW/2,sTriH);

    context.fillStyle = "rgb(121, 250, 222)";

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(sTriW,0);
    context.lineTo(sTriW/2,sTriH);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    context.save();
    context.translate(sTriW/2,0);

    context.beginPath();
    context.moveTo(sTriW/2,0);
    context.lineTo(sTriW,sTriH);
    context.lineTo(0,sTriH);
    context.closePath();
    context.fill();
    //context.stroke();

    context.restore();

    context.save();
    context.translate(0,sTriH);

    context.beginPath();
    context.moveTo(sTriW/2,0);
    context.lineTo(sTriW,sTriH);
    context.lineTo(0,sTriH);
    context.closePath();
    context.fill();
    //context.stroke();

    context.restore();

    context.save();
    context.translate(sTriW,sTriH);

    context.beginPath();
    context.moveTo(sTriW/2,0);
    context.lineTo(sTriW,sTriH);
    context.lineTo(0,sTriH);
    context.closePath();
    context.fill();
    //context.stroke();

    context.restore();

    context.strokeStyle = "rgba(0,0,0,0.35)";

    context.beginPath();
    context.moveTo(triW/2,0);
    context.lineTo(triW,triH);
    context.lineTo(0,triH);
    context.closePath();
    context.stroke();

    context.restore();

}
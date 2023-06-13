// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var time = 0;
var anInterval;

anInterval = setInterval(function(){

    draw(time);
    time++;

},35);


function draw(t){

    context.clearRect(0,0,w,h);

    context.fillStyle = "skyblue";

    context.beginPath();
    context.rect(0,0,w,h);
    context.closePath();
    context.fill();

    context.fillStyle = "green";

    context.beginPath();
    context.rect(0,0.4*h,w,0.6*h);
    context.closePath();
    context.fill();

    context.save();
    context.translate(0,-50);
    

    context.strokeStyle = "black";
    context.lineWidth = "1";

    // ferris wheel cars

    context.save();
    context.translate(0,5);

    for(let i=0; i<8; i++){

        context.fillStyle = "purple";

        var ang = -90+(i*(360/8));
        var carR = 185;

        var pX = (w/2)+carR*Math.cos((ang+t)*Math.PI/180);
        var pY = (h/2)+carR*Math.sin((ang+t)*Math.PI/180);

        context.save();
        context.translate(pX,pY);
        context.rotate(0.25*Math.sin((t/45)*Math.PI));
        context.translate(-pX,-pY);

        context.beginPath();
        context.rect(pX-20,pY-10,40,10);
        context.closePath();
        context.fill();

        context.strokeStyle = "purple";

        context.beginPath();
        context.rect(pX-20+1,pY,38,14);
        context.closePath();
        //context.fill();
        context.stroke();

        context.strokeStyle = "black";

        context.fillStyle = "rgba(255,255,255,0.25)";

        context.beginPath();
        context.rect(pX-20+1,pY,38,14);
        context.closePath();
        context.fill();

        context.fillStyle = "purple";

        context.beginPath();
        context.rect(pX-20,pY+15,40,5);
        context.closePath();
        context.fill();

        context.restore();

    }

    context.restore();

    //
    context.save();
    context.translate(w/2,h/2);
    context.rotate(t*Math.PI/180);
    context.translate(-w/2,-h/2);

    // ferris wheel middle ring

    context.strokeStyle = "red";
    context.lineWidth = "5";

    context.beginPath();
    context.arc(w/2,h/2,120,0,Math.PI*2);
    context.closePath();
    context.stroke();

    // ferris wheel connecting frames

    for(let i=0; i<8; i++){

        context.fillStyle = "red";

        var ang = -90+(i*(360/8));
        var step = 1.5*(360/8);
        var minR = 20;
        var maxR = 190;
    
        context.beginPath();
        context.moveTo((w/2),(h/2));
        context.lineTo((w/2)+minR*Math.cos((ang-step)*Math.PI/180),(h/2)+minR*Math.sin((ang-step)*Math.PI/180));
        context.lineTo((w/2)+maxR*Math.cos((ang-1)*Math.PI/180),(h/2)+maxR*Math.sin((ang-1)*Math.PI/180));
        context.lineTo((w/2)+maxR*Math.cos((ang+1)*Math.PI/180),(h/2)+maxR*Math.sin((ang+1)*Math.PI/180));
        context.lineTo((w/2)+minR*Math.cos((ang+step)*Math.PI/180),(h/2)+minR*Math.sin((ang+step)*Math.PI/180));
        context.lineTo((w/2),(h/2));
        context.closePath();
        context.fill();

        context.save();

        var timeSegments = 210;

        if(t%timeSegments >= timeSegments*0.8){

            context.globalAlpha = "1";

        } else if(t%timeSegments >= timeSegments*0.6){

            context.globalAlpha = "0.75";

        } else if(t%timeSegments >= timeSegments*0.4){

            context.globalAlpha = "0.5";

        } else if(t%timeSegments >= timeSegments*0.2){

            context.globalAlpha = "0.25";

        } else {

            context.globalAlpha = "0";

        }

        minR = minR + 25;
        maxR = maxR - 120;
        step = 0.25*(360/8);
        context.fillStyle = "gold";

        context.beginPath();

        context.moveTo((w/2)+(minR)*Math.cos((ang-step)*Math.PI/180),(h/2)+(minR)*Math.sin((ang-step)*Math.PI/180));
        context.lineTo((w/2)+(maxR)*Math.cos((ang-5)*Math.PI/180),(h/2)+(maxR)*Math.sin((ang-5)*Math.PI/180));
        context.lineTo((w/2)+(maxR)*Math.cos((ang+5)*Math.PI/180),(h/2)+(maxR)*Math.sin((ang+5)*Math.PI/180));
        context.lineTo((w/2)+(minR)*Math.cos((ang+step)*Math.PI/180),(h/2)+(minR)*Math.sin((ang+step)*Math.PI/180));

        context.closePath();
        context.fill();

        minR = minR + 35;
        maxR = maxR + 35;
        step = 0.1*(360/8);
        context.fillStyle = "gold";

        context.beginPath();

        context.moveTo((w/2)+(minR)*Math.cos((ang-step)*Math.PI/180),(h/2)+(minR)*Math.sin((ang-step)*Math.PI/180));
        context.lineTo((w/2)+(maxR)*Math.cos((ang-2.5)*Math.PI/180),(h/2)+(maxR)*Math.sin((ang-2.5)*Math.PI/180));
        context.lineTo((w/2)+(maxR)*Math.cos((ang+2.5)*Math.PI/180),(h/2)+(maxR)*Math.sin((ang+2.5)*Math.PI/180));
        context.lineTo((w/2)+(minR)*Math.cos((ang+step)*Math.PI/180),(h/2)+(minR)*Math.sin((ang+step)*Math.PI/180));

        context.closePath();
        context.fill();

        minR = minR + 35;
        maxR = maxR + 35;
        step = 0.05*(360/8);
        context.fillStyle = "gold";

        context.beginPath();

        context.moveTo((w/2)+(minR)*Math.cos((ang-step)*Math.PI/180),(h/2)+(minR)*Math.sin((ang-step)*Math.PI/180));
        context.lineTo((w/2)+(maxR)*Math.cos((ang-0.5)*Math.PI/180),(h/2)+(maxR)*Math.sin((ang-0.5)*Math.PI/180));
        context.lineTo((w/2)+(maxR)*Math.cos((ang+0.5)*Math.PI/180),(h/2)+(maxR)*Math.sin((ang+0.5)*Math.PI/180));
        context.lineTo((w/2)+(minR)*Math.cos((ang+step)*Math.PI/180),(h/2)+(minR)*Math.sin((ang+step)*Math.PI/180));

        context.closePath();
        context.fill();

        context.restore();

    }

    // ferris wheel outer ring

    context.strokeStyle = "red";
    context.lineWidth = "12";

    context.beginPath();
    context.arc(w/2,h/2,180,0,Math.PI*2);
    context.closePath();
    context.stroke();

    context.strokeStyle = "gold";
    context.lineWidth = "5";

    context.beginPath();
    context.arc(w/2,h/2,180,0,Math.PI*2);
    context.closePath();
    context.stroke();

    context.restore();
    context.restore();

    // ferris wheel base
    
    context.fillStyle = "purple";
    context.beginPath();
    context.rect(150,480,300,20);
    context.closePath();
    context.fill();

    // ferris wheel holding structure

    context.fillStyle = "purple";

    context.beginPath();
    context.moveTo(175,480);
    context.lineTo(290,250);
    context.lineTo(310,250);
    context.lineTo(215,480);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(425,480);
    context.lineTo(310,250);
    context.lineTo(290,250);
    context.lineTo(385,480);
    context.closePath();
    context.fill();

    // ferris wheel center circle

    context.save();
    context.translate(0,-50);

    context.fillStyle = "purple";

    context.beginPath();
    context.arc(w/2,h/2,40,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.fillStyle = "red";

    context.beginPath();
    context.arc(w/2,h/2,28,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.restore();

}
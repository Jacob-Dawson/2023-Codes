// js goes here

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var w = myCanvas.width;
var h = myCanvas.height;
var confettiAmount = 600;
var confettiList = buildConfetti(confettiAmount);
var icingList = buildIcing();
var anInterval;
var time = 0;

anInterval = setInterval(function(){

    drawCanvas(time);
    time+=2;

    if(time >= 1200){

        time = 0;

    }

},10);


function drawCanvas(t){

    var cakeRadius = 90;
    var plateRadius = 100;

    context.fillStyle = "rgb(220,255,230)";

    context.beginPath();
    context.rect(0,0,w,h);
    context.closePath();
    context.fill();

    context.fillStyle = "red";
    context.font = "70px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Happy Birthday!!!",(w/2),h*0.1);

    context.save();
    context.translate(-(w/2),-(h/2));
    context.scale(2,2);
    context.translate((0),(0));

    // Plate Support

    context.fillStyle = "rgba(255,255,255,0.7)";

    context.beginPath();
    context.moveTo((w/2)+30,(h/2)+80);
    context.lineTo((w/2)+20,(h/2)+100);
    context.lineTo((w/2)+20,(h/2)+120);
    context.lineTo((w/2)-20,(h/2)+120);
    context.lineTo((w/2)-20,(h/2)+100);
    context.lineTo((w/2)-30,(h/2)+80);
    context.closePath();
    context.fill();
    context.stroke();

    // Plate

    context.fillStyle = "rgba(255,255,255,0.7)";

    context.beginPath();
    context.ellipse(w/2,(h/2)+55,plateRadius,plateRadius*(1/3),0,0,360*Math.PI/180);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.ellipse(w/2,(h/2)+50,plateRadius,plateRadius*(1/3),0,0,360*Math.PI/180);
    context.closePath();
    context.fill();
    context.stroke();

    // Cake Bottom Layer

    context.fillStyle = "orange";

    context.beginPath();
    context.moveTo((w/2)+cakeRadius,(h/2));
    context.lineTo((w/2)+cakeRadius,(h/2)+50);
    context.ellipse(w/2,(h/2)+50,cakeRadius,cakeRadius*(1/4),0,0,180*Math.PI/180);
    context.lineTo((w/2)-cakeRadius,(h/2));
    context.closePath();
    context.fill();

    // Cake Middle Layer Jam

    context.fillStyle = "red";

    context.beginPath();
    context.moveTo((w/2)+cakeRadius,(h/2));
    context.lineTo((w/2)+cakeRadius,(h/2)+30);
    context.ellipse(w/2,(h/2)+30,cakeRadius,cakeRadius*(1/4),0,0,180*Math.PI/180);
    context.lineTo((w/2)-cakeRadius,(h/2));
    context.closePath();
    context.fill();

    // Cake Middle Layer Buttercream

    context.fillStyle = "beige";

    context.beginPath();
    context.moveTo((w/2)+cakeRadius,(h/2));
    context.lineTo((w/2)+cakeRadius,(h/2)+25);
    context.ellipse(w/2,(h/2)+25,cakeRadius,cakeRadius*(1/4),0,0,180*Math.PI/180);
    context.lineTo((w/2)-cakeRadius,(h/2));
    context.closePath();
    context.fill();

    // Cake Top Layer Fold

    context.fillStyle = "orange";

    context.beginPath();
    context.moveTo((w/2)+cakeRadius,(h/2));
    context.lineTo((w/2)+cakeRadius,(h/2)+20);
    context.ellipse(w/2,(h/2)+20,cakeRadius,cakeRadius*(1/4),0,0,180*Math.PI/180);
    context.lineTo((w/2)-cakeRadius,(h/2));
    context.closePath();
    context.fill();
    
    // Cake Top (Top half)

    context.fillStyle = "#FFAC1C";

    context.beginPath();
    context.ellipse(w/2,h/2,cakeRadius,cakeRadius*(1/4),0,180*Math.PI/180,0*Math.PI/180);
    context.closePath();
    context.fill();

    context.beginPath();
    context.ellipse(w/2,h/2,cakeRadius,cakeRadius*(1/4),0,0,180*Math.PI/180);
    context.closePath();
    context.fill();

    // Cake Top Outline

    context.strokeStyle = "rgba(0,0,0,0.25)"

    context.beginPath();
    context.ellipse(w/2,h/2,cakeRadius,cakeRadius*(1/4),0,0,180*Math.PI/180);
    context.stroke();

    // Icing

    context.beginPath();
    context.ellipse(w/2,h/2,cakeRadius,cakeRadius*(1/4),0,0,360*Math.PI/180);
    context.clip();
    context.closePath();

    context.fillStyle = "rgba(255,255,255,0.5)";

    for(let i=0; i<1000; i++){

        context.beginPath();
        context.arc((w/2)+icingList[i][0],(h/2)+icingList[i][1],2,0,Math.PI*2);
        context.closePath();

        context.fill();

    }

    // Candles

    var candleW = 10;
    var candleH = 15;

    context.fillStyle = "yellow";
    
    context.beginPath();
    context.moveTo((w/2),(h/2)-(candleH/2)-10);
    context.arc(w/2,(h/2)-(candleH/2)-10,candleW/4,0,Math.PI);
    context.lineTo((w/2)-candleW/4,(h/2)-(candleH/2)-10);
    context.lineTo((w/2),(h/2)-(candleH)-10);
    context.lineTo((w/2)+candleW/4,(h/2)-(candleH/2)-10);
    context.closePath();
    context.fill();

    context.fillStyle = "black";
    
    context.beginPath();
    context.rect((w/2)-1,(h/2)-(candleH/2)-10,2,10);
    context.closePath();
    context.fill();

    context.fillStyle = "khaki";
    
    context.beginPath();
    context.rect((w/2)-candleW/2,(h/2)-candleH/2,candleW,candleH);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    // confetti

    for(let i=0; i<100; i++){

        var randNum = confettiList[i][0];
        //var pX = (i/100) * w;
        //var pY = 0;
        var offset = t;

        context.save();
        context.translate(confettiList[i][2],confettiList[i][3]+offset);
        context.rotate((t+confettiList[i][6])*Math.PI/180);
        context.translate(-confettiList[i][2],-confettiList[i][3]-offset);

        if(randNum == 0){

            var confettiX = confettiList[i][2];
            var confettiY = confettiList[i][3]+offset;
            var confettiW = confettiList[i][4];
            var confettiH = confettiList[i][5];
            var confettiCol = confettiList[i][1];

            context.fillStyle = ""+confettiCol;

            context.beginPath();
            context.moveTo(confettiX+confettiW/2,confettiY);
            context.lineTo(confettiX,confettiY+confettiH/2);
            context.lineTo(confettiX-confettiW/2,confettiY);
            context.lineTo(confettiX,confettiY-confettiH/2);
            context.closePath();
            context.fill();

        } else if(randNum == 1){

            var confettiX = confettiList[i][2];
            var confettiY = confettiList[i][3]+offset;
            var confettiW = confettiList[i][4];
            var confettiH = confettiList[i][5];
            var confettiCol = confettiList[i][1];

            context.fillStyle = ""+confettiCol;

            context.beginPath();
            context.rect(confettiX-confettiW/2,confettiY-confettiH/2,confettiW,confettiH);
            context.closePath();
            context.fill();


        } else if(randNum == 2) {

            var confettiX = confettiList[i][2];
            var confettiY = confettiList[i][3]+offset;
            var confettiW = confettiList[i][4];
            var confettiH = confettiList[i][5];
            var confettiCol = confettiList[i][1];

            context.fillStyle = ""+confettiCol;

            context.beginPath();
            context.arc(confettiX,confettiY,confettiW,0,Math.PI*2);
            context.closePath();
            context.fill();

        }

        context.restore();

    }

}

function buildConfetti(amount){

    var result = [];
    var cols = ["red","yellow","green","blue","pink","orange","cyan","orangered","magenta"]

    for(let i=0; i<amount; i++){

        var randNum = Math.floor(Math.random()*3);
        var randCol = Math.floor(Math.random()*cols.length);
        var pX = (i/100) * w;
        var pY = Math.floor(Math.random()*600)-600;
        var temp = [];
        var rotation = (Math.random()*360);

        if(randNum == 0){

            var confettiX = pX;
            var confettiY = pY;
            var confettiW = 30;
            var confettiH = 30;
            var confettiCol = ""+cols[randCol];

            temp.push(randNum,confettiCol,confettiX,confettiY,confettiW,confettiH,rotation);

        } else if(randNum == 1){

            var confettiX = pX;
            var confettiY = pY;
            var confettiW = 10;
            var confettiH = 60;
            var confettiCol = ""+cols[randCol];

            temp.push(randNum,confettiCol,confettiX,confettiY,confettiW,confettiH,rotation);

        } else if(randNum == 2) {

            var confettiX = pX;
            var confettiY = pY;
            var confettiW = 10;
            var confettiH = 60;
            var confettiCol = ""+""+cols[randCol];

            temp.push(randNum,confettiCol,confettiX,confettiY,confettiW,confettiH,rotation);

        }

        result.push(temp);

    }

    return result;

}

function buildIcing(){

    var result = [];

    for(let i=0; i<1000; i++){

        var radialLimitX = 90;
        var radialLimitY = 25;
        var randX = Math.round(Math.random()*(radialLimitX*2))-radialLimitX;
        var randY = Math.round(Math.random()*(radialLimitY*2))-radialLimitY;

        if(randX + randY > 90){

            i--;

        } else {

            var temp = [];

            context.beginPath();
            context.arc((w/2)+randX,(h/2)+randY,2,0,Math.PI*2);
            context.closePath();

            context.fill();

            temp.push(randX,randY);

            result.push(temp);

        }

    }

    return result;

}
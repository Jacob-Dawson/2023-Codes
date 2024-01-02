var canvas;
var context;
var w;
var h;
var frames;
var anInterval;

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
w = canvas.width;
h = canvas.height;
frames = 0;

anInterval = setInterval(function(){

    draw();
    frames++;

},10);

function draw(){

    context.clearRect(0,0,w,h);

    // sky

    context.fillStyle = "skyblue";

    context.beginPath();
    context.rect(0,0,w,h);
    context.closePath();
    context.fill();

    // night sky

    context.fillStyle = "rgba(25,25,112,"+(0.5+0.5*(Math.sin(((frames*0.1)+270)*Math.PI/180)))+")";

    context.beginPath();
    context.rect(0,0,w,h);
    context.closePath();
    context.fill();

    // island

    context.fillStyle = "green";

    context.beginPath();
    context.ellipse(((w+150)-(frames/1)%(w*2)),(h*0.45),150,75,0,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    // back waves

    context.save();
    context.translate(0,(h*0.35));

    var offsets = [2,4,1,5,3]; 

    for(let j=0; j<offsets.length; j++){

        var waveW = 100;
        var waveH = 60;
        var waveX = waveW*(offsets[j]/10)
        var waveY = waveH*j*0.65;
        
        context.save();
        context.translate(waveX-(5*waveW)-(frames)%(waveW),waveY);

        context.fillStyle = "#ADD8E6";

        context.beginPath();

        for(let i=0; i<20; i++){

            context.moveTo((waveW*i),0);
            context.bezierCurveTo((waveW*i),(waveH),(waveW*(i+1)),(waveH),(waveW*(i+1)),0);
            //
            context.lineTo((waveW*(i+1)),h);
            context.lineTo((waveW*i),h);

        }

        context.closePath();
        context.stroke();
        context.fill();

        context.restore();

    }

    context.restore();

    // ship top

    context.save();
    context.translate(0,100+10*Math.sin(frames*Math.PI/180));

    var mastH = 50;
    var mastW = 5;

    context.fillStyle = "rgba(255,255,255,0.8)";

    context.beginPath();
    context.moveTo((w/2)-55,(h/2));
    context.lineTo((w/2)-90,(h/2)-mastH/2);
    context.lineTo((w/2)-55,(h/2)-mastH);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.roundRect((w/2)-25,(h/2)-mastH*1.75,50,40,[15,15,5,5]);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.roundRect((w/2)-30,(h/2)-(mastH*1.75)+45,60,40,[20,20,5,5]);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo((w/2)+45,(h/2));
    context.lineTo((w/2)+80,(h/2)-mastH/2);
    context.lineTo((w/2)+45,(h/2)-mastH);
    context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = "black";

    context.beginPath();
    context.moveTo((w/2),(h/2)-mastH*2.2);
    context.lineTo((w/2)-30,(h/2)-mastH*2);
    context.lineTo((w/2),(h/2)-mastH*1.8);
    context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = "brown";

    context.beginPath();
    context.rect((w/2)-55,(h/2)-mastH,mastW,mastH);
    context.closePath();
    context.fill();

    context.beginPath();
    context.rect((w/2)-mastW*0.75,(h/2)-mastH*2.2,mastW*1.5,mastH*2.2);
    context.closePath();
    context.fill();

    context.beginPath();
    context.rect((w/2)-25,(h/2)-mastH+25,50,mastW);
    context.closePath();
    context.fill();

    context.beginPath();
    context.rect((w/2)-20,(h/2)-mastH-20,40,mastW);
    context.closePath();
    context.fill();

    context.beginPath();
    context.rect((w/2)+45,(h/2)-mastH,mastW,mastH);
    context.closePath();
    context.fill();

    // ship bottom

    var shipW = 150;

    context.fillStyle = "brown"

    context.beginPath();
    context.moveTo((w/2)-(shipW/2),(h/2));
    context.lineTo((w/2)+(shipW/2),(h/2));
    context.lineTo((w/2)+(shipW/2)-10,(h/2)+25);
    context.lineTo((w/2)-(shipW/2)+5,(h/2)+25);
    context.lineTo((w/2)-(shipW/2)-25,(h/2)-15);
    context.lineTo((w/2)-(shipW/2)-20,(h/2)-25);
    context.lineTo((w/2)-(shipW/2),(h/2));
    context.closePath();

    context.fill();
    context.stroke();

    context.fillStyle = "black";

    var cannonAmount = 5;
    var cannonR = 5;

    for(let i=0; i<cannonAmount; i++){

        context.beginPath();
        context.arc((w/2)-(cannonAmount*8)+(cannonAmount*4*i),(h/2)+cannonR*3,cannonR,0,Math.PI*2);
        context.closePath();
        context.fill();

    }

    context.restore();

    // front waves

    context.save();
    context.translate(0,(h/2)+100);

    context.fillStyle = "#ADD8E6";

    var offsets = [3,1,4,2,5];

    for(let j=0; j<offsets.length; j++){

        var waveW = 100;
        var waveH = 60;
        var waveX = waveW*(offsets[j]/10)
        var waveY = waveH*j*0.65;
        
        context.save();
        context.translate(waveX-(5*waveW)-(frames*1.25)%(waveW),waveY);

        context.beginPath();

        for(let i=0; i<20; i++){

            context.moveTo((waveW*i),0);
            context.bezierCurveTo((waveW*i),(waveH),(waveW*(i+1)),(waveH),(waveW*(i+1)),0);
            //
            context.lineTo((waveW*(i+1)),h);
            context.lineTo((waveW*i),h);

        }

        context.closePath();
        context.stroke();
        context.fill();

        context.restore();

    }

    context.restore();

    // sun

    context.save();
    context.translate(-300,0);
    
    context.fillStyle = "yellow";
    
    context.beginPath();
    context.arc((((-600-(frames/3))%1200)+1200),(h*0.1),30,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.restore();
}

// https://static.vecteezy.com/system/resources/previews/009/379/359/original/wooden-vintage-ship-clipart-design-illustration-free-png.png
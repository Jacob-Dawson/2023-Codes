// js goes here

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let w = canvas.width;
let h = canvas.height;
let time = 0;
let anInterval;

anInterval = setInterval(function(){

    if(time <= 400){

        drawCanvas(time);

    } else {

        setTimeout(function(){

            //clearInterval(anInterval);
            time = 0;
        
        },3000);

    }

    time++;

},10);

function drawCanvas(t){

    context.clearRect(0,0,w,h);

    // bg

    context.fillStyle = "skyblue";
    context.beginPath();
    context.rect(0,0,w,h);
    context.closePath();
    context.fill();

    // soil / ground

    context.fillStyle = "burlywood";
    
    context.beginPath();
    context.rect(0,0.8*h,w,0.2*h);
    context.closePath();
    context.fill();

    // grass

    var grassH = 10;

    context.fillStyle = "springgreen";

    context.beginPath();
    context.rect(0,(0.8*h)-grassH,w,grassH);
    context.closePath();
    context.fill();

    // seed

    let seedW = 15;
    let seedH = 7.5;
    let seedRot = t > 100 ? -90 : -90 * t/100;
    let seedY = 0.9*h;

    context.save();
    context.translate(w/2,seedY);

    context.fillStyle = "green";

    context.beginPath();
    context.ellipse(0,0,seedW,seedH,seedRot*Math.PI/180,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.restore();

    // stem

    if(t >= 100){

        let stemH = t > 200 ? 0.5*h : 0.5*h * ((t-100)/100);
        let stemW = seedW;

        context.save();
        context.translate(w/2,seedY - stemH);

        context.fillStyle = "green";

        context.beginPath();
        context.rect(-stemW/2,0,stemW,stemH);
        context.closePath();
        context.fill();

        context.restore();

    }

    // branches + leaves

    if(t >= 200){

        let scaleFactor = t > 300 ? 1 : (t-200)/100;

        let branchW = 15;
        let branchH = 75;
        let branchY = 0.6*h;

        let branchRot = 55;

        context.save();
        context.translate((w/2)-scaleFactor*(w/2),branchY-scaleFactor*branchY);
        context.scale(scaleFactor,scaleFactor);

        context.save();
        context.translate(w/2,branchY);
        context.rotate(branchRot*Math.PI/180);
        context.translate(-w/2,-branchY);

        context.fillStyle = "green";

        context.beginPath();
        context.roundRect((w/2)-branchW/2,branchY-branchH,branchW,branchH,5,5,0,0);
        context.closePath();
        context.fill();

        context.restore();
        context.restore();

    }

    // leaves

    if(t >= 300){

        let scaleFactor = t > 400 ? 1 : (t-300)/100;

        let leafW = 7.5;
        let leafH = 75;
        let leafY = 0.6*h;

        let branchRot = 55;

        context.save();
        context.translate((w/2)-scaleFactor*(w/2),leafY-scaleFactor*leafY);
        context.scale(scaleFactor,scaleFactor);

        context.save();
        context.translate(w/2,leafY);
        context.rotate(branchRot*Math.PI/180);
        context.translate(-w/2,-leafY);

        context.fillStyle = "green";

        context.beginPath();
        context.ellipse((w/2),leafY-leafH*1.25,40,15,90*Math.PI/180,0,Math.PI*2);
        context.closePath();
        context.fill();

        context.restore();
        context.restore();

    }

    // flower

    if(t >= 300){

        let scaleFactor = (t-300)/100;

        context.save();
        context.translate((w/2)-scaleFactor*(w/2),(h/2)-scaleFactor*(h/2));
        context.scale(scaleFactor,scaleFactor);

        context.fillStyle = "yellow";

        context.save();
        context.translate(0,-100);

        for(let i=0; i<6; i++){

            let flowerR = 40;

            context.save();
            context.translate(w/2,h/2);
            context.rotate(i*(60)*Math.PI/180);
            //context.translate(-w/2,-h/2);

            context.beginPath();
            context.ellipse(flowerR+5,0,flowerR,flowerR/1.5,0,0,Math.PI*2);
            context.closePath();

            context.fill();

            context.restore();

        }

        let midFlowerR = 20;

        context.fillStyle = "orange";

        context.beginPath();
        context.arc(w/2,(h/2),midFlowerR,0,Math.PI*2);
        context.closePath();
        context.fill();

        context.restore();

        context.restore();

    }

}

// https://www.bostonbulbswholesale.co.uk/1321-large_default/lothario-narcissi-bulbs.jpg
// js goes here

var w;
var h;
var frameNo = 0;
var pencilW = 18;
var pencilH = 90;
var pencilTipH = 15;
var pencilTopH = 30;
var connectorW = pencilW+1;
var connectorH = 15;
var eraserH = 15;
var eraserW = pencilW;
var barW = 200;
var barH = 20;

var progress = 0;
var aTimeout;
var pencilMatrix = [];
var pencilMakeup = [eraserH,connectorH,pencilH,pencilTopH/2,pencilTipH];
var possibleProgress = [0,1,2,3,5];
var thresholds = [50,75,90,99,100];

function setup(){

    createCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;

}
  
function draw(){

    clear();

    
    push();
    translate(0,-70);
    translate(w/2,h/2);
    rotate(frameNo*Math.PI/180);
    translate(-w/2,-h/2);

    // drawing

    stroke("black");
    strokeWeight(3);
    noFill();
    arc((w/2),(h/2),(pencilH+eraserH+connectorH+pencilTopH)-2,(pencilH+eraserH+connectorH+pencilTopH)-2,90*Math.PI/180,270*Math.PI/180);


    strokeWeight(1);
    // pencil base

    fill("yellow");

    rect((w/2)-(pencilW/2),(h/2)-(pencilH/2),pencilW,pencilH);

    // pencil top

    push();
    translate(0,-pencilH/2);

    fill("khaki");

    triangle((w/2)-(pencilW/2),(h/2),(w/2),(h/2)-pencilTopH,(w/2)+(pencilW/2),(h/2));

    pop();

    // pencil tip

    push();
    translate(0,-(pencilH/2)-(pencilTipH));

    fill("black");

    triangle((w/2)-(pencilW/4),(h/2),(w/2),(h/2)-pencilTipH,(w/2)+(pencilW/4),(h/2));

    pop();

    // connector

    push();
    translate(0,(pencilH/2));

    fill("silver");

    rect((w/2)-(connectorW/2),(h/2),connectorW,connectorH,2);

    pop();

    // eraser

    push();
    translate(0,(pencilH/2)+(connectorH));

    fill("pink");

    rect((w/2)-(eraserW/2),(h/2),eraserW,eraserH,0,0,5,5);

    pop();

    // pencil detail

    stroke("rgba(0,0,0,0.25)");
    strokeWeight(3);

    line((w/2)-(pencilW/6),(h/2)-(pencilH/2)+1,(w/2)-(pencilW/6),(h/2)+(pencilH/2)-1);
    line((w/2)+(pencilW/6),(h/2)-(pencilH/2)+1,(w/2)+(pencilW/6),(h/2)+(pencilH/2)-1);

    pop();

    push();
    translate(-barW/2,50);

    // loading mechanism

    noStroke();
    fill("black");

    if(frameNo%10 == 0){

        var randNum = random(0,100);

        for(let j=0; j<thresholds.length; j++){

            if(randNum < thresholds[j]){

                progress += possibleProgress[j];
                break;

            }

        }

        if(progress > 100){

            progress = 100;

            noLoop();

            setTimeout(function(){

                progress = 0;
                loop();

            },2000);

        }

    }

    for(let i=0; i<100; i++){

        if(i < (pencilMakeup[0]/150) * 100){

            fill("pink");

        } else if(i < (pencilMakeup[1]+pencilMakeup[0])/150 *100){

            fill("silver");

        } else if(i < (pencilMakeup[2]+pencilMakeup[1]+pencilMakeup[0])/150 * 100){

            fill("yellow");

        } else if(i < (pencilMakeup[3]+pencilMakeup[2]+pencilMakeup[1]+pencilMakeup[0])/150 * 100){

            fill("khaki");

        } else {

            fill("black");

        }

        if(i < progress){

            rect((w/2)+((i/100)*barW),(h/2)-(barH/2),Math.floor(barW/100)+1,barH);

        }

    }

    // loading frame

    noFill();
    stroke("black");

    rect((w/2),(h/2)-(barH/2),barW,barH,0);

    // loading text

    fill("black");

    textSize(28);
    textAlign(CENTER,CENTER);
    text("Loading...",(w/2)+(barW/2),(h/2)-25);

    pop();

    frameNo++;

}

function windowResized(){
    w = windowWidth;
    h = windowHeight-50;
    resizeCanvas(windowWidth,windowHeight-50);
}
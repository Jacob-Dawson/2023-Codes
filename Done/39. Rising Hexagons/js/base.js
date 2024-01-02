// js goes here

var w;
var h;
var frameNo = 1;
var minSize = 10000000000;
var directions = [];

function setup(){

    createCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;

}
  
function draw(){

    clear();
    background(40);

    strokeWeight(1.5);
    stroke(0);
    fill(16);

    var hexR = 25;
    var sides = 6;
    var posX = (w/2);
    var posY = (h/2);
    var range = Math.floor((w/2)/hexR);
    
    // base

    for(let q=-range; q<=range; q++){

        for(let r=-range; r<=range; r++){

            for(let s=-range; s<=range; s++){

                if(q + r + s == 0){

                    var posQ = (hexR*q*0.5*Math.sqrt(3));
                    var posR = (hexR*r*1.5);
                    var posS = (hexR*s*0.5*-Math.sqrt(3));

                    if(posQ + posS + (w/2) <= w && posR + (h/2) <= h && posQ + posS + (w/2) >= 0 && posR + (h/2) >= 0){

                        strokeWeight(2);
                        stroke(96);
                        fill(40);
                        // solid hexagons
                        drawHexagon(posX+posQ+posS,posY+posR,hexR-1,sides);

                    }

                }

            }
        
        }

    }

    // hex lines for shadows
    for(let q=-range; q<=range; q++){

        for(let r=-range; r<=range; r++){

            for(let s=-range; s<=range; s++){

                if(q + r + s == 0){

                    var posQ = (hexR*q*0.5*Math.sqrt(3));
                    var posR = (hexR*r*1.5);
                    var posS = (hexR*s*0.5*-Math.sqrt(3));

                    if(posQ + posS + (w/2) <= w && posR + (h/2) <= h && posQ + posS + (w/2) >= 0 && posR + (h/2) >= 0){

                        stroke(16);
                        noFill();
                        strokeWeight(3);
                        drawHexLines(posX+posQ+posS,posY+posR,hexR,sides,0);

                        stroke(16);
                        noFill();
                        strokeWeight(1);
                        drawHexLines(posX+posQ+posS,posY+posR,hexR,sides,1);

                        stroke(16);
                        noFill();
                        strokeWeight(2);
                        drawHexLines(posX+posQ+posS,posY+posR,hexR,sides,2);

                        stroke(16);
                        noFill();
                        strokeWeight(3);
                        drawHexLines(posX+posQ+posS,posY+posR,hexR,sides,3);
                
                        stroke(16);
                        noFill();
                        strokeWeight(1);
                        drawHexLines(posX+posQ+posS,posY+posR,hexR,sides,4);

                        stroke(16);
                        noFill();
                        strokeWeight(2);
                        drawHexLines(posX+posQ+posS,posY+posR,hexR,sides,5);

                    }

                }

            }
        
        }

    }

}

function windowResized(){
    w = windowWidth;
    h = windowHeight-50;
    resizeCanvas(windowWidth,windowHeight-50);
}

function drawHexagon(posX,posY,hexR,sides){

    beginShape();

    for(let i=0; i<sides; i++){

        var ang = ((i+0.5)*(360/sides));
        var pX = posX+hexR*Math.cos(ang*Math.PI/180);
        var pY = posY+hexR*Math.sin(ang*Math.PI/180);

        vertex(pX,pY);

    }

    endShape(CLOSE);

}

function drawHexLines(posX,posY,hexR,sides,side){

    beginShape();

    var ang = ((side+0.5)*(360/sides));
    var pX = posX+hexR*Math.cos(ang*Math.PI/180);
    var pY = posY+hexR*Math.sin(ang*Math.PI/180);

    var ang2 = ((side+1+0.5)*(360/sides));
    var pX2 = posX+hexR*Math.cos(ang2*Math.PI/180);
    var pY2 = posY+hexR*Math.sin(ang2*Math.PI/180);

    vertex(pX,pY);
    vertex(pX2,pY2);

    endShape();

}

function buildRandNums(size,amount){

    var result = [];

    for(let i=0; i<amount; i++){

        var temp = [];

        temp.push(random(0,w),random(0,h),random(0,size)/size);

        result.push(temp);

    }

    return result;

}
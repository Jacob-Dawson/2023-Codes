// js goes here

var w;
var h;
var frameNo = 1;
var minSize = 100000000000000;
var starAmount = 1000;

function setup(){

    createCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;

    randNums = buildRandNums(minSize,starAmount);

}
  
function draw(){

    background(0);
    stroke(255);
    noFill();

    var scaleFactor = 1+((frameNo)/1000);

    push();
    translate((w/2),(h/2));
    scale(scaleFactor);
    translate((-w/2),(-h/2));

    fill("white");

    for(let j=0; j<starAmount; j++){

        makeStar(randNums[j][0],randNums[j][1],randNums[j][2]);

    }

    noFill();

    pop();
    //
    frameNo = frameNo*1.025;
    
    if(frameNo > 100000){

        frameNo = 1;
        randNums = buildRandNums(minSize,starAmount);

    }


}

function windowResized(){
    w = windowWidth;
    h = windowHeight-50;
    resizeCanvas(windowWidth,windowHeight-50);
    randNums = buildRandNums(minSize,starAmount);
    frameNo = 1;
}

function makeStar(posX,posY,r){

    strokeWeight(r*0.1);

    var sides = 10;

    beginShape();

    for(let i=0; i<sides; i++){

        var ang = (i*360/sides)-90;
        var pX,pY;

        if(i%2 == 0){

            pX = posX+r*Math.cos(ang*Math.PI/180);
            pY = posY+r*Math.sin(ang*Math.PI/180);
        
        } else {

            pX = posX+r*0.4*Math.cos(ang*Math.PI/180);
            pY = posY+r*0.4*Math.sin(ang*Math.PI/180);

        }
        
        vertex(pX,pY);

    }

    endShape(CLOSE);

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
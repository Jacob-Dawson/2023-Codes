// js goes here

var w = window.innerWidth;
var h = window.innerHeight - 50;
var fr = 60;
var frameNo = 0;
var sectorAmount = Math.floor(Math.random()*7)+3;
var maxAdd = 12;
var entitySpacing = 40;
var addArr = createPositions(sectorAmount,maxAdd);
//var addArr = buildArr(sectorAmount);
var finalNum = framesFormula(addArr);

//console.log(addArr);
//console.log(framesFormula(addArr));

var colors = ["255,255,0","255,0,255","255,0,0","0,255,255","0,255,0","0,0,255","128,255,0","128,0,255","0,128,255","255,128,0","255,0,128","0,128,0","128,128,255","128,128,0","128,0,0","0,0,128","255,128,255","255,128,128","128,255,255"];
// [yellow,magenta,red,aqua,lime,blue,light green,purple,dodger blue,orange,dark pink,green,light slate blue,olive,maroon,navy blue,pink,rose,light blue]
let currColor = colors[Math.floor(Math.random()*colors.length)];

function setup(){

    createCanvas(w,h);
    frameRate(fr);

}

function draw(){

    clear();

    stroke("Black");
    fill("rgba("+currColor+","+(1/sectorAmount)+")");
    strokeWeight(1);

    push();
    translate(0,-entitySpacing);

    // sectors
    
    var shapeRadius = 100;

    // Circle

    for(let i=0; i<sectorAmount; i++){

        var angSector = 360/sectorAmount;

        arc(w/2,h/2,shapeRadius,shapeRadius,(0+addArr[i]*(frameNo*0.01))*angSector*Math.PI/180,(0+1+addArr[i]*(frameNo*0.01))*angSector*Math.PI/180);

    }

    // regular n-gon

    /*var counter = 0;

    for(let i=0; i<sectorAmount; i++){

        var angSector = 360/sectorAmount;

        //fill("rgba("+colors[i]+","+(1/(sectorAmount/2))+")");
        fill("rgba("+currColor+","+(1/(sectorAmount/2))+")");

        noStroke();
        beginShape();
        vertex(w/2,h/2);
        vertex((w/2)+shapeRadius*Math.cos((0+addArr[i]*(frames*0.01))*angSector*Math.PI/180),(h/2)+shapeRadius*Math.sin((0+addArr[i]*(frames*0.01))*angSector*Math.PI/180));
        vertex((w/2)+shapeRadius*Math.cos((0+1+addArr[i]*(frames*0.01))*angSector*Math.PI/180),(h/2)+shapeRadius*Math.sin((0+1+addArr[i]*(frames*0.01))*angSector*Math.PI/180));
        endShape();

        //stroke("rgba(0,0,0,"+(1/(sectorAmount/2))+")");
        //line((w/2)+shapeRadius*Math.cos((0+addArr[i]*(frames*0.01))*angSector*Math.PI/180),(h/2)+shapeRadius*Math.sin((0+addArr[i]*(frames*0.01))*angSector*Math.PI/180),(w/2)+shapeRadius*Math.cos((0+1+addArr[i]*(frames*0.01))*angSector*Math.PI/180),(h/2)+shapeRadius*Math.sin((0+1+addArr[i]*(frames*0.01))*angSector*Math.PI/180));

        if((addArr[i]*frames*0.01)%sectorAmount == 0){

            counter++;

        }
    }

    if(counter == sectorAmount && frames > 0){

        noLoop();
        frames = 0;

    }*/

    pop();

    // frame counter

        textSize(32);
        textAlign(RIGHT,BOTTOM);
        text(""+Math.floor(frameNo),w-10,h-10);

    //

    // Loading text

        var opacVal = 100*(0.25*(3+Math.cos(frameNo*Math.PI/180)));

        noStroke();
        fill("rgba(0,0,0,"+(opacVal/100)+")");

        textSize(40);
        textAlign(CENTER, CENTER);
        text("Loading",(w/2),(h/2)+entitySpacing);

        noFill();

    //

    if((frameNo) == finalNum){

        noLoop();
        frames = 0;
        setTimeout(function(){

            frames = 0;
            sectorAmount = Math.floor(Math.random()*7)+3
            addArr = createPositions(sectorAmount,maxAdd);
            finalNum = framesFormula(addArr);
            currColor = colors[Math.floor(Math.random()*colors.length)];
            loop();

        }, 2000);

    } else {

        frameNo++;

    }

}

function buildArr(amount){

    var arr = [];

    for(let i=0; i<amount; i++){

        arr.push(i+1);

    }

    return arr;

}

function createPositions(arr,m){

    var result = [];

    for(let i=0; i<arr; i++){

        var randNum = Math.ceil(Math.random()*m);

        if(result.indexOf(randNum) == -1){

            result.push(randNum);

        } else {

            i--;

        }

    }

    return result;

}

function framesFormula(addArr){

    var commonMult = 1;

    for(let i=0; i<addArr.length; i++){

        commonMult *= addArr[i];

    }

    //console.log(commonMult);

    return commonMult;

}

function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight - 50;
    resizeCanvas(w,h);

}

/*

    to do:

    - Circles
    - n-gons
    - shades of colours (ie shades of red)
    - maybe stroke on the whole sector outline rather than just the outside
    - new loading symbol

*/
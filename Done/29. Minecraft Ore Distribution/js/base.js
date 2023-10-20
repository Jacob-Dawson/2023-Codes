// js goes here

var topBuffer = 50;
var bottomBuffer = 200;
let sel;

var blocksize = 5;
var blockHeightAmount = 384;
var blockWidthAmount = 120;
var biomes = ["none","dripstone_caves","mountains","badlands","nether"];
var biome = biomes[0];

var emeraldBlockStructure = buildStructure(1,blockWidthAmount,blockHeightAmount,48,blockHeightAmount,50);
var diamondBlockStructure = buildStructure(2,blockWidthAmount,blockHeightAmount,0,81,100);
var redstoneBlockStructure = buildStructure(3,blockWidthAmount,blockHeightAmount,0,121,50);
var goldBlockStructure = buildStructure(4,blockWidthAmount,blockHeightAmount,0,97,100);
var goldBlockStructureAlt = buildStructure(9,blockWidthAmount,blockHeightAmount,0,321,25);
var ironBlockStructure = buildStructure(5,blockWidthAmount,blockHeightAmount,0,blockHeightAmount,25);
var lapisBlockStructure = buildStructure(6,blockWidthAmount,blockHeightAmount,0,129,50);
var copperBlockStructure = buildStructure(7,blockWidthAmount,blockHeightAmount,48,177,25);
var copperBlockStructureAlt = buildStructure(10,blockWidthAmount,blockHeightAmount,48,177,10);
var coalBlockStructure = buildStructure(8,blockWidthAmount,blockHeightAmount,64,blockHeightAmount,10);

var nQuartzBlockStructure = buildStructure(11,blockWidthAmount,blockHeightAmount,0,blockHeightAmount,10);
var nGoldBlockStructure = buildStructure(12,blockWidthAmount,blockHeightAmount,0,96,25);
var aDebrisBlockStructure = buildStructure(13,blockWidthAmount,blockHeightAmount,0,24,200);

function setup(){

    createCanvas(windowWidth,(blocksize*blockHeightAmount)+45+topBuffer+bottomBuffer);

    textAlign(CENTER,CENTER);
    background(200);
    sel = createSelect();
    sel.position((windowWidth/2)-50, topBuffer/2);

    for(let i=0; i<biomes.length; i++){

        sel.option(''+biomes[i]);

    }
    
    sel.selected(''+biomes[0]);
    sel.changed(mySelectEvent);

}

function mySelectEvent() {

    biome = sel.value();
    redraw();

}
  
function draw(){

    clear();

    background(200);
    noStroke();

    fill(0);
    textSize(20);
    textStyle(BOLD);
    textAlign(RIGHT);
    text("Biome: ", windowWidth / 2 - 55, topBuffer / 2 + 10);

    fill(0);
    textSize(20);
    textStyle(BOLD);
    textAlign(LEFT);
    text("Key:",(windowWidth/2),(blocksize*blockHeightAmount)+45+topBuffer/2);

    textSize(16);
    textStyle(BOLD);
    textAlign(LEFT,CENTER);
    text("Diamond",(windowWidth/2)-140,(blocksize*blockHeightAmount)+45+topBuffer);
    text("Emerald",(windowWidth/2)-140,(blocksize*blockHeightAmount)+45+topBuffer+35);
    text("Gold",(windowWidth/2)-140,(blocksize*blockHeightAmount)+45+topBuffer+70);
    text("Lapis",(windowWidth/2)-140,(blocksize*blockHeightAmount)+45+topBuffer+105);
    text("Iron",(windowWidth/2)-20,(blocksize*blockHeightAmount)+45+topBuffer);
    text("Coal",(windowWidth/2)-20,(blocksize*blockHeightAmount)+45+topBuffer+35);
    text("Copper",(windowWidth/2)-20,(blocksize*blockHeightAmount)+45+topBuffer+70);
    text("Redstone",(windowWidth/2)-20,(blocksize*blockHeightAmount)+45+topBuffer+105);
    text("Nether Quartz",(windowWidth/2)+100,(blocksize*blockHeightAmount)+45+topBuffer);
    text("Ancient Derbis",(windowWidth/2)+100,(blocksize*blockHeightAmount)+45+topBuffer+35);

    fill("cyan");
    square((windowWidth/2)-160,(blocksize*blockHeightAmount)+45+topBuffer-8,12);
    fill("lime");
    square((windowWidth/2)-160,(blocksize*blockHeightAmount)+45+topBuffer-8+35,12);
    fill("gold");
    square((windowWidth/2)-160,(blocksize*blockHeightAmount)+45+topBuffer-8+70,12);
    fill("blue");
    square((windowWidth/2)-160,(blocksize*blockHeightAmount)+45+topBuffer-8+105,12);
    stroke("black");
    fill("silver");
    square((windowWidth/2)-40,(blocksize*blockHeightAmount)+45+topBuffer-8,12);
    noStroke();
    fill("black");
    square((windowWidth/2)-40,(blocksize*blockHeightAmount)+45+topBuffer-8+35,12);
    fill("brown");
    square((windowWidth/2)-40,(blocksize*blockHeightAmount)+45+topBuffer-8+70,12);
    fill("red");
    square((windowWidth/2)-40,(blocksize*blockHeightAmount)+45+topBuffer-8+105,12);
    fill("white");
    square((windowWidth/2)+80,(blocksize*blockHeightAmount)+45+topBuffer-8,12);
    fill("sienna");
    square((windowWidth/2)+80,(blocksize*blockHeightAmount)+45+topBuffer-8+35,12);

    push();
    translate((windowWidth/2)-(blockWidthAmount*blocksize/2)-10,topBuffer);

    for(let j=0; j<blockWidthAmount; j++){

        for(let i=0; i<blockHeightAmount; i++){

            var pX = j*blocksize;
            var pY = (blockHeightAmount-i)*blocksize;

            if(biome != "nether"){

                fill("grey");
                square(pX,pY,blocksize);

                // emeralds (only in mountains)
                if(biome == "mountains"){

                    if(emeraldBlockStructure[j][i][0] != "none"){

                        fill("lime");
                        pX = emeraldBlockStructure[j][i][0];
                        pY = emeraldBlockStructure[j][i][1];
                        blocksize = emeraldBlockStructure[j][i][2];
                        square(pX,pY,blocksize);

                    }

                }

                // diamonds
                if(diamondBlockStructure[j][i][0] != "none"){

                    fill("cyan");
                    pX = diamondBlockStructure[j][i][0];
                    pY = diamondBlockStructure[j][i][1];
                    blocksize = diamondBlockStructure[j][i][2];
                    square(pX,pY,blocksize);

                }

                // redstone
                if(redstoneBlockStructure[j][i][0] != "none"){

                    fill("red");
                    pX = redstoneBlockStructure[j][i][0];
                    pY = redstoneBlockStructure[j][i][1];
                    blocksize = redstoneBlockStructure[j][i][2];
                    square(pX,pY,blocksize);

                }

                // gold
                if(goldBlockStructure[j][i][0] != "none"){

                    fill("gold");
                    pX = goldBlockStructure[j][i][0];
                    pY = goldBlockStructure[j][i][1];
                    blocksize = goldBlockStructure[j][i][2];
                    square(pX,pY,blocksize);

                }

                // gold (badlands)
                if(biome == "badlands"){

                    if(goldBlockStructureAlt[j][i][0] != "none"){

                        fill("gold");
                        pX = goldBlockStructureAlt[j][i][0];
                        pY = goldBlockStructureAlt[j][i][1];
                        blocksize = goldBlockStructureAlt[j][i][2];
                        square(pX,pY,blocksize);
        
                    }

                }

                // iron
                if(ironBlockStructure[j][i][0] != "none"){

                    fill("silver");
                    pX = ironBlockStructure[j][i][0];
                    pY = ironBlockStructure[j][i][1];
                    blocksize = ironBlockStructure[j][i][2];
                    square(pX,pY,blocksize);

                }

                // lapis lazuli
                if(lapisBlockStructure[j][i][0] != "none"){

                    fill("blue");
                    pX = lapisBlockStructure[j][i][0];
                    pY = lapisBlockStructure[j][i][1];
                    blocksize = lapisBlockStructure[j][i][2];
                    square(pX,pY,blocksize);

                }

                // copper
                if(copperBlockStructure[j][i][0] != "none"){

                    fill("brown");
                    pX = copperBlockStructure[j][i][0];
                    pY = copperBlockStructure[j][i][1];
                    blocksize = copperBlockStructure[j][i][2];
                    square(pX,pY,blocksize);

                }

                // Copper (Dripstone Caves)
                if(biome == "dripstone_caves"){

                    if(copperBlockStructureAlt[j][i][0] != "none"){

                        fill("brown");
                        pX = copperBlockStructureAlt[j][i][0];
                        pY = copperBlockStructureAlt[j][i][1];
                        blocksize = copperBlockStructureAlt[j][i][2];
                        square(pX,pY,blocksize);
        
                    }

                }
                
                // coal
                if(coalBlockStructure[j][i][0] != "none"){

                    fill("black");
                    pX = coalBlockStructure[j][i][0];
                    pY = coalBlockStructure[j][i][1];
                    blocksize = coalBlockStructure[j][i][2];
                    square(pX,pY,blocksize);

                }

            } else {

                if(i < 128){

                    push();
                    translate(0,-256*blocksize);

                    fill("crimson");
                    square(pX,pY,blocksize);

                    // ancient debris
                    if(aDebrisBlockStructure[j][i][0] != "none"){

                        fill("sienna");
                        pX = aDebrisBlockStructure[j][i][0];
                        pY = aDebrisBlockStructure[j][i][1];
                        blocksize = aDebrisBlockStructure[j][i][2];
                        square(pX,pY,blocksize);

                    }

                    // nether gold
                    if(nGoldBlockStructure[j][i][0] != "none"){

                        fill("gold");
                        pX = nGoldBlockStructure[j][i][0];
                        pY = nGoldBlockStructure[j][i][1];
                        blocksize = nGoldBlockStructure[j][i][2];
                        square(pX,pY,blocksize);

                    }

                    // nether quartz
                    if(nQuartzBlockStructure[j][i][0] != "none"){

                        fill("white");
                        pX = nQuartzBlockStructure[j][i][0];
                        pY = nQuartzBlockStructure[j][i][1];
                        blocksize = nQuartzBlockStructure[j][i][2];
                        square(pX,pY,blocksize);

                    }

                    pop();

                }     

            }

        }

    }

    for(let i=0; i<blockHeightAmount; i++){

        var pY = (blockHeightAmount-i+1)*blocksize;

        if(biome == "nether"){

            push();
            translate(0,-256*blocksize);

            fill("blue");
            stroke("black");
            drawingContext.setLineDash([5,5]);
            textSize(30);
            textStyle(BOLD);
            textAlign(LEFT,BOTTOM);

            switch(i){

                case 0:
                    noStroke();
                    text("Y: "+(i),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                case 32:
                    noStroke();
                    text("Y: "+(i),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                case 100:
                    noStroke();
                    text("Y: "+(i),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                default:
                    break;

            }

            pop();

        } else {

            fill("purple");
            stroke("black");
            drawingContext.setLineDash([5,5]);
            textSize(30);
            textStyle(BOLD);
            textAlign(LEFT,BOTTOM);

            switch(i){

                case 0:
                    noStroke();
                    text("Y: "+(i-64),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                case 64:
                    noStroke();
                    text("Y: "+(i-64),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                case 126:
                    noStroke();
                    text("Y: "+(i-64),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                case 164:
                    noStroke();
                    text("Y: "+(i-64),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                case 264:
                    noStroke();
                    text("Y: "+(i-64),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                case 364:
                    noStroke();
                    text("Y: "+(i-64),5,pY);
                    stroke("black");
                    line(0,pY,blockWidthAmount*blocksize,pY);
                    break;
                default:
                    break;

            }

        }

    }

    pop();
    noLoop();
 
}

function buildStructure(id,bWidthAmount,bHeightAmount,lowH,highH,randAmount){

    var bSize = 5;
    var result = [];

    for(let j=0; j<bWidthAmount; j++){

        var temp = [];

        for(let i=0; i<bHeightAmount; i++){

            var pX = j*bSize;
            var pY = (blockHeightAmount-i)*bSize;

            if(i >= lowH && i < highH){

                var randNum = Math.floor(Math.random()*randAmount);

                if(randNum < 1){

                    temp.push([pX,pY,bSize])

                } else {

                    temp.push(["none"])

                }

            } else {

                temp.push(["none"]);

            }

        }

        result.push(temp);

    }

    return result;

}

function windowResized(){
    resizeCanvas(windowWidth, (blocksize*blockHeightAmount)+45+topBuffer+bottomBuffer);

    sel.position((windowWidth/2)-50, topBuffer/2);
}

// https://minecraft.fandom.com/wiki/Ore
/* Goals:

    - Use randomGaussian to get a better distribution -> maybe build weighted random function
    - Preload the distribution rather than it constantly changing when an event happens (done)
    - Consider having each block as a chunk instead of a block (done)
    - Calculate by chunks (width ways) instead of layers (done)
    - 

    Old Code for Diamonds:

    if(i < 80){

        for(let k=0; k<11; k++){

            var status = false;

            //var randNum = floor(random(0,100));
            var randNum = floor(randomGaussian(100,28));

            if(randNum < 1){

                fill("cyan");
                square(pX,pY,blocksize);
                status = true;

            }

            if(status === true){

                break;

            }

        }

    }

*/
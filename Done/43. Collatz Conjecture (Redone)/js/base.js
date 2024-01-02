// js goes here

var w = window.innerWidth;
var h = window.innerHeight-50;
var fr = 10;
var collections = [];

var branchStart;
var strandLength; // ideal: 3.5 or 15
var directions; // ideal: -20, 8

var num = 2; // min 2
var maxNum = 1000000000;
var selectForm;
var collatzOptions = ["Numberphile","Veritasium"];
var collatzType = "Numberphile";
function setup(){

    frameRate(fr);
    createCanvas(w,h);
    textAlign(LEFT,TOP);
    textSize(25);
    selectForm = createSelect();
    selectForm.position(10,10);
    selectForm.option("Numberphile");
    selectForm.option("Veritasium");
    selectForm.selected(""+collatzType);
    selectForm.changed(mySelectEvent);

}

function draw(){

    stroke("rgba(0,128,64,0.2)");
    collections = [];

    collections.push(reverse(makeCollatz(num)));            

    //console.log(collections);

    strokeWeight(2);

    if(collatzType == "Numberphile"){

        strandLength = 15; // 15
        branchStart = [0.8*w,0.9*h];
        directions = [15,-8]; // -8, 20
        push();
        translate(branchStart[0],branchStart[1]);
        rotate(-140*Math.PI/180); // -50
        translate(-branchStart[0],-branchStart[1]);

        for(let k=0; k<collections.length; k++){

            push();
            var counter = 0;

            for(let j=1; j<collections[k].length; j++){

                if(j > 35){ // to prevent crazy hairballs

                    break;

                }

                var choice;

                if(collections[k][j]%2 == 0){

                    choice = 0;

                } else if(collections[k][j]%2 == 1){

                    choice = 1;

                }

                // lookahead

                if((j+1) < collections[k].length){

                    if(collections[k][j+1]%2 == 1){

                        choice = 1;

                        translate(branchStart[0],branchStart[1]-(strandLength*(j-1-counter)));
                        rotate(directions[choice]*Math.PI/180);
                        translate(-branchStart[0],-(branchStart[1]-(strandLength*(j-1-counter))));
                        line(branchStart[0],branchStart[1]-(strandLength*(j-1-counter)),branchStart[0],branchStart[1]-((strandLength*(j-counter))));

                        j++;
                        counter++;
                        continue;


                    }

                }

                translate(branchStart[0],branchStart[1]-(strandLength*(j-1-counter)));
                rotate(directions[choice]*Math.PI/180);
                translate(-branchStart[0],-(branchStart[1]-(strandLength*(j-1-counter))));
                line(branchStart[0],branchStart[1]-(strandLength*(j-1-counter)),branchStart[0],branchStart[1]-((strandLength*(j-counter))));

            }

            pop();

        }

        pop();

    } else if(collatzType == "Veritasium"){

        strandLength = 10;
        branchStart = [w/2,0.95*h];
        directions = [-8,20];
        push();
        translate(branchStart[0],branchStart[1]);
        rotate(15*Math.PI/180);
        translate(-branchStart[0],-branchStart[1]);

        for(let k=0; k<collections.length; k++){

            push();

            for(let j=1; j<collections[k].length; j++){

                if(j > 35){ // to prevent crazy hairballs

                    break;

                }

                var choice;

                if(collections[k][j]%2 == 0){

                    choice = 0;

                } else if(collections[k][j]%2 == 1){

                    choice = 1;

                }

                translate(branchStart[0],branchStart[1]-(strandLength*(j-1)));
                rotate(directions[choice]*Math.PI/180);
                translate(-branchStart[0],-(branchStart[1]-(strandLength*(j-1))));
                line(branchStart[0],branchStart[1]-(strandLength*(j-1)),branchStart[0],branchStart[1]-((strandLength*j)));

            }

            pop();

        }

        pop();

    }

    fill("white");
    noStroke();
    rect(w-220,10,220,60);

    fill("black");
    
    if(num >= maxNum){

        noLoop();
        textSize(30);
        textAlign(RIGHT,TOP);
        text("n = " + num,w-10,10);

    } else {

        num = (num*1.05)+1 > maxNum ? maxNum : Math.floor(num*1.05)+1;
        textSize(30);
        textAlign(RIGHT,TOP);
        text("n = " + num,w-10,10);

    }

    noFill();
    num++;

}

function makeCollatz(n){
    
    var finished = false;
    var result = [];
    result.push(n);

    while (finished != true){

        if(n%2 == 1){

            n = (n*3) + 1;

        } else {

            n = n/2;

            if(n == 1){

                finished = true;

            }

        }

        result.push(n);

    }

    return result;

}

function trimCollatz(arr,n){

    var result;

    return result;

}

function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight-50;

    resizeCanvas(w,h);
    
    num = 2;
    collections = [];
    branchStart = [w*0.8,0.9*h];

    clear();
    loop();

}

function mySelectEvent(){

    var item = ""+selectForm.value();
    collatzType = item;
    num = 2;
    branchStart = [w*0.8,0.9*h];
    clear();
    loop();

}

function pauseCollatz(){

    noLoop();

}
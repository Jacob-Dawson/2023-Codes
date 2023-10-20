// js goes here

var w;
var h;
var time = 0;

function setup(){

    createCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;

}
  
function draw(){

    clear();

    push();
    translate(-40,15);

    let bgCol = "rgb(189, 255, 169)";

    background(bgCol);

    let wPos = [0,80];

    strokeWeight(1);

    // wheels

    for(let j=0; j<2; j++){

        push();
        translate(wPos[j],0);

        // tires

        fill("black");
        noStroke();

        let tireRadius = 44;

        circle(w/2,h/2,tireRadius);

        let ridges = 30;

        noFill();
        stroke("black");

        for(let i=0; i<ridges; i++){

            let ang = i*(360/ridges);

            push();
            translate(w/2,h/2);
            rotate((-time+ang)*Math.PI/180);
            translate(-w/2,-h/2);

            let pX = (w/2)+(tireRadius-28);
            let pY = (h/2)+(tireRadius-28);

            beginShape();
            vertex(pX,pY);
            vertex(pX-10,pY-10);
            endShape();

            pop();

        }

        // outerWheel

        noStroke();
        fill("silver");

        circle(w/2,h/2,tireRadius-7);

        // bg
 
        fill(bgCol);

        circle(w/2,h/2,tireRadius-14);

        // spokes

        strokeWeight(5);
        stroke("silver");
        noFill();

        var sides = 3;

        for(let i=0; i<sides; i++){

            let ang = i*(360/sides);

            push();
            translate(w/2,h/2);
            rotate(ang*Math.PI/180);
            translate(-w/2,-h/2);

            let pX = (w/2)+(tireRadius-29)*Math.cos(70-time*Math.PI/180);
            let pY = (h/2)+(tireRadius-29)*Math.sin(70-time*Math.PI/180);

            beginShape();
            vertex((w/2)-2,(h/2));
            vertex(pX,pY);
            endShape();

            pop();

        }

        strokeWeight(1);

        pop();

    }

    // wheel connectors

    strokeWeight(5);
    stroke("silver");

    beginShape();
    vertex(w/2,h/2);
    vertex((w/2)+15,(h/2)-25);
    endShape();

    beginShape();
    vertex((w/2)+wPos[1],h/2);
    vertex((w/2)+wPos[1]-50,(h/2)-5);
    endShape();

    strokeWeight(3);
    beginShape();
    vertex((w/2)+wPos[1],h/2);
    vertex((w/2)+wPos[1]-50,(h/2)-30);
    endShape();

    // back body

    strokeWeight(1);
    fill("gold");
    stroke("black");

    beginShape();
    vertex((w/2)+30,(h/2));
    vertex((w/2)+10,(h/2)-20);
    vertex((w/2)-20,(h/2)-30);
    vertex((w/2)+30,(h/2)-50);
    endShape(CLOSE);

    beginShape();
    vertex((w/2)+50,(h/2));
    vertex((w/2)+70,(h/2)-20);
    vertex((w/2)+85,(h/2)-25);
    vertex((w/2)+50,(h/2)-20);
    endShape(CLOSE);
    
    // body

    strokeWeight(1);
    fill("yellow");
    stroke("black");

    beginShape();
    vertex((w/2)+30,(h/2));
    vertex((w/2)+20,(h/2)-30);
    vertex((w/2)-20,(h/2)-30);
    vertex((w/2)+30,(h/2)-50);
    vertex((w/2)+35,(h/2)-40);
    vertex((w/2)+80,(h/2)-50);
    vertex((w/2)+85,(h/2)-40);
    vertex((w/2)+85,(h/2)-25);
    vertex((w/2)+50,(h/2)-20);
    vertex((w/2)+50,(h/2));
    endShape(CLOSE);

    // seat

    strokeWeight(1);
    fill("black");
    stroke("black");

    beginShape();
    vertex((w/2)+35,(h/2)-40);
    vertex((w/2)+65,(h/2)-46);
    vertex((w/2)+65,(h/2)-38);
    vertex((w/2)+35,(h/2)-32);
    endShape(CLOSE);

    // light

    strokeWeight(1);
    fill("red");
    stroke("rgba(0,0,0,0.85)");

    beginShape();
    vertex((w/2)+75,(h/2)-33);
    vertex((w/2)+85,(h/2)-33);
    vertex((w/2)+85,(h/2)-25);
    vertex((w/2)+75,(h/2)-25);
    endShape(CLOSE);

    // handlebars

    strokeWeight(1);
    fill("black");
    stroke("black");

    circle((w/2)+5,(h/2)-35,7);

    rect((w/2)+5,(h/2)-38,10,5);

    // visors

    strokeWeight(1);
    fill("cyan");
    stroke("black");

    beginShape();
    vertex((w/2)-20,(h/2)-30);
    vertex((w/2)+10,(h/2)-60);
    vertex((w/2)+15,(h/2)-50);
    vertex((w/2)-5,(h/2)-35);
    endShape(CLOSE);
    
    time+=3;

    pop();

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;
}

// https://emojipedia.org/motorcycle/
// js goes here

let w = window.innerWidth;
let h = window.innerHeight - 50;
var fr = 60;
let frames = 0;

function setup(){

    createCanvas(w,h);
    frameRate(fr);

}

function draw(){

    let aeroW = 240;
    let aeroH = 60;

    clear();
    background("rgb(128,180,200)");

    /*stroke(255);
    line(0,h/2,w,h/2);
    line(w/2,0,w/2,h);
    line(0,(h/2)-aeroH/2,w,(h/2)-aeroH/2);
    line(0,(h/2)+aeroH/2,w,(h/2)+aeroH/2);

    stroke(0);*/

    // aeroplane outline

    /*noFill();
    stroke(255);
    beginShape();
    vertex((w/2)-(aeroW/2),(h/2)-(aeroH/2));
    vertex((w/2)+(aeroW/2),(h/2)-(aeroH/2));
    vertex((w/2)+(aeroW/2),(h/2)+(aeroH/2));
    vertex((w/2)-(aeroW/2),(h/2)+(aeroH/2));
    endShape(CLOSE);*/

    // back tail

    fill("rgb(100,150,255)");

    let bWingW = 30;
    let bWingH = 25;
    let bWingX = (w/2)-100;
    let bWingY = (h/2)-20;

    stroke(0);

    beginShape();
    vertex(bWingX,bWingY);
    vertex(bWingX+bWingW,bWingY);
    vertex(bWingX-5,bWingY-bWingH);
    vertex(bWingX-25,bWingY-bWingH);
    endShape(CLOSE);

    // back wing

    let wingX = (w/2)-20;
    let wingY = (h/2)+0;
    let wingW = 60;
    let wingH = 55;

    stroke(0);
    fill(192);

    beginShape();
    vertex(wingX,wingY);
    vertex(wingX+wingW,wingY);
    vertex(wingX,wingY-wingH);
    vertex(wingX-30,wingY-wingH);
    endShape(CLOSE);

    // jet smoke top

    let turbineW = 40;
    let turbineH = 20;
    let turbineX = (w/2)-turbineW/2;
    let turbineY = (h/2)-(turbineH/2)+40;

    let smokeW = 10;
    let smokebuffer = 2;

    fill("rgba(220,220,220,0.5)");
    noStroke();

    for(let i=0; i<25; i++){

        ellipse(turbineX-((i*(smokeW+smokebuffer))+(frames))%150,turbineY+(turbineH/2)-40,smokeW,turbineH*0.5);

    }

    // aeroplane body

    fill(255);
    stroke(0);
    beginShape();
    vertex((w/2)-(aeroW/2),(h/2)-(aeroH/2)+10);
    vertex((w/2)-(aeroW/2)+40,(h/2)-(aeroH/2));
    vertex((w/2)+(aeroW/2)-60,(h/2)-(aeroH/2));
    vertex((w/2)+(aeroW/2),(h/2)-(aeroH/2)+20);
    vertex((w/2)+(aeroW/2),(h/2)+(aeroH/2)-20);
    vertex((w/2)+(aeroW/2)-60,(h/2)+(aeroH/2));
    vertex((w/2)-(aeroW/2)+80,(h/2)+(aeroH/2));
    vertex((w/2)-(aeroW/2),(h/2)+(aeroH/2)-40);
    endShape(CLOSE);

    // front turbine

    fill(128);

    rect(turbineX,turbineY,turbineW,turbineH,5);

    // jet smoke bottom

    smokeW = 10;
    smokebuffer = 2;

    fill("rgba(220,220,220,0.5)");
    noStroke();

    for(let i=0; i<25; i++){

        ellipse(turbineX-((i*(smokeW+smokebuffer))+(frames))%150,turbineY+(turbineH/2),smokeW,turbineH*0.5);

    }

    // visor

    fill(0);
    beginShape();
    vertex((w/2)+70,(h/2)-20);
    vertex((w/2)+90,(h/2)-20);
    vertex((w/2)+115,(h/2)-11);
    vertex((w/2)+90,(h/2)-11);
    vertex((w/2)+70,(h/2)-11);
    endShape(CLOSE);    

    // windows

    let windowBuffer = 6;
    let windowW = 6;
    let windows = 10;

    fill(0);

    for(let i=0; i<windows; i++){

        rect((w/2)+((i-5)*2)*windowBuffer,(h/2)-(windowW/2)-5,windowW,windowW,2);

    }

    // front wing

    wingX = (w/2)-20;
    wingY = (h/2)+10;
    wingW = 60;
    wingH = 55;

    stroke(0);
    fill(192);

    beginShape();
    vertex(wingX,wingY);
    vertex(wingX+wingW,wingY);
    vertex(wingX,wingY+wingH);
    vertex(wingX-30,wingY+wingH);
    endShape(CLOSE);
    
    // top tail

    stroke(0);
    fill("rgb(100,150,255)");

    bWingW = 35;
    bWingH = 30;
    bWingX = (w/2)-95;
    bWingY = (h/2)-20;

    beginShape();
    vertex(bWingX,bWingY);
    vertex(bWingX+bWingW,bWingY);
    vertex(bWingX-5,bWingY-bWingH);
    vertex(bWingX-25,bWingY-bWingH);
    endShape(CLOSE);

    // front tail

    fill("rgb(100,150,255)");

    bWingW = 30;
    bWingH = 25;
    bWingX = (w/2)-100;
    bWingY = (h/2)-5;

    beginShape();
    vertex(bWingX,bWingY);
    vertex(bWingX+bWingW,bWingY);
    vertex(bWingX-5,bWingY+bWingH);
    vertex(bWingX-25,bWingY+bWingH);
    endShape(CLOSE);

    frames++;

}

function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight - 50;
    resizeCanvas(w,h);

}

/*

https://em-content.zobj.net/source/skype/289/airplane_2708-fe0f.png

*/
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
    background("rgb(200,200,240)");

    push();
    translate((w/2),(h/2));
    scale(2,2);
    translate(-(w/2),-(h/2)+10);

    var barThickness = 3;

    // bike handles

    noFill();
    strokeWeight(barThickness);
    stroke("grey");
    beginShape();
    vertex((w/2)+29,(h/2)-57);
    curveVertex((w/2)+29,(h/2)-57);
    curveVertex((w/2)+27,(h/2)-62);
    curveVertex((w/2)+34,(h/2)-66);
    curveVertex((w/2)+32,(h/2)-72);
    curveVertex((w/2)+23,(h/2)-73);
    vertex((w/2)+23,(h/2)-73);
    endShape();

    strokeWeight(barThickness+1);
    stroke("black");
    line((w/2)+23,(h/2)-73,(w/2)+14,(h/2)-73);

    // front bike pedals

    var pedalR = 15;
    var pedalSpokes = 5;

    push();
    translate(-5,0);
    push();
    translate((w/2),(h/2));
    rotate((time+180)*Math.PI/180);
    translate(-(w/2),-(h/2));

    noFill();
    strokeWeight(2)
    stroke("rgba(128,128,128,0.75)");
    line((w/2),(h/2),(w/2),(h/2)+(pedalR*0.85));

    push();
    translate((w/2),(h/2)+(pedalR*0.85));
    rotate((-time)*Math.PI/180);
    translate(-(w/2),-(h/2)-(pedalR*0.85));

    fill("rgba(0,0,0,0.75)");
    noStroke();
    rect((w/2)-5,(h/2)+(pedalR*0.85)-2.5,10,5,2);

    pop();

    pop();
    pop();

    // bike chain

    // bike wheels

    var wheelR = 50;
    var wheelSpokes = 16;
    var wheelDist = 50;

    var wheelPosn = [-1,1];

    for(let j=0; j<wheelPosn.length; j++){

        push();
        translate(wheelDist*wheelPosn[j],0);
        push();
        translate((w/2),(h/2));
        rotate(time*Math.PI/180);
        translate(-(w/2),-(h/2));

        noFill();
        stroke("black");
        strokeWeight(4);
        circle((w/2),(h/2),wheelR);

        stroke("grey");
        strokeWeight(4);
        circle((w/2),(h/2),wheelR-8);

        strokeWeight(1);    

        for(let i=0; i<wheelSpokes; i++){
            
            var ang = i*(360/wheelSpokes);
            var pX = (w/2)+(wheelR-8)*0.5*Math.cos(ang*Math.PI/180);
            var pY = (h/2)+(wheelR-8)*0.5*Math.sin(ang*Math.PI/180);

            line((w/2),(h/2),pX,pY);

        }

        noStroke();
        fill("grey");
        circle((w/2),(h/2),10);

        noStroke();
        fill("rgb(100,100,100)");
        circle((w/2),(h/2),7);

        pop();
        pop();

    }
 
    noStroke();

    // bike metal work

    strokeWeight(barThickness);

    stroke("grey");
    line((w/2)-23,(h/2)-46,(w/2)-26.5,(h/2)-54);

    stroke("red");
    line(wheelDist*wheelPosn[0]+(w/2),(h/2),(w/2)-5,(h/2));
    line(wheelDist*wheelPosn[0]+(w/2),(h/2),(w/2)-20,(h/2)-40);
    line((w/2)-5,(h/2),(w/2)-23,(h/2)-46);
    line((w/2)-20,(h/2)-40,(w/2)+30,(h/2)-50);
    line((w/2)-5,(h/2),(w/2)+33,(h/2)-47);
    line((w/2)+29,(h/2)-57,wheelDist*wheelPosn[1]+(w/2),(h/2));
    line((w/2)+28,(h/2)-56.5,(w/2)+30,(h/2)-57.5);
    line((w/2)-24,(h/2)-45.5,(w/2)-22,(h/2)-46.5);

    strokeWeight(1);

    // bike seat

    noStroke();
    fill("black");

    rect((w/2)-35,(h/2)-60,10,6,5,0,0,5);

    beginShape();
    vertex((w/2)-26,(h/2)-60);
    vertex((w/2)-12,(h/2)-57);
    vertex((w/2)-12,(h/2)-55);
    vertex((w/2)-22,(h/2)-54);
    vertex((w/2)-26,(h/2)-54);
    endShape(CLOSE);

    // right bike pedal

    var pedalR = 15;
    var pedalSpokes = 5;

    push();
    translate(-5,0);
    push();
    translate((w/2),(h/2));
    rotate(time*Math.PI/180);
    translate(-(w/2),-(h/2));

    noFill();

    stroke("rgb(100,100,100)");
    circle((w/2),(h/2),pedalR);

    stroke("grey");
    circle((w/2),(h/2),pedalR-2);

    stroke("rgb(100,100,100)");

    for(let i=0; i<pedalSpokes; i++){

        var ang = i*(360/pedalSpokes);
        var pX = (w/2)+(pedalR)*0.5*Math.cos(ang*Math.PI/180);
        var pY = (h/2)+(pedalR)*0.5*Math.sin(ang*Math.PI/180);

        line((w/2),(h/2),pX,pY);
        
    }

    noStroke();
    fill("rgb(100,100,100)");
    circle((w/2),(h/2),5);

    noFill();
    strokeWeight(2)
    stroke("grey");
    line((w/2),(h/2),(w/2),(h/2)+(pedalR*0.85));

    push();
    translate((w/2),(h/2)+(pedalR*0.85));
    rotate((-time)*Math.PI/180);
    translate(-(w/2),-(h/2)-(pedalR*0.85));

    fill("black");
    noStroke();
    rect((w/2)-5,(h/2)+(pedalR*0.85)-2.5,10,5,2);

    pop();

    pop();
    pop();

    // bike chain
    
    stroke("rgb(50,50,50)");
    strokeWeight(1);
    noFill();

    beginShape();
    vertex((w/2)-5,(h/2)-1-pedalR/2);
    vertex((w/2)-4+pedalR/3,(h/2)-1-pedalR/3);
    vertex((w/2)-4+pedalR/2,(h/2));
    vertex((w/2)-4+pedalR/3,(h/2)+1+pedalR/3);
    vertex((w/2)-4,(h/2)+1+pedalR/2);
    vertex((w/2)-5,(h/2)+1+pedalR/2);
    vertex((w/2)-50,(h/2)+5.5);
    vertex((w/2)-54,(h/2)+4);
    vertex((w/2)-56,(h/2));
    vertex((w/2)-54,(h/2)-4);
    vertex((w/2)-50,(h/2)-5.5);
    vertex((w/2)-5,(h/2)-1-pedalR/2);
    endShape(CLOSE);

    stroke("black");
    strokeWeight(1.5)
    drawingContext.setLineDash([1,2.5]);
    drawingContext.lineDashOffset = -time*0.25;

    beginShape();
    vertex((w/2)-5,(h/2)-1-pedalR/2);
    vertex((w/2)-4+pedalR/3,(h/2)-1-pedalR/3);
    vertex((w/2)-4+pedalR/2,(h/2));
    vertex((w/2)-4+pedalR/3,(h/2)+1+pedalR/3);
    vertex((w/2)-4,(h/2)+1+pedalR/2);
    vertex((w/2)-5,(h/2)+1+pedalR/2);
    vertex((w/2)-50,(h/2)+5.5);
    vertex((w/2)-54,(h/2)+4);
    vertex((w/2)-56,(h/2));
    vertex((w/2)-54,(h/2)-4);
    vertex((w/2)-50,(h/2)-5.5);
    vertex((w/2)-5,(h/2)-1-pedalR/2);
    endShape(CLOSE);
    

    //

    pop();

    time++;

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;
}

/* Goals:

    

*/

// data:image/png;base64,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
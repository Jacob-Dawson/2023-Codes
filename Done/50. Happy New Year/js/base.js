// js goes here

var blockContainer = document.getElementsByClassName("blockContainer");

let colours = ["blue","red","green"];
let gridArray = [];
var sqrt = Math.sqrt(blockContainer.length);

for(let i=0; i<blockContainer.length; i++){

    let randCol = colours[Math.floor(Math.random()*colours.length)];
    blockContainer[i].style.backgroundColor = ""+randCol;
    gridArray.push(randCol);

}

let counter = 0;

for(let i=0; i<blockContainer.length; i++){

    blockContainer[i].id = counter;
    blockContainer[i].addEventListener("click",clickEvent,false);

    counter++;

}

//console.log(gridArray);

let gridArrayStatus = [];
counter = 0;
let currBlockVal = 0;

for(let i=0; i<Math.sqrt(blockContainer.length); i++){

    temp = [];

    for(let j=0; j<Math.sqrt(blockContainer.length); j++){

        temp.push(0);

    }

    gridArrayStatus.push(temp);

}

//console.log(gridArrayStatus);

for(let i=0; i<Math.sqrt(blockContainer.length); i++){

    for(let j=0; j<Math.sqrt(blockContainer.length); j++){

        if(gridArray[counter] == gridArray[counter-sqrt] && (counter-sqrt >= 0)){

            if(checkAround(gridArrayStatus[i][j],gridArrayStatus[i-1][j]) == false){

                currBlockVal++;
                gridArrayStatus[i][j] = currBlockVal;

            } else {
                
                gridArrayStatus[i][j] = gridArrayStatus[i-1][j];

            }

        } else if(gridArray[counter] == gridArray[counter-1] && Math.floor((counter-1)/sqrt) == Math.floor(counter/sqrt)){

            if(checkAround(gridArrayStatus[i][j],gridArrayStatus[i][j-1]) == false){

                currBlockVal++;
                gridArrayStatus[i][j] = currBlockVal;

            } else {
                
                gridArrayStatus[i][j] = gridArrayStatus[i][j-1];

            }

        } else if(gridArray[counter] == gridArray[counter+1] && Math.floor((counter+1)/sqrt) == Math.floor(counter/sqrt)){

            if(checkAround(gridArrayStatus[i][j],gridArrayStatus[i][j+1]) == false){

                currBlockVal++;
                gridArrayStatus[i][j] = currBlockVal;

            } else {
                
                gridArrayStatus[i][j] = gridArrayStatus[i][j+1];

            }

        }  else if(gridArray[counter] == gridArray[counter+sqrt] && ((counter+sqrt) < gridArray.length)){

            if(checkAround(gridArrayStatus[i][j],gridArrayStatus[i+1][j]) == false){

                currBlockVal++;
                gridArrayStatus[i][j] = currBlockVal;

            } else {
                
                gridArrayStatus[i][j] = gridArrayStatus[i+1][j];

            }

        }

        counter++;

    }

}

for(let a=0; a<20; a++){

    counter = 0;

    for(let i=0; i<Math.sqrt(blockContainer.length); i++){
    
        for(let j=0; j<Math.sqrt(blockContainer.length); j++){
    
            if(gridArray[counter] == gridArray[counter-sqrt] && (counter-sqrt >= 0)){
    
                if(gridArrayStatus[i][j] != gridArrayStatus[i-1][j]){
    
                    gridArrayStatus[i][j] = gridArrayStatus[i][j] > gridArrayStatus[i-1][j] ? gridArrayStatus[i-1][j] : gridArrayStatus[i][j];
    
                }
    
            } 
            
            if(gridArray[counter] == gridArray[counter-1] && Math.floor((counter-1)/sqrt) == Math.floor(counter/sqrt)){
    
                if(gridArrayStatus[i][j] != gridArrayStatus[i][j-1]){
    
                    gridArrayStatus[i][j] = gridArrayStatus[i][j] > gridArrayStatus[i][j-1] ? gridArrayStatus[i][j-1] : gridArrayStatus[i][j];
    
                }
    
            }
            
            if(gridArray[counter] == gridArray[counter+1] && Math.floor((counter+1)/sqrt) == Math.floor(counter/sqrt)){
    
                if(gridArrayStatus[i][j] != gridArrayStatus[i][j+1]){
    
                    gridArrayStatus[i][j] = gridArrayStatus[i][j] > gridArrayStatus[i][j+1] ? gridArrayStatus[i][j+1] : gridArrayStatus[i][j];
    
                }
    
            } 
            
            if(gridArray[counter] == gridArray[counter+sqrt] && ((counter+sqrt) < gridArray.length)){
    
                if(gridArrayStatus[i][j] != gridArrayStatus[i+1][j]){
    
                    gridArrayStatus[i][j] = gridArrayStatus[i][j] > gridArrayStatus[i+1][j] ? gridArrayStatus[i+1][j] : gridArrayStatus[i][j];
    
                }
    
            }
    
            counter++;
    
        }
    
    }

}

function checkAround(pos1,pos2){

    if(pos2 == 0){

        return false;

    }

    return true;

}

//console.log(gridArrayStatus);

function removeSelectedBlocks(num){

    for(let i=0; i<Math.sqrt(blockContainer.length); i++){
    
        for(let j=0; j<Math.sqrt(blockContainer.length); j++){

            if(num == gridArrayStatus[i][j]){
    
                gridArrayStatus[i][j] = 0;
                let targetElem = (i*sqrt)+j;

                document.getElementsByClassName("blockContainer")[targetElem].style.visibility = "hidden";
            
            }
    
        }
    
    }

}

function clickEvent(event){

    let targetBlock = gridArrayStatus[Math.floor((this.id)/sqrt)][((this.id)%sqrt)];

    //console.log(targetBlock);

    if(targetBlock != 0){

        removeSelectedBlocks(targetBlock);

    } else if(targetBlock == 0){

        this.style.visibility = "hidden";

    }

}

/*

    Bit like collapse the game but just a small generation with tiles you can click on 
    and blocks that are the same colour as the tile you click on go as well, and after
    that the tiles will disappear and the message will pop up: "Happy New Year 2024"

*/
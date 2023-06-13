// js goes here

var viewFrame = document.getElementById("viewFrame");
var resultText = document.getElementById("resultText");
var maxX = 20;
var maxY = 20;
var baseSize = 10;

buildTable(3,3);

function checkChanges(){

    var amountX = Number(document.getElementById("firstAmount").value);
    var amountY = Number(document.getElementById("secondAmount").value);

    if(amountX > 20 || amountX < 1 || amountY > 20 || amountY < 1){

        return;

    } else {

        buildTable(amountX,amountY);

    }

}

function buildTable(amountX,amountY){

    viewFrame.innerHTML = "";
    viewFrame.style.gridTemplateColumns = ""+calcGridCols(amountX);

    for(let i=0; i<(amountX*amountY); i++){

        var elem = document.createElement("DIV");
        var elem2 = document.createElement("DIV");

        elem.classList.add("multItemContents");
        elem2.classList.add("multItem");

        elem2.append(elem);

        viewFrame.append(elem2);

    }

    resultText.innerHTML = ""+amountX+" x "+amountY+" = "+(amountX*amountY);

    var multItem = document.getElementsByClassName("multItem");
    var size = baseSize+((25-(amountX > amountY ? amountX : amountY))/25)*25;
    for(let i=0; i<multItem.length; i++){

        multItem[i].style.width = ""+(size)+"px";
        multItem[i].style.height = ""+(size)+"px";

    }

}

function calcGridCols(n){

    var result = "";

    for(let i=0; i<n; i++){

        result += "  "+(100/n)+"%";

    }

    return result;

}
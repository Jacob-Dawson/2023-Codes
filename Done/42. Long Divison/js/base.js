// js goes here

let myTable;
let mainDividend;
let mainDivisor;
let anInterval;
let steps;
let resultFlag;

window.onload = function(){

    myTable = document.getElementById("myTable");
    mainDividend = Math.ceil(Math.random()*9999); // 425
    mainDivisor = Math.ceil(Math.random()*99); // 25
    steps = 1;
    resultFlag = false;

    anInterval = setInterval(function(){

        longDivide(mainDividend,mainDivisor,steps);

        if(resultFlag == false){

            steps++;

        } else {

            clearInterval(anInterval);

        }

    },1500);

}

function longDivide(dividend,divisor,maxCounter){

    let pos;
    let digit;
    let quotient;
    let row;
    let cell1;
    let cell2;
    let cell3;
    let topLine = 0;
    let shownDividend = "";
    let shownQuotient = "";

    myTable.innerHTML = "";
    row = myTable.insertRow(0);
    cell1 = document.createElement("th");
    row.appendChild(cell1);
    cell1.colSpan = "3";
    cell1.innerHTML = "Long Division";

    row = myTable.insertRow(1);
    cell1 = row.insertCell(0);
    cell1.innerHTML = " ";
    cell2 = row.insertCell(1);
    cell2.style.borderBottom = "2px solid black";
    cell3 = row.insertCell(2);
    cell3.innerHTML = " ";

    row = myTable.insertRow(2);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);

    cell1.id = "divisor";
    cell1.style.textAlign = "right";
    cell2.id = "dividend";
    cell2.style.borderLeft = "2px solid black";

    document.getElementById("dividend").innerHTML = ""+mainDividend;
    document.getElementById("divisor").innerHTML = ""+mainDivisor;

    shownQuotient = document.getElementsByTagName("td")[1];

    pos = getNumLength(mainDividend);
    counter = 0;

    if(maxCounter == 1){

        maxCounter++;
        return;

    }

    while(pos >= 1 && counter <= maxCounter){
        
        digit = getDigit(mainDividend,pos);

        if(counter > 0){

            shownDividend.innerHTML += ""+digit;
            shownDividend = "";
            counter++;

        }

        topLine = (topLine*10)+digit;

        quotient = Math.floor(topLine / mainDivisor);

        shownQuotient.innerHTML += ""+quotient;

        bottomLine = mainDivisor * quotient;

        row = myTable.insertRow(3+counter);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.innerHTML = "";
        cell2.innerHTML = ""+bottomLine;
        cell2.style.borderBottom = "2px solid black";
        counter++;

        topLine = topLine - bottomLine;

        row = myTable.insertRow(3+counter);
        cell1 = row.insertCell(0);
        shownDividend = row.insertCell(1);
        cell1.innerHTML = "";
        shownDividend.innerHTML += ""+topLine;

        pos--;

        if(pos <= 0){

            resultFlag = true;

        }

    }

    if(resultFlag == true){

        let result = Math.floor(dividend/divisor);
        let remainder = dividend%divisor;

        let tdLen = document.getElementsByTagName("td").length;

        document.getElementsByTagName("td")[1].innerHTML = eraseExcessZeros(""+(document.getElementsByTagName("td")[1].textContent))+"✔️";
        document.getElementsByTagName("td")[tdLen-2].innerHTML = "remainder:";
        document.getElementsByTagName("td")[tdLen-1].innerHTML += "✔️";
    
    }

}

function getDigit(num,target){

    let maxDigits = 0;
    let tempNum = num;

    while(tempNum >= 1){

        if(tempNum >= 1){

            tempNum /= 10;
            maxDigits++;

        }

    }

    while(maxDigits > target){

        num = num - Math.floor(num/Math.pow(10,maxDigits-1))*Math.pow(10,maxDigits-1);
        maxDigits--;

    }

    maxDigits = target;

    while(num >= 10){

        if(num >= 10){

            num /= 10;
            maxDigits++;

        }

    }

    num = Math.floor(num);

    return num;

}

function getNumLength(num){ 

    let maxLength = 0;

    while(num >= 1){

        if(num >= 1){

            num /= 10;
            maxLength++;

        }

    }

    return maxLength;

}

function eraseExcessZeros(word){

    result = word;

    for(let i=0; i<word.length; i++){

        if(word[i] == "0"){

            result = result.replace(""+result[i]," ");

        } else if(word[i] != "0"){

            break;

        }

    }
    

    return result;

}
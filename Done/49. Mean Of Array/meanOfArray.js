// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/description/

/*

Example 1:

Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
Output: 2.00000
Explanation: After erasing the minimum and the maximum values of this array, 
all elements are equal to 2, so the mean is 2.

@Jay 49 (2023)

*/
var maxNumber = 10;
var arr = buildArr(maxNumber);//[6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0];

console.log(arr);

arr = arr.sort(function(a, b){return a-b});

console.log(arr);

var fivePercent = Math.floor(arr.length/20);

arr = arr.slice(fivePercent,-fivePercent);

console.log(arr);

var arrTotal = calcTotal(arr);

console.log(arrTotal);

console.log(arrTotal/arr.length);

function calcTotal(myArr){

    var result = 0;

    for(let i=0; i<myArr.length; i++){

        result += myArr[i];

    }

    return result;

}

function buildArr(num){

    var result = [];

    for(let i=0; i<20; i++){

        var randNum = Math.floor(Math.random()*num);

        result.push(randNum);

    }

    return result;

}
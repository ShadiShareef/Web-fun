//Always Hungry
function alwaysHungry(arr) {
    var z=0;
    for(var i=0; i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy")
            z++;
        }
    }
    if(z===0) console.log("I'm Hungry")
}
var arr=[3.14, "food", "food", true, "food"];
alwaysHungry(arr);
//--------------------------------------------------------
// highpass filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//--------------------------------------------------------
// Better than average
function betterThanAverage(arr) {
    var sum = 0 , ave , count = 0 ;
    for(var i=0;i<arr.length;i++)
        sum+=arr[i];
    
    ave=sum/arr.length;

    for(var i=0;i<arr.length;i++)
        if(ave<arr[i])
            count++;

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//--------------------------------------------------------
//Array Reverse

function reverse(arr) {
    var a2=[];
    for(var i=arr.length-1;i>=0;i--){
        a2.push(arr[i]);
    }
    return a2;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//--------------------------------------------------------
// Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1],a=fibArr[0],b=fibArr[1];
    for(i=2;i<n;i++)
    {
        fibArr[i]=a+b;
        a=b;
        b=fibArr[i];   
    }
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings
function numToString (arr){
    // let arrToStr = arr.map(function(num){
    //     return num.toString()
    // })
    let arrToStr = arr.map(el => el+"")
    return arrToStr
}

console.log(numToString([12, 783, 34, 734, 973]));

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

function doubled (arr) {
    let result = []
    arr.forEach(function(element) {
        result.push(element * 2);
    });

    return result;
}

console.log(doubled([1,2,3]));




//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

function firstAndLast (arr) {
    let result = [];
    arr.forEach(function(item){
        console.log(item.charAt(0), item.charAt(item.length-1))
        result.push(item[0]+item[item.length-1])
    });

    return result;
}

console.log(firstAndLast(['winning', 'tomato']));

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4


let result = []
for (let i = 1; i < 5; ++i) {
    result.push(i, i, i);
}

console.log(result.join(" "))
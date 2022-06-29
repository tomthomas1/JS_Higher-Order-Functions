//  map() definition : The map() method creates a new array populated with the results of calling a provided 
// function on every element in the calling array.
// Two parameters : array - array of numbers
//                : func - SquareOfANumber
function map(array, func){
    var mappedArray = [];

    for(var i=0; i<array.length; i++){
        mappedArray.push(func(array[i]));
    }

    return mappedArray;
}

// map() execution
var result = map([1,2,3,4,5], SquareOfANumber);
console.log(result);
//Output is : [ 1, 4, 9, 16, 25 ]

// Function to be applied.
function SquareOfANumber(number){ 
    return number*number;
}
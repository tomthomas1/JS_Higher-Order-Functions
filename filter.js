//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Two parameters : array - array of numbers
//                : func - isOddNumber
function filter(array, func){
    var filteredArray = [];

    for(var idx=0; idx<array.length; idx++){
        if(isOddNumber(array[idx]) == true)
            filteredArray.push(array[idx]);
    }

    return filteredArray;
}

// filter() execution
var result = filter([1,2,3,4,5], isOddNumber);
console.log(result);

// Function to be applied.
function isOddNumber(number){ 
    return number%2 ;
}
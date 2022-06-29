// reduce() definition : The reduce() method executes a user-supplied "reducer" callback function on each element
// of the array, in order, passing in the return value from the calculation on the preceding element. 
//The final result of running the reducer across all elements of the array is a single value.

// Two parameters : array - array of numbers
//                : func - addNumbers
                //   : accumulator - initial value
                function reduce(iterable, func, accumulator){  
                    for(let element of iterable){
                        accumulator = func(accumulator, element);
                    }
                
                    return accumulator;
                }
                
                // Function to be applied.
                function addNumbers(accumulator, number){
                    return accumulator + number;
                }
                
                // reduce() execution
                var result1 = reduce([1,2,3,4,5], addNumbers, 5);
                var result2 = reduce([1,2,3,4,5], addNumbers, 2);
                
                console.log(`Result1 : ${result1}`);
                console.log(`Result2 : ${result2}`);
                
                // Result1 : 12345
                // Result2 : 16
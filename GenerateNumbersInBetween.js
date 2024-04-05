//creation of a function (getArray) with parameters(beginning, end),that executes the block of code in between the curly braces.
function getArray(beginning, end) {
    //creation of an empty array called newArray.
        let newArray = [];
    //if beginning is less than or equals to end increment x by 1 until the specified condition becomes false.
        if (beginning <= end) {
            for (let x = beginning; x <= end; x++) {
                newArray.push(x);
            }
    //otherwise if the above is not the case,a decrementing will take place until the condition below becomes false.
    //with the else and if statements we are able to generate a new array that contains numbers between inputed arguments for example:(4,7) to invoke the parameters(beginning,end).
        } else {
            for (let x = beginning; x >= end; x--) {
                newArray.push(x);
            }
        }
        return newArray;
    }
    //input two numbers below to generate an array containing numbers between them.
    (getArray());
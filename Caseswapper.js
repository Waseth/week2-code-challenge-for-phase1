//creation a function(swapCaswOfstring) ,that executes the block of code in between the yellow curly braces.
function swapCaseOfString(inputedString) {
    let swappedString = "";
//create a for loop that runs until the given condition(x < inputedString.length),becomes false.
//initialisation of x variable should start at 0 and increment or run until the condition becomes false.
    for (let x = 0; x < inputedString.length; x++) {
        let str = inputedString.charAt(x);
//if any letter in the inputed string is in uppercase,swap it to lowercase.
        if (str === str.toUpperCase()) {
            swappedString += str.toLowerCase();
//if not,swap the letters to uppercase.
        } else {
            swappedString += str.toUpperCase();
        }
    }
    return swappedString;
  }
  //input the string which you want to swap its cases.
let stringInput = "";
let stringOutput = swapCaseOfString(stringInput);
stringOutput;
const reverseString = function(str) { // put arguement
    let newString = str.split("") // split it into something else first split - puts it in an array
    let reversedString = newString.reverse(); // do the reversal - reverse the array
    let newReversedString = reversedString.join("") //join it back together into a string

    //one liner
    // return str.split("").reverse().join("");

    return newReversedString;
};


// Do not edit below this line
module.exports = reverseString;

const reverseString = function(stringInput) {
    let result = "";
    for(let i = stringInput.length-1; i >= 0; i--){
        result = result+ "" +stringInput[i];   
    }
    
    return result;

};

// Do not edit below this line
module.exports = reverseString;

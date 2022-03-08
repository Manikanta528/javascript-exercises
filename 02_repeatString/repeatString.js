const repeatString = function(stringInput, numOfTimesInput) {
    let result = "";
    if(numOfTimesInput < 0){
        return "ERROR"
    }
    else{
        for(let i = 0; i < numOfTimesInput ; i++){
            result = result.concat(stringInput);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

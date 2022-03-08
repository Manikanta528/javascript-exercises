const sumAll = function(startInput, endInput) {
    let sum = 0;
    if(typeof startInput != typeof endInput || startInput < 0 || endInput < 0){
        return 'ERROR';
    }
    if(startInput > endInput){
        let temp = startInput;
        startInput = endInput;
        endInput = temp;
    }
    while(startInput <= endInput){
        sum += startInput;
        startInput++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

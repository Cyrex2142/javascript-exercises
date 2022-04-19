const sumAll = function(int1, int2) {
    let newInt = 0;
    if (int1 < 0 || int2 < 0) {
        return 'ERROR'
    } else if (typeof int1 != "number"|| typeof int2 != "number"){
        return 'ERROR'
    } else if(int1 < int2) {
        var intCounter = int1;
        var highInt = int2;
        while(intCounter <= highInt) {
            newInt = newInt + intCounter;
            intCounter ++;
        }
        return newInt;
    } else if(int1 > int2) {
        var intCounter = int2;
        var highInt = int1;
        while(intCounter <= highInt) {
            newInt = newInt + intCounter;
            intCounter ++;
        }
        return newInt;
    }

};

// Do not edit below this line
module.exports = sumAll;

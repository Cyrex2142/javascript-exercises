const getTheTitles = function(arr) {
    let titsArr = [];
    for (let i = 0; i < arr.length; i++) {
        titsArr.push(arr[i].title);
    }
    return titsArr;
};

// Do not edit below this line
module.exports = getTheTitles;

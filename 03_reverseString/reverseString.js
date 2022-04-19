const reverseString = function(str) {
    let revArr = [];
    for (let i = 0; i < str.length; i++) {
        revArr.unshift(str[i]);
    }
    let revStr = '';
    for (let i = 0; i < str.length; i++) {
        revStr = revStr + revArr[i];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;

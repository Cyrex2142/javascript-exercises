const palindromes = function (palStr) {
    let outStr = '';
    let x = 0;
    let i = palStr.length - 1;
    while (i < 0) {
        outStr[x] = palStr[i];
        x++;
        i++;
    }
    if (outStr === palStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

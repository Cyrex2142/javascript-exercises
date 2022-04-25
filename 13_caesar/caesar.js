const caesar = function(str, key) {
    let crypt = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let swapKey = '';
    for (let i = 0; i < key; i++) {
        swapKey = crypt.pop();
        crypt.unshift(swapKey);
    }
    for (let x = 0; x < str.length; x++) {
        
    }
};

// Do not edit below this line
module.exports = caesar;

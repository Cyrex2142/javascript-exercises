const fibonacci = function(fibNum) {
    let fibSeq = [1];
    let i = 2;
    let fibNo1 = 1;
    let fibNo2 = 1;
    while (fibSeq.length - 1 < fibNum) {
        fibSeq.push(fibNo1 + fibNo2);
        fibNo1 = fibSeq[i];
        i++;
    }
    console.log(fibSeq[fibNum - 1]);
    return fibSeq[fibNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;

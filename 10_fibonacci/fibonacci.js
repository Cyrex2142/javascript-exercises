const fibonacci = function(fibNum) {
    if (fibNum>0) {
        let fibSeq = [1, 1]
        while (fibSeq.length-1 < fibNum) {
            let x = fibSeq.length-1
            fibSeq.push(fibSeq[x] + fibSeq[x-1])
        }
        return fibSeq[fibNum-1];
    } else {
        return 'OOPS'
    }
};

// Do not edit below this line
module.exports = fibonacci;

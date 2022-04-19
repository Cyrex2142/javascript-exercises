const removeFromArray = function(arr,...rems) {
	for(let i=0; i < rems.length; i++) {
		for(let x=0; x < arr.length; x++){
			if(arr[x] === rems[i]) {
				arr.splice(x, 1);
			}
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

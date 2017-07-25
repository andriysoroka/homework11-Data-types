function getTransformedArray (arr, callBeck) {
	var newArr = [];
	forEach(arr, (i => newArr.push(callBeck(i))));
	return newArr;
};
function increment(num){ return num + 1 };
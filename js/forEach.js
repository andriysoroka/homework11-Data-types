function forEach(arr, callBeck) {
	for (let i = 0; i < arr.length; i++){
		callBeck(arr[i]);
	}
};
//forEach( [3, 5, 2], function(el){ console.log(el) } );

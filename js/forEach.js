function forEach(arr, callBeck) {
	for (let i = 0; i < arr.length; i++){
		callBeck(arr[i]);
	}
};
//forEach( [3, 5, 2], function(el){ console.log(el) } );

//task 2
//function increment(num){ return num + 1 } // just returns incremented number
 // getTransformedArray( [1, 7, 20], increment ); // -> [ 2, 8, 21 ]
function getTransformedArray (arr, callBeck) {
	var newArr = [];
		/*for (let i = 0; i < arr.length; i++) {
		newArr.push(callBeck(arr[i]));
	};*/
	forEach(arr, (i => newArr.push(callBeck(i))));
	return newArr;
	//foreach
}
function increment(num){ return num + 1 };
//getTransformedArray( [1, 7, 20], increment );

//task 3
function pluckByAttribute (arr, label) {
	//var newArr = [];
		/*for ( i = 0; i < arr.length; i++) {
				newArr.push(arr[i][label]);
		};*/
	
	return getTransformedArray(arr, (el => el[label]));
}
var presidents = [ { name: 'George', surname: 'Kush' } ,
				{ name: 'Barako', surname: 'Obaame' } ];
// pluckByAttribute( presidents, 'name' );

//task 4
function cypherPhrase (obj, str) {
	var newStr;
		/*for (let i = 0; i < str.length; i++) {
			let letter =  obj[str.charAt(i)] || str.charAt(i);
			newArr.push(letter);
		};*/
	newArr = getTransformedArray(str, function(letter){ 
		return obj[letter] || letter;
	});
	newStr = newArr.join("");
	return newStr;
};
var charactersMap = {a: 'o', c: 'd', t: 'g'}
//cypherPhrase( charactersMap, 'kitty cat' );

//task 5 
//var obj = {a: 'o', c: 'd', t: 'g'};
//var str = "kiggy dog";
//"kitty cat";

function decypherPhrase (obj, str) {
	/*var newStr = str;
	for (key in obj) {
		let letter = new RegExp(obj[key], "g");
		newStr = newStr.toLowerCase().replace(letter, key);	
	};*/
	var newObj = {};
	for (key in obj) {
		newObj[obj[key]] = key;
	}
	return cypherPhrase(newObj, str);
};
// decypherPhrase( charactersMap, ‘kiggy dog’ );

//task 6
function getTopNRichestNames (numb, arr) {
	var newArr1 = [];
	if(numb > arr.length) numb = arr.length;
		/*for ( i = 0; i < numb; i++) {
				newArr1.push(arr[i].name);
		};*/
	pluckByAttribute()
	return newArr1;
}
var people = [
    {name: 'Bara', income: '1B'},
	{name: 'Dara', income: '5B'},
	{name: 'Kara', income: '1M'},
	{name: 'Zara', income: '2K'}
  ];
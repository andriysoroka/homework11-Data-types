function cypherPhrase (obj, str) {
	var newStr;
	newArr = getTransformedArray(str, function(letter){ 
		return obj[letter] || letter;
	});
	newStr = newArr.join("");
	return newStr;
};
var charactersMap = {a: 'o', c: 'd', t: 'g'}
//cypherPhrase( charactersMap, 'kitty cat' );
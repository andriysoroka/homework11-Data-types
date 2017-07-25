function decypherPhrase (obj, str) {
	var newObj = {};
	for (key in obj) {
		newObj[obj[key]] = key;
	}
	return cypherPhrase(newObj, str);
};
function getTopNRichestNames (numb, arr) {
	var culc = income => {
		var b = 1e6, m = 1e6, k = 1e3, zeros;
		switch (income.charAt(1)) {
			case "B":
				zeros = b;
				break;
			case "M":
				zeros = m;
				break;
			case "K":
				zeros = k;
				break;
			default:
				zeros = 1;
		}
		return parseInt(income) * zeros;
	},
	newArr = arr.sort((obj1, obj2) => culc(obj1.income) < culc(obj2.income));
	return pluckByAttribute(newArr.slice(0, numb), 'name');
}
var people = [
    {name: 'Bara', income: '1B'},
	{name: 'Dara', income: '5B'},
	{name: 'Kara', income: '1M'},
	{name: 'Zara', income: '2K'}
  ];

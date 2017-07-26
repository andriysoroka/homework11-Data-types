function getTopNRichestNames (numb, arr) {
	function culc (income) {
		var B = 1e6, M = 1e6, K = 1e3;
		return parseInt(income.charAt(0)) * eval(income.charAt(1));
	}
	var newArr = arr.sort(function(obj1, obj2){
		if ( culc(obj1.income) < culc(obj2.income) ) {
			return 1;
		}
		if ( culc(obj1.income) > culc(obj2.income) ) {
			return -1;
		}
		return 0;
	});
	return [pluckByAttribute(newArr.slice(0, numb), 'name'), newArr.slice(0, numb)];
}
var people = [
    {name: 'Bara', income: '1B'},
	{name: 'Dara', income: '5B'},
	{name: 'Kara', income: '1M'},
	{name: 'Zara', income: '2K'}
  ];

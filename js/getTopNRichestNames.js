function getTopNRichestNames (numb, arr) {
	var newArr1 = [];
	if(numb > arr.length) numb = arr.length;
		for ( i = 0; i < numb; i++) {
				newArr1.push(arr[i].name);
	};
	return newArr1;
}
var people = [
    {name: 'Bara', income: '1B'},
	{name: 'Dara', income: '5B'},
	{name: 'Kara', income: '1M'},
	{name: 'Zara', income: '2K'}
  ];
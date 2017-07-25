function pluckByAttribute (arr, label) {
	return getTransformedArray(arr, (el => el[label]));
}
var presidents = [ { name: 'George', surname: 'Kush' } ,
				{ name: 'Barako', surname: 'Obaame' } ];
// pluckByAttribute( presidents, 'name' );
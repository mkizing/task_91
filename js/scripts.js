function getTriangleArea(a,h) {
	if ( (a <= 0) || (h <= 0)) {
		console.log('You selected improper value');
	}
	else {
		return a * h / 2;
	}
}

var triangle1Area = getTriangleArea(5,6);
var triangle2Area = getTriangleArea(10,7);
var triangle3Area = getTriangleArea(3,8);
function getTriangleArea(a,h) {
	if ( (a <= 0) || (h <= 0)) {
		console.log('You selected improper value');
	}
	else {
		return a * h / 3;
	}
}
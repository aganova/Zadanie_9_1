function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return (a * h / 2);
	} 
	return 'Incorrect data';
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(3.5, 50);
console.log(triangle1Area);
let radius = Math.floor(Math.random() * 10) + 1;
let side = Math.floor(Math.random() * 10) + 1;;
let base = Math.floor(Math.random() * 10) + 1;;
let height = Math.floor(Math.random() * 10) + 1;;


function getAreaOfCircle(radius){
	return Math.PI * (radius ** 2);
}
function getCircumferenceOfCircle(radius){
	return 2 * Math.PI * radius;
}
function getAreaOfSquare(side){
	return side ** 2;
}
function getAreaOfTriangle(base, height){
	return (1 / 2) * base * height;
}

console.log("Radius = " + radius);
console.log("Circle Area = " + getAreaOfCircle(radius));
console.log("Circumference = " + getCircumferenceOfCircle(radius));
console.log("Side = " + side);
console.log("Square Area = " + getAreaOfSquare(side));
console.log("Base = " + base + " Height = " + height);
console.log("Triangle Area = " + getAreaOfTriangle(base, height));
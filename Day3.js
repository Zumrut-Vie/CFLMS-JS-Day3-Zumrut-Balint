// Ex1
function crystalGAZER (number_children, job_title, location, partners_name){
	console.log(`You will be a ${job_title} in ${location} and married to ${partners_name} with ${number_children}.`)
}
crystalGAZER(0, "Junior Developer", "Vienna", "Ralph");

//Ex2
function ageCalculator(birthYear, currentYear){
	var age1 = currentYear-birthYear
	var age2 = currentYear-birthYear-1
	console.log(`You are either ${age1} or ${age2}`);
}
ageCalculator(1986, 2020);

//Ex3
function ageCalculatorAdvanced(birthYear){
	var date = new Date()
	var age1 = date.getFullYear()-birthYear
	var age2 = date.getFullYear()-birthYear-1
	console.log(`You are either ${age1} or ${age2}`);
	}

ageCalculatorAdvanced(1988);

//Ex4 Create a JavaScript function that converts degrees to radians. The function accepts one argument, the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"

function convertDegtoRad (deg) {
	var radian = deg * (Math.PI /180);
    return radian
}

console.log(convertDegtoRad(180));

/*Ex5 Create a function that calculates the area and volume of a box.
Formulas:area = width x height volume = width x height x depth*/

function areaVolumeCalc (width,height, depth) {
	var area = width * height; 
	var volume = width * height * depth;
	return [area,volume];
}

console.log(`The area is ${areaVolumeCalc(40, 50, 35)[0]} and the volume is ${areaVolumeCalc(40, 50, 35)[1]}`);

// Ex6 Create a JavaScript function to calculate the product of the values in an array. You can have as many values in an array as you want.
const numbers = [2, 4 , 5, 6]
function productofValues(arrayOfNums) {
	var one = arrayOfNums[0] * arrayOfNums[1]* arrayOfNums[2] * arrayOfNums[3];
	return one;
}

console.log(productofValues(numbers));


const array1 = [1, 2, 3, 4];
function multiplyValues(arrayOfNums) {
const reducer = (accumulator, currentValue) => accumulator * currentValue;

return arrayOfNums.reduce(reducer)

}



console.log(multiplyValues(array1));


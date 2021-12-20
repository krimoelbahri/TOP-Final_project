function randomNumber(number) {
	return Math.floor(Math.random() * number);
}
function sortByValue(a, b, value) {
	if (a.toUpperCase() === value.toUpperCase()) {
		return -1;
	}
	if (b.toUpperCase() === value.toUpperCase()) {
		return 1;
	}
	let scoreA = 0;
	let scoreB = 0;
	let arrayA = a.toUpperCase().split("");
	let arrayB = b.toUpperCase().split("");
	let arrayValue = value.toUpperCase().split("");

	for (let i = 0; i < arrayValue.length; i++) {
		if (arrayA[i]) {
			if (arrayValue[i] === arrayA[i]) scoreA++;
		}
		if (arrayB[i]) {
			if (arrayValue[i] === arrayB[i]) scoreB++;
		}
	}
	return scoreB - scoreA;
}
function sortByAge(a, b) {
	return b.toDate() - a.toDate();
}
/*function filterArray(array, index) {
	let j = randomNumber(array.length);
	let returnedArray = [];
	for (let i = 0; i < index; i++) {
		while (returnedArray.includes(array[j])) {
			j = randomNumber(array.length);
		}
		returnedArray.push(array[j]);
	}
	return returnedArray;
}*/
export function shuffleArray(array) {
	let j = randomNumber(array.length);
	let indexes = [];
	let returnedArray = [];
	for (let i = 0; i < array.length; i++) {
		while (indexes.includes(j)) {
			j = randomNumber(array.length);
		}
		indexes.push(j);
		returnedArray[i] = array[j];
	}
	return returnedArray;
}
export function sortArray(array, type, value) {
	if (type === "value")
		return array.sort(function (a, b) {
			return sortByValue(a.Username, b.Username, value);
		});
	if (type === "age")
		return array.sort(function (a, b) {
			return sortByAge(a.date, b.date);
		});
}
export default (array, shuffle) => {
	shuffle ? (array = shuffleArray(array)) : (array = array);
	if (array.length < 5) return array;
	return [array[0], array[1], array[2], array[3], array[4]];
};

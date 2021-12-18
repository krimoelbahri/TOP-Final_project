function randomNumber(number) {
	return Math.floor(Math.random() * number);
}
function filterArray(array, index) {
	let j = randomNumber(array.length);
	let returnedArray = [];
	for (let i = 0; i < index; i++) {
		while (returnedArray.includes(array[j])) {
			j = randomNumber(array.length);
		}
		returnedArray.push(array[j]);
	}
	return returnedArray;
}
function shuffleArray(array) {
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
export default (array) => {
	let shuffled = shuffleArray(array);
	if (shuffled.length < 5) return shuffled;
	return [shuffled[0], shuffled[1], shuffled[2], shuffled[3], shuffled[4]];
};

// // Qusetion 1
// // Differences between mutating array methods and non-mutation array methods
 /* Mutating array methods are methods that mutate the array, producing different return values depending on the method:
sometines it could be a reference to the same array or the length of the new array

Examples:
		i. fill()
		ii. push()
		iii. pop()
		iv. reverse()
		v. shift()


Non-mutating array methods are methods that return a new array when they are being called on an existing array
 
Examples:
		i. map()
		ii. flat()
		iii. slice
		iv. concat()
		v. splice()
 */

// Question 2
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// to add kotlin to the end of the array
languages.push('Kotlin');
console.log(languages);

// to add java after ruby
languages.splice(3, 0, 'Java');
console.log(languages);

// remove the first item in the array
languages.shift();
console.log(languages);

// add scala and swift to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages);

// replace php with go and rust
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

// Question 3
// the value of fruit will be ['apple', 'mango', 'orange', 'banana']
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
changeFruit(fruit);

//Question 4
// a function that accepts an array of numbers as an argument and returns the max value in the array
function maximumValueInArray(arr) {
	let maximumNumber = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maximumNumber) {
			maximumNumber = numbers[i]
		}
	}
	return maximumNumber;
}
console.log(maximumValueInArray[1, 6, 4]);
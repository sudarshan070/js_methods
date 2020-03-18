// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
largestNumber = numbers.sort((a, b) => a - b).reverse()[0];
console.log(largestNumber);

// Find longest string in strings
function longestWord(strings) {
  return strings.reduce(
    (word1, word2) => (word1.length < word2.length ? word2 : word1),
    ""
  );
}
console.log(longestWord(strings));

// Find all the even numbers
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
function evenNumber(numbers) {
  var even = [];
  return numbers.filter(x => {
    if (x % 2 !== 0) {
      even.push(x);
      console.log(even);
    }
  });
}
evenNumber(numbers);

// Find all the odd numbers
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
function evenNumber(numbers) {
  var even = [];
  return numbers.forEach(x => {
    if (x % 2 !== 0) {
      even.push(x);
      console.log(even);
    }
  });
}
evenNumber(numbers);

// Find all the words that contain 'is' use string method 'includes'
function includesWord(strings) {
  return strings.filter(word => {
    return word.toLowerCase().includes("is");
  });
}
includesWord(strings);

// Find all the words that contain 'is' use string method 'indexOf'
function includeItem(arr, word) {
  return arr.filter(char => {
    return char.toLowerCase().indexOf(word.toLowerCase()) !== -1;
  });
}
console.log(includeItem(strings, "is"));

// Check if all the numbers in numbers array are divisible by three use array method (every)
// every function return Boolean value.
const isEvery = (numbers = numbers % 3);
console.log(numbers.every(isEvery));

//  Sort Array from smallest to largest
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

// Remove the last word in strings
strings.pop();

// Add a new word in the array
strings.push("strings");

// Remove the first word in the array
strings.shift;

// Place a new word at the start of the array use (upshift)
strings.unshift("array");

// Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// Make a subset of strings array ['a','collection']
console.log(strings.slice(2, 4));

// Replace 12 & 18 with 1221 and 1881
numbers.splice(1, 0, 1221);
numbers.splice(3, 1, 1881);

// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var startsWithJ = customers.filter(x => x.firstname.startsWith("J"));
// Create new array with firstname and lastname
var arr = [];
customers.map(x => {
  arr.push(`${x.firstname} ${x.lastname}`);
});
arr;

// Sort the array created above alphabetically
customers.sort(function(a, b) {
  var nameA = a.firstname;
  var nameB = b.firstname;
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});

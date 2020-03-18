var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(words) {
  return words.reduce(
    (word1, word2) => (word1.length < word2.length ? word2 : word1),
    ""
  );
}
console.log(findLongestWord(words));

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
function sumArray() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(numbers1.reduce(reducer));
}
sumArray();

function sumArray() {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(numbers1.reduce(reducer) / numbers1.length);
}
sumArray();

var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers() {
  const reducer = numbers2.reduce((acc, cv) => acc + cv, 0);
  return reducer / numbers2.length;
}
console.log(averageNumbers());

var words2 = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength() {
  var reducer = words2.reduce((acc, cv) => acc + cv.length, 0);
  return reducer / words2.length;
}
console.log(averageWordLength());

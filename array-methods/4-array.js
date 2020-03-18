var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
let dogAge = 0;
function sumAll(data) {
  for (let x of data) {
    if (x.type === "dog") {
      var newDogAge = x.age * 7;
      dogAge = dogAge + newDogAge;
    }
  }
  console.log(dogAge);
}
sumAll(data);

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.
function alldogAges(data) {
  let sum = 0;
  let dogAge = 0;
  data.map(word => {
    if (word.type == "dog") {
      dogAge = word.age * 7;
      sum += dogAge;
    }
  });

  return sum;
}
console.log(alldogAges(data));

// Solution 105

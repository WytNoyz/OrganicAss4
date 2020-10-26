// Mapping
var numbers = [1, 2, 3, 4];

numbers.map((num) => {
  //do the magic/transform
  return num * 2;
});

console.log(result);

var names = [
  { first: "Nate", last: "Newport" },
  { first: "Nell", last: "Newport" },
  { first: "Byrdie", last: "Newport" },
];

var fullNames = names.map((person) => {
  return person.first + " " + person.last;
});

console.log(fullNames);

// filter
var prices = [45, 234, 78, 123, 21];

var res1 = prices.filter((price) => {
  // do the magic
  if (price >= 100) {
    return true;
  }
  return false;
});

console.log(res1);

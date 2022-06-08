var names = ["Matt", "Kerri", "Elizabeth", "Evelyn", "Liam"];

var nums = [1, 2, 3, 4]

var boos = [false, true, true, false];

var count = names.push("Walter");

console.log(names);
// expected output: Array ["Matt", "Kerri", "Elizabeth", "Evelyn", "Liam", "walter"]



console.log(nums.pop());
// expected output: 4

console.log(nums);
// expected output: Array [1, 2, 3]


var firstElement = boos.shift();

console.log(boos);
// expected output: [true, true, false]

console.log(firstElement);
// expected output: false

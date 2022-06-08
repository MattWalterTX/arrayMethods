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


// index positions: a index position refers to the spot in the array chain where a certain variable is currently.
// they can be used in method functions to affect a speciffic piece of your variable code in many ways.
// so far i have utilized in practice .pop .push .shift .unshift and .slice


var numbers = [1, 2, 3];

console.log(numbers.unshift(4, 5));
// expected output: 5 (total number of index positions after adding 4,5)

console.log(numbers);
// expected output [4, 5, 1, 2, 3]

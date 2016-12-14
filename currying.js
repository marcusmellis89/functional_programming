import _ from ramda;


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

/*
let words = (str) => {
  return _.split(' ', str);
};
*/

/* refactored curried version */
let words = _.split('');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

//var sentences = undefined;

let sentences = map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

// var filterQs = function(xs) {
//   return _.filter(function(x) {
//     return match(/q/i, x);
//   }, xs);
// };

let filterQs = _.filter((x) => {
  return match(/q/i, x);
});


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
let _keepHighest = (x, y) => {
  return x >= y ? x : y;
};

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return _.reduce(function(acc, x) {
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

let max = _.reduce((acc, x) => {
  return _keepHighest(acc, x);
}, -Infinity);

// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
let slice = _.slice(0,2);


// Bonus 2:
// ============
// Use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried.
// // Result for "Something" with n=4 should be "Some"
let take = _.slice(0);

'use strict';

const notMuppets = [
  { name: "bigbird", colour: "yellow" },
  { name: "elmo", colour: "red" },
  { name: "oscar", colour: "blue" },
];

function map(arr, cb) {
  const newArray = [];
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    var transformed = cb(current);
    newArray.push(transformed);
  }
  return newArray
}

const muppetColour = map(notMuppets, function(obj) {
   return obj.colour;
});

console.log(muppetColour)

/*create muppetColour
... by
mapping notMuppets to get array of colours;
*/
/*

Implement your own version of the built-in array map function.

Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

*/


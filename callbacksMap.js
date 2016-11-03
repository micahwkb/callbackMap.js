'use strict';

const notMuppets = [
  { name: "bigbird", colour: "yellow" },
  { name: "elmo", colour: "red" },
  { name: "oscar", colour: "blue" },
];

const muppetColour = map(notMuppets, function(obj) {
   return obj.colour;
});

console.log(muppetColour)

function map(arr, cb) {
  const newArray = [];
  arr.forEach(function(current) {
    newArray.push(cb(current));
  });
  return newArray;
}

// first attempt, works but above is cleaner
/*
function mapOriginal(arr, cb) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    newArray.push(cb(current));
  }
  return newArray
}
*/

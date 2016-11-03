'use strict';

const notMuppets = [
  { name: "bigbird", colour: "yellow" },
  { name: "elmo", colour: "red" },
  { name: "oscar", colour: "blue" },
];

function map(arr, cb) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    newArray.push(cb(current));
  }
  return newArray
}

const muppetColour = map(notMuppets, function(obj) {
   return obj.colour;
});

console.log(muppetColour)
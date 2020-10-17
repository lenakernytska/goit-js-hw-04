const countProps = function (obj) {
  ("use strict");
  let propNumber;
  const keysArray = Object.keys(obj);
  propNumber = keysArray.length;
  return propNumber;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

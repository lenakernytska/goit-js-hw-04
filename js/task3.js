// 1 ВАРИАНТ FOR....OF
const findBestEmployee = function (employees) {
  "use strict";
  let bestEmployee = "";
  let maxTasks = 0;
  const keys = Object.keys(employees);

  for (const key of keys) {
    if (maxTasks < employees[key]) {
      maxTasks = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

// 2 ВАРИАНТ   FOR
//     const findBestEmployee = function (employees) {
//   "use strict";
//   let bestEmployee = "";
//   let maxTasks = 0;
//         const keys = Object.keys(employees);

//   for (let i = 0; i < keys.length; i += 1) {
//     if (employees[keys[i]] > maxTasks) {
//       maxTasks = employees[keys[i]];
//       bestEmployee = keys[i];
//     }
//   }
//   return bestEmployee;
// };

// 3 ВАРИАНТ    FOR....IN
// function findBestEmployee(employees) {
//   let max = 0;
//   let bestEmployee;

//   for (const employee in employees) {
//     const numOfTasks = employees[employee];
//     if (numOfTasks > max) {
//       max = numOfTasks;
//       bestEmployee = employee;
//     }
//   }

//   return bestEmployee;
// }
// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

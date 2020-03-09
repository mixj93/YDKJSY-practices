// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md#practicing-closure

// My 1st solution, it's better to combine code into a function
// function range(start, end) {
//   if (end || end === 0) {
//     // * second argument is NOT omitted
//     const res = []
//     for (let i = start; i <= end; i++) {
//       res.push(i)
//     }
//     return res
//   } else {
//     // * second argument is omitted
//     return function(end) {
//       const res = []
//       for (let i = start; i <= end; i++) {
//         res.push(i)
//       }
//       return res
//     }
//   }
// }

// My 2nd solution
function range(start, end) {
  function getRange(s, e) {
    const res = []
    for (let i = s; i <= e; i++) {
      res.push(i)
    }
    return res
  }

  if (end || end === 0) {
    // * second argument is NOT omitted
    return getRange(start, end)
  } else {
    // * second argument is omitted
    return function(onlyEnd) {
      return getRange(start, onlyEnd)
    }
  }
}

console.log(range(3, 3)) // [3]
console.log(range(3, 8)) // [3,4,5,6,7,8]
console.log(range(3, 0)) // []

var start3 = range(3)
var start4 = range(4)

console.log(start3(3)) // [3]
console.log(start3(8)) // [3,4,5,6,7,8]
console.log(start3(0)) // []

console.log(start4(6)) // [4,5,6]

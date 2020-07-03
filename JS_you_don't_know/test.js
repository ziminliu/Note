// let i = 1;
// for (let i = 0; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// let i = 1;
// for (var i = 0; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// var i = 1;
// for (let i = 0; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

var a = {k1: 1}
var b = a
a.k3 = a = {k2: 2}
console.log(a,b)
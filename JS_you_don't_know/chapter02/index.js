/*
 * @Author: 刘子民
 * @Date: 2020-05-30 10:40:02
 * @LastEditTime: 2020-05-30 13:28:21
 */

// function foo(a) {
//   var b = a * 2;
//   function bar(c) {
//     console.log(a, b, c);
//   }
//   bar(b * 3);
// }
// foo(2);

// 'use strict'
// function foo(str) {
//   eval(str);
//   console.log(a);
// }

// // window.setTimeout("console.log(\"Hello World!\");", 500);
// foo('var a=3');

// const sum = new Function('a', 'b', 'console.log(\"Hello World!\");');
// console.log(sum(2, 6));
// expected output: 8

// with
function foo(obj) {
  with (obj) {
    var c=100
    a = 2;
  }
  console.log(c)
}

var o1 = {
  a: 3,
};
var o2 = {
  b: 3,
};
foo(o1);
console.log(o1)
foo(o2);
console.log(o2)

console.log(a)
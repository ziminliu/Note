/*
 * @Author: 刘子民
 * @Date: 2020-05-30 13:44:06
 * @LastEditTime: 2020-05-31 16:32:34
 */

// 函数作用域和块作用域
// function doSomething(a) {
//   b = a + doSomethingElse(a * 2);
//   console.log(b * 3);
// }
// function doSomethingElse(a) {
//   return a - 1;
// }
// var b;
// doSomething(2);

// function doSomething(a) {
//   function doSomethingElse(a) {
//     return a - 1;
//   }
//   var b;
//   b = a + doSomethingElse(a * 2);
//   console.log(b * 3);
// }
// doSomething(2);

// var a = 2;
// function foo() {
//   var a = 3;
//   console.log(a);
// }
// foo();
// console.log(a);

// (function foo() {
//   var a = 3;
//   console.log(a);
// })();
// console.log(a);

// setTimeout(function setTimeoutHandler() {
//   console.log('I waited 1 second');
// }, 1000);

// var a = 2;
// var obj={
//   a:4
// };
// (function IIFE(obj) {
//   var a = 3;
//   console.log(a);
//   console.log(obj.a);
//   console.log(global.a);
// })(obj);

// var a = 2;
// (function IIFE(def) {
//   def(globalThis);
// })(function def(global) {
//   var a = 3;
//   console.log(a);
//   console.log(global.a);
// });

// ES3  try catch 中的块级作用域
try {
  undefined();
} catch (error) {
  console.log('hello')
  var a='string'
  console.log(a)
}
console.log(error)
// 'use strict';
/*
 * @Author: 刘子民
 * @Date: 2020-06-03 09:15:39
 * @LastEditTime: 2020-06-05 19:05:00
 */

// var myArray = ['foo', 42, 'bar'];
// myArray.baz = 'baz';
// console.log(myArray.length);
// myArray[2] = 'baz';
// console.log(myArray);

// var myObject = {
//   a: 2,
// };
// Reflect.defineProperty(myObject,"a",{
//   value:3,
//   writable:false,
//   configurable:false,
//   enumerable:true
// })
// console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

// Reflect.defineProperty(myObject,"a",{
//   value:3,
//   writable:true,
//   configurable:true,
//   enumerable:true
// })
// console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

// var myObject = {
//   a: 2,
// };
// Reflect.preventExtensions(myObject);
// myObject.b = 3;
// console.log(myObject.a);

// var myObject = {
//   set a(val) {
//     this._a_ = val;
//   },
//   get a() {
//     return this._a_ ;
//   },
// };
// myObject.a = 3;
// console.log(myObject);

// var a = {
//   a: 123,
// };
// var b = Object.create(a);
// b.b = 456;
// console.log('a' in a);
// console.log('a' in b);
// console.log(b.hasOwnProperty('a'));

// var myArray = [1, 2, 3, 4]
// var it = myArray[Symbol.iterator]()
// console.log(it.next())

var random = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          value: Math.random(),
        };
      },
    };
  },
};
var stack = [];
for (var n of random) {
  console.log(n);
  stack.push(n);
  if (stack.length > 100) {
    break;
  }
}

/*
 * @Author: ziminLiu
 * @Date: 2020-05-28 11:24:51
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-28 14:15:02
 */

// function.apply()
Function.prototype.BIND = function (that) {
  let method = this,
    slice = Array.prototype.slice,
    args = slice.apply(arguments, [1]);
  // console.log(arguments, args);
  return function () {
    return method.apply(that, args.concat(slice.apply(arguments, [0])));
  };
};

let x = function () {
  return this.value;
}.BIND({ value: 999 });
console.log(x());

const numbers = [5, 6, 2, 3, 7];

const max = Math.max(...numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

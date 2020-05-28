/*
 * @Author: ziminLiu
 * @Date: 2020-05-27 23:10:46
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-28 00:42:16
 */

let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];
// 手写pop 方法
Array.prototype.POP = function () {
  return this.splice(this.length - 1, 1)[0];
};
Array.prototype.PUSH = function () {
  // this.splice(this.length, 0, ...arguments);
  this.splice.apply(
    this,
    [this.length, 0].concat(Array.prototype.slice.apply(arguments))
  );
  return this.length;
};
//  1. array.concat
let c = a.concat(b, 9, 10);
console.log(c);

//  2. array.join
let d = c.join('');
console.log(d);

// 3. array.pop()
let e = a.POP();
console.log(e, a);

// 4. array.push()
let f = a.PUSH(100, 110);
console.log(a, f);

// 5. array.reverse()
let array = ['a', 'b', 'c'];
let array1 = array.reverse();
console.log(array, array1);

// 6.array.sort()
let n = [4, 8, 16, 23, 42, 15];
console.log(n.sort((a, b) => a - b));
let m = n.splice(1, 0, 1, 2, 3);
console.log(m,n);

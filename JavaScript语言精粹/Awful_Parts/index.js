/*
 * @Author: 刘子民
 * @Date: 2020-05-28 18:48:41
 * @LastEditTime: 2020-05-28 22:51:37
 */

// 字符部分
console.log('\uD842\uDFB7');
console.log('\u{20BB7}');
console.log('\u0007');

// typeof
console.log(typeof 98.6);

console.log(typeof null);

console.log(typeof (() => 'a'));

// parseInt
console.log(parseInt('0o8'));
console.log(parseInt('0o9'));

// +
console.log('' + 1 + 1 + 2 + 3);
console.log(1 + 1 + '' + 2 + 3);

// 浮点数
console.log((0.1).toString(2));
console.log((0.2).toString(2));
console.log((0.1 + 0.2).toString(2));
console.log((0.3).toString(2));
console.log(Number.EPSILON.toString(2));

// NaN
console.log(+'0');
console.log(+'a');
console.log(NaN === NaN);
console.log(NaN !== NaN);
console.log(isNaN(Infinity));

console.log(isFinite('666'));
let isNumber = function (num) {
  return typeof num === 'number' && isFinite(num);
};

let arr = [1, 2, 3, 4];
let isArray = function (arr) {
  console.log(arr.constructor);
  return typeof arr === 'object' && arr.constructor === Array;
};
let isArray1 = function (arr) {
  return Object.prototype.toString.apply(arr) === '[object Array]';
};
console.log(isArray1(arr));

// 对象
let i;
let word;
let text = 'Hello everybody, this is my first time, geek time.';
let words = text.toLowerCase().split(/[\s,.]+/);
var count = {};
for (i = 0; i < words.length; i += 1) {
  word = words[i];
  if (count[word]) {
    count[word] += 1;
  } else {
    count[word] = 1;
  }
}
console.log(words);
console.log(count.constructor);


console.log();
console.log();
console.log();
console.log();
console.log();

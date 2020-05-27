/*
 * @Author: ziminLiu
 * @Date: 2020-05-27 17:20:23
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-27 20:40:56
 */

// 数组是一种特殊的对象 array-like
let arr = [1, '2', 3];
console.log(typeof arr); //object

// js 中的数组没有上界
arr[10] = 10;
console.log(arr);

delete arr[1];
console.log(arr);

// splice 方法
arr.splice(1, 1, '6');

// 判断数组
console.log(typeof new Array());

let isArray = function (value) {
  return value && typeof value === 'object' && value.constructor === Array;
};

let is_array = function (value) {
  return Object.prototype.toString.apply(value) === '[object Array]';
};

let arr1= new Array(3).fill(1)
console.log(arr1)
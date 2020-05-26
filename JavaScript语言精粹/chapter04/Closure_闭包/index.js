/*
 * @Author: ziminLiu
 * @Date: 2020-05-26 21:56:24
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-26 23:21:48
 * @FilePath: \chapter04\Closure_闭包\index.js
 */ 

let main = function () {
  let num = 1;
  let increment = function () {
    if (num < 10) {
      console.log(num);
      num++;
    } else {
      return;
    }
    setTimeout(increment, 100);
  };
  setTimeout(increment, 100);
};
main();

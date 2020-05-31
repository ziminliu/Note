/*
 * @Author: 刘子民
 * @Date: 2020-05-30 09:47:57
 * @LastEditTime: 2020-05-30 10:31:59
 */
'use strict'

function foo(a) {
  console.log(a + b);
  b = a;
}
foo(2);
console.log(globalThis)

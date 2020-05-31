/*
 * @Author: 刘子民
 * @Date: 2020-05-31 20:07:56
 * @LastEditTime: 2020-05-31 20:53:05
 */

foo();
var foo = 1;
function foo() {
  console.log(1);
}
console.log(foo)
foo = function foo() {
  console.log(2);
};

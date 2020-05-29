/*
 * @Author: 刘子民
 * @Date: 2020-05-29 12:06:23
 * @LastEditTime: 2020-05-29 14:38:52
 */

function foo() {
  var a = 1;
  var b = { name: '极客邦' };
  function showName() {
    var c = '极客时间';
    var d = { name: '极客时间' };
  }
  showName();
  console.log('showName End')
}
foo();

let a = 1;
console.log(a);

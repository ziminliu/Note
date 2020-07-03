/*
 * @Author: 刘子民
 * @Date: 2020-06-02 10:20:29
 * @LastEditTime: 2020-06-02 17:31:31
 */

//  function identify(){
//    return this.name.toUpperCase();
//  }
//  function speack(){
//    var greeting = "Hello , I'm"+identify.call(this)
//    console.log(greeting)
//  }
//  var me ={
//    name :"zimin"
//  }
//  var you = {
//    name :"Reader"
//  }
//  identify.call(me)
//  identify.call(you)
//  speack.call(me)
//  speack.call(you)

// this 的两种误解
// 1 指向自身
// var count=0
// function foo(num) {
//   console.log('foo:' + num);
//   this.count++;
//   // typeof this.count === 'number' ? this.count++ : (this.count = 1);
// }
// foo.count = 0;
// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }
// console.log(foo.count);

// function foo() {
//   foo.count = 4;
// }
// setTimeout(function () {
//   //匿名函数
//   arguments.callee.count=1
//   console.log(arguments.callee)
// }, 10);

// function foo(num) {
//   console.log('foo:' + num);
//   this.count++;
// }
// foo.count = 0;
// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo.call(foo, i);
//   }
// }
// console.log(foo.count);
//foo:6
//foo:7
//foo:8
//foo:9
//4

function foo(){
  var a=2;
  bar()
}
function bar(){
  console.log(this.a)
}
foo()
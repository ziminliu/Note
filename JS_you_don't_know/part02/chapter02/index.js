/*
 * @Author: 刘子民
 * @Date: 2020-06-02 17:42:58
 * @LastEditTime: 2020-06-03 09:04:35
 */

// function baz() {
//   console.log('Baz');
//   bar();
// }
// function bar() {
//   console.log('bar');
//   foo();
// }
// function foo() {
//   console.log('foo');
// }
// baz();

// function foo() {
//   console.log(this.a);
// }
// obj = {
//   a: 2,
// };
// foo.call(obj);

// function foo(el) {
//   console.log(el, this.id);
// }
// var obj = {
//   id: 'hello',
// };
// [1, 2, 3].forEach(foo, obj);
//1 hello
//2 hello
//3 hello

// function foo() {
//   console.log(this.a);
// }
// a = 2;
// foo.call(null);

// function foo(a, b) {
//   console.log('a:' + a, ', b:' + b);
// }
// var _ = Object.create(null);
// foo.apply(_, [2, 3]);
// var bar = foo.bind(_, 2);
// bar(3);

// function foo() {
//   console.log(this.a);
// }
// a = 2;
// var o = { a: 3, foo: foo };
// var p = { a: 4 };
// o.foo();
// (p.foo = o.foo)();

// 箭头函数中的this
function foo() {
  return a => {
    console.log(this.a);
  };
}
obj1 = {
  a: 2,
};
obj2 = {
  a: 3,
};
var bar = foo.call(obj1)
bar.call(obj2)

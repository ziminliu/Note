>@Author: 刘子民
> @Date: 2020-06-02 10:20:25
> @LastEditTime: 2020-06-02 10:20:26

# 关于this 

```js
function identify(){
   return this.name.toUpperCase();
 }
 function speack(){
   var greeting = "Hello , I'm"+identify.call(this)
   console.log(greeting)
 }
 var me ={
   name :"zimin"
 }
 var you = {
   name :"Reader"
 }
 identify.call(me)
 identify.call(you)
 speack.call(me)
 speack.call(you)
//Hello , I'mZIMIN
//Hello , I'mREADER
```

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

## this的误解

### 指向自身

```js
function foo(num) {
  console.log('foo:' + num);
  this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
//foo:6
//foo:7
//foo:8
//foo:9

//foo 执行了多少次？
console.log(foo.count);
//0
```

由于foo被打印出了4句输出，说明foo 确实被调用了4 次，那为什么foo.count 仍然为 0 呢？因此，this 指向本身这个说法从字面意思来理解是错误的。

执行 foo.count =0  时，的确向函数中添加了一个属性 `count`  。但是函数内部代码 `this.count` 中的`this` 并不是指向那个函数对象，虽然属性名相同，但根对象却并不相同。

实际上，这段代码无意中在全局变量中创建了一个count ，而 count 的值默认是undefined ，由于对它进行了自增运算，在隐式类型转换中，count 就变成了`NaN` 。

如果需要从函数对象内部引用它自身，那么只使用**this**是不够的。一般来说需要通过一个指向函数对象的词法标识符（变量）来引用它。

```js
function foo() {
  foo.count = 4;
}
setTimeout(function () {
  //匿名函数
}, 10);
```

具名函数在内部可以使用foo来引用自身。但是对于第二个匿名函数无法从函数内部引用自身。虽然对于匿名函数可以使用 `arguments.callee` 来引用当前正在运行的函数，但这种传统方法已经被弃用和批判。

然而，使用函数标识符来替代**this**回避了**this** 的使用问题，并且完全依赖于变量的词法作用域。

另一种方法是强制**this** 指向foo 函数。

```js
function foo(num) {
  console.log('foo:' + num);
  this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo.call(foo, i);
  }
}
console.log(foo.count);
//foo:6
//foo:7
//foo:8
//foo:9
//4
```

### 他的作用域

第二种常见的误解是，**this** 指向函数的作用域。这个问题有点复杂，因为在某种情况下他是正确的，但是在其他情况下他却是错误的。

需要明确的是，**this** 在任何情况下都不指向函数的词法作用域。

### This 到底是什么

**this** 是在运行时绑定的，并不是在编译时绑定。他的上下文取决于函数调用时的各种条件。**this** 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
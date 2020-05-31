>
> @Author: 刘子民
> @Date: 2020-05-30 10:40:05
> @LastEditTime: 2020-05-30 10:40:06
>

# 词法作用域

作用域共有两种主要的工作模型：

1. 词法作用域
2. 动态作用域

## 词法阶段

通过var 定义的变量被放入变量环境，通过let 定义的变量被放入词法环境。



## 欺骗词法

**欺骗词法作用域会导致性能下降**

### eval

```js
function foo(str, a) {
  eval(str);
  console.log(a, b);
}
var b = 2;
foo('var b=3', 1);
// 1	3
```

通过执行eval，会执行其中的代码，如果其中包含变量的声明，就会对eval 所处的词法作用域进行修改。技术上，通过一些技巧可以使eval 来运行在全局作用域中。



当我们使用严格模式时，eval 语句有着自己的词法作用域

```js
'use strict'
function foo(str) {
  eval(str);
  console.log(a);
}
foo('var a=3');
//ReferenceError: a is not defined
```

还有一些功能效果与 eval() 很相似。

#### setTimeout

第一个参数可以接受字符串，测试浏览器可用。node下似乎不可用。

#### setInterval

第一个参数可以接受字符串，测试浏览器可用。node下似乎不可用。

#### new Function

与 `eval` 不同的是，`Function` 创建的函数只能在全局作用域中运行。

```js
const sum = new Function('a', 'b', 'console.log(\"Hello World!\");');
console.log(sum(2, 6));
//Hello World!
//undefined
```



### with

with 通常用于我们多次访问一个对象中的多个属性，但是我们看一下代码

```js
function foo(obj) {
  with (obj) {
    a = 2;
  }
}

var o1 = {
  a: 3,
};
var o2 = {
  b: 3,
};
foo(o1);
console.log(o1)
foo(o2);
console.log(o2)

console.log(a)
```

输出以下结果：

```shell
{ a: 2 }
{ b: 3 }
2
```

可以看出对于o2 对象，他的属性中并没有a 属性，with语句块中对a 的赋值操作，并不是给o2 对象新建了一个a 属性，而是在全局的环境中创建了一个a 变量。可以说这个结果并不是我们想要得到的。

在这里我们对于a 是一个LHS 引用，并将值赋给他。a 的查找会在作用域内不断向上查找，直到全局。

with 可以将一个对象处理为完全隔离的词法作用域，但是在这个块内部正常的 `var` 声明还是作用在该函数的作用域中。

### 性能

由于JavaScript引擎会在编译阶段进行数项的性能优化，但是对于`eval`和`with`这种标识符，引擎无法在词法分析阶段明确的知道他们回接收什么样的代码（因为他们的参数一般都是随着程序的变化而传入不同的值，也无法知道传递给`with` 用来创建的新词法作用域的对象的内容是什么） 。

eval 会给程序的性能带来随时，可能所做的一切优化都是白费的。

因此，绝对不要在程序中使用`eval`和`with`语句。


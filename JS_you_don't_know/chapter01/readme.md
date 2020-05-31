>@Author: 刘子民
> @Date: 2020-05-30 09:48:02
> @LastEditTime: 2020-05-30 09:48:02

# 作用域是什么

js 并不像其他语言，它是运行时编译。一般会经历三个步骤。

## 分词/词法分析

这个过程中，编译器先将代码 分词成为一个个的词法单元，然后对词法单元进行词法分析。

## 解析/语法分析

这个过程是将词法单元流(数组)转换成一个个由元素逐级嵌套所组成的代表了程序语法结构的树。这个数叫做“**抽象语法树**”，AST。

## 代码生成

将AST 转换为可执行代码的过程被称为代码生成。



## 引擎变量的查询

引擎对变量的查找可分为LHS与RHS，分别表示`=`号的左边还是右边，但是这个说法是笼统的，更加准确的说法是，LHS 查询是试图找到变量容器的本身，而RHS 只是找到找到变量的源值。

### LHS

### RHS

我们看一下代码：

```js
function foo(a) {
  b = a;
  console.log(a + b);
}
foo(2);
console.log(globalThis)
```

输出结果为：

```js
4
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  },
  b: 2
}
```



第二行中`b = a` 赋值语句，会对`a`进行RHS 查询，对`b`进行LHS 查询，但是，在顶层执行上下文中(全局上下文)都没有查询到`b`的值，那么就会在全局作用域下创建一个具有该名称的变量。当我们使用严格模式时，就不会创建一个全局的变量，而是返回一个`ReferenceError`的异常。


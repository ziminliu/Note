# 糟粕(Bad Parts)

## ==

== 会隐式类型转换。

=== 运算符具有传递性，但是== 的



## with语句

with 用来快捷访问一个对象的属性。

with 语句的存在，严重影响的了JavaScript处理器的速度，因为他阻断了变量名的词法作用域绑定。



## eval

- eval 使代码难以阅读

- 降低了程序的安全性

Function 构造器是 eval 的另一种形式，同样也应该避免使用它。

浏览器提供的 setTimeout 和 setInterval 函数，他们也能接受字符串参数或函数参数。当传递的是字符串参数时，setTimeout 和 setInterval 会像eval 那样去处理。



## continue

重构移除continue会提高代码的性能。

## switch

switch 语句来源于 `FORTRAN IV`。

## 缺少块的语句(Block-less Statements)

## ++ --

## 位运算符

JavaScript 有着与java有着相同的一套位运算符。

| 符号 | 含义               |
| ---- | ------------------ |
| &    | and 按位与         |
| \|   | or 按位或          |
| ^    | xor 按位异或       |
| ~    | not 按位非         |
| >>   | 带符号右移         |
| >>>  | 无符号(用0 补)右移 |
| <<   | 左移               |



## function 语句对比function 表达式

函数也存在提升



## 类型的包装对象

完全可以使用字面量，多此一举。



## new

使用new 运算符来创建一个对象的时候，会继承该原型对象并创造一个新的对象，然后调用该函数，并将新创建的对象绑定给this ，用于返回。

但是当我们忘记使用new 运算符时，我们只是进行了一个函数调用，而函数中的this 此时指向的是全局的this ，这会对全局变量产生污染。并且这样还不会警告，这是非常糟糕的。

为了避免忘记使用new 运算符，我们统一规范使用与new 一起使用的函数首字母大写，用作一个构造器。这只是编程中的一个规定，并没有形成语法规定。



## void

**`void` 运算符** 对给定的表达式进行求值，然后返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。

很少用，几乎没用。累赘。
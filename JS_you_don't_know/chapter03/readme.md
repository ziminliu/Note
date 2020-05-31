>
> @Author: 刘子民
> @Date: 2020-05-30 13:44:03
> @LastEditTime: 2020-05-30 13:44:03
>



# 函数作用域和块作用域

## 函数中的作用域

函数中的作用域支持嵌套，函数内部可以访问外部变量，外部不可访问内部变量。

## 隐藏内部实现

使用函数对变量进行包装，实现"隐藏"效果。那么我们为什么要对代码进行隐藏呢？

我们来看以下代码

```js
function doSomething(a) {
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
function doSomethingElse(a) {
  return a - 1;
}
var b;
doSomething(2);
//15
```

可以看到，doSomething 和 doSomethingElse 都是一个全局的函数，随着项目的庞大，可能会出现后续函数重名的情况，并且这个方法也有可能被别的不具有该`权限`的函数调用。

我们再来看看以下代码。

```js
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }
  var b;
  b = a + doSomethingElse(a * 2);
  console.log(b * 3);
}
doSomething(2);
//15
```

现在函数`doSomethingElse` 和变量 `b `放在`doSomething`中，外部不再能够访问，实现了私有化。

### 规避冲突

编程时我们经常会出现变量名冲突导致的变量污染问题，对于避免冲突，一般由以下两种方式。

#### 全局命名空间

当程序中加载了多个第三方库时，如果他们没有妥善的将内部私有的函数或变量隐藏起来，就会容易引发冲突。

这些库通常会在全局作用域中声明一个名字足够独特的变量，通常是一个对象。这个对象被用作库的命名空间，所有需要暴露给外界的功能都会成为这个对象（命名空间） 的属性，而不是将自己的标识符暴露在顶级的词法作用域中。如下：

```js
var MyReallyCoolLibrary = {
   awesome:"stuff",
   doSomething:function (){
      //...
   },
   doAnotherThing:function(){
      //...
   }
};
```

#### 模块管理

## 函数作用域

### 函数声明与函数表达式的区别

1. 函数声明必须带有标识符（函数名称），函数表达式则可以省略
   - 表达式里的名字不能在函数外面用，只能在函数内部用
   - 函数有一个name属性，指向紧跟在function关键字之后的那个函数名。如果函数表达式没有名字，那name属性指向变量名
2. 函数声明会被预解析，函数表达式不会。



### 匿名和具名

```js
setTimeout(function(){
  console.log('I waited 1 second')
},1000)
```

函数表达式可以是**匿名**的，而函数声明则不可以省略函数名。

匿名函数的缺点：

1. 匿名函数在栈追踪中不会显示出有意义的函数名，增加调试困难。
2. 如果没有函数名，当函数需要应用自身时，只能使用已经过期的**arguments.callee**  引用。
3. 匿名函数省略了对于代码可读性很重要的函数名。

### 立即执行函数(IIFE)

通过增加`()`，使函数成为一个表达式，然后用`()`进行调用。

IIFE 的两种形式：

1. ```js
   (function (){...})()
   ```

2. ```js
   (function (){...}())
   ```



IIFE 的进阶用法是传递参数当做函数调用。

```js
var a = 2;
var obj={
  a:4
};
(function IIFE(obj) {
  var a = 3;
  console.log(a);
  console.log(obj.a);
  console.log(global.a);
})(obj);
// expect output
3
4
undefined
```



倒置代码运行顺序。将函数作为参数传递。

```js
var a = 2;
(function IIFE(def) {
  def(globalThis);
})(function def(global) {
  var a = 3;
  console.log(a);
  console.log(global.a);
});

```



## 块作用域

js ES 6 之前没有块级作用域，定义的变量容易出现全局变量的污染，虽然可以通过函数的方式进行隐藏，但缺乏块级作用域一直是JavaScript的一个诟病。

### with

我们之前了解到，使用with 语句从对象中创建的作用域仅在with 声明中而非外部作用域有效。

### try/catch

ES3 中的try/catch 语句catch 会创建一个单独的块级作用域，error 只存在于这个区域中，外部无法访问

### let

ES6 引入let ，从此多了块级作用域，let 可以将变量绑定到所在的任意作用域中，换句话说就是，let 为其声明的变量隐式的劫持了所在的块级作用域。

let 声明的变量不会被提升。

#### 垃圾收集

块作用域非常有用的原因和闭包即垃圾回收机制相关。

#### let 循环

### const


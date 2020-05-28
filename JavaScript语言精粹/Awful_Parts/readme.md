>
> @Author: 刘子民
> @Date: 2020-05-28 18:33:41
> @LastEditTime: 2020-05-28 18:33:42
>



# 毒瘤(Awful Parts)

## 全局变量(Global Variables)

当程序很庞大时，全局变量的出现使得程序难以维护和管理，降低了程序的可靠性。

3种方式

- 在函数最外层定义
- 在window上定义
- 隐式声明



## 作用域(Scope)

JavaScript 语法来源于C。C语言中含有块级作用域，在代码块中的变量外部不可见。而JavaScript虽然提供了代码块的书写方法，但是并没有提供块级作用域，代码块中声明的变量在包含此代码块的函数的所有位置都是可以访问的。

块级作用的出现在ES6 ，let ，const 。



## 自动插入分号(Semicolon Insertion)

JavaScript 的自动修复机制会自动插入分号。

```js
let bar = function () {
  return
  {
    status: true
  }
};
console.log(bar().status);
//undefined
```

正确的应该是这样：

```js
let bar = function () {
  return  {
    status: true
  }
};
console.log(bar().status);
//true
```

## 保留字(Reserved Worlds)

JavaScript中的大部分保留字都还没有被使用



## Unicode

JavaScript设计之初，Unicode 预计最多会有65536 个字符。但之后增加到了一百万个字符。

由于JavaScript 的字符是16 位的，足以覆盖65536 个字符(现在被称为基本多文种平面(Basic Multilingual Plane))。于是Unicode 将一对字符，即32 位视为一个单一字符。而JavaScript 认为一对字符是两个不同的字符。



ES6 中对字符又进行了扩充，之前只能使用`\uxxxx` 的形式来表示Unicode编码，ES6 后，可以使用两个双字节来表示一个字符，如

```js
console.log('\uD842\uDFB7')	//𠮷
console.log('\u{20BB7}')		//𠮷
console.log('\u20BB7')			//₻7
```

ES6 支持大括号识别双字节字符，第三号由于是普通识别方式，`\u20BB7`会识别为·`\u20BB`+`7`。

**By the way:**Buffer.toString() 方法默认以`UTF-8`编码，中文字符占3个字节。

以下是阮一峰老师对于Unicode、ASCII、UTF-8 这三种编码的总结

http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html



## typeof

typeof 运算符返回一个用于识别其运算数类型的字符串

```js
typeof 98.6			//number
typeof null			//object
```

对于正则的识别，有些会返回‘object’，有些返回‘function'。



## parseInt

parseInt 将字符串转换为正数。但是他在遇到非数字时会停止解析。还有如果parseInt的参数部分以数字0 开头，则会以8进制的形式来解析这串字符串(ES6 之后被改为以0o开头)。



## +

+运算符会存在隐式的数据类型转换，运算符从左往右计算，当遇到第一个不是number类型的运算数时，会将后续的运算数都当做字符串来处理

```js
console.log(''+1+1+2+3)
console.log(1+1+''+2+3)
//1123
//223
```



## 浮点数(Floating Point)

二进制浮点数不能准确的处理十进制小数，因此0.1+0.2 不等于 0.3。由于JavaScript遵循二进制浮点数算数标准(IEEE754)。解决这个办法就是设置一个极小的常量来作为容差值，只要绝对值小于这个容差值，我们就可以主观认为这个结果是相等的。这个值在ES6 中出现。

Number.EPSILON

```js
console.log((0.1).toString(2));
console.log((0.2).toString(2));
console.log((0.1 + 0.2).toString(2));
console.log((0.3).toString(2));
console.log(Number.EPSILON.toString(2));

//0.0001100110011001100110011001100110011001100110011001101
//0.001100110011001100110011001100110011001100110011001101
//0.0100110011001100110011001100110011001100110011001101
//0.010011001100110011001100110011001100110011001100110011
//0.0000000000000000000000000000000000000000000000000001
```



从上面的打印结果我们可以看出，0.1 + 0.2 时末位存在着进位的情况，末4位本应该是0111 这种情况，但是结果末四位是1000，我突然想起计算机组成原理的知识，在保留精度的同时，我们需要看所需要截取的长度后面的数值，比如我们0.1+0.2 的结果的后四位是0111|1，竖线表示需要舍弃的部分，然后，由于我们舍弃部分为1开头，因此我们需要进一位，即变成1000|0。这就解释了为什么后四位不同的原因。



## NaN（Not a Number)

NaN 是`IEEE754` 中定义的一个特殊的数值量。他表示 `Not a Number` ，但他的类型确实是`number`，这似乎听起来像一个笑话。

```js
typeof NaN === 'number' 		//true
```

NaN 会在试图把一个非数字形式的字符串转换为数字时产生。例如：

```js

console.log(+'0');
console.log(+'a');
//0
//NaN
```



还有以下：

```js
console.log(NaN === NaN);		//false
console.log(NaN !== NaN);		//true

```

JavaScript提供了isNaN()函数判断是不是NaN

```js
console.log(isNaN(NaN));	//true
```

虽然Infinity也是一个number类型，但是它代表无穷，并不能作为一个数来枚举。我们可以使用isFinite()来判断一个数字是否是合理的，但是这个函数的缺点是会试图将它的运算数转换为一个数字。所以我们可以自己封装一个函数

```js
let isNumber = function (num) {
  return typeof num === 'number' && isFinite(num);
};
```



## 伪数组(Phony Arrays)

JavaScript中没有真正的数组。数组只是一种特殊的对象，他的性能与真正的数组是不能相提并论的。typeof 运算符不能辨别数组与对象，判断一个值是否是数组，我们还需要检查他的constructor 属性。

```js
let arr = [1, 2, 3, 4];
let isArray = function (arr) {
  console.log(arr.constructor)
  return typeof arr === 'object' && arr.constructor === Array;
};
console.log(isArray(arr));		//true
```

上面的检测对于在不同帧或窗口创建的数组将会给出false。使用以下方法更加可靠。

```js
let isArray1 = function (arr) {
  return Object.prototype.toString.apply(arr) === '[object Array]';
};
console.log(isArray1(arr));	//true
```



## 假值(Falsy Values)

JavaScript的众多假值：

| 值           | 类型      |
| ------------ | --------- |
| 0            | Number    |
| NaN          | Number    |
| ''(空字符串) | String    |
| false        | Boolean   |
| null         | Object    |
| undefined    | Undefined |



## hasOwnProperty()

`hasOwnProperty()`可以避开`for in` 的隐患，但是由于 `hasOwnProperty()` 是一个方法，而不是一个运算符，所以它可能被一个不同的函数或值所替换。



## 对象(Object)


# 数组

JS 中没有正宗的数组结构，即一段连续的内存地址。为了弥补这种缺点，JS 提供了类数组对象。

## 数组字面量（Array Literals)

数组字面量无需给定下标，而对象字面量需要给定索引值，以数组字面量定义的数组继承自`Array.prototype`，而对象继承自`Object.prototype` 并且数组含有`length` 属性，而对象没有。

JavaScript中的数组可以存放不同数据类型的值。

## 长度(Length)

JavaScript 中的数组长度 `length` 没有上界，当使用一个大于或等于当前`length` 的下标的项时，会将数组扩容到当前长度。

## 删除（Delete）

删除数组中的元素会导致数组空洞

```js
delete nums[2]
```

### [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

在原数组上进行操作，并返回该数组。

**start**:表示从第几个位置开始删除。

**deleteCount**: 表示删除的个数，如果为0，则表示不删除，为1 则表示替换，后面接替换项。

## 枚举(Enumeration)

由于并不是纯数组，使用for in 遍历会导致顺序的紊乱，并可能导致从原型链获得意外的属性。因此，对于数组而言，遍历可采取标准的for循环。

## 容易混淆的地方(Confusion)

使用对象和数组的地方容易混淆，其实规则很简单：当属性名是小二连续的整数时，应该使用数组，否则使用对象。

对于JS 而言，`Object` 包括 `Array`，`Function`，`Date`，`RegExp`，因此执行

```js
typeof new Array   //object
```

那如何判断一个数据结构是不是数组呢？

我们可以写一个这样的方法：

```js
let isArray = function (value) {
  return value && typeof value === 'object' && value.constructor === Array;
};
```

但是这种当识别不同的窗口(window)或帧(frame)里构造的数组时会失败，更好的方法是。

```js
let is_array = function (value) {
  return Object.prototype.toString.apply(value) === '[object Array]';
};
```

## 方法(Method)

定义在Array.prototype属性上的方法

## 指定初始值(Dimensions)

对于数组赋予默认初始值，可使用ES6 新增的`fill` 方法

```js
let arr1= new Array(3).fill(1)		//[ 1, 1, 1 ]
```

**By the way**：ES6 新增的`of` 方法用于初始化数组，可以改变Array()，参数个数不同而带来的异议。
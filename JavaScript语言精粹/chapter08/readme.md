# 方法(Method)

## Array

### array.concat(item...)

concat 方法产生一个新的数组，它包含一份array的浅拷贝，并将item中所有的参数添加到新的数组中，如果item是一个数组，那么item中的每一项都会被添加到新的数组中去。

```js
let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];
let c = a.concat(b, 9, 10);
console.log(c);
```

结果为：

```js
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
```

### array.join(separator)

join 方法把一个array 构造成一个字符串。它先将每一项构造成一个字符串，接着用`separator` 分隔符将他们连接起来。默认的 `separator` 是 `,` 。

```js
let d= c.join("")
console.log(d);	//12345678910
```

### array.pop()

pop 与 push 方法使得数组可以像堆栈一样工作。pop 方法移除array中最后的一个元素并返回该元素。如果该array是empty，则返回undefined。

```js
let e = a.pop()
console.log(e,a)
//4 [ 1, 2, 3 ]
```

实现pop 方法

```js
Array.prototype.POP = function () {
  return this.splice(this.length - 1, 1)[0];
};
```

### array.push(item...)

把元素添加到数组的尾部，与concat 方法不同的是，concat方法会将一个数组中的每一项添加至新的数组中，而push 对于数组会将整个数组作为一项添加进数组，并返回当前数组的长度

```js
let f = a.push(100, 110);
console.log(a, f);
//[ 1, 2, 3, 100, 110 ] 5
```

事项push 方法

```js
Array.prototype.PUSH = function () {
  // this.splice(this.length, 0, ...arguments);
  this.splice.apply(
    this,
    [this.length, 0].concat(Array.prototype.slice.apply(arguments))
  );
  return this.length;
};
```

### array.reverse()

反转array中的元素顺序，并返回array。

```js
let array = ['a', 'b', 'c'];
let array1 = array.reverse();
console.log(array, array1);
//[ 'c', 'b', 'a' ] [ 'c', 'b', 'a' ]
```

### array.shift()

移除数组中的第一个元素并返回，如果数组为空，则返回undefined。shift 通常比 pop 慢的多。

### array .slice(start,end)

slice 方法对array 中的一段做浅复制。首先复制array[start],一直到array[end]。

### array.sort(comparefn)

JavaScript 默认比较函数将被排序的元素都视为字符串，因此我们可以使用自己的比较函数来替换默认的比较函数。如果第一个参数应该排列在前面，则返回一个负数，如果第二个参数应该排列在前面，则返回一个正数。

### array.unshift(item...)

在数组中的最前面插入元素，并返回数组新的长度。



## Function

### function.apply(thisArg,argArray)

**`apply()`** 方法调用一个具有给定`this`值的函数，以及作为一个`数组`（或[类似数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）提供的参数。

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

```

`Math.max`返回给定的一组数字中的最大值。如果给定的参数中至少有一个参数无法被转换成数字，则会返回 [`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。

```js
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3

```

对于数组，可以采用结构的方式，

```js
Math.max(...numbers)
```



## Number

### number.toExponential(fractionDigits)

```js
let PI = Math.PI;

// 1. PI.toExponential(fractionDigits)
console.log(PI.toExponential(5));
//3.14159e+0
```

将一个number 类型的数字转化成指数形式的字符串。

### number.toFixed(fractionDigits)

```js
// 2. PI.toFixed()
console.log(PI.toFixed(2))		//3.14
```

将一个数值类型的转化成一个十进制形式的字符串，参数表示字符串后保留的小数位数。

### number.toPrecision(precision)

将一个数值类型的转化成一个十进制形式的字符串，参数表示数字的精度，不同于`toFixed` 的地方在于toFixed只控制小数部分的位数。

```js
// 3. PI.toPrecision()
console.log(PI.toPrecision(3))
console.log(0.21856.toPrecision(3)) 	
//3.14
//0.219
```

会进行四舍五入。

### number.toString(radix)

```js
// 4. PI.toString(radix)
console.log(PI.toString())
// es 5 严格模式下 8 进制不能使用0 作为前缀，需使用0o
console.log(0o10.toString(2))
//3.141592653589793
//1000
```

`toString` 默认转换为10 进制，参数 `radix` 控制基数，这个值必须在2~36。

如果只是将一个数字转化成字符串，可使用 `String(number)`



## Object

### object.hasOwnProperty(name)

判断该对象上是否含有名为name的属性，只从该对象本上去寻找，并不会去查找原型链中的属性。



## RegExp

### regexp.exec(string)

最强大但是最慢的方法。

### regexp.test(string)

test 是最简单但是最快的方法。



## String

### string.localeCompare(that)

比较两个字符串，具体如何比较类似于默认的sort函数中的比较函数。

### string.match(regexp)

匹配一个正则字符串。

### string.replace(seachValue,replaceValue)

对string进行查找和替换，并返回一个`新的字符串` 。参数searchValue 可以是一个字符串，也可以是一个正则表达式，如果是一个字符串，那么只会替换一次，如果使用正则的方式，可以将全部替换。

```js
let result = 'monther_in_law'.replace('_', '-');
console.log(result);
//monther-in_law
```

当查找字符串是一个正则表达式时。

```js
let oldareacode = /\((\d{3})\)/g;
let p ='(555)666-1212'.replace(oldareacode,'$1-')
console.log(p)

//555-666-1212
```

由于之前学习了正则，其中的匹配方式含有`捕获型`和`非捕获型`，当替换字符串中带有`$` 符号时，他代表以下意义

| 美元符号序列 | 替换对象       |
| ------------ | -------------- |
| $$           | $              |
| $&           | 整个匹配的文本 |
| $number      | 分组捕获的文本 |
| $`           | 匹配之前的文本 |
| $'           | 匹配之后的文本 |

### string.search(regexp)

```js
// p 	555-666-1212
console.log(p.search(/[-]/))		//3
```

search 方法可以接受一个正则和一个字符串作为参数。

### string.split(sepparator,limit)

split 方法用于将一个字符串分隔成一个字符串数组，如果不给定参数，则字符串的整串作为数组的一项。给定空字符串则每一个字符都作为数组的一项。

```js
let a='123456789'

console.log(a.split())
//[ '123456789' ]

console.log(a.split(''))
//[  '1', '2', '3',  '4', '5', '6',  '7', '8', '9']

let ip='192.168.0.1'
console.log(ip.split('.'))
//[ '192', '168', '0', '1' ]
```

当然我们也可以使用正则作为参数，但是，来自分组捕获的文本也会被包含在分割的数组中。

```js
let IP=ip.split(/\s*(\.)\s*/)
console.log(IP)
/*
[
  '192', '.',
  '168', '.',
  '0',   '.',
  '1'
]
*/
```

### String.fromCharCode(char...)

String.fromCharCode 函数根据一串`数字`编码返回一个字符串。

```js
console.log(String.fromCharCode(67,97,116))
//	Cat
```


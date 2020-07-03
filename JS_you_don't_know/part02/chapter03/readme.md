>
> @Author: 刘子民
> @Date: 2020-06-03 09:15:43
> @LastEditTime: 2020-06-03 09:15:43
>

# 对象

## 语法

对象定义的两种方式：声明(字面量)和构造。

## 类型

**JavaScript**的六种主要类型

- string
- number
- boolean
- null
- undefined
- object

null 执行**typeof** 运算符为 **object** 。



**内置对象**

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

在JavaScript 中，他们实际上只是一些内置函数。这些内置函数



## 属性描述符

```js
var myObject = {
  a: 2,
};
Reflect.defineProperty(myObject,"a",{
  value:3,
  writable:false,
  configurable:false,
  enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

Reflect.defineProperty(myObject,"a",{
  value:3,
  writable:true,
  configurable:true,
  enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

```

当一个对象的变量设置为不可配置时，使用defineProperty 不能更改配置，但是一个例外就是 可以将writeable 从true 改成false 。

## 不变性

所有的方法创建的都是 **浅不变性**，为了保护内容，可以使用：

### 对象常量

使用 write: false 和configurable :false 。

### 禁止拓展

Object.preventExtensions()

### 密封

Object.seal()，内部调用 Object.preventExtensions()

### 冻结

Object.freeze()，内部调用 Object.seal()

### [[Get]]

对象属性查找方法。

### [[Put]]

put 算法的大致流程

1. 属性是否是访问描述符(参见3.3.9节)?如果是并且存在setter就调用setter。
2. 属性的数据描述符中writable是否是false?如果是，在非严格模式下静默失败，在
   严格模式下抛出 TypeError 异常。
3. 如果都不是，将该值设置为属性的值。

如果对象中不存在这个属性，[[Put]] 操作会更加复杂。

### Getter,Setter

### 存在性

```js
var a = {
  a: 123,
};
var b = Object.create(a);
b.b = 456;
console.log('a' in a);
console.log('a' in b);
console.log(b.hasOwnProperty('a'));
//true
//true
//false
```



## 遍历

for of 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的 **next()** 方法来遍历所有返回值。

数组有内置的**@@Iterator** ，因此 可以使用  for  of 。我们使用内置的 **@@iterator** 来手动遍历数组，看看它怎么工作的。

```js
var myArray = [1, 2, 3, 4];
var it = myArray[Symbol.iterator]();
console.log(it.next());
//{ value: 1, done: false }
```



写一个无限遍历的函数

```js
var random = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return {
          value: Math.random(),
        };
      },
    };
  },
};
var stack = [];
for (var n of random) {
  stack.push(n);
  if (stack.length > 100) {
    break;
  }
}
```



## 小结


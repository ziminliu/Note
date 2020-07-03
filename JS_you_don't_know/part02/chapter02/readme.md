>
> @Author: 刘子民
> @Date: 2020-06-02 17:43:03
> @LastEditTime: 2020-06-02 17:43:03
>

# This全面解析

## this 的绑定规则

### 默认绑定

函数调用类型：独立函数调用。

### 隐式绑定

### 显式绑定

使用函数的 **call** ，**apply** 方法。

#### call

```js
function foo() {
  console.log(this.a);
}
obj = {
  a: 2,
};
foo.call(obj);
//2
```

call 第一个参数为一个对象，用于指定this的指向。

如果传入了一个原始值(字符串，布尔类型，数字类型)来当做**this** 的绑定对象，这个原始值会被转换成他的对象形式(也就是 new String(...)、new Boolean(...)或者new Number(...))。这通常被称为**装箱**。

> 从 **this** 绑定的角度来说，**call** 与 **apply** 的作用是一致的，他们的区别体现在其他的参数上。

#### 硬绑定

call，apply 方法。

由于**硬绑定**是一种非常常用的模式，所以ES5 提供了 **bind** 方法，由apply 包装而成。

#### API调用上下文

```js
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: 'hello',
};
[1, 2, 3].forEach(foo, obj);
//1 hello
//2 hello
//3 hello
```

**forEach**:第一个参数用于接收一个函数对数组的每一项进行操作，第二个参数用于执行回调函数的**this** 值。



### new 绑定

## 优先级

- 显式绑定高于隐式
- new 绑定高于隐式
- new 高于显式
- 隐式优先级最低

### 判断this

1. 
2.  
3.  
4.  

### 绑定例外

某些场景下**this** 的绑定行为会出乎意料，你认为应当应用其他绑定规则时，实际应用的可能是默认规则。

#### 被忽略的this

如果吧null、undefined、作为this的绑定对象传入call、apply、bind、这些值在调用时就会被忽略，实际上应用的就是默认的绑定规则。

```js
function foo() {
  console.log(this.a);
}
a = 2;
foo.call(null);
//2
```

那么我们什么时候会传入null呢？

1. apply 展开一个数组作为参数调用函数时。
2. bind 用于实现柯里化。

然而，如果不小心的触发了这些默认绑定规则(如使用第三方库中的函数需要使用**this**)，那么此时的**this** 就会被绑定到全局，带来危险。

**更安全的this**

传入一个特殊的对象，把**this** 绑定到这个对象不会对程序产生任何副作用。just like  network (and  army )",我们可以创建一个DMZ(demilitarized zone，非军事区)"对象——它就是一个**非委托**的对象。

```js
function foo(a, b) {
  console.log('a:' + a, ', b:' + b);
}
var _ = Object.create(null);
foo.apply(_, [2, 3]);
var bar = foo.bind(_, 2);
bar(3);
```

`Object.create(null);` 和 `{}` 很像，但是并不会创建`Object.prototype` 这个委托，它比`{}` 更空。

#### 间接引用

容易在赋值时发生。



#### 软绑定

硬绑定会大大降低函数的灵活度，使用硬绑定之后就无法使用隐式绑定或者显示绑定来修改**this**。

### this 词法

ES6 中箭头函数不使用this 的四种标准，而是根据外层(函数或者全局) 作用域来决定this。

```js
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
//2
```

**foo** 内部创建的箭头函数会捕获调用时**foo** 的**this** 。由于**foo** 的**this** 绑定到**obj1** ，**bar** 的**this** 也会绑定到 **obj** ，箭头函数的绑定无法被修改(**new** 也不行)



## 小结
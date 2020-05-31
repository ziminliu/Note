>
> @Author: 刘子民
> @Date: 2020-05-31 20:07:53
> @LastEditTime: 2020-05-31 20:07:54
>

# 提升

函数与变量都会在任何代码被执行前进行处理，这个过程叫做提升。

**注意**：函数声明会被提升，但函数表达式不会被提升。

```
foo()
function foo(){
}
//正常运行
```



```js
foo();
var foo = function bar() {
  
};
//TypeError: foo is not a function
```

以上代码我们可以理解为：

```js
var foo;
foo();
foo = function bar() {
  
};
```

第一行的时候 foo 被声明，但是此时是 undefined，因此无法被作为函数进行调用。

## 函数优先

函数声明与变量提升都会被提升，但是，**函数会首先被提升，然后才是变量**

对于重复声明，内部会对其忽略。
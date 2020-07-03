<!--
 * @Author: ziminLiu
 * @Date: 2020-05-27 09:58:09
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-27 09:58:10
--> 



## 级联(Cascade)

函数返回值为this

## 柯里化(Curry)

## 记忆(Memoization)

将先前的运算值保存在某个对象中,防止后续使用时再次进行重复运算.

**斐波那契数列**

```js
 //version 1
var fibonacci = function (n){
   return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
};
for (var i =0; i <= 10; i++){
   console.log(i + ":" fibonacci(i) )
}
```



```js
// version 2
// 使用数据保存已求出的斐波那契数列
var fibonacci = function () {
   var meme = [0, 1];
   var fib = function (n){
      var result = memo[n];
      if (typeof result !== 'number'){
         result = fib(n-1) + fib(n-2)
         memo[n] = result;
      }
      return result;
   }
   return fib;
}
```


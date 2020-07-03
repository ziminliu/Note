/*
 * @Author: 刘子民
 * @Date: 2020-05-31 21:12:31
 * @LastEditTime: 2020-06-02 10:15:23
 */
// for (var i = 0; i < 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// var MyModules = (function Manager() {
//   var module = {};
//   function define(name, deps, impl) {
//     for (var i = 0; i < deps.length; i++) {
//       deps[i] = module[deps[i]];
//     }
//     module[name] = impl.apply(impl, deps);
//   }
//   function get(name) {
//     return module[name];
//   }
//   return {
//     define,
//     get,
//   };
// })();

// MyModules.define('bar', [], function () {
//   function hello(who) {
//     return 'Let me introduce:' + who;
//   }
//   return {
//     hello: hello,
//   };
// });

// MyModules.define('foo', ['bar'], function (bar) {
//   var hungry = 'hippo';
//   function awesome() {
//     console.log(bar.hello(hungry).toUpperCase());
//   }
//   return {
//     awesome,
//   };
// });

// var bar = MyModules.get('bar');
// console.log(bar);
// var foo = MyModules.get('foo');
// console.log(bar.hello('hippo'));
// foo.awesome();

// try {
//   throw {
//     name: 'liuzimin',
//     age: 18,
//   };
// } catch (a) {
//   console.log(a);
// }
// console.log(a);

// Traceur
// try {
//   throw undefined;
// } catch (a) {
//   a = {
//     name: 'liuzimin',
//     age: 18,
//   };
//   console.log(a);
// }

//let 作用域或 let 声明
// 注意： 区别于let 定义 ES6 不支持
// let (a=2){
//   console.log(a)
// }
// console.log(a)

// 降级为let 定义
// {
//   let a= 2;
//   console.log(a)
// }
// console.log(a)

// {
//   var a= 2;
//   console.log(a)
// }
// console.log(a)

// var obj = {
//   id: ' awesome',
//   cool: function coolFn() {
//     console.log("---------");
//     console.log(this.id);
//   },
// };
// var id = 'not awesome';
// obj.cool();
// console.log(obj.cool);
// setTimeout(obj.cool, 100);

// var obj = {
//   count: 0,
//   cool: function coolFn() {
//     var self = this;
//     if (self.count < 1) {
//       setTimeout(function timer() {
//         self.count++;
//         console.log('awesome?');
//       }, 100);
//     }
//   },
// };

// console.log(obj.count);
// obj.cool();
// console.log(obj.count);
// console.log(obj.count);

// var obj = {
//   count: 0,
//   cool: function coolFn() {
//     if (this.count < 1) {
//       setTimeout(() => {
//         this.count++;
//         console.log('awesome',this.count);
//       }, 100);
//     }
//   },
// };
// obj.cool();

var obj = {
    count: 0,
    cool: function coolFn() {
      if (this.count < 1) {
        setTimeout(function timer(){
          this.count++;
          console.log('more awesome',this.count);
        }.bind(this), 100);
      }
    },
  };
  obj.cool();
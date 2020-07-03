# 正则表达式

JavaScript借鉴了很多其他的语言，语法借鉴自`Java`，函数借鉴自`Scheme`，原型借鉴自`Self`。正则表达式则借鉴自`Perl`。

可处理正则表达式的方法有regexp.exec、regexp.text、string.match、string.replace、string.search 和 string.split。

## 一个例子(An Example)

### URL的正则

```js
let parse_url = /^(?:([A-Xa-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
let url =
  'https://developer.mozilla.org:8080/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype?q#liuzimin';
let result = parse_url.exec(url);
console.log(result);
```

输出结果如下所示

```js
[
  'https://developer.mozilla.org:8080/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype?q#liuzimin',
  'https',
  '//',
  'developer.mozilla.org',
  '8080',
  'zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype',
  'q',
  'liuzimin',
  index: 0,
  input: 'https://developer.mozilla.org:8080/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype?q#liuzimin',
  groups: undefined
]
```

非捕获型分组：(?:        )

捕获型分组：(          )

根据是否捕获将匹配的每一部分保存至返回的数组中。

### 小数的正则判断

```js
let parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
let test = function (num) {
  console.log(parse_number.test(num));
};
test(5.666);
```

## 结构

 有两个方法可以创建正则对象，字面量与构造器，最简单的方法当然是使用正则字面量。RegExp 能够设置3 个标识，分别是字母g，i，m。

| 标识 | 含义                                          |
| ---- | --------------------------------------------- |
| g    | 全局匹配，对于不同的方法对g标识的处理各不相同 |
| i    | 不区分字母大小写                              |
| m    | 多行匹配，(^ 和 $ 能匹配行结束符)             |

正则对象的属性

| 属性       | 用法                                   |
| ---------- | -------------------------------------- |
| global     | 如果标识g被识别，值为true              |
| ignoreCase |                                        |
| lastIndex  | 下一次exec 匹配开始的索引。初始值为0。 |
| multiline  |                                        |
| source     | 正则表达式的源码文本                   |

## 元素

### 正则表达式分支

```js
"into".match(/in|int/)
```

会在into 中匹配in。但他不回匹配int，因为in 已经被成功匹配了。

### 正则表达式序列

一个正则表达式序列包含一个或多个正则表达式因子。每个因子能学则是否跟随一个量词，这个量词决定着这个因子被允许出现的次数。如果没哟指定这个量词，那么该因子只会被匹配一次。

### 正则表达式因子

### 正则表达式转义

### 正则表达式分组

### 正则表达式字符集

### 正则表达式字符转义

### 正则表达式量词
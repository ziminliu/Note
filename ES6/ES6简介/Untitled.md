# 第一章 ECMAScript 6简介

## 1.1 ECMAScript和JavaScript的关系

## 1.2ES6与ECMAScript2015的关系

## 1.3语法提案的批准流程

## 1.4ECMAScript的历史

## 1.5部署进度

1. 查看node中实现的ES6新特性

   ```
   $ node --v8-options|grep harmony
   ```
   
2. 检查本机node对ES6的支持程度
      ```
      $ npm install -g es-checker
      $ es-checker
      ```

## 1.6Babel转码器

Bable作用：将ES6代码转为ES5代码

### 	1.6.1 配置文件.babelrc

### 	1.6.2 命令行转码babel-cli

1. 安装

   ```
   $ npm install --global babel-cli
   ```

2. 使用

   1. 转码结果输出到标准输出流

      ```
      $ babel example.js
      ```
      
2. 结果输出到一个文件
   
      ```
      $ babel a.js --out-file b.js
      ```
      
      或者
      
      ```
      $ babel a.js --out-file b.js
      ```
      
      
      
   3. 转码整个目录 (--out-dir 或 -d)
   
      ```
      $ babel src --out-dir lib
      ```
   
      或
   
      ```
      $ babel scr -d lib
      ```
   
   4. 生成source map文件
   
      ```
      $ babel src -d lib -s
      ```
   
3. 注意

   1. 由于转码是在全局环境下进行的转码，因此项目运行对环境产生了依赖，因此需要将babel-cli安装在项目中

      ```
      $ npm install --save-dev babel-cli
      ```

   2. 将babel安装在项目中后，需要改写package.json文件

      ```
      {
      //...
      "devDependencies":{
      "babel-cli":"^6.0.0"
      },
      "scripts":{
      "build":"bable src -d lib"
      },
      }
      ```

   3. 转码时运行

      ```
      $ npm run buil
      ```

### 1.6.3 bable-node

### 1.64 bable-register

作用：改写了**require**命令，当**require**加载后缀为.js,.jsx,.es和.es6文件时，会先使用**Babel**将这些文件进行转码，使用时，需要先引入**babel-register**模块，如：

`require ('babel-register')`

`require ('./index.js')`

**注意：** **bebl-register**只会对require命令加载的文件进行转码，并不会对当前文件转码，而且，这种转码是实时转码，只适合在开发环境中使用

### 1.6.5 babel-core

作用：在**编写代码时**需要使用到**babel**的**API**进行转码，

安转命令 `$ npm install babel -core --save`

### 1.6.6 babel-polyfill

作用：由于babel默认只对新的JS语法进行转码，而不转换新的API，如Iterator,Generator,Set,Map,Promise等全局对象，以及定义在全局对象上的方法，因此，需要导入babel-polyfill对这些对象转换。

### 1.6.7 浏览器环境

### 1.6.8 在线转换

### 1.69 与其他工具的配合

如：ESLint，Mocha



## 1.7 Traceur

属于google公司

### 1.7.1 直接插入网页

### 1.7.2 在线转换

### 1.7.3 命令行转换

安装

```
$ npm install -g traceur
```

转码保存

```
$ traceur --script a.es6.js --out a.es5.js
```

--script 	指定输入文件

--out		 指定输出文件 	

### 1.7.4 Node 环境语法

需先安装**traceur**模块

```
var traceur = require('traceur');
var fs=require('fs');

//将ES6脚本转为字符串
var contents =fs.readFileSync('es6-file.js').toString();

var result = traceur.compile(contents,{
filename:'es6-file.js',
sourceMap:true,
//其他设置
modules:'commonjs'});

if(result.error)
	throw result.error;

//result 对象的js 属性就是转换后的ES5代码
fs.writeFileSync('out.js',result.js);
//sourceMap 属性对应map 文件
fs.writeFileSync('out.js.map',result.sourceMap);
```


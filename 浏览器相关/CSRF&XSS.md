# CSRF&XSS

参考：
作者：美团技术团队
链接：https://juejin.im/post/5bc009996fb9a05d0a055192

## CSRF

CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。

### 几种常见的攻击类型

- GET类型的CSRF

GET类型的CSRF利用非常简单，只需要一个HTTP请求，一般会这样利用：

```html
 <img src="http://bank.example/withdraw?amount=10000&for=hacker" > 
```

在受害者访问含有这个img的页面后，浏览器会自动向`http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker`发出一次HTTP请求。bank.example就会收到包含受害者登录信息的一次跨域请求

- POST类型的CSRF

这种类型的CSRF利用起来通常使用的是一个自动提交的表单，如：

```html
 <form action="http://bank.example/withdraw" method=POST>
    <input type="hidden" name="account" value="xiaoming" />
    <input type="hidden" name="amount" value="10000" />
    <input type="hidden" name="for" value="hacker" />
</form>
<script> document.forms[0].submit(); </script> 
```

访问该页面后，表单会自动提交，相当于模拟用户完成了一次POST操作。

- 链接类型的CSRF

链接类型的CSRF并不常见，比起其他两种用户打开页面就中招的情况，这种需要用户点击链接才会触发。这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击，例如：

```html
  <a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">
  重磅消息！！
  <a/>
```

### CSRF的特点

- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
- 攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。
- 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
- 跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。

CSRF通常是跨域的，因为外域通常更容易被攻击者掌控。但是如果本域下有容易被利用的功能，比如可以发图和链接的论坛和评论区，攻击可以直接在本域下进行，而且这种攻击更加危险。

### 防护策略

我们可以总结CSRF 的特点

- CSRF（通常）发生在第三方域名。
- CSRF攻击者不能获取到Cookie等信息，只是使用。



根据CSRF 的特点我们可以制定不同的防护策略：

- 阻止不明外域的访问
  - 同源检测
  - Samesite Cookie
- 提交时要求附加本域才能获取的信息
  - CSRF Token
  - 双重Cookie验证

#### 同源检测

由于CSRF 大多都从第三方网站发起攻击(攻击者具有更好的操作性)，因此我们使用同源检测的方法来禁止外域的请求。

在HTTP协议中，每一个异步请求都会携带两个Header，用于标记来源域名：

- Origin Header
- Referer Header

每当一个请求发起时，都会携带者两个头字段来记录请求发起的属于哪一个域。

##### 使用Origin Header确定来源域名

如果origin 存在，可以直接使用origin 做同源检测，而以下两种情况并不存在origin

1. IE11 的同源策略与其他浏览器不同，对于跨站请求不会添加origin头
2. 302 重定向 并不会携带origin

##### 使用Referer Header确定来源域名

根据HTTP协议，在HTTP头中有一个字段叫Referer，记录了该HTTP请求的来源地址。 对于Ajax请求，图片和script等资源请求，Referer为发起请求的页面地址。对于页面跳转，Referer为打开页面历史记录的前一个页面地址。因此我们使用Referer中链接的Origin部分可以得知请求的来源域名。

#### CSRF Token

由于CSRF 利用用户的身份向服务器发起攻击，只是使用了cookie 而不知到cookie 。那么我们在所有的请求上携带一个CSRF 攻击者无法获取到的Token ，并在后端利用Token进行验证就可以放置CSRF 攻击。

#### 双重Cookie验证

### 总结

简单总结一下上文的防护策略：

- CSRF自动防御策略：同源检测（Origin 和 Referer 验证）。
- CSRF主动防御措施：Token验证 或者 双重Cookie验证 以及配合Samesite Cookie。
- 保证页面的幂等性，后端接口不要在GET页面中做用户操作。

为了更好的防御CSRF，最佳实践应该是结合上面总结的防御措施方式中的优缺点来综合考虑，结合当前Web应用程序自身的情况做合适的选择，才能更好的预防CSRF的发生。



## XSS

**跨站脚本**（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程序的安全漏洞攻击，是[代码注入](https://zh.wikipedia.org/wiki/代碼注入)的一种。

通过利用网页漏洞在网页上注入恶意代码，然后将用户的隐私信息发送给攻击者。

XSS 攻击可以分为3类：存储型（持久型）、反射型（非持久型）、DOM 型。

**存储型 XSS**

注入型脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器上传回并执行。

**反射型 XSS**

当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web服务器将注入脚本，比如一个错误信息，搜索结果等 返回到用户的浏览器上。由于浏览器认为这个响应来自"可信任"的服务器，所以会执行这段脚本。

**基于 DOM 的 XSS**

通过修改原始的客户端代码，受害者浏览器的 DOM 环境改变，导致有效载荷的执行。也就是说，页面本身并没有变化，但由于DOM环境被恶意修改，有客户端代码被包含进了页面，并且意外执行。
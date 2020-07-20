# CORS

跨域资源共享([CORS](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS)) [cross-origin sharing standard](http://www.w3.org/TR/cors/) 是一种机制，它**使用额外的 [HTTP](https://developer.mozilla.org/zh-CN/docs/Glossary/HTTP) 头**来告诉浏览器 让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。



## 什么时候需要CORS

1. XML 或 Fetch 发起的跨域http 请求。
2. web 的字体资源
3. WebGL 贴图
4. 使用 `drawImage` 将 Images/video 画面绘制到 canvas



## 若干场景

### 简单请求

简单请求并不会触发 CORS 预检请求。

- 使用下列方法之一：

  - [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)
  - [`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)
  - [`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST)

- 除了被用户代理自动设置的首部字段（例如 

  `Connection`

   

  ，

  `User-Agent`

  ）和在 Fetch 规范中定义为 

  禁用首部名称

   的其他首部，允许人为设置的字段为 Fetch 规范定义的 

  对 CORS 安全的首部字段集合

  。该集合为：

  - [`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept)
  - [`Accept-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Language)
  - [`Content-Language`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language)
  - [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) （需要注意额外的限制）
  - `DPR`
  - `Downlink`
  - `Save-Data`
  - `Viewport-Width`
  - `Width`

- `Content-Type`

   

  的值仅限于下列三者之一：

  - `text/plain`
  - `multipart/form-data`
  - `application/x-www-form-urlencoded`

- 请求中的任意[`XMLHttpRequestUpload`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestUpload) 对象均没有注册任何事件监听器；[`XMLHttpRequestUpload`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestUpload) 对象可以使用 [`XMLHttpRequest.upload`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload) 属性访问。

- 请求中没有使用 [`ReadableStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream) 对象。



比如说，假如站点 http://foo.example 的网页应用想要访问 http://bar.other 的资源。http://foo.example 的网页中可能包含类似于下面的 JavaScript 代码：

```js
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}
```

```
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61 
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[XML Data]
```

服务端返回的 `Access-Control-Allow-Origin: *` 表明，该资源可以被**任意**外域访问。

如果服务端仅允许来自 http://foo.example 的访问，该首部字段的内容如下：

```
Access-Control-Allow-Origin: http://foo.example
```



### 预检请求

​	

### 附带身份凭证的请求

[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 或 [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 与 CORS 的一个有趣的特性是，可以基于  [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) 和 HTTP 认证信息发送身份凭证。

`XMLHttpRequest `的 `withCredentials` 标志设置为 `true`，从而向服务器发送 Cookies。

如果服务器端的响应中未携带 `Access-Control-Allow-Credentials: true` ，浏览器将不会把响应内容返回给请求的发送者。

```
GET /resources/access-control-with-credentials/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: http://foo.example/examples/credential.html
Origin: http://foo.example
Cookie: pageAccess=2


HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain


[text/plain payload]
```

如果 bar.other 的响应中缺失 [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)`: true`（第 17 行），则响应内容不会返回给请求的发起者。

#### 附带身份凭证的请求与通配符

对于附带身份凭证的请求，服务器不得设置 `Access-Control-Allow-Origin` 的值为“`*`”。

这是因为请求的首部中携带了 `Cookie` 信息，如果 `Access-Control-Allow-Origin` 的值为“`*`”，请求将会失败。而将 `Access-Control-Allow-Origin` 的值设置为 `http://foo.example`，则请求将成功执行。

## HTTP 响应首部字段

### Access-Control-Allow-Origin

```html
Access-Control-Allow-Origin: <origin> | *
```

指定所有的域名可以进行跨域访问

### Access-Control-Expose-Headers

在跨域访问时，XMLHttpRequest对象的getResponseHeader()方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。

[Access-Control-Expose-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) 头让服务器把允许浏览器访问的头放入白名单，例如：

```html
Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header,ETag
```

这样浏览器就能够通过getResponseHeader访问`X-My-Custom-Header`和 `X-Another-Custom-Header` 响应头了。

比如要通过res 得到响应的Etag 。

### Access-Control-Max-Age

### Access-Control-Allow-Credentials

[`Access-Control-Allow-Credentials`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) 头指定了当浏览器的`credentials`设置为true时是否允许浏览器读取response的内容。当用在对preflight预检测请求的响应中时，它指定了实际的请求是否可以使用`credentials`。请注意：简单 GET 请求不会被预检；如果对此类请求的响应中不包含该字段，这个响应将被忽略掉，并且浏览器也不会将相应内容返回给网页。

```html
Access-Control-Allow-Credentials: true
```

### Access-Control-Allow-Methods

[`Access-Control-Allow-Methods`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) 首部字段用于预检请求的响应。其指明了实际请求所允许使用的 HTTP 方法。

```html
Access-Control-Allow-Methods: <method>[, <method>]*
```

相关示例见[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS$edit#Preflighted_requests)。

### Access-Control-Allow-Headers

[`Access-Control-Allow-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) 首部字段用于**预检请求**的响应。其指明了实际请求中允许携带的首部字段。

```html
Access-Control-Allow-Headers: <field-name>[, <field-name>]*
```



## HTTP 请求首部字段

### Origin



[`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 首部字段表明预检请求或实际请求的源站。

```html
Origin: <origin>
```

origin 参数的值为源站 URI。它不包含任何路径信息，只是服务器名称。

**Note:** 有时候将该字段的值设置为空字符串是有用的，例如，当源站是一个 data URL 时。

注意，在所有访问控制请求（Access control request）中，[`Origin`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Origin) 首部字段**总是**被发送。

### Access-Control-Request-Method



[`Access-Control-Request-Method`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method) 首部字段用于预检请求。其作用是，将实际请求所使用的 HTTP 方法告诉服务器。

```html
Access-Control-Request-Method: <method>
```

相关示例见[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#Preflighted_requests)。

### Access-Control-Request-Headers



[`Access-Control-Request-Headers`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers) 首部字段用于预检请求。其作用是，将实际请求所携带的首部字段告诉服务器。

```html
Access-Control-Request-Headers: <field-name>[, <field-name>]*
```
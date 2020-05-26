# HTTP 状态码

HTTP 响应状态码分为五大类：

- 信息响应
- 成功响应
- 重定向
- 客户端错误
- 服务器错误

## 信息响应

### [`100 Continue`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/100)

这个临时响应表明，迄今为止的所有内容都是可行的，客户端应该继续请求，如果已经完成，则忽略它。

### [`101 Switching Protocol`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/101)

该代码是响应客户端的 [`Upgrade`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Upgrade) 标头发送的，并且指示服务器也正在切换的协议。

### [`102 Processing`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/102) ([WebDAV](https://developer.mozilla.org/en-US/docs/Glossary/WebDAV))

此代码表示服务器已收到并正在处理该请求，但没有响应可用

### [`103 Early Hints`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/103) 

此状态代码主要用于与[`Link`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link) 链接头一起使用，以允许用户代理在服务器仍在准备响应时开始预加载资源。

## 成功响应

### [`200 OK`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/200)

请求成功。成功的含义取决于HTTP方法：

- GET：资源已被提取并在消息正文中传输。
- HEAD：实体标头位于消息正文中。
- POST：描述动作结果的资源在消息体中传输。
- TRACE：消息正文包含服务器收到的请求消息

### [`201 Created`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/201)

该请求已成功，并因此创建了一个新的资源。这通常是在POST请求，或是某些PUT请求之后返回的响应。

### [`202 Accepted`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/202)

请求已经接收到，但还未响应，没有结果。意味着不会有一个异步的响应去表明当前请求的结果，预期另外的进程和服务去处理请求，或者批处理。

### [`203 Non-Authoritative Information`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/203)

服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝。当前的信息可能是原始版本的子集或者超集。例如，包含资源的元数据可能导致原始服务器知道元信息的超集。使用此状态码不是必须的，而且只有在响应不使用此状态码便会返回200 OK的情况下才是合适的。

### [`204 No Content`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/204)

服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息。响应可能通过实体头部的形式，返回新的或更新后的元信息。如果存在这些头部信息，则应当与所请求的变量相呼应。如果客户端是浏览器的话，那么用户浏览器应保留发送了该请求的页面，而不产生任何文档视图上的变化，即使按照规范新的或更新后的元信息应当被应用到用户浏览器活动视图中的文档。由于204响应被禁止包含任何消息体，因此它始终以消息头后的第一个空行结尾。

### [`205 Reset Content`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/205)

服务器成功处理了请求，且没有返回任何内容。但是与204响应不同，返回此状态码的响应要求请求者重置文档视图。该响应主要是被用于接受用户输入后，立即重置表单，以便用户能够轻松地开始另一次输入。与204响应一样，该响应也被禁止包含任何消息体，且以消息头后的第一个空行结束。

### [`206 Partial Content`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/206)

服务器已经成功处理了部分 GET 请求。类似于 FlashGet 或者迅雷这类的 HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。该请求必须包含 Range 头信息来指示客户端希望得到的内容范围，并且可能包含 If-Range 来作为请求条件。

## 重定向

### [`300 Multiple Choice`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/300)

被请求的资源有一系列可供选择的回馈信息，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向。

### [`301 Moved Permanently`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/301)

被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。

### [`302 Found`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/302)

请求的资源现在临时从不同的 URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。

### [`303 See Other`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/303)

对应当前请求的响应可以在另一个 URI 上被找到，而且客户端应当采用 GET 的方式访问那个资源。这个方法的存在主要是为了允许由脚本激活的POST请求输出重定向到一个新的资源。

### [`304 Not Modified`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/304)

如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。304 响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。

### 305 Use Proxy

被请求的资源必须通过指定的代理才能被访问。Location 域中将给出指定的代理所在的 URI 信息，接收者需要重复发送一个单独的请求，通过这个代理才能访问相应资源。只有原始服务器才能建立305响应。

### [`307 Temporary Redirect`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/307)

请求的资源现在临时从不同的URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。



状态码 307 与 [`302`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/302) 之间的唯一区别在于，当发送重定向请求的时候，307 状态码可以确保请求方法和消息主体不会发生变化。当响应状态码为 302 的时候，一些旧有的用户代理会错误地将请求方法转换为 [`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)：使用非 GET 请求方法而返回 302 状态码，Web 应用的运行状况是不可预测的；而返回 307 状态码时则是可预测的。对于 GET 请求来说，两种情况没有区别。

### [`308 Permanent Redirect`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/308)

这意味着资源现在永久位于由 `Location:` HTTP Response 标头指定的另一个 URI。 这与 `301 Moved Permanently HTTP` 响应代码具有相同的语义，但用户代理不能更改所使用的 HTTP 方法：如果在第一个请求中使用 `POST`，则必须在第二个请求中使用 `POST`。

## 客户端响应

### [`400 Bad Request`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/400)

1、语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。

2、请求参数有误。

### [`401 Unauthorized`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/401)

当前请求需要用户验证。该响应必须包含一个适用于被请求资源的 WWW-Authenticate 信息头用以询问用户信息。客户端可以重复提交一个包含恰当的 Authorization 头信息的请求。如果当前请求已经包含了 Authorization 证书，那么401响应代表着服务器验证已经拒绝了那些证书。如果401响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。

### [`403 Forbidden`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/403)

服务器已经理解请求，但是拒绝执行它。与 401 响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。如果这不是一个 HEAD 请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。当然服务器也可以返回一个 404 响应，假如它不希望让客户端获得任何信息。

### [`404 Not Found`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/404)

请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。

### [`405 Method Not Allowed`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/405)

请求行中指定的请求方法不能被用于请求相应的资源。该响应必须返回一个Allow 头信息用以表示出当前资源能够接受的请求方法的列表。 鉴于 PUT，DELETE 方法会对服务器上的资源进行写操作，因而绝大部分的网页服务器都不支持或者在默认配置下不允许上述请求方法，对于此类请求均会返回405错误。

### [`408 Request Timeout`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/408)

请求超时。客户端没有在服务器预备等待的时间内完成一个请求的发送。客户端可以随时再次提交这一请求而无需进行任何更改。

### [`414 URI Too Long`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/414)

请求的URI 长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务。这比较少见，通常的情况包括：本应使用POST方法的表单提交变成了GET方法，导致查询字符串（Query String）过长。

### [`429 Too Many Requests`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/429)

用户在给定的时间内发送了太多请求（“限制请求速率”）。

## 服务端响应

### [`500 Internal Server Error`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/500)

服务器遇到了不知道如何处理的情况。

### [`502 Bad Gateway`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/502)

此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应。

### [`504 Gateway Timeout`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/504)

当服务器作为网关，不能及时得到响应时返回此错误代码。

### [`505 HTTP Version Not Supported`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/505)

服务器不支持请求中所使用的HTTP协议版本。
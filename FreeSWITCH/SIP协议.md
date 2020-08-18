# SIP 协议

SIP(Session Initiation Protocol)协议格式

INVITE sip:seven@freeswitch.org.cn SIP/2.0

SIP 是一个对等协议，类似P2P。

在SIP 中，没有CS 的概念，由于对等，发起方和接受方都称为用户代理，UA 是有状态的，它维护会话的状态。UA 分为两种。

- UAC （UA Client）
- UAS （UA Server）



1. Proxy Server
2. Redirect Server

## SIP协议的基本方法和头域

基本方法：

| 基本方法 | 说明                                   |
| -------- | -------------------------------------- |
| REGISTER | 注册联系信息                           |
| INVITE   | 初始化一个会话，可以理解为发起一个呼叫 |
| ACK      | 对INVITE 消息的最终响应                |
| CANCEL   | 取消一个等待处理或正在处理的请求       |
| BYE      | 终止一个会话                           |
| OPTIONS  | 查询服务器和能力，也可以用作Ping 测试  |

SIP 必须包含的头域：

| 名称         | 描述                             |
| ------------ | -------------------------------- |
| Call-ID      | 用于区分不同会话的唯一标志       |
| CSeq         | 顺序号，用于在同一会话中区分事务 |
| From         | 说明请求来源                     |
| To           | 说明请求接受方                   |
| Max-Forwards | 限制跳跃点数和最大转发次数       |
| Via          | 描述请求消息经过的路径           |



## SIP 注册

注册需要用户发起两次REGISTER 的SIP 请求，FreeSWITCH	的第一次响应携带一个 WWW-Authenticate 头字段。第二次的REGISTER 再携带上这个字段发起请求。

## SIP 呼叫流程

### UA 间直接呼叫

 

### 通过B2BUA 呼叫



## 深入理解SIP

### SIP URI

### SDP 和 SOA

### 3PCCC

### SIP 承载
# 配置git代理

## 查看配置

```shell
# 查看所有配置
git config -l
```

## 重置代理

```shell
# reset 代理设置
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## http代理

```shell
# http协议，1081端口修改成自己的本地代理端口
git config --global http.https://github.com.proxy https://127.0.0.1:1081
git config --global https.https://github.com.proxy https://127.0.0.1:1081
```



## socks5

```shell
# socks5协议，1080端口修改成自己的本地代理端口
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
git config --global https.https://github.com.proxy socks5://127.0.0.1:1080

```


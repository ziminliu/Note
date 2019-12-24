# 1.生成容器

```
 docker run --name centos -itd centos
```

- -i		以交互模式运行容器，通常与 -t 同时使用；
- -t       为容器重新分配一个伪输入终端，通常与 -i 同时使用；
- -d       后台运行容器，并返回容器ID；

# 2.进入容器

```
docker attach [容器id]
```


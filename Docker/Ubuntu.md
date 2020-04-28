# Ubuntu 使用指南

## 1.生成容器

```
 docker run --name Ubuntu -itd Ubuntu
```

- -i		以交互模式运行容器，通常与 -t 同时使用；
- -t       为容器重新分配一个伪输入终端，通常与 -i 同时使用；
- -d       后台运行容器，并返回容器ID；

## 2.进入容器

```
docker attach [容器id]
```

## 3. root 进入

```shell
docker exec [容器id] /bin/bash
```

## 4. 用户切换

1. 给root设定一个密码

默认root用户是无固定密码的，并且是被锁定的，如果想给root设置一个密码

只需执行命令：sudo passwd root 

2. root->user

   su user

3. user->root:

   su root



Hadoop：root/lzm123456

​					hadoop/hadoop




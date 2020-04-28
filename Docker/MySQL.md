# 1.搜索mysql镜像

```
# docker search mysql
```

- official表示是官方镜像

# 2.拉取mysql镜像

```
# docker pull mysql[:tag]
```

- tag	表示镜像版本，不填默认为最新版本latest

# 3.运行mysql镜像

```
# docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```

```
run            运行一个容器
--name         后面是这个镜像的名称
-p 3306:3306   表示在这个容器中使用3306端口(第二个)	映射到本机的端口号也为3306(第一个)
-P			   随机分配端口
-e			   设置密码数据库密码为123456
-d             表示使用守护进程运行，即服务挂在后台
```

运行后会产生一个容器id

```
a2988a5dbaeefd47c97698865acb83cdfef941a586112ab473c76e0bf9f7d466
```



# 4.进入mysql容器

```
# docker exec -it a2 /bin/bash
```

- a2	为产生容器的id,在不产生歧义的情况下可以使用前几位字母缩写

```
# mysql -u root -p
```

- -u	用户root
- -p    输入密码

输入之前创建容器的密码即可对数据库进行操作

# 5.对MySQL进行基本操作

1. 显示数据库

   ```
   show databases;
   ```

2. 创建数据库

   ```
   create database test;
   ```

3. 选中数据库

   ```
   use test
   ```

4. 显示数据表

   ```
   show tables;
   ```

5. 创建数据表

   ```
   create table student(id int not null auto_increment primary key,name varchar(10) not null);
   ```

6. 插入数据

   ```
   insert into student values(0,'xiaomin');
   ```

7. 查询数据表

   ```
   select * from student;
   ```

   


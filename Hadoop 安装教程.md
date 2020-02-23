# Hadoop 安装教程

## 1.环境

docker 拉取的最新Ubuntu镜像

## 2. 更改镜像源

1. 复制原来的源信息

   ```
   $ cp /etc/apt/sources.list /etc/apt/sources.list.bak
   ```

2. 安装vim

   docker中的Ubuntu镜像默认没有vim 因此需要先安装vim,可使用以下命令，由于是从国外服务器下载，可能会有点慢。

   ```
   $ apt-get install vim
   ```

3. 修改源文件

   ```
   $ vim /etc/apt/sources.list
   ```

   将源文件中的内容换成

   ```
   deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
   
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
   
   deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
   
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
   
   deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
   
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
   
   deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
   
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
   
   deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
   
   deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
   ```

4. 更新软件列表

   ```
   $ apt-get update
   ```

5. 更新软件包

   ```
   $apt-get upgrade
   ```

## 3. 安装SSH、配置SSH 无密码登录

由于我们已经更改的镜像源，所以我们可以很快的安装SSH的相关服务

安装SSH client

```
$ apt-get install openssh-client
```

安装SSH server

```
$ apt-get install openssh-server
```

安装完成之后我们需要启动SSH服务

```
$ service ssh start
```

可以用以下命令查看SSH 服务的状态

```
$ service ssh status
```

如果正常启动，则会显示

```
 * sshd is running
```

我们使用`ssh localhost`登录时会每次都要输入密码，因此我们现在将SSH配置成无密码登录，输入以下命令

```
$ cd ~/.ssh/                     # 进入该目录，若没有则创建
$ ssh-keygen -t rsa              # 输入后一直按回车就可以
$ cat ./id_rsa.pub >> ./authorized_keys  # 将生成的秘钥加入授权

```

之后我们就可以直接输入 `ssh localhost`登录了

## 4. 安装Java环境

1. 下载jdk

   ```
   $ apt-get install default-jre default-jdk
   ```

2. 添加环境变量

   ```
   $ vim ~/.bashrc
   ```

   将以下语句添加至文件第一行

   ```
   export JAVA_HOME=/usr/lib/jvm/default-java
   ```

3. 更新环境变量

   ```
   $ source ~/.bashrc
   ```

4. 检查是否生效

   ```
   $ echo $JAVA_HOME     # 打印环境变量的值
   $ java -version		  # 显示jdk 版本
   ```

## 5. 安装Hadoop 2 

1. 在宿主机中先下载好Hadoop的压缩包，我这里下载的是`hadoop-2.8.5.tar.gz`放在了 `H`盘的根目录下。

2. 将宿主机中的安装包拷贝至容器中，我这里的容器名叫做Hadoop

   命令行启动，输入以下命令

   ```
   > docker cp H:/hadoop-2.8.5.tar.gz hadoop:/windows/
   ```

3. 解压压缩包

   ```
   $ tar -zxf /windows/hadoop-2.8.5.tar.gz -C /usr/local
   ```

4. 进入安装目录

   ```
   $ cd /usr/local/
   ```

5. 修改文件名

   ```
   $ mv ./hadoop-2.8.5 ./hadoop
   ```

6. 执行文件查看版本信息

   先进入hadoop目录，然后执行下列语句

   ```
   $ ./bin/hadoop version
   ```

   会出现以下信息则说明安装成功

   ```
   Hadoop 2.8.5
   Subversion https://git-wip-us.apache.org/repos/asf/hadoop.git -r 0b8464d75227fcee2c6e7f2410377b3d53d3d5f8
   Compiled by jdu on 2018-09-10T03:32Z
   Compiled with protoc 2.5.0
   From source with checksum 9942ca5c745417c14e318835f420733
   This command was run using /usr/local/hadoop/share/hadoop/common/hadoop-common-2.8.5.jar
   ```

## 6. Hadoop 伪分布式配置

1. 修改Hadoop的配置文件

   1. core-site.xml

      进入`/usr/local/hadoop/etc/hadoop/`

      ```
      $ cd /usr/local/hadoop/etc/hadoop
      $ vim core-site.xml
      ```

      将其中的

      ```
      <configuration>
      </configuration>
      ```

      修改为

      ```
      <configuration>
              <property>
                      <name>hadoop.tmp.dir</name>                                                       <value>file:/usr/local/hadoop/tmp</value>
                      <description>Abase for other temporary directories.</description>
              </property>                                                                       <property>
                      <name>fs.defaultFS</name>
                      <value>hdfs://localhost:9000</value>
              </property>
      </configuration>
      ```

      保存退出

   2. hdfs-site.xml

      同样在`configuratio` 标签修改为

      ```
      <configuration>
              <property>
                      <name>dfs.replication</name>
      				<value>1</value>
              </property>
              <property>
                      <name>dfs.namenode.name.dir</name>
                      <value>file:/usr/local/hadoop/tmp/dfs/name</value>
              </property>
              <property>
                      <name>dfs.datanode.data.dir</name>
                      <value>file:/usr/local/hadoop/tmp/dfs/data</value>
      		</property>
      </configuration>
      ```

2. 执行`NAMENode`的格式化

   ```
   $ cd /usr/local/hadoop
   $ ./bin/hdfs namenode -format
   ```

   成功会显示

   ```
   Exitting with status 0”
   ```

3. 开启`NameNode`和`DataNode`守护进程

   ```
   $ cd /usr/local/hadoop
   $ ./sbin/start-dfs.sh
   ```

   


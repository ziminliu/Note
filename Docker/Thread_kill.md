# 已知3306端口被占用

1. netstat -ano|findstr 3306			得到3306端口的进程id
2. taskkill -pid 3306
3. 拒绝访问以管理员模式打开命令行执行     taskkill -f -pid 3306


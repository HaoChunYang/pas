# 问题：8080端口被占用
idea启动springboot失败，8080端口被占用
```
Description:

Web server failed to start. Port 8080 was already in use.
```

# 查看8080端口占用进程PID号
mac终端，或者idea的终端
```
lsof -i:端口号（我的是8080，那么输入如下命令）
lsof -i:8080
```
查看8080端口占用进程PID号


# 关闭进程
输入`kill -9 xxxxpid`命令，关闭进程后，再启动springboot成功。

谢谢！
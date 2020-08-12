## windows系统
```
  方式1：
    启动：
        1.cd c:\mysql\bin
        2.mysqld --console
    关闭：
        1.cd c:\mysql\bin
        2.mysqladmin -uroot shutdown
  方式2：
    启动：
        1.cd c:\mysql\bin
        2.net start mysql
    关闭：
        1.cd c:\mysql\bin
        2.net stop mysql
```
## linux系统
采用`netstat -nlp`查看mysql服务的状态    

**命令行方式：** 
- 开启  `./mysqld_safe &`
- 关闭  `mysqladmin -uroot shutdown`    

**rpm方式安装的** 
- 开启  `service mysql start`
- 关闭  `service mysql stop`    
在命令行启动mysql时，如不加`--console`，启动、关闭信息不在界面中显示，而是记录在安装目录下的data目录里，文件名一般是`hostname.err`,通过此文件查看mysql的控制台信息。

## 登录mysql
执行命令：`mysql -u root -p`
然后输入密码。可以看到`mysql>`光标，登录成功。
```
F:\hao\mysql-5.7.26-winx64\bin>mysql -u root -p
Enter password: ************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.26

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

## MySQL服务器运行
MySQL服务器既可以做为前台服务程运行，也可以做为后台服务运行。在MySQL安装目录的bin目录下提供了以下MySQL服务程序：
```
mysqld.exe：最基本的MySQL服务器程序。

　　mysqld-nt.exe：Windows　NT/2000/XP平台的优化版本，支持命名管道。

　　执行以上任意一个程序，都会以前台的方式启动MySQL服务。也可按下面的方式将它做为后台来运行。

１.在DOS下转到MySQL安装目录的bin子目录下。
   

２.在NT/2000/xp中注册MySQL服务。命令如下：

　　　　　　mysqld-nt  --install

３.启动MySQL服务：命令如下：

　　　　　　net start mysql

４.停止MySQL服务：命令如下：

　　　　　　net stop mysql

５.从NT/2000服务中移除MySQL服务：命令如下：

　　　　　　mysqld-nt  --remove
```
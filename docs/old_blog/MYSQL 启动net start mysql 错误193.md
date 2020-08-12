# 问题
执行启动mysql时报错
```
F:\hao\mysql-5.7.26-winx64\bin>net start mysql
发生系统错误 193。

*** 不是有效的 Win32 应用程序。
```
# 解决办法：
进入mysql的安装路径bin目录，如本人安装路径。

`F:\hao\mysql-5.7.26-winx64\bin`

该目录下有个`mysqld`的空文件，删除它即可。
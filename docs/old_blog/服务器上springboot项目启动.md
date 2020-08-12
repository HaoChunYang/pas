首先上传jar包至服务器。

三种方式：

1、命令 `java -jar project.jar `

窗口关闭，项目就停止。

2、`nohup java -jar XXX.jar >temp.txt &`最后的&表示后台运行，并将console打印到`temp.txt`下，可通过`jobs`命令查看后台运行任务

`jobs`
那么就会列出所有后台执行的作业，并且每个作业前面都有个编号。
如果想将某个作业调回前台控制，只需要 `fg + 编号`即可。
`fg 23`
查看某端口占用的线程的pid
`netstat -nlp |grep :9181`

3、注册服务
通过`init.d `注册`sudo ln -s /var/myapp/myapp.jar /etc/init.d/myapp`,最后的那个myapp就是你要注册的服务名，这个命令实际是软连接，然后通过`service myapp start|stop|restart`管理就行。

据说上述最后一种方式是最好的，也是官方推荐的方法。!
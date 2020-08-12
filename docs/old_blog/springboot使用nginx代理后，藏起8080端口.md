springboot中默认启动，被nginx反向代理后，还是可以访问8080端口，如果在 application.properties中配置如下信息：
```
server.address = localhost

server.address = 127.0.0.1
```
则8080端口只能被本机访问，其它机器访问不到。
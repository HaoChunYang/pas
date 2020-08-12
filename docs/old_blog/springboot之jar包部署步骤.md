# springboot之jar包部署步骤
## eclipse中:
1. 单击整个项目 run as - maven clean - maven install
2. 找到项目所在的路径 找到所有的jar包
3. 把jar包放到linux对应的文件夹

## linux中部署项目:
1. 查看jar是否在运行中` ps -ef | grep SpliderWeb-0.0.1-SNAPSHOT.jar`
2. 有运行的jar包 杀死对应的进程 kill 进程号
3. 无运行的jar包 部署项目 `java -jar SpliderWeb-0.0.1-SNAPSHOT.jar`
 后台运行jar包  `$ nohup java -jar SpliderWeb-0.0.1-SNAPSHOT.jar &`

## linux部署项目常用指令:
```
    a: ll  查询目录结构并显示文件的时间
    b: rm -rf  文件名.文件类型 (rm -rf 192.168.7.2.zip)  删除文件
    c: ps -ef|grep jar包名.jar (ps -ef|grep SpliderWeb-0.0.1-SNAPSHOT) 查看jar包是否在运行
    d: kill -9 端口号(kill -9 24070)  杀死正在运行的程序
    e: rm -rf *.后缀名 (rm  -rf  *.jar) 删除所有后缀名相同的文件
    f: cp 192.168.1.1\(1\).zip  /usr/local/Splider  复制当前文件到指定的目录
    g: unzip 192.168.1.1\(1\).zip   解压zip包
    h: chmod -R 777 *.jar   赋予指定的文件权限
    i: nohup java -jar Spliderweb-0.0.1-SNAPSHOT.jar 后台运行jar文件
    j: tail -f nohup.out
```
## linux常用指令:
```
    find / -name mongo   查找指定程序所在的目录
    (/root/mongo/mongodb-3.4.5/bin/mongo)
    ./mongo (进入mongo所在的bin目录执行mongo程序)
    show dbs
    use splider-site
    show tables
    db.集合名.find() 查看集合数据
```
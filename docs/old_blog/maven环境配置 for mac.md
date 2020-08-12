# 1. 下载Maven
1. 打开Maven官网下载页面：http://maven.apache.org/download.cgi
2. 解压到某目录下

# 2.配置环境变量
打开terminel输入以下命令：`vi ~/.bash_profile`打开配置文件，将maven的环境变量写入该文件。
```
export MAVEN_HOME=/Users/xxx/Documents/maven/apache-maven-3.5.4

export PATH=$MAVEN_HOME/bin:$PATH
```
保存存退出。
终端执行命令`source ~/.bash_profile`,使环境变量生效。

# 3.查看配置是否生效
输入`mvn -v`命令，输入以下信息，则配置成功。
```
Apache Maven 3.5.4 (1edded0938998edf8bf061f1ceb3cfdeccf443fe; 2018-06-18T02:33:14+08:00)
Maven home: /Users/hao/Apache/apache-maven-3.5.4
Java version: 1.8.0_211, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk1.8.0_211.jdk/Contents/Home/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: "mac os x", version: "10.13.4", arch: "x86_64", family: "mac"
谢谢！
```
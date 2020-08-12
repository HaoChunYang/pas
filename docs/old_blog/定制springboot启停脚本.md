## 启动脚本

* start.sh
```shell
nohup java -jar complaint.jar &
```

## 停止脚本

* stop.sh
```shell
#!/bin/bash
PID=$(ps -ef | grep complaint.jar | grep -v grep | awk '{ print $2 }')
if [ -z "$PID" ]
then
    echo Application is already stopped
else
    echo kill $PID
    kill $PID
fi
```

## 重启脚本
* reload.sh
```shell
#!/bin/bash
echo stop application
source stop.sh
echo start application
source start.sh
```

## 给三个脚本增加权限：
```
chmod +x start.sh
chmod +x stop.sh
chmod +x reload.sh
```

## 查看是否启动成功
`netstat -ntpl|grep java`
查看对应的端口是否启动成功。
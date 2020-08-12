升级node的版本

## 清除node.js的cache

```
$ npm cache clean -f
```
## 安装node版本管理工具`n`

```
$  npm install n -g
```
查看目前node的历史版本
```
$ n list
```

## 使用版本管理工具安装指定node或者升级到最新node版本

```
//安装node最新版本
$ n stable 

//安装node指定版本11.10.0
$ n 11.10.0 
```

使用`node -v`查看node版本，如果版本号改变为你想要的则升级成功。
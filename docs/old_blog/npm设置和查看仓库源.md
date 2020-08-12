## 修改npm的源
设置npm的源，可以设置多个源，但是只有一个是生效的

```
//设置淘宝源
npm config set registry https://registry.npm.taobao.org

//设置公司的源
npm config set registry http://127.0.0.1:4873
```

## 查看源，可以看到设置过的所有的源

```
npm config get registry
```

## 修改npm配置文件
编辑 ~/.npmrc 加入下面内容

```
registry = https://registry.npm.taobao.org
```
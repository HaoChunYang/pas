## 直接修改远程仓库地址

查看远程仓库地址

```
git remote -v
```

修改远程仓库地址

```
git remote set-url origin [url]
```

## 先删除再修改地址

```
git remote rm origin
git remote add origin [url]
```

## 直接修改配置文件

进入项目根目录

```
vim .git/config
```

找到`[remote “origin”]`下的 url，改成新地址即可

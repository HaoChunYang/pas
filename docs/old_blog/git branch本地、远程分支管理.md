- 查看本地分支

```
git branch 列出当前分支清单

git branch -a 查看远程分支和本地分支

git branch -v 查看各个分支最后一个提交信息

git branch --merged 查看哪些分支已经合并入当前分支
```

- 切换本地分支

git checkout 分支名

- 拉取远程分支


~~git pull origin 远程分支名~~
**发现不在小心在其他分支上直接执行上面命令拉取时，把所在分支内容变成远程分支的内容了，不知道怎么操作变回来了。（所以还是不用这个了。使用`git checkout 远程分支名`吧）**
```
当在本地拉取远程分支并在本地对应分支时，也可以git pull直接拉取

git fetch origin 同步远程服务器的数据到本地

git checkout -b test origin/test_remote 将远程分支test_remote拉取下来到本地test分支

git checkout test 将远程分支test拉取下来到本地test分支

git pull test从远程分支test 中checkout下来的本地分支test成为跟踪分支，使用git pull或者git push就会操作到对应的远程分支test
```

- 推送远程分支

git push origin 远程分支名

当处在本地的远程分支时，也可以git push直接推送

- 删除分支

```
git branch -d test：删除本地test分支

git branch -D test： test分支还没有合入当前分支，所以要用-D参数才能删掉。

git push origin --delete test 删除远程test分支

git push origin :test 删除远程test分支
```
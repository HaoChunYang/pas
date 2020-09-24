#  Git撤销对远程仓库的push&commit提交

## 撤销push

1. 执行  `git log`查看日志，获取需要回退的版本号 

![img](https://img2018.cnblogs.com/blog/788599/201809/788599-20180927164303193-2084393469.png)

2. 执行 `git reset –-soft <版本号>` ，如 `git reset --soft 4f5e9a90edeadcc45d85f43bd861a837fa7ce4c7` ，重置至指定版本的提交，达到撤销提交的目的

然后执行 git log 查看
![img](https://img2018.cnblogs.com/blog/788599/201809/788599-20180927164827547-451137005.png)


此时，已重置至指定版本的提交，log中已经没有了需要撤销的提交

>`git reset` 命令分为两种： `git reset –-soft` 与 `git reset –-hard` ，区别是：
>
>   前者表示只是改变了HEAD的指向，本地代码不会变化，我们使用`git status`依然可以看到，同时也可以`git commit`提交。后者直接回改变本地源码，不仅仅指向变化了，代码也回到了那个版本时的代码。

3. 执行 `git push origin 分支名 –-force` ，强制提交当前版本号。

至此，撤销push提交完成。


## 撤销commit

1. 执行 `git log` 查看需要撤销的commit的前面一个提交版本的id；

2. 执行 `git reset --hard commit_id` ，该commit_id为需要撤销的commit的提交的前面一个提交的版本，即需要恢复到的提交的id，重置至指定版本的提交，达到撤销提交的目的

3. 执行 `git log` 查看，commit提交已撤销


文章来源：https://www.cnblogs.com/chaoxiZ/p/9714085.html
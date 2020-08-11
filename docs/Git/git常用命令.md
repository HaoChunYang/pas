# 常用git命令


## tag
git tag 

git tag v1.0.1

git push origin v1.0.1

git tag -d v1.0.1

git push origin :refs/tags/v1.0.1  //删除远程tag

## 分支
git push origin dev  //将分支推送到远端

git branch --set-upstream-to=origin/dev  //关联

git branch -a //查看本地和远程的所有分支

git branch -r //查看远程分支

git fetch //将远程分支与本地分支保持同步

git checkout -b 本地分支名x origin/远程分支名x  //拉取远程分支并创建对应的本地分支
# 使用`ssh-keygen`

Command line instructions

## Git global setup
```
git config --global user.name "username"
git config --global user.email "lanianer@qq.com"
```

## …or create a new repository on the command line
```
echo "# pas" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/HaoChunYang/pas.git
git push -u origin master
```

## …or push an existing repository from the command line
```
git remote add origin https://github.com/HaoChunYang/pas.git
git push -u origin master
```


# 更新`pod`
升级后找不到pod命令
```
sudo gem install -n /usr/local/bin cocoapods
```

## pod升级
```
pod repo update
```


# 常用git命令

git tag 
git tag v1.0.1
git tag -d v1.0.1
git push origin :refs/tags/v1.0.1  //删除远程tag


git push origin dev  //将分支推送到远端

git branch --set-upstream-to=origin/dev  //关联

git branch -a //查看本地和远程的所有分支
git branch -r //查看远程分支

git fetch //将远程分支与本地分支保持同步
git checkout -b 本地分支名x origin/远程分支名x  //拉取远程分支并创建对应的本地分支

## eg: git 从远程仓库获取所有分支

1. 首先同步所有远程分支，如下：
```
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
```

2. 将本地所有分支与远程保持同步 `git fetch --all`

3. 最后拉取所有分支代码 `git pull --all`


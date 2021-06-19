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

升级后找不到 pod 命令

```
sudo gem install -n /usr/local/bin cocoapods
```

## pod 升级

```
pod repo update
```

## eg: git 从远程仓库获取所有分支

1. 首先同步所有远程分支，如下：

```
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
```

2. 将本地所有分支与远程保持同步 `git fetch --all`

3. 最后拉取所有分支代码 `git pull --all`

做过的事，总要找个时间小记一下。

> 创建本地git仓库并将本地项目上传到Github合理步骤

# 建议先在本地项目中创建`.gitignore`，避免上传上不需要的文件

```
# 如果之前已经上传了文件如何删除
git rm -r --cached .idea
```

# 初始化本地仓库

```
git init
git add .
git commit -m '初次提交项目'
```

# 在Github上建立远程仓库

在Github上创建新项目仓库，获得远程仓库地址。

# 本地仓库关联远程仓库

```
git remote add origin https://github.com/你的用户名/你建立的仓库.git
git push -u origin master 
```

# 注意

如果在github上创建仓库时，勾选了同时创建`README`文件。直接push时会报错。在push前，可通过执行下面命令解决：

```
git pull --rebase origin master
```
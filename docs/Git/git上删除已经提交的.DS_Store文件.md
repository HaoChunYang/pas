# git上删除已经提交的`.DS_Store`文件

删除项目中的所有.DS_Store。这会跳过不在项目中的 .DS_Store
```sh
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```
将 .DS_Store 加入到 .gitignore
```sh
echo .DS_Store >> ~/.gitignore
```
更新项目
```sh
git add --all
git commit -m '.DS_Store banished!'
```

**注意在新建git管理时，创建`.gitignore`文件。**

**注意在新建git管理时，创建`.gitignore`文件。**

**注意在新建git管理时，创建`.gitignore`文件。**

- 如果你只需要删除磁盘上的 `.DS_Store`，可以使用下面的命令来删除当前目录及其子目录下的所有`.DS_Store` 文件:

`find . -name '*.DS_Store' -type f -delete`

- 禁用或启用自动生成

禁止.DS_store生成：
`defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE`

- 恢复.DS_store生成：

恢复.DS_store生成：
`defaults delete com.apple.desktopservices DSDontWriteNetworkStores`
# `.gitignore`文件不生效

## Problem 
某文件开始已经加入的git仓库进行管理，后来根据需要不再进行文件跟踪。于是在`.gitignore`文件中加入相应文件路径，进行忽略。但是文件不生效。
`git status`时仍可以看到相应文件夹下的变更内容。

## Analysis

原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。

## Solution

需要先把本地缓存删除（改变成未被追踪状态），然后再提交。
执行以下操作：

```
git rm -r --cached .
git add .
git commit -m 'update .gitigone规则'
```
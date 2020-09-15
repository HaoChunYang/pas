# `git tag` 给当前分支打标签

**假如我们给当前分支打`v1.0`标签**

## `git tag <tag name> `可以打一个新标签

```
$ git tag v1.0 
```
标签都只存储在本地，不会自动推送到远程。

## 可以用命令`git tag`查看所有标签.
```
$ git tag 
```
加上`-l`命令可以使用通配符来过滤`tag`
```
$ git tag -l "v1*"
```

## 在历史提交上打 `tag`

查看commit id，使用commit id打tag

先`git log`查看历史提交记录`id`， 然后执行

```
$ git tag v1.0 6df3aa614a45e687697a628a9174106822f79bfc
```

**注意**，标签不是按时间顺序列出，而是按字母排序的。可以用`git show <tagname>`查看标签信息

## 带有说明的标签
**用-a指定标签名，-m指定说明文字：**

```
$ git tag -a v1.0 -m "version 1.0" 88d434eb9992fa7502ec246ecfb89aef19f16873
```

## 切换到某个tag
和切换分支一样，不过这个时间不位于任何分支，处理游离状态。
```
$ git checkout v1.0
```

## 推送某个标签到远程，使用命令`git push origin <tagname>`

```
$ git push origin v1.0
```

## 一次性推送全部尚未推送到远程的本地标签

```
$ git push origin --tags
```

## 删除标签 `git tag -d tagname`

```
$ git tag -d v1.0
```

## 删除远端标签 `git push origin :refs/tags/<tagName>`
```
$ git push origin :refs/tags/v1.0
```

> 修改某个tag版应该怎么修改？？？
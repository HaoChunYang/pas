提交git时，该次提交有超过100M的文件，但是提交github报错。
报错信息：
```
remote: error: File HRMS-PRO/Pods/AMap3DMap/MAMapKit.framework/MAMapKit is 122.14 MB; this exceeds GitHub's file size limit of 100.00 MB
To https://github.com/xxxx/xxxx.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to https://github.com/xxxx/xxxx.git
```

解决办法：
如果删除文件直接提交，不能解决问题，还会再次报错。
网上删除cached，等方法没试成功。
我使用`git reset 788cad0cf8bb6108d962967adc6a082b2be10bf9`

> 788cad0cf8bb6108d962967adc6a082b2be10bf9
>
>为上一次正常提交的节点。git log可以查看到。

**需要恢复到上一次正常提交的commit节点。**

这样`reset`不会影响到工作区已经修改的文件，
然后再`git add .`
`git commit`
`git push`
。

还有一种方法，可参考：https://www.jianshu.com/p/10f5382a7133
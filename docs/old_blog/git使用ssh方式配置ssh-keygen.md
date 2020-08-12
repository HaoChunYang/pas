#1、生成ssh key文件，在`~`目录下执行`ssh-keygen -t rsa -C "xxx.xxx.com"`; 

    - t 指定密钥类型，默认是 rsa ，可以省略

    -C 设置注释文字，比如git的地址。

    -f 指定密钥文件存储文件名，我们省略了命令执行的时候会让你选择文件名，直接回车就会保存在默认的位置。

    然后会让你输入两次密码，最后出现 key fingerprint和 key's randomart 就表示创建成功了。
    
# 2、将ssh key添加到git中
`vi id_rsa.pub` 然后复制文件内容，进入git页面，个人设置`User setting`页面，`SSH Keys`设置页面，在Key文本框中输入复制的内容，然后点`Add Key按钮`完成添加。

# 3、测试连接你的git地址
`ssh -T git@xxx.xxx.com`  输入正确密码后如果出现`Welcome`就是连接成功了。

**接下来就可以通过`git clone git@xxx.xxx.com:xxx `来下载代码了.**
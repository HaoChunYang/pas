在下载使用Flutter官方Demo万物起源《HistoryOfEverything》时，使用到`git submodule init `命令。这里学习一下。

----

## 初始化命令
当一个项目需要包含其他支持项目源码时使用的功能，作用是两个项目是独立的，且主项目可以使用另一个支持项目。

```
git submodule add <submodule_url>  # 添加子项目
```

添加子项目后会出现.gitmodules的文件，这是一个配置文件，记录mapping between the project's URL and the local subdirectory。且.gitmodules在git版本控制中，这样其他参与项目的人才能知道submodule projects的情况。

```
git submodule init  # 初始化本地.gitmodules文件
git submodule update  # 同步远端submodule源码
```
## submodules的源码包管理
如果获取的项目包含submodules，pull main project的时候不会同时获取submodules的源码，需要执行本地.gitmodules初始化的命令，再同步远端submodule源码。如果希望clone main project的时候包含所有submodules，可以使用下面的命令

```
git clone --recurse-submodules <main_project_url>  # 获取主项目和所有子项目源码
```

操作submodules源码：先进入submodule的direcotry，再执行下述命令

```
git fetch  # 获取submodule远端源码
git merge origin/<branch_name>  # 合并submodule远端源码
git pull  # 获取submodule远端源码合并到当前分支
git checkout <branch_name>  # 切换submodule的branch
git commit -am "change_summary"  # 提交submodule的commit

# or

# 更新submodule源码，默认更新的branch是master，如果要修改branch，在.gitmodule中设置
git submodule update --remote <submodule_name>  
# 更新所有submodule源码，默认更新.gitmodule中设置的跟踪分支，未设置则跟踪master
git submodule update --remote  
# 当submodule commits提交有问题的时候放弃整个push
git push --recurse-submodules=check
# 分开提交submodule和main project
git push --recurse-submodules=on-demand
```

.gitmodule内容大致如下

```
[submodule <submodule_name>]
    path = <local_directory>
    url = <remote_url>
    branch = <remote_update_branch_name>
```

用'foreach'关键字同时管理多个submodules，如下

```
# stash所有submodules
git submodule foreach 'git stash'
# 所有submodules创建新分支
git submodule foreach 'git checkout -b <branch_name>'
```
## submodules命令别名
submodules的命令很长，为提升效率，可以创建alias，记录在.git/config路径下。如下：
```
git config alias.spush 'push --recurse-submodules=on-demand'
git config alias.supdate 'submodule update --remote --merge'
```

这样，可以使用下面的命令来提高效率

```
git supdate
git spush
```
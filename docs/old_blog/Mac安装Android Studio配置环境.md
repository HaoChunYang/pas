近期在使用React Native的时候，需要用Android环境进行验证，需要在mac上安装Android环境。在网上查看了几遍教程，准备进行安装。安装完以后，发现配置没有那么复杂。再总结一下教程。

# 下载环境
1. 下载安装jdk1.8以上（我电脑上已经安装过了）
2. 下载Android Studio
  [android-studio-ide 3.4.2](https://dl.google.com/dl/android/studio/install/3.4.2.0/android-studio-ide-183.5692245-mac.dmg)
  http://tools.android-studio.org/index.php/sdk
3. 下载SDK tools 
 [android-sdk_r24.4.1-macosx](https://dl.google.com/android/android-sdk_r24.4.1-macosx.zip)
4. 配置gradle环境路径


注意：**中间过程不需要配置代理proxy**，网上很多教程都需要配置代理，但是发现配置代理后会有多种错误，后来把代理删除以后，居然都正常安装了。踩坑无数，终于安装完成。

几篇重要的参考博文，记录如下：
[【Mac + Android】之Android Studio 环境搭建，AVD模拟器运行（包括：命令行运行AVD，并且Genymotion模拟器插件配置运行）](https://www.cnblogs.com/Owen-ET/p/10271090.html)
[mac 下的 bash gradle command not found](https://blog.csdn.net/u013424496/article/details/52684213)
[mac 下 android studio 的离线gradle极速配置方法](https://www.cnblogs.com/thtlovelife/p/5872801.html)
# 排查项目包含UIWebView的文件与静态库方法

## Problem

发布App Store不成功，查看不到构建版本，收到官方拒绝邮件。
信息如下：
> ITMS-90809: Deprecated API Usage - Apple will stop accepting submissions of apps that use UIWebView APIs . See https://developer.apple.com/documentation/uikit/uiwebview for more information.

> New apps that use UIWebView are no longer accepted. Instead, use WKWebView for improved security and reliability. Learn more(https://developer.apple.com/documentation/uikit/uiwebview).

## Analysis

`UIWebView`苹果官方已经弃用，新上架的应用中检测到`UIWebView`会被拒绝。由新的组件`WKWebView`代替。一些第三方的构架里面没有删除的，需要注意。

## Solution

排查项目包含UIWebView的文件与静态库。

打开终端控制台，`cd 到项目目录`，使用脚本排查 `grep -r UIWebView . `（脚本包含最后一个标点符号）
```
grep -r UIWebView .
```
执行以上代码，会得到项目中具体包含UIWebView 静态库或者文件的名称及相关代码。
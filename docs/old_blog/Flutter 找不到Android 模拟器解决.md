配置好flutter的环境变量后执行如下命令

> flutter config --android-sdk 自己的android sdk路径  

```
$ flutter config --android-sdk /Users/hao/Library/Android/android-sdk-macosx
```
输出以下信息：
```
Setting "android-sdk" value to
"/Users/hao/Library/Android/android-sdk-macosx".
```
然后可以在`~/.flutter_settings `文件中查看。
```
{
  "android-sdk": "/Users/hao/Library/Android/android-sdk-macosx"
}
```
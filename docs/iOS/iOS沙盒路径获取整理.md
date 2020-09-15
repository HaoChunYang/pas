# iOS沙盒路径获取整理

## 目录说明
|沙盒目录   |包含内容|
|:----     |----|
|Documents  |存放应用运行时生成的并且需要保留的数据，iCloud同步时会同步该目录
Library/Caches  |存放应用运行时生成的数据，iCloud同步时不会同步该目录
Library/Preferences/    |存放所有的偏好设置
tmp/    |存放应用运行时的临时数据


## 获取文件路径：

```swift
    //两种获取应用沙盒路径的不同方法
    NSString *documentPath = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents"];
    NSString *cachePath = [NSHomeDirectory() stringByAppendingPathComponent:@"Library/Caches"];
    NSString *preferencesPath = [NSHomeDirectory() stringByAppendingPathComponent:@"Library/Preferences"];
    NSString *tmpPath = [NSHomeDirectory() stringByAppendingPathComponent:@"tmp"];
    
    //NSSearchPathForDirectoriesInDomains()返回的是一个数组，这是因为对于Mac OS可能会有多个目录匹配某组指定的查询条件，但是在iOS上只有一个匹配的目录
    NSString *documentPath1 = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).lastObject;
    NSString *cachePath1 = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES).lastObject;
    NSString *tmpPath1 = NSTemporaryDirectory();
```
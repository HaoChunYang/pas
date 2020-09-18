# iOS判断程序在前台还是后台

判断程序在前台，后台，状态的改变。
```swift
[UIApplication sharedApplication].applicationState 

//三种状态值. 枚举类型：

UIApplicationStateActive //（前台）
//当前程序在前台运行

UIApplicationStateInactive //（收到通知）
//下拉状态栏，看通知消息
//双击home键，下面弹出任务运行栏
//锁屏


UIApplicationStateBackground //（后台）
//按home键，进入后台
//在该app中启动其它应用（比如打开支付宝），把当前应用挤入后台。
```

*例*

``` swift
+ (BOOL)runningInBackground {
    UIApplicationState state = [UIApplication sharedApplication].applicationState;
    BOOL result = (state == UIApplicationStateBackground);

    return result;
}

+ (BOOL)runningInForeground {
    UIApplicationState state = [UIApplication sharedApplication].applicationState;
    BOOL result = (state == UIApplicationStateActive);

    return result;
}
```
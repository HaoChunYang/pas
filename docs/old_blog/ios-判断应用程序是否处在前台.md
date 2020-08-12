`UIApplication`有一个`applicationState`属性，我们可以根据这个来判断。

这个`state`总共有三个状态，一个是激活状态，一个是将要激活状态，还有一个是后台状态


> UIApplicationStateActive,//激活状态
>
> UIApplicationStateInactive,//将要激活状态
>
> UIApplicationStateBackground//后台状态



我们可以用以下代码来进行判断
```
if([UIApplication sharedApplication].applicationState == UIApplicationStateActive)
    {
        NSLog(@"应用程序在前台");
       
        return;
    }
```
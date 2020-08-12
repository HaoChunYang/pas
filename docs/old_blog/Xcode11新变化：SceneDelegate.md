## Xcode11新变化：SceneDelegate


使用Xcode11新建iOS项目时,如果你跟往常一样在`Appdelegate`的`- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`方法中创建根控制器，会崩溃报错：

`Appdelegate`找不到设置window的方法。

然后发现Xcode自动新增了一个`SceneDelegate`文件，查找了一下官方文档[WWDC2019：Optimizing App Launch](https://developer.apple.com/videos/play/wwdc2019/423/)
发现，iOS13中appdelegate的职责发现了改变：
iOS13之前，Appdelegate的职责全权处理App生命周期和UI生命周期；
iOS13之后，Appdelegate的职责是：

>1、处理 App 生命周期
>2、新的 Scene Session 生命周期
>
>UI的生命周期，交给新增的`Scene Delegate`处理


这种模式完全没问题，因为只有一个进程，只有一个与这个进程对应的用户界面
但是iOS13之后，Appdelegate不在负责UI生命周期，所有UI生命周期交给SceneDelegate处理.

因此初始化window方法需要改变：
现在不再`Appdelegate`的`- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`进行初始化，转交给`SceneDelegate`的`willConnectToSession:`方法进行根控制器设置：

## 更新后代码写法

```
- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {

    UIWindowScene *windowScene = (UIWindowScene *)scene;
    self.window = [[UIWindow alloc] initWithWindowScene:windowScene];
    self.window.frame = windowScene.coordinateSpace.bounds;
    self.window.rootViewController = [UITabBarController new];
    [self.window makeKeyAndVisible];
}
```

## 其它参考博文

[iOS13 Scene Delegate详解](https://www.jianshu.com/p/53e3252dc07e)
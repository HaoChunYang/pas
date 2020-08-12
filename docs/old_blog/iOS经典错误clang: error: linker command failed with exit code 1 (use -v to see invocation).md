# 写此错误记录的起因
这本是一个iOS开发过程中常见到的错误，提示也很明显，文件链接不正常导致的错误。**但是这次奇特的是，没有错误提示原因，右键`reveal in log`也不显示**这样就知道是这个错误，但是就是无法定位。非常痛苦。
工具：xcode 10.0
工程：RN+iOS混合开发工程，cocoapods依赖库管理
其它：引用很多第三方库，有开源的，有老程序开发者封装的。
具体步骤：导入高德地图，`alloc`的时候（其实只导入依赖包，编译是可以通过的）。
提示该原因，且无具体错误提示原因，导致无定位。

# 排查原因
1. 一开始以为库冲突，因为单使用高德地图写demo时，是没有问题的。demo是`xcode9`写的。于是将原工程中的包，一个一个删除掉，进行排查，没有一个解决。
2. 网上搜索，设置各种配置。如：设置`build active architectures only`为`NO`
删除`Valid Architectures`中`arm64`参数。
3. 如果错误提示有是自己写的类名时，可能是在`Build Phases`中的`Compile Sources`没有添加相对应的`.m`文件。
4. 第三方库如果没有引用，需要在`Build Phases`中的`Link Binary With Libraries`中进行添加。
5. 修改`other linker flag`为`-ObjC`、`-all_load`、`$(inher)`
6. 手动添加高德地图库时，也特意查看了官方提到的`libstdc++.6.0.9`有没有添加，还真没有。

关键是看不到错误原因，非常痛苦。

后来换了一台Mac,另一个版本的xcode，结果错误提示**奇迹般的**一下子出来了。如下：
```
Undefined symbols for architecture i386:
  "_OBJC_METACLASS_$_GLKView", referenced from:
      _OBJC_METACLASS_$_MAMapRender in MAMapKit(MAMapKit-i386-master.o)
  "_OBJC_CLASS_$_GLKView", referenced from:
      _OBJC_CLASS_$_MAMapRender in MAMapKit(MAMapKit-i386-master.o)
  "_GLKMatrix4Identity", referenced from:
      -[MASpriteOverlayRenderer doRenderContent] in MAMapKit(MAMapKit-i386-master.o)
      -[MAObjModelOverlayRenderer glRender] in MAMapKit(MAMapKit-i386-master.o)
ld: symbol(s) not found for architecture i386
clang: error: linker command failed with exit code 1 (use -v to see invocation)
```
至此，原因很好定位了。
缺少依赖库`GLKit`。但时工程是用的xcode10，为什么还需要手动的引用依赖库呢？单写一个demo时，用的xcode9/xcode10，都是正常的。主要是并没有手动的添加依赖库。

# 解决
缺少依赖库`GLKit`，直接在`Build Phases`中的`Link Binary With Libraries`中进行添加即可
**Build Success**!!!

# 总结
查找此错误原因，将近用了一天时间，所以要记一下。

一开始以为是库冲突，因为是中途接手的一个工程。排查后发现不是。错误原因也无法提示，开始排查各种设置。然而并没用起作用。

后来，换了一台电脑，另一个版本的xcode，错误原因奇迹般的出现了。其实原因很普通。
**原来有另一台电脑真的很重要啊！**哈哈哈哈哈……

# 关于此错误，有几篇总结的还不错的，记录一下
[iOS经典错误Undefined symbols for architecture XXX:](http://www.cocoachina.com/articles/18737)
[_OBJC_CLASS_$_GLKView", referenced from:
](https://www.jianshu.com/p/dd42d9563227?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
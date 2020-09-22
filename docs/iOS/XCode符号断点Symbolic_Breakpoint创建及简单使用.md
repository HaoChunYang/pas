# XCode符号断点`Symbolic Breakpoint`创建及简单使用

## 简介 
`Symbolic Breakpoint`是一个全局断点，功能非常强大，可以很方法设置各种条件断点。

## 创建断点
点击断点界面的`+`号，选择`Add Symbolic Breakpoint`就创建了一个断点。

## 编辑断点
创建好后会直接弹出断点编辑界面，也可以通过右击断点选择`Edit Breakpoint…`进入编辑界面。

断点的可编辑项，从编辑界面可以看到断点可编辑的项有`Symbol`、`Module`、`Condition`、`Ignore`、`Action`、`Options`。

- `Symbol `断点触发函数。有两种函数写法，C函数样式和OC方法样式。 C函数样式只需要写函数名，不用写后面的()和参数，例如NSLog。 OC方法样式的`+/-[className methodName]`，+是类方法，-是实例方法，不写则不区分类方法和实例方法。

- `Module`模块筛选，可以避免不同库中方法名或者函数名相同。

- `Condition`触发条件。`$arg3`代表第1个参数，`$arg4`代表第2个参数，以此类推。样例：`Symbol`设置为`[UIImage imageNamed:]`，`Condition`设置为`$arg3 == nil`或`[(NSString *)$arg3 length] == 0`。

- `Ignore`设置这个值可以忽略前面指定次数的触发。

- `Action`触发活动。这里是当断点触发后要执行的动作，可以添加多条，执行的顺序是从上到下。

- `Options`是否进入`DEBUG`界面。勾选这个断点触发后不进入`DEBUG`界面，断点打印日志或者声音断点一般都勾选。

> 在断点处，可以使用`po $arg1`、`po $arg2`查看第一个参数和第二个参数，以及后面的若干参数

作者：yumiao
原文链接[https://www.jianshu.com/p/8801cc2d6f99](https://www.jianshu.com/p/8801cc2d6f99)
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

**其它参考记录：**

使用断点判断组件约束冲突问题

[UIViewAlertForUnsatisfiableConstraints](https://www.jianshu.com/p/a4bb3c904adb)

[UnsatisfiableConstraints](https://www.jianshu.com/p/a668e6402b59)
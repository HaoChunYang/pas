报警信息：
```
Null passed to a callee that requires a non-null argument
```

这个警告是xcode6.3开始 为了让OC也能有swift的？和！的功能，你在声明一个属性的时候加上 `__nullable`（？可以为空）与`__nonnull`（！不能为空） 如果放在`@property`里面的话不用写下划线
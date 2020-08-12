动态测定字符串frame，用NSString中的一个方法`boundingRectWithSize`函数

```
    NSDictionary * dic = [NSDictionary dictionaryWithObject: [UIFont systemFontOfSize:14] forKey:NSFontAttributeName];
    CGSize size = CGSizeMake(230, 1500);
    CGRect rect = [string boundingRectWithSize:size
                                       options:NSStringDrawingTruncatesLastVisibleLine|NSStringDrawingUsesFontLeading|NSStringDrawingUsesLineFragmentOrigin
                                    attributes:dic
                                       context:nil];
```

第一个参数是text形成的`frame`的最大的宽度和高度, 其中的`options`比较关键

- `NSStringDrawingUsesLineFragmentOrigin`  多行绘制必有选项，不然测量的frame是单行文字的frame

- `NSStringDrawingUsesFontLeading` 决定行高的确定方法

- `NSStringDrawingTruncatesLastVisibleLine` 多行模式下，最后一行显示不下时，采用截断方式显示，就是显示...

一般的文字frame计算，都需要上面3个选项！
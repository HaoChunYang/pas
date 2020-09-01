对使用masonry控制的view,直接添加圆角的方式并没有变化。

## 解决方案

```
- (void)setCornerOnTop
{
    UIBezierPath *maskPath;
    maskPath = [UIBezierPath bezierPathWithRoundedRect:self.bounds
                                     byRoundingCorners:(UIRectCornerTopLeft | UIRectCornerTopRight)
                                           cornerRadii:CGSizeMake(5.0f, 5.0f)];
    CAShapeLayer *maskLayer = [[CAShapeLayer alloc] init];
    maskLayer.frame = self.bounds;
    maskLayer.path = maskPath.CGPath;
    self.layer.mask = maskLayer;
}
```

## 分析
这是一段给UIView上边缘添加圆角的代码.
在下面方法中调用，才能使利用Masonry添加过约束的UIView产生圆角效果.
```
- (void)layoutSublayersOfLayer:(CALayer *)layer
```

此方法被调用的时刻是:当图层的bounds发生改变,或者图层的setNeedsLayout方法被调用的时候.

## 附：应用示例
```
-(void)layoutSublayersOfLayer:(CALayer *)layer{
    [super layoutSublayersOfLayer:layer];
    [self addCornerMethod];
}

-(void)addCornerMethod{
    CGFloat width = self.headerImg.frame.size.width/2;
    UIRectCorner corner = UIRectCornerAllCorners;
    UIBezierPath *path = [UIBezierPath bezierPathWithRoundedRect:self.headerImg.bounds byRoundingCorners:corner cornerRadii:CGSizeMake(width, width)];
    CAShapeLayer *masklayer = [[CAShapeLayer alloc]init];
    masklayer.frame = self.headerImg.bounds;
    masklayer.path = path.CGPath;
    self.headerImg.layer.mask = masklayer;
    
}
```
参考：https://blog.csdn.net/p7767158/article/details/50818589
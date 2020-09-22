# iOS开发中方法延迟执行的几种方式

1. performSelector方法
2. NSTimer定时器
3. NSThread线程的sleep
4. GCD

假如有延迟执行方法
``` swift
- (void)delayMethod{
    NSLog(@"delayMethodEnd");
}
```
1. performSelector
```swift
[self performSelector:@selector(delayMethod) withObject:nil/*可传任意类型参数*/ afterDelay:2.0];
```

注：此方法是一种非阻塞的执行方式，
取消performSelector
用`NSObject cancelPreviousPerformRequestsWithTarget:`

2. NSTimer定时器
`NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:2.0 target:self selector:@selector(delayMethod) userInfo:nil repeats:NO];`
注：此方法是一种非阻塞的执行方式，
取消执行方法：- (void)invalidate;即可


3. NSThread线程的sleep
`[NSThread sleepForTimeInterval:2.0];`
注：此方法是一种阻塞执行方式，建议放在子线程中执行，否则会卡住界面。但有时还是需要阻塞执行，如进入欢迎界面需要沉睡3秒才进入主界面时。
没有找到取消执行方式。


4. GCD

```swift
__block ViewController/*主控制器*/ *weakSelf = self;

dispatch_time_t delayTime = dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.0/*延迟执行时间*/ * NSEC_PER_SEC));

dispatch_after(delayTime, dispatch_get_main_queue(), ^{
    [weakSelf delayMethod];
});
```
注：此方法可以在参数中选择执行的线程，是一种非阻塞执行方式。没有找到取消执行方式。
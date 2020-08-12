```
CFAbsoluteTime startTime =CFAbsoluteTimeGetCurrent();

//在这写入要计算时间的代码

//...

CFAbsoluteTime linkTime = (CFAbsoluteTimeGetCurrent() - startTime);

NSLog(@"Linked in %f ms", linkTime *1000.0);

//打印出来为代码执行时间 单位ms
```

```
//计算函数的运行时间，单位ms
// Foundation框架下的思路就是：初始化一个NSdate的对象，记为date1，运行函数体，再初始化一个NSdate的对象，记为date2，
NSDate *date1 = [NSDate date];
backCode =  [self transmitData];
NSDate *date2 = [NSDate date];
NSTimeInterval timeInInterval =[date2 timeIntervalSinceDate:date1];
NSLog(@"time cost: %.3f", timeInInterval);
//timeInInterval为double类型
```
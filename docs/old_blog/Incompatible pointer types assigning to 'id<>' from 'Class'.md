Incompatible pointer types assigning to 'id<>' from 'Class'

**自定义的Utility类**
- Utility.h：

```
@interface Utility : NSObject <AVAudioPlayerDelegate>

+ (void)playAudioFromFileName:(NSString *)name ofType:(NSString *)type withPlayerFinishCallback:(SEL)callback onObject:(id)callbackObject;
@end
```
- Utility.m：

```
@implementation Utility

static AVAudioPlayer *audioPlayer;

+ (void)playAudioFromFileName:(NSString *)name ofType:(NSString *)type withPlayerFinishCallback:(SEL)callback onObject:(id)callbackObject 
{
   audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:[self getResourceURLForName:name ofType:type] error:nil];
   audioPlayer.delegate = self; //这行会产生警告:warning:️:warning:️

}
```
## 警告：
```
Incompatible pointer types assigning to 'id<AVAudioPlayerDelegate>' from 'Class'
```


## 分析：
所声明的方法作为该类的类方法，并且想让这个类的对象 **使用代理，却不能添加协议类对象。**



## 解决：
需要更改`[playAudioFromFileName: ofType: withPlayerFinishCallback: onObject: ]`为实例(对象)方法，并创建一个该类的实例方法作为代理。
也许你想要一个实用共享于所有调用者的实例，可使用单例模式。



## 单例类解决：
- Utility.h：

```
@interface Utility : NSObject <AVAudioPlayerDelegate>
+ (Utility *)sharedUtility;

- (void)playAudioFromFileName:(NSString *)name ofType:(NSString *)type withPlayerFinishCallback:(SEL)callback onObject:(id)callbackObject;
@end
```
- Utility.m：

```
@implementation Utility

+ (Utility *)sharedUtility
{
    static Utility *theUtility;
    @synchronized(self) {
    if (!theUtility)
       theUtility = [[self alloc] init];
    }
    return theUtility;
}

// 对象(减号)方法
- (void)playAudioFromFileName:(NSString *)name ofType:(NSString *)type withPlayerFinishCallback:(SEL)callback onObject:(id)callbackObject
{
    audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL: [self getResourceURLForName:name ofType:type] error: nil];
    audioPlayer.delegate = self;
}

@end
```

## 最终：使用单例类来调用方法
```
[[Utility sharedUtility] playAudioFromFileName:@"Free Loop" ofType:"mp3" \
withPlayerFinishCallback:@selector(doneFinishNotice:) onObject:daniel];
```

作者：goyohol
链接：https://www.jianshu.com/p/9abf0d438245
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
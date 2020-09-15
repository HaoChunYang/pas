# iOS 读取.json文件内容

测试时候，模拟网络请求将json格式的数据写在文件里。可以使用这种方式进行读取。

``` swift
    NSString *mainBundleDirectory=[[NSBundle mainBundle] bundlePath];
    NSString *path=[mainBundleDirectory stringByAppendingPathComponent:@".json文件名"];
    NSURL *url=[NSURL fileURLWithPath:path];
    NSData *data = [[NSData alloc] initWithContentsOfURL:url];
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:nil];
    NSLog(@"%@",dic);
```

## 读写json文件主要API
处理json数据主要是用了`NSJSONSerialization`这个类，这个类主要有下列三个API：

```swift
//判断传入的对象是否可以转化为json数据，如果可以，返回YES，否则返回NO。
+ (BOOL)isValidJSONObject:(id)obj;

//传入一个json数据，返回一个foundation对象
+ (id)JSONObjectWithData:(NSData *)data options:(NSJSONReadingOptions)opt error:(NSError * _Nullable *)error;

//传入foundation对象，转化为json数据
+ (NSData *)dataWithJSONObject:(id)obj options:(NSJSONWritingOptions)opt error:(NSError * _Nullable *)error;
```

*eg.*

``` swift
    NSDictionary * dic = @{@"aV":@"aK", @"bV":@"bK", @"cV":@"cK"};
    
    //首先判断能否转化为一个json数据，如果能，接下来先把foundation对象转化为NSData类型，然后写入文件
    if ([NSJSONSerialization isValidJSONObject:dic]) {
        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:dic options:1 error:nil];
        [jsonData writeToFile:jsonPath atomically:YES];
    }
      
    //在读取的时候首先去文件中读取为NSData类对象，然后通过NSJSONSerialization类将其转化为foundation对象
    NSData *jsonData = [[NSFileManager defaultManager] contentsAtPath:jsonPath];
    NSArray *jsonDic = [NSJSONSerialization JSONObjectWithData:jsonData options:1 error:nil];
```
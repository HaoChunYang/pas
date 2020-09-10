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
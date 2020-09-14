# iOS获取版本号等APP信息

## 当前app的信息

``` swift
NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];

// 当前应用名称
NSString *appCurName = [infoDictionary objectForKey:@"CFBundleDisplayName"];

NSLog(@"当前应用名称：%@",appCurName);

// 当前应用软件版本  比如：1.0.1
NSString *appCurVersion = [infoDictionary objectForKey:@"CFBundleShortVersionString"];

NSLog(@"当前应用软件版本:%@",appCurVersion);

// 当前应用版本号码   app build版本
NSString *appCurVersionNum = [infoDictionary objectForKey:@"CFBundleVersion"];
NSLog(@"当前应用版本号码：%@",appCurVersionNum);

```

## 一些用户设备信息

```swift

//手机别名： 用户定义的名称
NSString* userPhoneName = [[UIDevice currentDevice] name];  
NSLog(@"手机别名: %@", userPhoneName);

//设备名称
NSString* deviceName = [[UIDevice currentDevice] systemName];  
NSLog(@"设备名称: %@",deviceName );

//手机系统版本
NSString* phoneVersion = [[UIDevice currentDevice] systemVersion];  
NSLog(@"手机系统版本: %@", phoneVersion);

//手机型号
NSString* phoneModel = [[UIDevice currentDevice] model];  
NSLog(@"手机型号: %@",phoneModel );

//地方型号  （国际化区域名称）
NSString* localPhoneModel = [[UIDevice currentDevice] localizedModel];
NSLog(@"国际化区域名称: %@",localPhoneModel );
```


## 获取APPStore里面的版本号, 可以与本地的版本号作比较,判断是否有新版本更新......

**可以改为`post`请求，解决发布新版本后没有及时获取最新版本的缓存问题。**
```swift
NSString *urlString=@"http://itunes.apple.com/lookup?id=xxxxxxxxxx"; //自己应用在App Store里的地址

NSURL *url = [NSURL URLWithString:urlString];//这个URL地址是该app在iTunes connect里面的相关配置信息。其中id是该app在app store唯一的ID编号。

NSString *jsonResponseString = [NSString stringWithContentsOfURL:url encoding:NSUTF8StringEncoding error:nil];

NSData *data = [jsonResponseString dataUsingEncoding:NSUTF8StringEncoding];

//    解析json数据

id json = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:nil];

NSArray *array = json[@"results"];

for (NSDictionary *dic in array) {

   NSString *  newVersion = [dic valueForKey:@"version"]; // appStore 的版本号

}
```

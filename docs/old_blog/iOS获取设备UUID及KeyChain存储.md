## iOS获取设备UUID

UUID每次获取的值都是不一样的。
```
+ (NSString *)getUUID{
    CFUUIDRef puuid = CFUUIDCreate(nil);
    CFStringRef uuidString = CFUUIDCreateString(nil, puuid);
    NSString *result = (NSString *)CFBridgingRelease(CFStringCreateCopy(NULL, uuidString));
    NSMutableString *tmpResult = result.mutableCopy;
    // 去除“-”
    NSRange range = [tmpResult rangeOfString:@"-"];
    while (range.location != NSNotFound) {
        [tmpResult deleteCharactersInRange:range];
        range = [tmpResult rangeOfString:@"-"];
    }
    NSLog(@"UUID:%@",tmpResult);
    return tmpResult;
}
```

## KeyChain
简介：iOS整个系统有一个`KeyChain`，每个程序都可以往`KeyChain`中记录数据，而且只能读取到自己程序记录在`KeyChain`中的数据。而且就算我们程序删除掉，系统经过升级以后再安装回来，依旧可以获取到与之前一致的`UUID`（系统还原、刷机除外）。因此我们可以将`UUID`的字符串存储到`KeyChain`中，然后下次直接从`KeyChain`获取`UUID`字符串。（本示例中使用`KeychainItemWrapper`工具类）

- 获取

```
+ (NSString *)UUID {
    KeychainItemWrapper *keyChainWrapper = [[KeychainItemWrapper alloc] initWithIdentifier:@"MYAppID" accessGroup:@"com.test.app"];
    NSString *UUID = [keyChainWrapper objectForKey:(__bridge id)kSecValueData];

    if (UUID == nil || UUID.length == 0) {
        UUID = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
        [keyChainWrapper setObject:UUID forKey:(__bridge id)kSecValueData];
    }

    return UUID;
}
```
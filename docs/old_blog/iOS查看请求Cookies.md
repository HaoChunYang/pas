```

- (void)readerCookies {
    //cookies获取
    NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];
    NSArray *cookieArr = [cookieJar cookies];
    for(NSHTTPCookie *cookie in cookieArr) {
        NSLog(@"cookie －> %@", cookie);
        if ([cookie.name isEqualToString:@"access_token"]) {
            //存储cookies
            //            [MyDataSaveHelper setAccessToken:cookie.value];
        }
        //存储之后删除cookies
        //        [cookieJar deleteCookie:cookie];
    }
}

```
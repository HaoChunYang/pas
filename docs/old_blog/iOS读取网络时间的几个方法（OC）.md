实现iOS读取网络时间的方法，实现时收集到几个写法。可以使用，记录一下。

# 一
```Objectve-C
- (NSDate *)getInternetDate
{
    NSString *urlString = @"https://m.baidu.com";
    urlString = [urlString stringByAddingPercentEscapesUsingEncoding: NSUTF8StringEncoding];
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
    [request setURL:[NSURL URLWithString: urlString]];
    [request setCachePolicy:NSURLRequestReloadIgnoringCacheData];
    [request setTimeoutInterval: 2];
    [request setHTTPShouldHandleCookies:FALSE];
    [request setHTTPMethod:@"GET"];
    NSHTTPURLResponse *response;
    [NSURLConnection sendSynchronousRequest:request returningResponse:&response error:nil];
    
    NSString *date = [[response allHeaderFields] objectForKey:@"Date"];
    date = [date substringFromIndex:5];
    date = [date substringToIndex:[date length]-4];
    NSDateFormatter *dMatter = [[NSDateFormatter alloc] init];
    dMatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
    [dMatter setDateFormat:@"dd MMM yyyy HH:mm:ss"];
    NSDate *netDate = [[dMatter dateFromString:date] dateByAddingTimeInterval:60*60*8];
    NSTimeZone *zone = [NSTimeZone systemTimeZone];
    NSInteger interval = [zone secondsFromGMTForDate: netDate];
    NSDate *localeDate = [netDate  dateByAddingTimeInterval: interval];
    return localeDate;
}
```

# 二
```Objectve-C
- (NSString *)getInternetDateString
{
    //NSString *urlString = @"https://www.baidu.com";
    NSString *urlString = @"http://www.beijing-time.org/time.asp";
    urlString = [urlString stringByAddingPercentEscapesUsingEncoding: NSUTF8StringEncoding];
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
    [request setURL:[NSURL URLWithString: urlString]];
    [request setCachePolicy:NSURLRequestReloadIgnoringCacheData];
    [request setTimeoutInterval: 2];
    [request setHTTPShouldHandleCookies:FALSE];
    [request setHTTPMethod:@"GET"];
    NSHTTPURLResponse *response;
    [NSURLConnection sendSynchronousRequest:request returningResponse:&response error:nil];
    //NSLog(@">>>>> response :%@",response);
    NSString *date = [[response allHeaderFields] objectForKey:@"Date"];
    
    //NSLog(@">>>>> date :%@",date);
    date = [date substringFromIndex:5];
    date = [date substringToIndex:[date length]-4];
    //NSLog(@">>>>> date :%@",date);
    NSDateFormatter *dMatter = [[NSDateFormatter alloc] init];
    dMatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US"];
    //    dMatter.locale = [[NSLocale alloc] initWithLocaleIdentifier:@"zh-CHS"];
    [dMatter setDateFormat:@"dd MMM yyyy HH:mm:ss"];
    NSDate *netDate = [[dMatter dateFromString:date] dateByAddingTimeInterval:60*60*8];
    NSTimeZone *zone = [NSTimeZone systemTimeZone];
    NSInteger interval = [zone secondsFromGMTForDate: netDate];
    NSDate *localeDate = [netDate  dateByAddingTimeInterval: interval];
    //NSLog(@">>>>> localeDate :%@",localeDate);
    NSString *tmpDate = [NSString stringWithFormat:@"%@",localeDate];
    tmpDate = [tmpDate stringByReplacingOccurrencesOfString:@" +0000" withString:@""];
    //NSLog(@">>>>> localeDate :%@",tmpDate);
    
    NSDateFormatter *format1=[[NSDateFormatter alloc]init];
    [format1 setDateFormat:@"yyyy/MM/dd HH:mm:ss"];
    NSDate *nowDate = [format1 dateFromString:tmpDate];
    NSString *nowDate_ = [format1 stringFromDate:nowDate];
    return nowDate_;
}
```

# 三

```Objectve-C
- (void)getInternetDateWithSuccess:(void(^)(NSDate * date))success
                           failure:(void(^)(NSError *error))failure{
    
    //1.创建URL
    NSString *urlString = @"https://m.baidu.com";
    urlString = [urlString stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]];
    
    //2.创建request请求对象
    NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
    [request setURL:[NSURL URLWithString: urlString]];
    [request setCachePolicy:NSURLRequestReloadIgnoringCacheData];
    [request setTimeoutInterval:5];
    [request setHTTPShouldHandleCookies:FALSE];
    [request setHTTPMethod:@"GET"];
    
    //3.创建URLSession对象
    NSURLSession *session = [NSURLSession sharedSession];
    
    //4.设置数据返回回调的block
    NSURLSessionDataTask *task = [session dataTaskWithRequest:request completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
        if (error == nil && response != nil) {
            //这么做的原因是简体中文下的手机不能识别“MMM”，只能识别“MM”
            NSArray *monthEnglishArray = @[@"Jan",@"Feb",@"Mar",@"Apr",@"May",@"Jun",@"Jul",@"Aug",@"Sept",@"Sep",@"Oct",@"Nov",@"Dec"];
            NSArray *monthNumArray = @[@"01",@"02",@"03",@"04",@"05",@"06",@"07",@"08",@"09",@"09",@"10",@"11",@"12"];
            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *)response;
            NSDictionary *allHeaderFields = [httpResponse allHeaderFields];
            NSString *dateStr = [allHeaderFields objectForKey:@"Date"];
            dateStr = [dateStr substringFromIndex:5];
            dateStr = [dateStr substringToIndex:[dateStr length]-4];
            dateStr = [dateStr stringByAppendingString:@" +0000"];
            //当前语言是中文的话，识别不了英文缩写
            for (NSInteger i = 0 ; i < monthEnglishArray.count ; i++) {
                NSString *monthEngStr = monthEnglishArray[i];
                NSString *monthNumStr = monthNumArray[i];
                dateStr = [dateStr stringByReplacingOccurrencesOfString:monthEngStr withString:monthNumStr];
            }
            NSDateFormatter *dMatter = [[NSDateFormatter alloc] init];
            [dMatter setDateFormat:@"dd MM yyyy HH:mm:ss Z"];
            NSDate *netDate = [dMatter dateFromString:dateStr];
            NSTimeInterval timeInterval = [netDate timeIntervalSince1970];
            dispatch_async(dispatch_get_main_queue(), ^{
                success(netDate);
            });
        }else{
            dispatch_async(dispatch_get_main_queue(), ^{
                failure(error);
            });
        }
    }];
    //5、执行网络请求
    [task resume];
    
}
```
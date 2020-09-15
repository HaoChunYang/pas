[[TOC]]


# iOS plist文件读写操作，写入、修改、删除


## plist 读取数据
```swift
#pragma mark - plist 读取数据
-(NSArray *)historicalRecordReadTheData{
    NSString * filePath = [[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) firstObject] stringByAppendingPathComponent:@"historicalRecord.plist"];
    //是数组就用数组来获取数据，是字典就用字典来获取数据
    NSMutableArray * historicalRecordArr = [[NSMutableArray alloc] initWithContentsOfFile:filePath];
    return historicalRecordArr;
}
```

## plist 添加数据
```swift
#pragma mark - plist 添加数据
-(void)historicalRecordAddData:(NSString *)string{
    NSString * filePath = [[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) firstObject] stringByAppendingPathComponent:@"historicalRecord.plist"];
    NSMutableArray * historicalRecordArr = [[NSMutableArray alloc] initWithContentsOfFile:filePath];
    if (!historicalRecordArr) {
        historicalRecordArr = [[NSMutableArray alloc]init];
    }
    if(![historicalRecordArr containsObject:string]){
        [historicalRecordArr addObject:string];
    }
    BOOL success = [historicalRecordArr writeToFile:filePath atomically:YES];
    if (success) {
        NSLog(@"写入成功");
    }else{
        NSLog(@"写入失败");
    }
}
```

## plist 删除所有数据
```swift
#pragma mark - plist 删除所有数据
-(void)historicalRecordstring{
    NSString * filePath = [[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) firstObject] stringByAppendingPathComponent:@"historicalRecord.plist"];
    NSMutableArray * historicalRecordArr = [[NSMutableArray alloc] initWithContentsOfFile:filePath];
    [historicalRecordArr removeAllObjects];
    [historicalRecordArr writeToFile:filePath atomically:YES];
}
```

## plist 删除文件
```swift
#pragma mark - plist 删除文件
- (void)removeLocalPlist {
    //清除plist文件
    NSFileManager *fileMger = [NSFileManager defaultManager];
    NSString *filePath = [[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)objectAtIndex:0]stringByAppendingPathComponent:@"local.plist"];
    //如果文件路径存在的话
    BOOL bRet = [fileMger fileExistsAtPath:filePath];
    if (bRet) {
        NSError *err;
        [fileMger removeItemAtPath:filePath error:&err];
    }
}
```

---
**相关文章**
- [iOS沙盒路径获取整理](./../iOS沙盒路径获取整理)
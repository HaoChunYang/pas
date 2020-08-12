```
    NSDictionary *dictM = @{@"1":@"one",@"2":@"two",@"3":@"three"};
    [dictM enumerateKeysAndObjectsUsingBlock:^(NSString * _Nonnull key, NSString * _Nonnull obj, BOOL * _Nonnull stop) {
        NSLog(@"%@:%@",key,obj);
//        *stop = YES;
    }];
```
**说明当stop为yes时，就会停止遍历.**
所以我们可以在块中加入条件（即当某种条件下去停止遍历）。

   ## 基于`enumerateKeysAndObjectsUsingBlock`的遍历方式
```
	//////////处理数组//////////
    NSArray *arrayM = @[@"1",@"2",@"3",@"4"];
    [arrayM enumerateObjectsUsingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSLog(@"%zd--%@",idx,obj);
    }];
    
    //////////处理字典//////////
    NSDictionary *dictM = @{@"1":@"one",@"2":@"two",@"3":@"three"};
    [dictM enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, id  _Nonnull obj, BOOL * _Nonnull stop) {
        NSLog(@"%@:%@",key,obj);
    }];
    
    //////////处理集合//////////
    NSSet * setM = [[NSSet alloc] initWithObjects:@"one",@"two",@"three",@"four", nil];
    [setM enumerateObjectsUsingBlock:^(id  _Nonnull obj, BOOL * _Nonnull stop) {
        NSLog(@"%@",obj);
    }];
    
    //////////反向遍历----降序遍历----以数组为例
    NSArray *arrayM2 = @[@"1",@"2",@"3",@"4"];
    [arrayM2 enumerateObjectsWithOptions:NSEnumerationReverse usingBlock:^(id  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSLog(@"%zd--%@",idx,obj);
    }];

```
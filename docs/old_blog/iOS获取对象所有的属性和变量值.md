## 获得所有属性

```
- (NSArray *)getAllProperty:(id)object
{
    NSMutableArray *array = [NSMutableArray array];
    
    unsigned int count;
    objc_property_t *propertys = class_copyPropertyList([object class], &count);
    for (int i = 0; i < count; i++) {
        objc_property_t property = propertys[i];
        const char *nameChar = property_getName(property);
        NSString *nameStr = [NSString stringWithCString:nameChar encoding:NSUTF8StringEncoding];
        [array addObject:nameStr];
    }
    return [array copy];
}
```

## 获得所有变量
```Objective-C
- (NSArray *)getAllIvar:(id)object
{
    NSMutableArray *array = [NSMutableArray array];
    
    unsigned int count;
    Ivar *ivars = class_copyIvarList([object class], &count);
    for (int i = 0; i < count; i++) {
        Ivar ivar = ivars[i];
        const char *keyChar = ivar_getName(ivar);
        NSString *keyStr = [NSString stringWithCString:keyChar encoding:NSUTF8StringEncoding];
        @try {
            id valueStr = [object valueForKey:keyStr];
            NSDictionary *dic = nil;
            if (valueStr) {
                dic = @{keyStr : valueStr};
            } else {
                dic = @{keyStr : @"值为nil"};
            }
            [array addObject:dic];
        }
        @catch (NSException *exception) {}
    }
    return [array copy];
}
```

## 获取对象中属性的类型

```shell
/**
  * 返回对象中属性的类型
  * @return NSString 返回属性的类型
 **/
+ (NSString*)checkPropertyName:(id) obj propertyName:(NSString *)name {
    NSString* propertyType;

    unsigned int propertyCount;
    objc_property_t* properties = class_copyPropertyList([obj class], &propertyCount);
    for(int i=0;i<propertyCount;i++){
        objc_property_t property = properties[i];
        //属性名称
        const char* propertyName = property_getName(property);
        NSString* propertyNameStr = [NSString stringWithUTF8String:propertyName];

        //属性对应的类型名字
        char* typeEncoding = property_copyAttributeValue(property,"T");
        NSString* typeEncodingStr = [NSString stringWithUTF8String:typeEncoding];
        typeEncodingStr = [typeEncodingStr stringByReplacingOccurrencesOfString:@"@" withString:@""];
        typeEncodingStr = [typeEncodingStr stringByReplacingOccurrencesOfString:@"\\" withString:@""];//此处替换\\

        if ([name isEqualToString:propertyNameStr]) {
            propertyType = typeEncodingStr;
            break;
        }
    }
    free(properties);

    return propertyType;
}
```
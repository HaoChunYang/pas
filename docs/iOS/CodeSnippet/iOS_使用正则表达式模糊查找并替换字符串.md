# iOS_使用正则表达式模糊查找并替换字符串

```swift
- (NSString *)replaceImageHtml:(NSString *)oldHtml {
    NSString *regex = @"(<img.*?/>)";
    NSRange r;
    NSMutableString *newHtml = [NSMutableString stringWithString:oldHtml];
     
    BOOL flag = false;
     
    while (flag == false) {
        
        //通过正则匹配查找
        r = [newHtml rangeOfString:regex options:NSRegularExpressionSearch];
        if (r.location != NSNotFound) {
            [newHtml replaceCharactersInRange:r withString:@""];
        } else {
            flag = true;
        }
         
    };
    return newHtml;
}
```

查找带有 `img` 的标签。 `*` 通配符。匹配到的字符为`<img`开头，`/>`结尾的所有字串。
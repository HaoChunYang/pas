# iOS对url包含的中文进行转码

## Problem 

ios中打开url包含中文时不会自动转码，并且打不开页面。

## Analysis

ios中打开url包含中文时不会自动转码。
在`webview`中加载时，需要行进行转码。

## Solution

1. 如果知道中文没有转码时，可以使用以下方式。

``` swift
// 对url中的中文进行转码（如果已知url中的中文没有进行utf-8转码）
url = [url stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]];
```

2. 如果url所包含中文已经转码，也可能没有转码，需要仅对其中的中文部分进行转码。

``` swift
NSLog(@"原url:%@", url);
NSString *encodedString = (NSString *)
CFBridgingRelease(CFURLCreateStringByAddingPercentEscape(kCFAllocatorDefault,
                                                          
        (CFStringRef)url,
                                                          
        (CFStringRef)@"!$&'()*+,-./:;=?@_~%#[]",
                                                          
        NULL,
                                                          
        kCFStringEncodingUTF8));

NSLog(@"转码url:%@",  encodedString);
```
# UIColor分类实现十六进制颜色值转换

## `.h文件`

```swift
#import <UIKit/UIKit.h>

@interface UIColor (Hex)
/**
 @param hexString   NSString e.g:@"0xFFFFFF"
 @param alpha  alhpa
 */
+ (instancetype)colorWithHexString:(NSString *)hexString alpha:(CGFloat)alpha;
+ (instancetype)colorWithHexString:(NSString *)hexString;

@end
```

## `.m文件`

```swift
#import "UIColor+Hex.h"

@implementation UIColor (Hex)

+ (instancetype)colorWithHex:(int)hexNumber alpha:(CGFloat)alpha{
    
    if (hexNumber > 0xFFFFFF) return nil;
    
    CGFloat red   = ((hexNumber >> 16) & 0xFF) / 255.0;
    CGFloat green = ((hexNumber >> 8) & 0xFF) / 255.0;
    CGFloat blue  = (hexNumber & 0xFF) / 255.0;
    
    UIColor *color = [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
    
    return color;
    
}

+ (instancetype)colorWithHexString:(NSString *)hexString alpha:(CGFloat)alpha{
    
    hexString = [[hexString stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]] uppercaseString];
    
    UIColor *defaultColor = [UIColor clearColor];
    
    if (hexString.length < 6) return defaultColor;
    if ([hexString hasPrefix:@"#"]) hexString = [hexString substringFromIndex:1];
    if ([hexString hasPrefix:@"0X"]) hexString = [hexString substringFromIndex:2];
    if (hexString.length != 6) return defaultColor;
    
    //方法1
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    unsigned int hexNumber;
    if (![scanner scanHexInt:&hexNumber]) return defaultColor;
    
    //方法2
    const char *char_str = [hexString cStringUsingEncoding:NSASCIIStringEncoding];
    int hexNum;
    sscanf(char_str, "%x", &hexNum);
    
    return [UIColor colorWithHex:hexNumber alpha:alpha];
}

+ (instancetype)colorWithHexString:(NSString *)hexString{
    return [UIColor colorWithHexString:hexString alpha:1.0f];
}
```

`方法1` 是苹果官方提供的类，功能和 `方法2` 类似，选一种即可。
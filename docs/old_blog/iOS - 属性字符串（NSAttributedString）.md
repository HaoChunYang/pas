## NSAttributedString使用

NSAttributedString是一个带有属性的字符串，通过该类可以灵活地操作和呈现多种样式的文字数据。这个类的一个最简单的概括就是NSAttributedString管理一个字符串，以及与该字符串中的单个字符或某些范围的字符串相关的属性,具体实现时，NSAttributedString维护了一个NSString，用来保存最原始的字符串，另有一个NSDictionary用来保存各个子串/字符的属性。

## NSAttributedString
```
@interface NSAttributedString : NSObject <NSCopying, NSMutableCopying, NSSecureCoding>

@property (readonly, copy) NSString *string;
- (instancetype)initWithString:(NSString *)str;
- (instancetype)initWithString:(NSString *)str attributes:(nullable NSDictionary<NSAttributedStringKey, id> *)attrs;
- (instancetype)initWithAttributedString:(NSAttributedString *)attrStr;
```
## NSMutableAttributedString
```
@interface NSMutableAttributedString : NSAttributedString
 
//使用字符串替换某一范围的字符
- (void)replaceCharactersInRange:(NSRange)range withString:(NSString *)str;
//为某一范围内的文字设置多个属性
- (void)setAttributes:( NSDictionary *)attrs range:(NSRange)range;
 
@end
```

```
@interface NSMutableAttributedString (NSExtendedMutableAttributedString)

@property (readonly, retain) NSMutableString *mutableString;
 
//为某一范围内的文字添加某个属性
- (void)addAttribute:(NSString *)name value:(id)value range:(NSRange)range;
//为某一范围内的文字添加多个属性
- (void)addAttributes:(NSDictionary *)attrs range:(NSRange)range;
//移除某一范围内的某个属性
- (void)removeAttribute:(NSString *)name range:(NSRange)range;
//设置属性字符串替换某一范围内的字符
- (void)replaceCharactersInRange:(NSRange)range withAttributedString:(NSAttributedString *)attrString;
//在某个位置插入属性字符串
- (void)insertAttributedString:(NSAttributedString *)attrString atIndex:(NSUInteger)loc;
//拼接一个属性字符串
- (void)appendAttributedString:(NSAttributedString *)attrString;
//删除某一范围内的字符
- (void)deleteCharactersInRange:(NSRange)range;
//设置属性字符串
- (void)setAttributedString:(NSAttributedString *)attrString;
 
//用于编辑属性字符串. 在修改文字属性的开头和结尾要分别调用beginEditing和endEditing方法，这些方法可以在文字属性发生变化时发送消息给事件监听者。
- (void)beginEditing;
- (void)endEditing;
 
@end
```

## 常用属性Key
```
//设置字体, 该属性所对应的值是一个 UIFont 对象。该属性用于改变一段文本的字体。如果不指定该属性，则默认为12-point Helvetica(Neue)。
UIKIT_EXTERN NSString * const NSFontAttributeName NS_AVAILABLE(10_0, 6_0);
 
//设置段落样式,该属性所对应的值是一个 NSParagraphStyle 对象。该属性在一段文本上应用多个属性。如果不指定该属性，则默认为 NSParagraphStyle 的defaultParagraphStyle 方法返回的默认段落属性。
UIKIT_EXTERN NSString * const NSParagraphStyleAttributeName NS_AVAILABLE(10_0, 6_0);
 
//设置文字颜色,该属性所对应的值是一个 UIColor 对象。该属性用于指定一段文本的字体颜色。如果不指定该属性，则默认为黑色。
UIKIT_EXTERN NSString * const NSForegroundColorAttributeName NS_AVAILABLE(10_0, 6_0);
 
//设置背景颜色,该属性所对应的值是一个 UIColor 对象。该属性用于指定一段文本的背景颜色。如果不指定该属性，则默认无背景色。
UIKIT_EXTERN NSString * const NSBackgroundColorAttributeName NS_AVAILABLE(10_0, 6_0);
 
//设置连体属性，取值为NSNumber 对象(整数)，0 表示没有连体字符，1 表示使用默认的连体字符（注意，iOS 不支持值为 2）。
UIKIT_EXTERN NSString * const NSLigatureAttributeName NS_AVAILABLE(10_0, 6_0);
 
//设定字符间距.该属性所对应的值是一个NSNumber对象(整数)。字母紧排指定了用于调整字距的像素点数。字母紧排的效果依赖于字体。值为0表示不使用字母紧排。默认值为0。
UIKIT_EXTERN NSString * const NSKernAttributeName NS_AVAILABLE(10_0, 6_0);
 
//设置删除线
UIKIT_EXTERN NSString * const NSStrikethroughStyleAttributeName NS_AVAILABLE(10_0, 6_0);
 
//下划线样式,该属性所对应的值是一个 NSNumber 对象(整数)。该值指定是否在文字上加上下划线，该值参考“Underline Style Attributes”。默认值是NSUnderlineStyleNone。
UIKIT_EXTERN NSString * const NSUnderlineStyleAttributeName NS_AVAILABLE(10_0, 6_0);
 
//边线颜色, 该属性所对应的值是一个 UIColor 对象。如果该属性不指定（默认），则等同于 NSForegroundColorAttributeName。否则，指定为删除线或下划线颜色。更多细节见“Drawing attributedstrings that are both filled and stroked”。
UIKIT_EXTERN NSString * const NSStrokeColorAttributeName NS_AVAILABLE(10_0, 6_0);
 
//边线宽度,该属性所对应的值是一个 NSNumber 对象(小数)。该值改变描边宽度（相对于字体size 的百分比）。默认为 0，即不改变。正数只改变描边宽度。负数同时改变文字的描边和填充宽度。例如，对于常见的空心字，这个值通常为3.0。
UIKIT_EXTERN NSString * const NSStrokeWidthAttributeName NS_AVAILABLE(10_0, 6_0);
 
//阴影属性该属性所对应的值是一个 NSShadow 对象。默认为 nil。
UIKIT_EXTERN NSString * const NSShadowAttributeName NS_AVAILABLE(10_0, 6_0);
 
//文本特殊效果
UIKIT_EXTERN NSString *const NSTextEffectAttributeName NS_AVAILABLE(10_10, 7_0);
 
//文本附件,取值为NSTextAttachment对象,常用于文字图片混排
UIKIT_EXTERN NSString * const NSAttachmentAttributeName NS_AVAILABLE(10_0, 7_0);
 
//设置链接属性，点击后调用浏览器打开指定URL地址
UIKIT_EXTERN NSString * const NSLinkAttributeName NS_AVAILABLE(10_0, 7_0);
 
//设置基线偏移值，取值为 NSNumber （float）,正值上偏，负值下偏
UIKIT_EXTERN NSString * const NSBaselineOffsetAttributeName NS_AVAILABLE(10_0, 7_0);
 
//设置下划线颜色
UIKIT_EXTERN NSString * const NSUnderlineColorAttributeName NS_AVAILABLE(10_0, 7_0);
 
//设置删除线颜色，取值为 UIColor 对象，默认值为黑色
UIKIT_EXTERN NSString * const NSStrikethroughColorAttributeName NS_AVAILABLE(10_0, 7_0);
 
// 设置字形倾斜度，取值为 NSNumber （float）,正值右倾，负值左倾
UIKIT_EXTERN NSString * const NSObliquenessAttributeName NS_AVAILABLE(10_0, 7_0);
 
// 设置文本横向拉伸属性，取值为 NSNumber （float）,正值横向拉伸文本，负值横向压缩文本
UIKIT_EXTERN NSString * const NSExpansionAttributeName NS_AVAILABLE(10_0, 7_0);
 
// 设置文字书写方向，从左向右书写或者从右向左书写
UIKIT_EXTERN NSString * const NSWritingDirectionAttributeName NS_AVAILABLE(10_6, 7_0);
 
// 设置文字排版方向，取值为 NSNumber 对象(整数)，0 表示横排文本，1 表示竖排文本
UIKIT_EXTERN NSString * const NSVerticalGlyphFormAttributeName NS_AVAILABLE(10_7, 6_0);
```
## NSUnderlineStyle
```
//  下面定义了下划线、删除线支持的样式
typedef NS_ENUM(NSInteger, NSUnderlineStyle) {
    NSUnderlineStyleNone                                    = 0x00,// 不设置下划线
    NSUnderlineStyleSingle                                  = 0x01,// 设置删除线为细单实线
    NSUnderlineStyleThick NS_ENUM_AVAILABLE(10_0, 7_0)      = 0x02, // 设置删除线为粗单实线
    NSUnderlineStyleDouble NS_ENUM_AVAILABLE(10_0, 7_0)     = 0x09,// 设置删除线为细双实线
    
    NSUnderlinePatternSolid NS_ENUM_AVAILABLE(10_0, 7_0)      = 0x0000, // 实线
    NSUnderlinePatternDot NS_ENUM_AVAILABLE(10_0, 7_0)        = 0x0100, // 点线
    NSUnderlinePatternDash NS_ENUM_AVAILABLE(10_0, 7_0)       = 0x0200,  // 虚线
    NSUnderlinePatternDashDot NS_ENUM_AVAILABLE(10_0, 7_0)    = 0x0300,
    NSUnderlinePatternDashDotDot NS_ENUM_AVAILABLE(10_0, 7_0) = 0x0400,
    
    NSUnderlineByWord NS_ENUM_AVAILABLE(10_0, 7_0)            = 0x8000
} NS_ENUM_AVAILABLE(10_0, 6_0);
 
typedef NS_ENUM(NSInteger, NSWritingDirectionFormatType) {
    NSWritingDirectionEmbedding     = (0 << 1),
    NSWritingDirectionOverride      = (1 << 1)
} NS_ENUM_AVAILABLE(10_11, 9_0);
 
// NSTextEffectAttributeName values
UIKIT_EXTERN NSString *const NSTextEffectLetterpressStyle NS_AVAILABLE(10_10, 7_0);
```

## 常用的一些场景

## 处理简单的字符串，设置段落，字体，颜色
```
func handleParagraphStyle(){
    let string = "天道酬勤,持之以恒！天道酬勤,持之以恒天道酬勤,持之以恒天道酬勤,持之以恒天道酬勤,持之以恒天道酬勤,持之以恒,Cheer up!"
    //创建可变属性字符串
    let mutablaAttributedString = NSMutableAttributedString(string: string)

    let style = NSMutableParagraphStyle()
    style.lineSpacing = 10.0
    style.paragraphSpacing = 20.0
    //设置段落
    mutablaAttributedString.addAttribute(NSParagraphStyleAttributeName, value: style, range: NSMakeRange(0, string.characters.count))
    //设置字体
    mutablaAttributedString.addAttribute(NSFontAttributeName, value:UIFont.systemFont(ofSize: 20.0) , range: NSMakeRange(0, 10))
    //设置颜色
    mutablaAttributedString.addAttribute(NSForegroundColorAttributeName, value: UIColor.red, range: NSMakeRange(0, 10))

    let label = UILabel(frame: CGRect(x: 50, y: 150, width:300, height: 400))
    //设置段落样式的时候，numberOfLines必须为0
    label.numberOfLines = 0
    label.attributedText = mutablaAttributedString
    view.addSubview(label)
}
```

## 如何在Label中显示图片和文字
```
//如何在Label中显示图片和文字
-(void)showImageWithAttributedString{
    
    //创建一个可变属性字符串
    NSMutableAttributedString *mutableAttribuedString=[[NSMutableAttributedString alloc]initWithString:@"Jack keep forward! You are the best! Cheer up! Man!"];
    
    //设置颜色和大小
    [mutableAttribuedString addAttribute:NSForegroundColorAttributeName value:[UIColor redColor] range:NSMakeRange(5,11)];
    [mutableAttribuedString addAttribute:NSFontAttributeName value:[UIFont boldSystemFontOfSize:20.0] range:NSMakeRange(5,11)];
    
    //创建NSTextAttachment对象,并设置图片
    NSTextAttachment *attachment=[[NSTextAttachment alloc]init];
    attachment.image=[UIImage imageNamed:@"ptjShare"];
    
    //设置图片
    [mutableAttribuedString replaceCharactersInRange:NSMakeRange(13,4) withAttributedString:[NSAttributedString attributedStringWithAttachment:attachment]];
    
    //赋值给Label
    self.imageLabel.attributedText= mutableAttribuedString;
}
```

## 加载HTML标签文本
因为解析的数据里面有html标签，就使用下面的代码把字符串转换成data进行初始化。
```
NSMutableAttributedString * attrStr = [[NSMutableAttributedString alloc] initWithData: [str dataUsingEncoding:NSUnicodeStringEncoding]
                                                                              options:@{ NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType }
                                                                   documentAttributes:nil
                                                                                error:nil];
```

比如：加载本地html文件
```
NSURL *htmlString = [[NSBundle mainBundle]  URLForResource: @"string"  withExtension:@"html"];
NSAttributedString *stringWithHTMLAttributes = [[NSAttributedString alloc] initWithFileURL:htmlString
                                                                                       options:@{NSDocumentTypeDocumentAttribute:NSHTMLTextDocumentType}
                                                                            documentAttributes:nil
                                                                                         error:nil];
textView.attributedText = stringWithHTMLAttributes;// you can use a label also
```
## 简单的html文件
```
<html>
  <head>
    <style type="text/css">
      body {
        font-size: 15px;
        font-family: Avenir, Arial, sans-serif;
      }
      .red {
        color: red;
      }
      .green {
        color: green;
      }
      .blue {
        color: blue;
      }
    </style>
  </head>
  <body>
    <span class="red">first</span><span class="green">second</span><span class="blue">third</span>
  </body>
</html>  
```

## 使用正则表达式查找字符并设置样式
```
NSMutableAttributedString *goodText = [[NSMutableAttributedString alloc] initWithString:articleText];

NSRange range = [articleText rangeOfString:@"\\[.+?\\]" options:NSRegularExpressionSearch|NSCaseInsensitiveSearch];
if (range.location != NSNotFound) {
    [goodText addAttribute:NSFontAttributeName value:[UIFont fontWithName:@"Georgia" size:16] range:range];
    [goodText addAttribute:NSForegroundColorAttributeName value:[UIColor brownColor] range:range];
}

NSString *regEx = [NSString stringWithFormat:@"%@.+?\\s", [self.article.titleText substringToIndex:0]];
range = [articleText rangeOfString:regEx options:NSRegularExpressionSearch|NSCaseInsensitiveSearch];
if (range.location != NSNotFound) {
    [goodText addAttribute:NSFontAttributeName value:[UIFont fontWithName:@"Georgia-Bold" size:20] range:range];
    [goodText addAttribute:NSForegroundColorAttributeName value:[UIColor blueColor] range:range];
}

[self.textView setAttributedText:goodText];
```

## 迭代属性
```
let sentence = "the cat sat on the mat"

// 属性设置
let regularAttributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 12)]
let largeAttributes = [NSAttributedString.Key.font: UIFont.boldSystemFont(ofSize: 24)]
let attributedSentence = NSMutableAttributedString(string: sentence, attributes: regularAttributes)

// 添加属性
attributedSentence.setAttributes(largeAttributes, range: NSRange(location: 0, length: 3))
attributedSentence.setAttributes(largeAttributes, range: NSRange(location: 8, length: 3))
attributedSentence.setAttributes(largeAttributes, range: NSRange(location: 15, length: 3))

// 迭代字体属性
attributedSentence.enumerateAttribute(.font, in: NSRange(0..<attributedSentence.length)) { value, range, stop in
    if let font = value as? UIFont {
        // make sure this font is actually bold
        if font.fontDescriptor.symbolicTraits.contains(.traitBold) {
            // it's bold, so make it red too
            attributedSentence.addAttribute(.foregroundColor, value: UIColor.red, range: range)
        }
    }
}
```

## Key的简单使用
1、下划线，涉及到的两个属性

NSUnderlineStyleAttributeName

NSUnderlineColorAttributeName

简单实现
```
UILabel * label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
[self.view addSubview:label];
NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"NSAttributedString"];
NSDictionary * attris = @{NSFontAttributeName:[UIFont boldSystemFontOfSize:12],
                          NSForegroundColorAttributeName:[UIColor redColor],
                          NSUnderlineStyleAttributeName:@(NSUnderlineStyleSingle),
                          NSUnderlineColorAttributeName:[UIColor blueColor],};
[mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
label.attributedText = mutableAttriStr;
```
2、描边，涉及到的两个属性

NSStrokeColorAttributeName

NSStrokeWidthAttributeName

替换属性字典即可
```
UILabel * label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
[self.view addSubview:label];
NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"NSAttributedString"];
NSDictionary * attris = @{NSForegroundColorAttributeName:[UIColor whiteColor],
                          NSStrokeColorAttributeName:[UIColor greenColor],
                          NSStrokeWidthAttributeName:@(2)};
[mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
label.attributedText = mutableAttriStr;
```
3、阴影效果
```
UILabel * label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
[self.view addSubview:label];
NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"NSAttributedString"];
NSShadow * shadow = [[NSShadow alloc] init];
shadow.shadowColor = [UIColor blueColor];
shadow.shadowBlurRadius = 2.0;
shadow.shadowOffset = CGSizeMake(1.0, 1.0);
NSDictionary * attris = @{NSShadowAttributeName: shadow};
[mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
label.attributedText = mutableAttriStr;
```
4、链接

点击文字打开链接
```
#import "ViewController.h"

@interface ViewController ()<UITextViewDelegate>

@end

@implementation ViewController


- (void)viewDidLoad {
    [super viewDidLoad];

    UITextView *textView = [[UITextView alloc] initWithFrame:CGRectMake(100, 100, 100, 100)];
    textView.scrollEnabled = NO;
    textView.editable = NO;
    textView.textContainer.lineFragmentPadding = 0;
    textView.textContainerInset = UIEdgeInsetsMake(0, 0, 0, 0);
    textView.delegate = self;
    [self.view addSubview:textView];

    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"open url"];
    NSDictionary * attris = @{NSLinkAttributeName:[NSURL URLWithString:@"http://www.baidu.com"]};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    textView.attributedText = mutableAttriStr;
}


- (BOOL)textView:(UITextView *)textView shouldInteractWithURL:(NSURL *)URL inRange:(NSRange)characterRange interaction:(UITextItemInteraction)interaction {
    return YES;
}

@end
```
还有更多的效果都是基于属性key，可以自己尝试

- 参考

[NSAttributedString所有文本属性详解](https://blog.csdn.net/hello_hwc/article/details/46731991)

作者：Longshihua
链接：https://www.jianshu.com/p/4d4f2c6d964c
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
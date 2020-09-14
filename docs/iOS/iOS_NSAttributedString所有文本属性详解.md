# iOS NSAttributedString所有文本属性详解

## NSAttributedString所有Key
``` swift
NSFontAttributeName; //字体，value是UIFont对象
NSParagraphStyleAttributeName;//绘图的风格（居中，换行模式，间距等诸多风格），value是NSParagraphStyle对象
NSForegroundColorAttributeName;// 文字颜色，value是UIFont对象
NSBackgroundColorAttributeName;// 背景色，value是UIFont
NSLigatureAttributeName; //  字符连体，value是NSNumber
NSKernAttributeName; // 字符间隔
NSStrikethroughStyleAttributeName;//删除线，value是NSNumber
NSUnderlineStyleAttributeName;//下划线，value是NSNumber
NSStrokeColorAttributeName; //描绘边颜色，value是UIColor
NSStrokeWidthAttributeName; //描边宽度，value是NSNumber
NSShadowAttributeName; //阴影，value是NSShadow对象
NSTextEffectAttributeName; //文字效果，value是NSString
NSAttachmentAttributeName;//附属，value是NSTextAttachment 对象
NSLinkAttributeName;//链接，value是NSURL or NSString
NSBaselineOffsetAttributeName;//基础偏移量，value是NSNumber对象
NSUnderlineColorAttributeName;//下划线颜色，value是UIColor对象
NSStrikethroughColorAttributeName;//删除线颜色，value是UIColor
NSObliquenessAttributeName; //字体倾斜
NSExpansionAttributeName; //字体扁平化
NSVerticalGlyphFormAttributeName;//垂直或者水平，value是 NSNumber，0表示水平，1垂直
```

## 字体，颜色，背景色
涉及到的属性
```swift
- NSFontAttributeName
- NSForegroundColorAttributeName
- NSBackgroundColorAttributeName
```

```swift
UILabel * Label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
    [self.view addSubview:Label];
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    NSDictionary * attris = @{NSForegroundColorAttributeName:[UIColor whiteColor],NSBackgroundColorAttributeName:[UIColor grayColor],NSFontAttributeName:[UIFont boldSystemFontOfSize:14]};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    Label.attributedText = mutableAttriStr;
```

## 下划线
涉及到的两个属性

```swift
NSUnderlineStyleAttributeName
NSUnderlineColorAttributeName
```

```swift
UILabel * Label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
    [self.view addSubview:Label];
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    NSDictionary * attris = @{NSFontAttributeName:[UIFont boldSystemFontOfSize:12],NSForegroundColorAttributeName:[UIColor redColor],                          NSUnderlineStyleAttributeName:@(NSUnderlineStyleSingle),                             NSUnderlineColorAttributeName:[UIColor blueColor],};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    Label.attributedText = mutableAttriStr;
```

## 描边
涉及到的两个属性

NSStrokeColorAttributeName
NSStrokeWidthAttributeName

```swift
UILabel * Label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
    [self.view addSubview:Label];
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    NSDictionary * attris = @{NSForegroundColorAttributeName:[UIColor whiteColor],NSStrokeColorAttributeName:[UIColor greenColor],NSStrokeWidthAttributeName:@(2)};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    Label.attributedText = mutableAttriStr;
```

## 附属属性（例如图片）
涉及到的属性

NSAttachmentAttributeName

```swift
UILabel * Label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
    [self.view addSubview:Label];
    //创建Attachment Str
    NSTextAttachment * attach = [[NSTextAttachment alloc] init];
    attach.image = [UIImage imageNamed:@"memoAccess"];
    attach.bounds = CGRectMake(0, 0, 20, 20);
    NSAttributedString * imageStr = [NSAttributedString attributedStringWithAttachment:attach];
    //添加
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    [mutableAttriStr appendAttributedString:imageStr];
    Label.attributedText = mutableAttriStr;
```

## 绘制风格
!!! **重要**

涉及到的属性

NSMutableParagraphStyle

(看起来很奇怪，仅仅为了展示某些功能)

```swift
@interface TestView : UIView

@end

@implementation TestView
-(instancetype)initWithFrame:(CGRect)frame{
    self = [super initWithFrame:frame];
    if (!self) {
        return nil;
    }
    self.opaque = NO;
    return self;
}

// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    NSMutableAttributedString * attributeStr = [[NSMutableAttributedString alloc] initWithString:@"The anthor of this blog is bugu"];
    NSMutableParagraphStyle * paragraphStyle = [[NSMutableParagraphStyle alloc] init];
    paragraphStyle.alignment = NSTextAlignmentRight;
    paragraphStyle.headIndent = 4.0;
    paragraphStyle.lineBreakMode = NSLineBreakByCharWrapping;
    paragraphStyle.lineSpacing = 2.0;
    NSDictionary * attributes = @{NSParagraphStyleAttributeName:paragraphStyle};
    [attributeStr setAttributes:attributes range:NSMakeRange(0, attributeStr.length)];
    [attributeStr drawInRect:self.bounds];
}
```

```swift
    TestView  *test = [[TestView alloc] initWithFrame:CGRectMake(100, 100,100, 60)];
    [self.view addSubview:test];
```

## 阴影
涉及到的属性

NSShadowAttributeName

```swift
UILabel * Label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
    [self.view addSubview:Label];
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    NSShadow * shadow = [[NSShadow alloc] init];
    shadow.shadowColor = [UIColor blueColor];
    shadow.shadowBlurRadius = 2.0;
    shadow.shadowOffset = CGSizeMake(1.0, 1.0);
    NSDictionary * attris = @{NSShadowAttributeName:shadow};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    Label.attributedText = mutableAttriStr;
````

## 文字效果
相关属性

NSTextEffectAttributeName

```swift
UILabel * Label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 60)];
    [self.view addSubview:Label];
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    NSDictionary * attris = @{NSTextEffectAttributeName:NSTextEffectLetterpressStyle};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    Label.attributedText = mutableAttriStr;
```

## 链接
相关属性

NSLinkAttributeName

例子

点击打开链接

```swift
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
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    NSDictionary * attris = @{NSLinkAttributeName:[NSURL URLWithString:@"http://www.baidu.com"]};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    textView.attributedText = mutableAttriStr;
        // Do any additional setup after loading the view, typically from a nib.
}
- (BOOL)textView:(UITextView *)textView shouldInteractWithURL:(NSURL *)url inRange:(NSRange)characterRange
{
    return YES;
}
```

## 文字连体
涉及到的属性

NSLigatureAttributeName

举例

NSLigatureAttributeName 属性位@(0) 和@(1)

## 字符间隔
相关属性

NSKernAttributeName

```swift
UILabel * Label = [[UILabel alloc]initWithFrame:CGRectMake(100, 100, 200, 120)];
    [self.view addSubview:Label];
    NSMutableAttributedString * mutableAttriStr = [[NSMutableAttributedString alloc] initWithString:@"bugu"];
    NSDictionary * attris = @{NSKernAttributeName:@(4),
                              NSFontAttributeName:[UIFont systemFontOfSize:30]};
    [mutableAttriStr setAttributes:attris range:NSMakeRange(0,mutableAttriStr.length)];
    Label.attributedText = mutableAttriStr;
```

## baseline基础偏移量
相关属性
- NSBaselineOffsetAttributeName

```swift
NSDictionary * attris = @{NSBaselineOffsetAttributeName:@(0),
                              NSFontAttributeName:[UIFont systemFontOfSize:30]};
```

## 字体倾斜
相关属性

NSObliquenessAttributeName

```swift
   NSDictionary * attris = @{NSObliquenessAttributeName:@(0.5),
                              NSFontAttributeName:[UIFont systemFontOfSize:30]};
```

## 字体扁平化
相关属性

NSExpansionAttributeName

```swift
NSDictionary * attris = @{NSExpansionAttributeName:@(1.0),
                              NSFontAttributeName:[UIFont systemFontOfSize:30]};
```
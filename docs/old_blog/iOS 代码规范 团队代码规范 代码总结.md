iOS 代码规范 团队代码规范 代码总结

iOS代码规范总结
# 一些原则
1. 长的，描述性的方法和变量命名是好的。不要使用简写，除非是一些大家都知道的场景比如 VIP。如 bgView、reqURL、videoBtn，修改为 backgroundView、videoButton
2. 方法名长没问题，但含义清楚，做好不加注释代码自我表述能力强。（前提是代码足够规范） 如下方wkWebView官方api：

```
- (nullable WKNavigation *)loadFileURL:(NSURL *)URL allowingReadAccessToURL:(NSURL *)readAccessURL API_AVAILABLE(macos(10.11), ios(9.0));
```

3. 不要过分追求技巧，降低代码可读性。
4. 删除没必要的代码，可通过git等追溯找回，没必要保留。
5. 在方法内部不要重复计算某个值，适当的情况下可以将计算结果缓存起来。
6. 减少单例的使用。
7. 提供一个统一的数据管理入口，不管是 MVC、MVVM、MVP 模块内提供一个统一的数据管理入口会使得代码变得更容易管理和维护。
8. 空行、空格的合理使用如下方代码：

```
// 类、协议等之间模块间空行，同类不空行
NS_ASSUME_NONNULL_BEGIN

@class WKBackForwardList;
@class WKBackForwardListItem;
@class WKNavigation;
@class WKSnapshotConfiguration;
@class WKWebViewConfiguration;

@protocol WKNavigationDelegate;
@protocol WKUIDelegate;

// 属性间空行，属性的各个修饰词之间空格
/*! @abstract A copy of the configuration with which the web view was
 initialized. */
@property (nonatomic, readonly, copy) WKWebViewConfiguration *configuration;

/*! @abstract The web view's navigation delegate. */
@property (nullable, nonatomic, weak) id <WKNavigationDelegate> navigationDelegate;

/*! @abstract The web view's user interface delegate. */
@property (nullable, nonatomic, weak) id <WKUIDelegate> UIDelegate;

/*! @abstract The web view's back-forward list. */
@property (nonatomic, readonly, strong) WKBackForwardList *backForwardList;

// 方法间空行
- (instancetype)initWithFrame:(CGRect)frame configuration:(WKWebViewConfiguration *)configuration NS_DESIGNATED_INITIALIZER;

- (nullable instancetype)initWithCoder:(NSCoder *)coder NS_DESIGNATED_INITIALIZER;

/*! @abstract Navigates to a requested URL.
 @param request The request specifying the URL to which to navigate.
 @result A new navigation for the given request.
 */
- (nullable WKNavigation *)loadRequest:(NSURLRequest *)request;
```

```
// 方法实现名与实现体之间，空格
- (void)viewDidLoad {
    
    ///    
}
```

9. 延后原则。
- 头文件能在.m中引入就不要在.h中引入，可以使用前向声明。
- 能用临时变量就不要用成员变量，能用成员变量就不要用属性，能在.m中去做声明就不要在.h中去做声明。
- 尽可能少的在.h中暴露方法。
# 变量
1. 一个变量最好只有一个作用，切勿为了节省代码行数，觉得一个变量可以做多个用途。（单一原则）
2. 方法内部如果有局部变量，那么局部变量应该靠近在使用的地方，而不是全部在顶部声明全部的局部变量。
# 运算符
- 1元运算符和变量之间不需要空格。例如：++n
- 2元运算符与变量之间需要空格隔开。例如： containerWidth = 0.3 * Screen_Width
- 当有多个运算符的时候需要使用括号来明确正确的顺序，可读性较好。例如： 2 << (1 + 2 * 3 - 4)

# 条件表达式
- 当有条件过多、过长的时候需要换行，为了代码看起来整齐些

```
//good
if (condition1() && 
    condition2() && 
    condition3() && 
    condition4()) {
  // Do something
}
//bad
if (condition1() && condition2() && condition3() && condition4(）) { // Do something }
```

- 在一个代码块里面有个可能的情况时善于使用 return 来结束异常的情况。

```
- (void)doHomework {
    if (self.hungry) {
        return;
    }
    if (self.thirsty) {
        return;
    }
    if (self.tired) {
        return;
    }
    papapa.then.over;
}
```

- 每个分支的实现都必须使用 {} 包含。

```
// bad
if (self.hungry) self.eat() 
// good
if (self.hungry) {
    self.eat()
}
```

- 条件判断的时候应该是变量在左，条件在右。 `if ( currentCursor == 2 ) { //... }`
- switch 语句后面的每个分支都需要用大括号括起来。
- switch 语句后面的 default 分支必须存在，除非是在对枚举进行 switch。

```
switch (menuType) {  
  case menuTypeLeft: {
    // ...  
    break; 
   }
  case menuTypeRight: {
    // ...  
    break; 
  }
  case menuTypeTop: {
    // ...  
    break; 
  }
  case menuTypeBottom: {
    // ...  
    break; 
  }
}
```
# 类名
1. 大写驼峰式命名。每个单词首字母大写。比如「申请记录控制器」`ApplyRecordsViewController`
2. 每个类型的命名以该类型结尾。
- ViewController：使用 ViewController 结尾。例子：ApplyRecordsViewController
- View：使用 View 结尾。例子：分界线：boundaryView
- NSArray：使用 s 结尾。比如商品分类数据源。categories
- UITableViewCell：使用 Cell 结尾。比如 MyProfileCell
- Protocol：使用 Delegate 或者 Datasource 结尾。比如 XQScanViewDelegate
- Tool：工具类
- 代理类：Delegate
- Service 类：Service

# 类的注释
有时候我们需要为我们创建的类设置一些注释。我们可以在类的下面添加。

# 枚举
枚举的命名和类的命名相近。
```
typedef NS_ENUM(NSInteger, UIControlContentVerticalAlignment) {
    UIControlContentVerticalAlignmentCenter  = 0,
    UIControlContentVerticalAlignmentTop     = 1,
    UIControlContentVerticalAlignmentBottom  = 2,
    UIControlContentVerticalAlignmentFill    = 3,
};
```

# 宏
1. 全部大写，单词与单词之间用 _ 连接。
2. 以 k 开头。后面遵循大写驼峰命名。「不带参数」

```
#define HOME_PAGE_DID_SCROLL @"com.xq.home.page.tableview.did.scroll"
#define kHomePageDidScroll @"com.xq.home.page.tableview.did.scroll"
```

# 属性
书写规则，基本上就是 `@property` 之后空一格，括号，里面的 线程修饰词、内存修饰词、读写修饰词，空一格 类 对象名称
根据不同的场景选择合适的修饰符。


```
@property (nonatomic, strong) UITableView *tableView;
@property (nonatomic, assign, readonly) BOOL loading;   
@property (nonatomic, weak) id<#delegate#> delegate;
@property (nonatomic, copy) <#returnType#> (^<#Block#>)(<#parType#>);
```

# 单例
单例适合全局管理状态或者事件的场景。一旦创建，对象的指针保存在静态区，单例对象在堆内存中分配的内存空间只有程序销毁的时候才会释放。基于这种特点，那么我们类似 UIApplication 对象，需要全局访问唯一一个对象的情况才适合单例，或者访问频次较高的情况。我们的功能模块的生命周期肯定小于 App 的生命周期，如果多个单例对象的话，势必 App 的开销会很大，糟糕的情况系统会杀死 App。如果觉得非要用单例比较好，那么注意需要在合适的场合 tearDown 掉。

单例的使用场景概括如下：

- 控制资源的使用，通过线程同步来控制资源的并发访问。
- 控制实例的产生，以达到节约资源的目的。
- 控制数据的共享，在不建立直接关联的条件下，让多个不相关的进程或线程之间实现通信。

```
+ (instancetype)sharedInstance {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        //because has rewrited allocWithZone  use NULL avoid endless loop lol.
        _sharedInstance = [[super allocWithZone:NULL] init];
    });
    
    return _sharedInstance;
}

+ (id)allocWithZone:(struct _NSZone *)zone {
    return [TestNSObject sharedInstance];
}

+ (instancetype)alloc {
    return [TestNSObject sharedInstance];
}

- (id)copy {
    return self;
}

- (id)mutableCopy {
    return self;
}

- (id)copyWithZone:(struct _NSZone *)zone {
    return self;
}
```

# 私有变量
推荐以 `_ `开头，写在 `.m `文件中。例如 `NSString * _somePrivateVariable`

# 代理方法
- 类的实例必须作为方法的参数之一。
- 对于一些连续的状态的，可以加一些 will（将要）、did（已经）
- 以类的名称开头

```
- (void)tableView:(UITableView *)tableView willDisplayCell:(UITableViewCell *)cell forRowAtIndexPath:(NSIndexPath *)indexPath;

- (void)tableView:(UITableView *)tableView didEndDisplayingCell:(UITableViewCell *)cell forRowAtIndexPath:(NSIndexPath *)indexPath;
```

# 方法
1. 方法与方法之间间隔一行
2. 大量的方法尽量要以组的形式放在一起，比如生命周期函数、公有方法、私有方法、setter && getter、代理方法..
3. 方法最后面的括号需要另起一行。遵循 Apple 的规范
4. 对于其他场景的括号，括号不需要单独换行。比如 if 后面的括号。
5. 如果方法参数过多过长，建议多行书写。用冒号进行对齐。
6. 一个方法内的代码最好保持在50行以内，一般经验来看如果一个方法里面的代码行数过多，代码的阅读体验就很差（别问为什么，做过重构代码行数很长的人都有类似的心情）
7. 一个函数只做一个事情，做到单一原则。所有的类、方法设计好后就可以类似搭积木一样实现一个系统。
8. 对于有返回值的函数，且函数内有分支情况。确保每个分支都有返回值。
9. 函数如果有多个参数，外部传入的参数需要检验参数的非空、数据类型的合法性，参数错误做一些措施：立即返回、断言。
10. 多个函数如果有逻辑重复的代码，建议将重复的部分抽取出来，成为独立的函数进行调用

```
- (instancetype)init {
    self = [super init];
    if (self) {
        <#statements#>
    }
    return self;
}

- (void)doHomework:(NSString *)name
            period:(NSInteger)second
            score:(NSInteger)score;

```

12. 方法如果有多个参数的情况下需要注意是否需要介词和连词。很多时候在不知道如何抉择测时候思考下苹果的一些 API 的方法命名。

```
//good
- (instancetype)initWithAge:(NSInteger)age name:(NSString *)name;

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath;


//bad
- (instancetype)initWithAge:(NSInteger)age andName:(NSString *)name;

- (void)tableView:(UITableView *)tableView :(NSIndexPath *)indexPath;
```

1. `.m` 文件中的私有方法需要在顶部进行声明
2. 方法组之间也有个顺序问题。
- 在文件最顶部实现属性的声明、私有方法的声明（很多人省去这一步，问题不大，但是蛮多第三方的库都写了，看起来还是会很方便，建议书写）。
- 在生命周期的方法里面，比如 viewDidLoad 里面只做界面的添加，而不是做界面的初始化，所有的 view 初始化建议放在 getter 里面去做。往往 view 的初始化的代码长度会比较长、且一般会有多个 view 所以 getter 和 setter 一般建议放在最下面，这样子顶部就可以很清楚的看到代码的主要逻辑。
- 所有button、gestureRecognizer 的响应事件都放在这个区域里面，不要到处乱放。

# 文件基本上就是

```
//___FILEHEADER___

#import "___FILEBASENAME___.h"
/*ViewController*/

/*View&&Util*/

/*model*/

/*NetWork InterFace*/

/*Vender*/

@interface ___FILEBASENAMEASIDENTIFIER___ ()

@end

@implementation ___FILEBASENAMEASIDENTIFIER___


#pragma mark - life cycle
- (void)viewWillAppear:(BOOL)animated {
    [super viewDidAppear:animated];
}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = <#value#>;
}

- (void)viewWillDisappear:(BOOL)animated {
    [super viewDidAppear:animated];
    
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidAppear:animated];
    
}

#ifdef DEBUG
- (void)dealloc {
    NSLog(@"%s",__func__);
}
#endif

#pragma mark - public Method

#pragma mark - private method

#pragma mark - event response



#pragma mark - UITableViewDelegate

#pragma mark - UITableViewDataSource
//...(多个代理方法依次往下写)

#pragma mark - getters and setters

@end
```

# 图片资源
1. 单个文件的命名
文件资源的命名也需要一定的规范，形式为：功能模块名类别功能_状态@nx.png
Setting_Button_search_selected@2x.png、Setting_Button_search_selected@3x.png
Setting_Button_search_unselected@2x.png、Setting_Button_search_unselected@3x.png
2. 资源的文件夹命名
最好也参考 App 按照功能模块建立对应的实体文件夹目录，最后到对应的目录下添加相应的资源文件。

# 注释
1. 对于类的注释写在当前类文件的顶部
2. 对于属性的注释需要写在属性后面的地方。 `//**/`
3. 对于 .h 文件中方法的注释，一律按快捷键 `command+option+/`。三个快捷键解决。按需在旁边对方法进行说明解释、返回值、参数的说明和解释
4. 对于 `.m` 文件中的方法的注释，在方法的旁边添加 `//`。
5. 注释符和注释内容需要间隔一个空格。 例如： `// fetch goods list`

# 版本规范
采用 A.B.C 三位数字命名，比如：`1.0.2`，当有更新的情况下按照下面的依据

版本号|	右说明对齐标题	|示例
----|----|----
A.b.c	|属于重大内容的更新	|1.0.2 -> 2.0.0
a.B.c	|属于小部分内容的更新	|1.0.2 -> 1.1.1
a.b.C	|属于补丁更新	|1.0.2 -> 1.0.3

作者：ElegantLiar
链接：https://www.jianshu.com/p/c85f4a0bba4d
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
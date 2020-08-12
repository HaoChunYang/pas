# 目录说明
我们的app在手机中存放的路径是：`/var/mobile/Applications/83CC3EE2-D296-4AA4-8EBB-377CC29579C7`

后面的目录83CC3EE2-D296-4AA4-8EBB-377CC29579C7是iPhone自动生成的，里面包含了四个文件夹：
1. `AppName.app` 目录：这是应用程序的程序包目录，包含应用程序本身。由于应用改程序必须经过签名。所以再运行程序时，是不可以对这个目录进行内容修改的，否则会造成应用无法启动。

2. `Documents`目录：这是文档目录。有关应用的所有数据文件应该写入到这个目录下，这个目录用于存储用户数据或者其他应该定期备份的信息。iTunes会同步改应用程序的此文件内容，适合存储一些重要的数据

3. `Library`目录：库目录，这个目录下面还有两个子目录：Caches 和 Preferences 

  `Preferences`目录：包含应用程序的编号设置文件，存放`NSUserDefaults`保存的.plist文件。iTunes同步该应用时会同步该文件夹中的内容。

  `Caches`目录：缓存目录。用于存储应用程序专用的支持文件，保存应用程序再次启动过程中需要的信息。ITunes不会同步改文件夹，保存一些不需要备份的数据           

4. `tmp`目录：临时目录。这个目录用于存放临时文件，保存应用程序再次启动过程中不再需要的信息。iTunes不会同步此文件夹，系统可能在应用没运行时就删除该目录下的文件，所以此目录适合保存应用中的一些临时文件，用完就删除。

 
# 文件路径获取方法
下面就是这些文件夹获取路径的方法：

1. 获取AppName.app 目录路径：
```
    NSString *path = [[NSBundle mainBundle] bundlePath];
```
2. 获取Documents目录路径的方法：
```
    NSString *documentPath = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).firstObject;
```
3. `Library/Caches`目录路径方法：
```
    NSString *cachePath = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES).firstObject;
```
4. `Library/Application Support`目录路径方法：
```
[NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirectory,   NSUserDomainMask, YES) objectAtIndex:0]
```
5. tmp目录路径的方法：
```
    NSString *tmpPaht = NSTemporaryDirectory();
```
6. 获取沙盒主目录路径    
```
    NSString *homePaht = NSHomeDirectory();
```
例子：

```
NSFileManager* fm=[NSFileManager defaultManager];
if(![fm fileExistsAtPath:[self dataFilePath]]){

//下面是对该文件进行制定路径的保存
[fm createDirectoryAtPath:[self dataFilePath] withIntermediateDirectories:YES attributes:nil error:nil];

//取得一个目录下得所有文件名
NSArray *files = [fm subpathsAtPath: [self dataFilePath] ];

//读取某个文件
NSData *data = [fm contentsAtPath:[self dataFilePath]];

//或者
NSData *data = [NSData dataWithContentOfPath:[self dataFilePath]];
}
```
 
# 其他说明
IOS管理文件和目录
 
1、常见的NSFileManager文件方法
```
-(NSData *)contentsAtPath:path　　//从一个文件读取数据

-(BOOL)createFileAtPath: path contents:(NSData *)data attributes:attr　　//向一个文件写入数据

-(BOOL)removeItemAtPath:path error:err　　//删除一个文件

-(BOOL)moveItemAtPath：from toPath:to error:err　　//重命名或者移动一个文件（to不能是已存在的）

-(BOOL)copyItemAtPath:from toPath:to error:err　　//复制文件（to不能是已存在的）

-(BOOL)contentsEqualAtPath:path andPath:path2　　//比较两个文件的内容

-(BOOL)fileExistAtPath:path　　//测试文件是否存在

-(BOOL)isReadableFileAtPath:path　　//测试文件是否存在，并且是否能执行读操作　　

-(BOOL)isWriteableFileAtPath:path　　//测试文件是否存在，并且是否能执行写操作　　

-(NSDictionary *)attributesOfItemAtPath:path error:err　　//获取文件的属性　　

-(BOOL)setAttributesOfItemAtPath:attr error:err　　//更改文件的属性
```
2.使用目录
```
-(NSString *)currentDirectoryPath　　//获取当前目录

-(BOOL)changeCurrentDirectoryPath:path　　//更改当前目录

-(BOOL)copyItemAtPath:from toPath:to error:err　　//复制目录结构（to不能是已存在的）

-(BOOL)createDirectoryAtPath:path withIntermediateDirectories:(BOOL)flag attribute:attr　　//创建一个新目录

-(BOOL)fileExistAtPath:path isDirectory:(BOOL*)flag　　//测试文件是不是目录（flag中储存结果YES/NO）

-(NSArray *)contentsOfDirectoryAtPath:path error:err　　//列出目录内容

-(NSDirectoryEnumerator *)enumeratorAtPath:path　　//枚举目录的内容

-(BOOL)removeItemAtPath:path error:err　　//删除空目录

-(BOOL)moveItemAtPath:from toPath:to error:err 　　//重命名或移动一个目录（to不能是已存在的）
```
3、常用路径工具方法
```
+(NSString *)pathWithComponens:components　　//根据components中的元素构造有效路径

-(NSArray *)pathComponents　　//析构路径，获得组成此路径的各个部分

-(NSString *)lastPathComponent　　//提取路径的最后一个组成部分

-(NSString *)pathExtension　　//从路径的最后一个组成部分中提取其扩展名

-(NSString *)stringByAppendingPathComponent:path　　//将path添加到现有路径的末尾

-(NSString *)stringByAppendingPathExtension:ext　　//将指定的扩展名添加到路径的最后一个组成部分

-(NSString *)stringByDeletingLastPathComponent　　//删除路径的最后一个组成部分

-(NSString *)stringByDeletingPathExtension　　//从文件的最后一部分删除扩展名

-(NSString *)stringByExpandingTileInPath　　　//将路径中代字符扩展成用户主目录（~）或指定用户的主目录（~user）

-(NSString *)stringByresolvingSymlinksInPath　　//尝试解析路径中的符号链接

-(NSString *)stringByStandardizingPath　　//通过尝试解析~、..（父目录符号）、.（当前目录符号）和符号链接来标准化路径
```
4、常用的路径工具函数
```
NSString* NSUserName(void)　　//返回当前用户的登录名

NSString* NSFullUserName(void)　　//返回当前用户的完整用户名

NSString* NSHomeDirectory(void)　　//返回当前用户主目录的路径

NSString* NSHomeDirectoryForUser(NSString* user)　　//返回用户user的主目录

NSString* NSTemporaryDirectory(void)　　//返回可用于创建临时文件的路径目录
```
5、常用的IOS目录
```
Documents(NSDocumentDirectory)　　//用于写入应用相关数据文件的目录，在ios中写入这里的文件能够与iTunes共享并访问，存储在这里的文件会自动备份到云端

Library/Caches（NSCachesDirectory)　　//用于写入应用支持文件的目录，保存应用程序再次启动需要的信息。iTunes不会对这个目录的内容进行备份

tmp(use NSTemporaryDirectory())　　//这个目录用于存放临时文件，只程序终止时需要移除这些文件，当应用程序不再需要这些临时文件时，应该将其从这个目录中删除

Library/Preferences　　//这个目录包含应用程序的偏好设置文件，使用 NSUserDefault类进行偏好设置文件的创建、读取和修改
```
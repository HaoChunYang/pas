## WKWebView 获取状态码
代码如下：
```
- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation {

    NSURLSessionDataTask *dataTask = [[NSURLSession sharedSession] dataTaskWithURL:webView.URL completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {

        NSHTTPURLResponse *tmpresponse = (NSHTTPURLResponse*)response;

        NSLog(@"statusCode:%ld", tmpresponse.statusCode);

    }];

    [dataTask resume];

}
```
拿到状态码之后可以自由做处理。

## 请求被重定向调用的方法

顺便说一下请求被重定向调用的方法：

```
- (void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *)navigation
```
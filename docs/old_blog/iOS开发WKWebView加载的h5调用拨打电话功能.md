iOS开发WKWebView加载的h5调用拨打电话功能

H5的拨打电话代码:

```
<a href="tel:12123">拨打电话12123</a>  
```
`UIWebView`加载的`h5`，可以调用；但是`WKWebView`就是不行，找了半天，最后解决，在`WKWebView`的`WKNavigationDelegate`代理方法处理，代码如下：

```
// 处理拨打电话以及Url跳转等等  
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {  
    NSURL *URL = navigationAction.request.URL;  
    NSString *scheme = [URL scheme];  
    if ([scheme isEqualToString:@"tel"]) {  
        NSString *resourceSpecifier = [URL resourceSpecifier];  
        NSString *callPhone = [NSString stringWithFormat:@"telprompt://%@", resourceSpecifier];  
        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:callPhone]];  
    }  
    decisionHandler(WKNavigationActionPolicyAllow);  
}  
```
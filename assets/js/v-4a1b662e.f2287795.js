(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[6272],{5750:(e,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>a});const a={key:"v-4a1b662e",path:"/old_blog/iOS%E6%9F%A5%E7%9C%8B%E8%AF%B7%E6%B1%82Cookies.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"old_blog/iOS查看请求Cookies.md",git:{updatedTime:1597237797e3}}},79:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>i});var a=s(6252);const o={class:"language-text ext-text line-numbers-mode"},r=(0,a.uE)('<pre class="language-text"><code>\n- (void)readerCookies {\n    //cookies获取\n    NSHTTPCookieStorage *cookieJar = [NSHTTPCookieStorage sharedHTTPCookieStorage];\n    NSArray *cookieArr = [cookieJar cookies];\n    for(NSHTTPCookie *cookie in cookieArr) {\n        NSLog(@&quot;cookie －&gt; %@&quot;, cookie);\n        if ([cookie.name isEqualToString:@&quot;access_token&quot;]) {\n            //存储cookies\n            //            [MyDataSaveHelper setAccessToken:cookie.value];\n        }\n        //存储之后删除cookies\n        //        [cookieJar deleteCookie:cookie];\n    }\n}\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div>',2),i={render:function(e,n){return(0,a.wg)(),(0,a.j4)("div",o,[r])}}}}]);
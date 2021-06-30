(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[1271],{4966:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-d3c5e3c4",path:"/iOS/CodeSnippet/iOS%E8%8E%B7%E5%8F%96%E7%89%88%E6%9C%AC%E5%8F%B7%E7%AD%89APP%E4%BF%A1%E6%81%AF.html",title:"iOS获取版本号等APP信息",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"当前app的信息",slug:"当前app的信息",children:[]},{level:2,title:"一些用户设备信息",slug:"一些用户设备信息",children:[]},{level:2,title:"获取APPStore里面的版本号, 可以与本地的版本号作比较,判断是否有新版本更新......",slug:"获取appstore里面的版本号-可以与本地的版本号作比较-判断是否有新版本更新",children:[]}],filePathRelative:"iOS/CodeSnippet/iOS获取版本号等APP信息.md",git:{updatedTime:1600076465e3}}},5052:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="ios获取版本号等app信息"><a class="header-anchor" href="#ios获取版本号等app信息">#</a> iOS获取版本号等APP信息</h1><h2 id="当前app的信息"><a class="header-anchor" href="#当前app的信息">#</a> 当前app的信息</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token builtin">NSDictionary</span> <span class="token operator">*</span>infoDictionary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token builtin">NSBundle</span> mainBundle<span class="token punctuation">]</span> infoDictionary<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 当前应用名称</span>\n<span class="token builtin">NSString</span> <span class="token operator">*</span>appCurName <span class="token operator">=</span> <span class="token punctuation">[</span>infoDictionary objectForKey<span class="token punctuation">:</span>@<span class="token string">&quot;CFBundleDisplayName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;当前应用名称：%@&quot;</span><span class="token punctuation">,</span>appCurName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 当前应用软件版本  比如：1.0.1</span>\n<span class="token builtin">NSString</span> <span class="token operator">*</span>appCurVersion <span class="token operator">=</span> <span class="token punctuation">[</span>infoDictionary objectForKey<span class="token punctuation">:</span>@<span class="token string">&quot;CFBundleShortVersionString&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;当前应用软件版本:%@&quot;</span><span class="token punctuation">,</span>appCurVersion<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 当前应用版本号码   app build版本</span>\n<span class="token builtin">NSString</span> <span class="token operator">*</span>appCurVersionNum <span class="token operator">=</span> <span class="token punctuation">[</span>infoDictionary objectForKey<span class="token punctuation">:</span>@<span class="token string">&quot;CFBundleVersion&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;当前应用版本号码：%@&quot;</span><span class="token punctuation">,</span>appCurVersionNum<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="一些用户设备信息"><a class="header-anchor" href="#一些用户设备信息">#</a> 一些用户设备信息</h2><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>\n<span class="token comment">//手机别名： 用户定义的名称</span>\n<span class="token builtin">NSString</span><span class="token operator">*</span> userPhoneName <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token builtin">UIDevice</span> currentDevice<span class="token punctuation">]</span> name<span class="token punctuation">]</span><span class="token punctuation">;</span>  \n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;手机别名: %@&quot;</span><span class="token punctuation">,</span> userPhoneName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//设备名称</span>\n<span class="token builtin">NSString</span><span class="token operator">*</span> deviceName <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token builtin">UIDevice</span> currentDevice<span class="token punctuation">]</span> systemName<span class="token punctuation">]</span><span class="token punctuation">;</span>  \n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;设备名称: %@&quot;</span><span class="token punctuation">,</span>deviceName <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//手机系统版本</span>\n<span class="token builtin">NSString</span><span class="token operator">*</span> phoneVersion <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token builtin">UIDevice</span> currentDevice<span class="token punctuation">]</span> systemVersion<span class="token punctuation">]</span><span class="token punctuation">;</span>  \n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;手机系统版本: %@&quot;</span><span class="token punctuation">,</span> phoneVersion<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//手机型号</span>\n<span class="token builtin">NSString</span><span class="token operator">*</span> phoneModel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token builtin">UIDevice</span> currentDevice<span class="token punctuation">]</span> model<span class="token punctuation">]</span><span class="token punctuation">;</span>  \n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;手机型号: %@&quot;</span><span class="token punctuation">,</span>phoneModel <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//地方型号  （国际化区域名称）</span>\n<span class="token builtin">NSString</span><span class="token operator">*</span> localPhoneModel <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token builtin">UIDevice</span> currentDevice<span class="token punctuation">]</span> localizedModel<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;国际化区域名称: %@&quot;</span><span class="token punctuation">,</span>localPhoneModel <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="获取appstore里面的版本号-可以与本地的版本号作比较-判断是否有新版本更新"><a class="header-anchor" href="#获取appstore里面的版本号-可以与本地的版本号作比较-判断是否有新版本更新">#</a> 获取APPStore里面的版本号, 可以与本地的版本号作比较,判断是否有新版本更新......</h2><p><strong>可以改为<code>post</code>请求，解决发布新版本后没有及时获取最新版本的缓存问题。</strong></p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token builtin">NSString</span> <span class="token operator">*</span>urlString<span class="token operator">=</span>@<span class="token string">&quot;http://itunes.apple.com/lookup?id=xxxxxxxxxx&quot;</span><span class="token punctuation">;</span> <span class="token comment">//自己应用在App Store里的地址</span>\n\n<span class="token constant">NSURL</span> <span class="token operator">*</span>url <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">NSURL</span> <span class="token builtin">URLWithString</span><span class="token punctuation">:</span>urlString<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//这个URL地址是该app在iTunes connect里面的相关配置信息。其中id是该app在app store唯一的ID编号。</span>\n\n<span class="token builtin">NSString</span> <span class="token operator">*</span>jsonResponseString <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">NSString</span> stringWithContentsOfURL<span class="token punctuation">:</span>url encoding<span class="token punctuation">:</span><span class="token builtin">NSUTF8StringEncoding</span> error<span class="token punctuation">:</span><span class="token constant">nil</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token builtin">NSData</span> <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>jsonResponseString dataUsingEncoding<span class="token punctuation">:</span><span class="token builtin">NSUTF8StringEncoding</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment">//    解析json数据</span>\n\nid json <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">NSJSONSerialization</span> <span class="token builtin">JSONObjectWithData</span><span class="token punctuation">:</span>data options<span class="token punctuation">:</span><span class="token builtin">NSJSONReadingMutableContainers</span> error<span class="token punctuation">:</span><span class="token constant">nil</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token builtin">NSArray</span> <span class="token operator">*</span>array <span class="token operator">=</span> json<span class="token punctuation">[</span>@<span class="token string">&quot;results&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token builtin">NSDictionary</span> <span class="token operator">*</span>dic <span class="token keyword">in</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n   <span class="token builtin">NSString</span> <span class="token operator">*</span>  newVersion <span class="token operator">=</span> <span class="token punctuation">[</span>dic valueForKey<span class="token punctuation">:</span>@<span class="token string">&quot;version&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// appStore 的版本号</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',8),t={render:function(n,s){return p}}}}]);
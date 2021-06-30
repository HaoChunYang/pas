(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[5364],{3743:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-2c58de5a",path:"/iOS/CodeSnippet/iOS_%E8%8E%B7%E5%8F%96%E6%9C%80%E9%A1%B6%E5%B1%82%E7%9A%84%E8%A7%86%E5%9B%BE%E6%8E%A7%E5%88%B6%E5%99%A8.html",title:"iOS 获取最顶层的视图控制器",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"iOS/CodeSnippet/iOS_获取最顶层的视图控制器.md",git:{updatedTime:1600918294e3}}},8678:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="ios-获取最顶层的视图控制器"><a class="header-anchor" href="#ios-获取最顶层的视图控制器">#</a> iOS 获取最顶层的视图控制器</h1><p>应该是可以准确的获取到正在显示的控制器。</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token operator">-</span> <span class="token punctuation">(</span><span class="token builtin">UIViewController</span> <span class="token operator">*</span><span class="token punctuation">)</span>theTopviewControler<span class="token punctuation">{</span>\n    <span class="token comment">//获取根控制器</span>\n    <span class="token builtin">UIViewController</span> <span class="token operator">*</span>rootVC <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token builtin">UIApplication</span> sharedApplication<span class="token punctuation">]</span><span class="token punctuation">.</span>delegate window<span class="token punctuation">]</span><span class="token punctuation">.</span>rootViewController<span class="token punctuation">;</span>\n    \n    <span class="token builtin">UIViewController</span> <span class="token operator">*</span>parent <span class="token operator">=</span> rootVC<span class="token punctuation">;</span>\n    <span class="token comment">//遍历 如果是presentViewController</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>parent <span class="token operator">=</span> rootVC<span class="token punctuation">.</span>presentedViewController<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token constant">nil</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        rootVC <span class="token operator">=</span> parent<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n   \n    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>rootVC isKindOfClass<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token builtin">UINavigationController</span> <span class="token keyword">class</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        rootVC <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token builtin">UINavigationController</span> <span class="token operator">*</span><span class="token punctuation">)</span>rootVC topViewController<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> rootVC<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',3),t={render:function(n,s){return p}}}}]);
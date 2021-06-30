(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[3942],{8022:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-bacfaf7e",path:"/iOS/iOS%E5%BC%80%E5%8F%91%E4%B8%AD%E6%96%B9%E6%B3%95%E5%BB%B6%E8%BF%9F%E6%89%A7%E8%A1%8C%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html",title:"iOS开发中方法延迟执行的几种方式",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"iOS/iOS开发中方法延迟执行的几种方式.md",git:{updatedTime:1600754751e3}}},8823:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="ios开发中方法延迟执行的几种方式"><a class="header-anchor" href="#ios开发中方法延迟执行的几种方式">#</a> iOS开发中方法延迟执行的几种方式</h1><ol><li>performSelector方法</li><li>NSTimer定时器</li><li>NSThread线程的sleep</li><li>GCD</li></ol><p>假如有延迟执行方法</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token operator">-</span> <span class="token punctuation">(</span>void<span class="token punctuation">)</span>delayMethod<span class="token punctuation">{</span>\n    <span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;delayMethodEnd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol><li>performSelector</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token punctuation">[</span><span class="token keyword">self</span> performSelector<span class="token punctuation">:</span>@<span class="token function">selector</span><span class="token punctuation">(</span>delayMethod<span class="token punctuation">)</span> withObject<span class="token punctuation">:</span><span class="token constant">nil</span><span class="token comment">/*可传任意类型参数*/</span> afterDelay<span class="token punctuation">:</span><span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注：此方法是一种非阻塞的执行方式， 取消performSelector 用<code>NSObject cancelPreviousPerformRequestsWithTarget:</code></p><ol start="2"><li>NSTimer定时器</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token builtin">NSTimer</span> <span class="token operator">*</span>timer <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">NSTimer</span> scheduledTimerWithTimeInterval<span class="token punctuation">:</span><span class="token number">2.0</span> target<span class="token punctuation">:</span><span class="token keyword">self</span> selector<span class="token punctuation">:</span>@<span class="token function">selector</span><span class="token punctuation">(</span>delayMethod<span class="token punctuation">)</span> userInfo<span class="token punctuation">:</span><span class="token constant">nil</span> repeats<span class="token punctuation">:</span><span class="token constant">NO</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注：此方法是一种非阻塞的执行方式， 取消执行方法：- (void)invalidate;即可</p><ol start="3"><li>NSThread线程的sleep</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token punctuation">[</span><span class="token builtin">NSThread</span> sleepForTimeInterval<span class="token punctuation">:</span><span class="token number">2.0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>注：此方法是一种阻塞执行方式，建议放在子线程中执行，否则会卡住界面。但有时还是需要阻塞执行，如进入欢迎界面需要沉睡3秒才进入主界面时。 没有找到取消执行方式。</p><ol start="4"><li>GCD</li></ol><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code>__block <span class="token builtin">ViewController</span><span class="token comment">/*主控制器*/</span> <span class="token operator">*</span>weakSelf <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">;</span>\n\ndispatch_time_t delayTime <span class="token operator">=</span> <span class="token function">dispatch_time</span><span class="token punctuation">(</span><span class="token constant">DISPATCH_TIME_NOW</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>int64_t<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token comment">/*延迟执行时间*/</span> <span class="token operator">*</span> <span class="token constant">NSEC_PER_SEC</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dispatch_after</span><span class="token punctuation">(</span>delayTime<span class="token punctuation">,</span> <span class="token function">dispatch_get_main_queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">^</span><span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>weakSelf delayMethod<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>注：<code>dispatch_after</code>此方法可以在参数中选择执行的线程，是一种非阻塞执行方式。没有找到取消执行方式。</p>',16),e={render:function(n,s){return t}}}}]);
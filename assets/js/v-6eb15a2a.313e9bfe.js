(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[7136],{3518:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-6eb15a2a",path:"/iOS/UIAlertController%E4%BC%9A%E5%AF%BC%E8%87%B4push%E5%A4%B1%E8%B4%A5%E7%AD%89%E9%97%AE%E9%A2%98.html",title:"UIAlertController会导致push失败等问题",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"iOS/UIAlertController会导致push失败等问题.md",git:{updatedTime:1600736461e3}}},5387:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="uialertcontroller会导致push失败等问题"><a class="header-anchor" href="#uialertcontroller会导致push失败等问题">#</a> UIAlertController会导致push失败等问题</h1><p><strong>当前界面的<code>UIAlertController</code>弹起的时候，我通过find当前视图的顶层controller，然后跳转，最后失败，原因在于最顶层的是<code>UIAlertcontroller</code>，不存在<code>navgationController</code>，不能<code>push</code>。</strong></p><p>正确的写法：</p><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token punctuation">[</span>alertV dismissViewControllerAnimated<span class="token punctuation">:</span><span class="token constant">YES</span> completion<span class="token punctuation">:</span><span class="token operator">^</span><span class="token punctuation">{</span>\n\n    <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>navigationController pushViewController<span class="token punctuation">:</span>newController animated<span class="token punctuation">:</span><span class="token constant">YES</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>；\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>务必在UIAlertController dismiss成功后再push界面</strong></p>',5),t={render:function(n,s){return e}}}}]);
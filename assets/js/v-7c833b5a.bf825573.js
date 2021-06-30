(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[1313],{1874:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-7c833b5a",path:"/old_blog/%E6%95%B0%E6%8D%AE%E5%BA%93char%E8%BD%ACint%E7%B1%BB%E5%9E%8B%E8%BF%9B%E8%A1%8C%E6%8E%92%E5%BA%8Forder_by.html",title:"数据库char转int类型进行排序order by",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"MySql",slug:"mysql",children:[]}],filePathRelative:"old_blog/数据库char转int类型进行排序order_by.md",git:{updatedTime:1600918294e3}}},2811:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>r});const e=(0,a(6252).uE)('<h1 id="数据库char转int类型进行排序order-by"><a class="header-anchor" href="#数据库char转int类型进行排序order-by">#</a> 数据库char转int类型进行排序<code>order by</code></h1><p>数据库查询出结果进行排序order by 时，如果是char类型的数字，需要转成int型的再排序，才能正确排序。否则会出现：2排在10后面。</p><p>char转化int排序</p><h2 id="mysql"><a class="header-anchor" href="#mysql">#</a> MySql</h2><p>mysql为我们提供了两个类型转换函数：CAST和CONVERT</p><ul><li>使用CAST将varchar转换成int类型排序</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> server_id <span class="token keyword">from</span> cardserver\n <span class="token keyword">where</span> game_id <span class="token operator">=</span> <span class="token number">1</span> \n<span class="token keyword">order</span> <span class="token keyword">by</span> CAST<span class="token punctuation">(</span>server_id <span class="token keyword">as</span> SIGNED<span class="token punctuation">)</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>使用CONVERT将varchar转换成int类型排序</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> server_id <span class="token keyword">from</span> cardserver\n <span class="token keyword">where</span> game_id <span class="token operator">=</span> <span class="token number">1</span> \n<span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">CONVERT</span><span class="token punctuation">(</span>server_id<span class="token punctuation">,</span>SIGNED<span class="token punctuation">)</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>+0</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> server_id <span class="token keyword">from</span> cardserver \n<span class="token keyword">where</span> game_id <span class="token operator">=</span> <span class="token number">1</span> \n<span class="token keyword">order</span> <span class="token keyword">by</span> server_id<span class="token operator">+</span><span class="token number">0</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',11),r={render:function(s,n){return e}}}}]);
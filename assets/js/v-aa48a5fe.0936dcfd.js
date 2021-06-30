(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[9071],{6063:(e,t,s)=>{"use strict";s.r(t),s.d(t,{data:()=>a});const a={key:"v-aa48a5fe",path:"/old_blog/git%E6%8F%90%E4%BA%A4%E8%B6%85%E8%BF%87100M%E6%96%87%E4%BB%B6%E6%97%B6%E6%8A%A5%E9%94%99%E5%8F%8A%E8%A7%A3%E5%86%B3.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"old_blog/git提交超过100M文件时报错及解决.md",git:{updatedTime:1597237797e3}}},1921:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});const a=(0,s(6252).uE)('<p>提交git时，该次提交有超过100M的文件，但是提交github报错。 报错信息：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>remote: error: File HRMS-PRO/Pods/AMap3DMap/MAMapKit.framework/MAMapKit is 122.14 MB; this exceeds GitHub&#39;s file size limit of 100.00 MB\nTo https://github.com/xxxx/xxxx.git\n ! [remote rejected] master -&gt; master (pre-receive hook declined)\nerror: failed to push some refs to https://github.com/xxxx/xxxx.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>解决办法： 如果删除文件直接提交，不能解决问题，还会再次报错。 网上删除cached，等方法没试成功。 我使用<code>git reset 788cad0cf8bb6108d962967adc6a082b2be10bf9</code></p><blockquote><p>788cad0cf8bb6108d962967adc6a082b2be10bf9</p><p>为上一次正常提交的节点。git log可以查看到。</p></blockquote><p><strong>需要恢复到上一次正常提交的commit节点。</strong></p><p>这样<code>reset</code>不会影响到工作区已经修改的文件， 然后再<code>git add .</code><code>git commit</code><code>git push</code> 。</p><p>还有一种方法，可参考：https://www.jianshu.com/p/10f5382a7133</p>',7),i={render:function(e,t){return a}}}}]);
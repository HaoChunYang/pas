(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[1886],{3306:(e,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-653861b0",path:"/Git/git%E4%BF%AE%E6%94%B9%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E5%9C%B0%E5%9D%80.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"直接修改远程仓库地址",slug:"直接修改远程仓库地址",children:[]},{level:2,title:"先删除再修改地址",slug:"先删除再修改地址",children:[]},{level:2,title:"直接修改配置文件",slug:"直接修改配置文件",children:[]}],filePathRelative:"Git/git修改远程仓库地址.md",git:{updatedTime:1625029434e3}}},7881:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});const t=(0,a(6252).uE)('<h2 id="直接修改远程仓库地址"><a class="header-anchor" href="#直接修改远程仓库地址">#</a> 直接修改远程仓库地址</h2><p>查看远程仓库地址</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote -v\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改远程仓库地址</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote set-url origin [url]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="先删除再修改地址"><a class="header-anchor" href="#先删除再修改地址">#</a> 先删除再修改地址</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote rm origin\ngit remote add origin [url]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="直接修改配置文件"><a class="header-anchor" href="#直接修改配置文件">#</a> 直接修改配置文件</h2><p>进入项目根目录</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim .git/config\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>找到<code>[remote “origin”]</code>下的 url，改成新地址即可</p>',11),n={render:function(e,s){return t}}}}]);
(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[8533],{826:(e,s,n)=>{"use strict";n.r(s),n.d(s,{data:()=>t});const t={key:"v-f725d5b8",path:"/Git/git%E4%B8%8A%E5%88%A0%E9%99%A4%E5%B7%B2%E7%BB%8F%E6%8F%90%E4%BA%A4%E7%9A%84.DS_Store%E6%96%87%E4%BB%B6.html",title:"git上删除已经提交的.DS_Store文件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"Git/git上删除已经提交的.DS_Store文件.md",git:{updatedTime:1600755955e3}}},5064:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>a});const t=(0,n(6252).uE)('<h1 id="git上删除已经提交的-ds-store文件"><a class="header-anchor" href="#git上删除已经提交的-ds-store文件">#</a> git上删除已经提交的<code>.DS_Store</code>文件</h1><p>删除项目中的所有.DS_Store。这会跳过不在项目中的 .DS_Store</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> -name .DS_Store -print0 <span class="token operator">|</span> <span class="token function">xargs</span> -0 <span class="token function">git</span> <span class="token function">rm</span> -f --ignore-unmatch\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>将 .DS_Store 加入到 .gitignore</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> .DS_Store <span class="token operator">&gt;&gt;</span> ~/.gitignore\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>更新项目</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> --all\n<span class="token function">git</span> commit -m <span class="token string">&#39;.DS_Store banished!&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>注意在新建git管理时，创建<code>.gitignore</code>文件。</strong></p><p><strong>注意在新建git管理时，创建<code>.gitignore</code>文件。</strong></p><p><strong>注意在新建git管理时，创建<code>.gitignore</code>文件。</strong></p><ul><li>如果你只需要删除磁盘上的 <code>.DS_Store</code>，可以使用下面的命令来删除当前目录及其子目录下的所有<code>.DS_Store</code> 文件:</li></ul><p><code>find . -name &#39;*.DS_Store&#39; -type f -delete</code></p><ul><li>禁用或启用自动生成</li></ul><p>禁止.DS_store生成： <code>defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE</code></p><ul><li>恢复.DS_store生成：</li></ul><p>恢复.DS_store生成： <code>defaults delete com.apple.desktopservices DSDontWriteNetworkStores</code></p>',16),a={render:function(e,s){return t}}}}]);
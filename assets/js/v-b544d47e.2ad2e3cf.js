(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[5411],{7087:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-b544d47e",path:"/Git/git_branch%E6%9C%AC%E5%9C%B0%E3%80%81%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86.html",title:"git branch本地、远程分支管理",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"Git/git_branch本地、远程分支管理.md",git:{updatedTime:1600918294e3}}},8838:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="git-branch本地、远程分支管理"><a class="header-anchor" href="#git-branch本地、远程分支管理">#</a> git branch本地、远程分支管理</h1><ul><li>查看本地分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch 列出当前分支清单\n\n<span class="token function">git</span> branch -a 查看远程分支和本地分支\n\n<span class="token function">git</span> branch -v 查看各个分支最后一个提交信息\n\n<span class="token function">git</span> branch --merged 查看哪些分支已经合并入当前分支\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>切换本地分支</li></ul><p>git checkout 分支名</p><ul><li>拉取远程分支</li></ul><p><s>git pull origin 远程分支名</s><strong>发现不在小心在其他分支上直接执行上面命令拉取时，把所在分支内容变成远程分支的内容了，不知道怎么操作变回来了。（所以还是不用这个了。使用<code>git checkout 远程分支名</code>吧）</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>当在本地拉取远程分支并在本地对应分支时，也可以git pull直接拉取\n\n<span class="token function">git</span> fetch origin 同步远程服务器的数据到本地\n\n<span class="token function">git</span> checkout -b <span class="token builtin class-name">test</span> origin/test_remote 将远程分支test_remote拉取下来到本地test分支\n\n<span class="token function">git</span> checkout <span class="token builtin class-name">test</span> 将远程分支test拉取下来到本地test分支\n\n<span class="token function">git</span> pull test从远程分支test 中checkout下来的本地分支test成为跟踪分支，使用git pull或者git push就会操作到对应的远程分支test\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>推送远程分支</li></ul><p>git push origin 远程分支名</p><p>当处在本地的远程分支时，也可以git push直接推送</p><ul><li>删除分支</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -d test：删除本地test分支\n\n<span class="token function">git</span> branch -D test： test分支还没有合入当前分支，所以要用-D参数才能删掉。\n\n<span class="token function">git</span> push origin --delete <span class="token builtin class-name">test</span> 删除远程test分支\n\n<span class="token function">git</span> push origin :test 删除远程test分支\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',13),t={render:function(n,s){return e}}}}]);
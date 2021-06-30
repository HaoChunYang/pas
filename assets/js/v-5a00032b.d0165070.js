(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[7253],{2972:(e,t,s)=>{"use strict";s.r(t),s.d(t,{data:()=>o});const o={key:"v-5a00032b",path:"/old_blog/git%E4%BD%BF%E7%94%A8ssh%E6%96%B9%E5%BC%8F%E9%85%8D%E7%BD%AEssh-keygen.html",title:"2、将ssh key添加到git中",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"old_blog/git使用ssh方式配置ssh-keygen.md",git:{updatedTime:1597237797e3}}},2417:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});const o=(0,s(6252).uE)('<p>#1、生成ssh key文件，在<code>~</code>目录下执行<code>ssh-keygen -t rsa -C &quot;xxx.xxx.com&quot;</code>;</p><pre><code>- t 指定密钥类型，默认是 rsa ，可以省略\n\n-C 设置注释文字，比如git的地址。\n\n-f 指定密钥文件存储文件名，我们省略了命令执行的时候会让你选择文件名，直接回车就会保存在默认的位置。\n\n然后会让你输入两次密码，最后出现 key fingerprint和 key&#39;s randomart 就表示创建成功了。\n</code></pre><h1 id="_2、将ssh-key添加到git中"><a class="header-anchor" href="#_2、将ssh-key添加到git中">#</a> 2、将ssh key添加到git中</h1><p><code>vi id_rsa.pub</code> 然后复制文件内容，进入git页面，个人设置<code>User setting</code>页面，<code>SSH Keys</code>设置页面，在Key文本框中输入复制的内容，然后点<code>Add Key按钮</code>完成添加。</p><h1 id="_3、测试连接你的git地址"><a class="header-anchor" href="#_3、测试连接你的git地址">#</a> 3、测试连接你的git地址</h1><p><code>ssh -T git@xxx.xxx.com</code> 输入正确密码后如果出现<code>Welcome</code>就是连接成功了。</p><p><strong>接下来就可以通过<code>git clone git@xxx.xxx.com:xxx </code>来下载代码了.</strong></p>',7),d={render:function(e,t){return o}}}}]);
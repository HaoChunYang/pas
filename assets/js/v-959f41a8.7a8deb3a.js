(self.webpackChunkbugu=self.webpackChunkbugu||[]).push([[2835],{2577:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>l});const l={key:"v-959f41a8",path:"/old_blog/springboot%E4%B9%8Bjar%E5%8C%85%E9%83%A8%E7%BD%B2%E6%AD%A5%E9%AA%A4.html",title:"springboot之jar包部署步骤",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"eclipse中:",slug:"eclipse中",children:[]},{level:2,title:"linux中部署项目:",slug:"linux中部署项目",children:[]},{level:2,title:"linux部署项目常用指令:",slug:"linux部署项目常用指令",children:[]},{level:2,title:"linux常用指令:",slug:"linux常用指令",children:[]}],filePathRelative:"old_blog/springboot之jar包部署步骤.md",git:{updatedTime:1597237797e3}}},954:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>s});const l=(0,a(6252).uE)('<h1 id="springboot之jar包部署步骤"><a class="header-anchor" href="#springboot之jar包部署步骤">#</a> springboot之jar包部署步骤</h1><h2 id="eclipse中"><a class="header-anchor" href="#eclipse中">#</a> eclipse中:</h2><ol><li>单击整个项目 run as - maven clean - maven install</li><li>找到项目所在的路径 找到所有的jar包</li><li>把jar包放到linux对应的文件夹</li></ol><h2 id="linux中部署项目"><a class="header-anchor" href="#linux中部署项目">#</a> linux中部署项目:</h2><ol><li>查看jar是否在运行中<code> ps -ef | grep SpliderWeb-0.0.1-SNAPSHOT.jar</code></li><li>有运行的jar包 杀死对应的进程 kill 进程号</li><li>无运行的jar包 部署项目 <code>java -jar SpliderWeb-0.0.1-SNAPSHOT.jar</code> 后台运行jar包 <code>$ nohup java -jar SpliderWeb-0.0.1-SNAPSHOT.jar &amp;</code></li></ol><h2 id="linux部署项目常用指令"><a class="header-anchor" href="#linux部署项目常用指令">#</a> linux部署项目常用指令:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    a: ll  查询目录结构并显示文件的时间\n    b: rm -rf  文件名.文件类型 (rm -rf 192.168.7.2.zip)  删除文件\n    c: ps -ef|grep jar包名.jar (ps -ef|grep SpliderWeb-0.0.1-SNAPSHOT) 查看jar包是否在运行\n    d: kill -9 端口号(kill -9 24070)  杀死正在运行的程序\n    e: rm -rf *.后缀名 (rm  -rf  *.jar) 删除所有后缀名相同的文件\n    f: cp 192.168.1.1\\(1\\).zip  /usr/local/Splider  复制当前文件到指定的目录\n    g: unzip 192.168.1.1\\(1\\).zip   解压zip包\n    h: chmod -R 777 *.jar   赋予指定的文件权限\n    i: nohup java -jar Spliderweb-0.0.1-SNAPSHOT.jar 后台运行jar文件\n    j: tail -f nohup.out\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="linux常用指令"><a class="header-anchor" href="#linux常用指令">#</a> linux常用指令:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    find / -name mongo   查找指定程序所在的目录\n    (/root/mongo/mongodb-3.4.5/bin/mongo)\n    ./mongo (进入mongo所在的bin目录执行mongo程序)\n    show dbs\n    use splider-site\n    show tables\n    db.集合名.find() 查看集合数据\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',9),s={render:function(e,n){return l}}}}]);
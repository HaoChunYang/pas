module.exports = {
  lang: 'zh-CN',
  title: 'bugu 站',
  description: 'bug + u 站 Problem Analysis Solution',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    // 增加一个自定义的 favicon(网页标签的图标)
    ['script', {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?738d580665aa62790e3b196747471f25";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `],
    ['script', {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://s9.cnzz.com/z_stat.php?id=1279283349&web_id=1279283349";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `]
  ],
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.jpg',

    //关联到git
    // repo: 'haochunyang/pas',
    // repoLabel: '查看源码',

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'haochunyang/pas',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '完善此页面信息',

    //最后修改时间
    lastUpdatedText: '最后更新',
    contributors: false,
    contributorsText: '贡献者',

    backToHome: '返回首页',

    navbar: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: 'iOS', link: '/iOS/' },
      { text: 'Git', link: '/Git/' },
      { text: 'vue', link: '/vue/' },
      { text: '小白玩单词', link: '/PlayWords/' },
      { text: '未分类', link: '/unclassified/' },
      {
        text: '更多》',
        children: [
          { text: 'Rust', link: 'https://www.rust-lang.org/zh-CN/' }
        ]
      }

      // {text: '大牛会议室', link: '/unclassified/'}
      // {text: '微博', link: 'https://baidu.com'}      
    ],
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    // sidebar: [
    //   '/vue',
    //   '/iOS',
    //   '/Git',
    //   // ['/Git', 'Explicit link text']
    // ],

    sidebar: {
      'guide': [
        ['', '浏览笔记'],
      ],
      '/Git/': [
        ['', 'Git使用'],
        {
          title: 'Git常用命令',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['git', 'git常用命令'],
            ['git常用命令', 'git常用命令'],
            // ['git', 'git常用命令'],
          ]
        }
      ],
      '/iOS/': [
        {
          title: 'iOS',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['', '文章列表'],
            ['CodeSnippet/', 'iOS代码片段'],
            ['MarkLink/', 'Mark Link'],
          ]
        }

        // ['', '环境配置'],
        // ['masOS升级后找不到pod命令', 'masOS升级后找不到pod命令']
      ]
    },

    // displayAllHeaders: true // 默认值：false
  }
}
module.exports = {
  title: 'PAS.wiki',
  description: 'Problem Analysis Solution',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/pas/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    logo: '/logo.jpg',
    nav:[ // 导航栏配置
      {text: 'iOS', link: '/iOS/' },
      {text: 'Git', link: '/Git/'},
      {text: 'vue', link: '/vue/'}
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
      ] ,
      '/iOS/': [
        {
          title: '环境配置',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['masOS升级后找不到pod命令', 'masOS升级后找不到pod命令'],       
          ]
        }

        // ['', '环境配置'],
        // ['masOS升级后找不到pod命令', 'masOS升级后找不到pod命令']
      ]
    },

    // displayAllHeaders: true // 默认值：false
  }
}
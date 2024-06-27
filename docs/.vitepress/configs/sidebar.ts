import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/nav/': [
    {
      text: '支持游戏与教程',
      collapsed: false,
      items: [
        {
      text: '首页',
      link: '/'
    },{
      text: '常见游戏支持与教程',
      link: '/nav/'
    },{
      text: '常见问题',
      link: '/q/'
        },{
      text: '官群交流',
      link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Efi8sPn6xklr_fUBZoeiazbMqTtJS_Oh&authKey=%2BIUJLJvZTvJMV6IpAUre1hTLdiVOfKBjERPhgOpfb0uVv9Bwd4Bc9%2Bp277u0VUfk&noverify=0&group_code=621320122'
     },{
      text: '更新日志',
      link: '/q/hope'
     }
      ]
    }
  ],
  '/q/': [
    {
      text: '常见问题',
      // collapsed: false,
      items: [
     {
      text: '首页',
      link: '/'
    },{
      text: '常见游戏支持与教程',
      link: '/nav/'
    },{
      text: '常见问题',
      link: '/q/'
     },{
      text: '官群交流',
      link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Efi8sPn6xklr_fUBZoeiazbMqTtJS_Oh&authKey=%2BIUJLJvZTvJMV6IpAUre1hTLdiVOfKBjERPhgOpfb0uVv9Bwd4Bc9%2Bp277u0VUfk&noverify=0&group_code=621320122'
     },{
      text: '更新日志',
      link: '/q/hope'
     }
      ]
    }
  ]
}

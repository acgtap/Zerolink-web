import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/', activeMatch: '^/' },,
  { text: '快速下载', link: '/download', activeMatch: '^/download' },
  { text: '游戏支持与教程', link: '/nav', activeMatch: '^/nav' },
  { text: '常见问题', link: '/q/index', activeMatch: '^/q/index' },
  { text: '游戏资源', link: 'https://www.cngame.wiki', activeMatch: '^/q/index' },
  { text: '官群交流', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Efi8sPn6xklr_fUBZoeiazbMqTtJS_Oh&authKey=%2BIUJLJvZTvJMV6IpAUre1hTLdiVOfKBjERPhgOpfb0uVv9Bwd4Bc9%2Bp277u0VUfk&noverify=0&group_code=621320122'},
  { text: '更新日志', link: '/q/hope', activeMatch: '^/q/hope' },
]

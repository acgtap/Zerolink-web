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
     }
      ]
    }
  ]
}

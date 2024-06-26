import type { HeadConfig } from 'vitepress'

const isDevelopment = process.env.NODE_ENV === 'development'

export const head: HeadConfig[] = [
  [
    'meta',
    {
      name: 'keywords',
      content: '虚拟局域网,异地组网,免费联机工具,远程联机,局域网联机,游戏联机,MC联机'
    }
  ],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
  ['meta', { name: 'baidu-site-verification', content: 'codeva-Whjnr38WFE' }],
  ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
  ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c' }],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['script', { src: isDevelopment ? '' : '' }],
  ['script', { src: 'https://unpkg.com/sweetalert/dist/sweetalert.min.js' }],
  [
    'script',
    {},
    `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?15ddeedf3e60ada272e4eb8d0a279569";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
  ],
  [
    'script',
    {},
    `function getQueryParam(name){
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }
  const roomId = getQueryParam('roomid');
  var roomid=roomId;
  window.roomid=roomId;
  
  if (roomId) {
    const newUrl = 'yyds://room/'+roomId;
    window.location.href = newUrl;
    // swal({
    //   title: "集合啦！",
    //   text: "你的好友邀请你加入他的房间，是否立即加入？",
    //   icon: "success",
    //   button: "Aww yiss!",
  
    // }).then((value) => {
    //   window.location.href = newUrl;
    // });
  }`
  ]
]

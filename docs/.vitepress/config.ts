import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/use-echarts/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'use-echarts',
      description: 'Vue 3 ECharts wrapper + composable',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '入门指南', link: '/guide/getting-started' },
          { text: '演示示例', link: '/examples/minimal' }
        ],
        sidebar: [
          {
            text: '开发指南',
            items: [
              { text: '安装入门', link: '/guide/getting-started' }
            ]
          },
          {
            text: '演示示例',
            items: [
              { text: '极简折线图', link: '/examples/minimal' },
              { text: '响应式演示', link: '/examples/resize' },
              { text: 'Slot 布局避让', link: '/examples/slots' },
              { text: '默认 Slot 叠加', link: '/examples/overlay' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'use-echarts',
      description: 'Vue 3 ECharts wrapper + composable',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/guide/getting-started' },
          { text: 'Examples', link: '/en/examples/minimal' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Getting Started', link: '/en/guide/getting-started' }
            ]
          },
          {
            text: 'Examples',
            items: [
              { text: 'Minimal Line', link: '/en/examples/minimal' },
              { text: 'Responsive Resize', link: '/en/examples/resize' },
              { text: 'Slot Layout', link: '/en/examples/slots' },
              { text: 'Overlay Content', link: '/en/examples/overlay' }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ccwq/use-echarts' }
    ]
  }
})

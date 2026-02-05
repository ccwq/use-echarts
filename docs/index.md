---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "use-echarts"
  text: "Vue 3 ECharts 包装组件"
  tagline: 简单、响应式、灵活的 ECharts 组合式封装
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看示例
      link: /examples/minimal

features:
  - title: 响应式设计
    details: 基于 ResizeObserver，图表自动根据容器尺寸缩放，无需手动调用 resize。
  - title: 组合式 API
    details: 提供 useEcharts Hook，让图表逻辑与 UI 分离，支持 setOptions/getOptions。
  - title: Slot 扩展
    details: 内置 header/footer 插槽，图表内容自动避让，支持在饼图中心叠加自定义内容。
---

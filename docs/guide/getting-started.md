# 安装入门

`@ioto/use-echarts` 是一个轻量级的 Vue 3 ECharts 包装组件和组合式 API (Composable)。

## 安装

使用你喜欢的包管理器安装：

```bash
npm install @ioto/use-echarts echarts
# 或者
pnpm add @ioto/use-echarts echarts
```

## 快速使用

下面的示例均包含可运行的 Demo（位于代码块上方）。如果你在 SSR 环境中查看文档，Demo 会自动在客户端渲染。

### 使用 Composable (`useEcharts`)

这是推荐的使用方式，它提供了更好的灵活性。

<DemoMinimal />

```vue
<script setup lang="ts">
import { useEcharts } from '@ioto/use-echarts'

const { EChartComponent, setOptions } = useEcharts({
  // 初始配置（可选）
})

setOptions({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: { type: 'value' },
  series: [{
    data: [150, 230, 224, 218, 135, 147, 260],
    type: 'line'
  }]
})
</script>

<template>
  <div style="height: 400px">
    <EChartComponent />
  </div>
</template>
```

### 使用组件 (`ECharts.vue`)

如果你只需要一个简单的包装器，也可以直接使用组件。

<DemoResize />

```vue
<script setup lang="ts">
import { ECharts } from '@ioto/use-echarts'

const options = {
  xAxis: { type: 'category', data: ['A', 'B', 'C'] },
  yAxis: { type: 'value' },
  series: [{ type: 'bar', data: [1, 2, 3] }]
}
</script>

<template>
  <ECharts :options="options" style="height: 400px" />
</template>
```

## 核心特性

- **自动响应**: 内部集成 `ResizeObserver`，当容器大小变化时自动调用图表的 `resize()` 方法。
- **Slot 支持**: 提供 `header`、`footer` 和默认插槽（用于覆盖在图表上的内容）。
- **生命周期管理**: 自动处理实例的销毁与更新。

## 更多演示

<DemoSlots />

```vue
<template>
  <ECharts :options="options" style="height: 360px;">
    <template #header>
      <div>自定义标题</div>
    </template>
    <template #footer>
      <div>更新时间：2024-01-01</div>
    </template>
  </ECharts>
</template>
```

<DemoOverlay />

```vue
<template>
  <ECharts :options="donutOption" style="height: 360px;">
    <div class="center-overlay">9,823</div>
  </ECharts>
</template>
```

## 文档开发与发布

本项目使用 VitePress 编写文档。

### 本地预览

```bash
# 安装依赖
npm install

# 启动本地开发服务器
npm run docs:dev
```

### 构建与发布

文档会自动通过 GitHub Actions 在你推送代码到 `main` 或 `master` 分支时进行构建和发布。

如果你想在本地构建并预览生产版本：

```bash
# 构建文档
npm run docs:build

# 预览构建产物
npm run docs:preview
```

### GitHub Pages 配置

1. 进入 GitHub 仓库设置 (Settings)。
2. 选择 **Pages**。
3. 在 **Build and deployment** > **Source** 下选择 **GitHub Actions**。
4. 之后每次推送代码，GitHub Actions 都会自动更新你的文档网站。

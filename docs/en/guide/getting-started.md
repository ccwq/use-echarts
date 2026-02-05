# Getting Started

`@ioto/use-echarts` is a lightweight Vue 3 ECharts wrapper and composable API.

## Install

```bash
npm install @ioto/use-echarts echarts
# or
pnpm add @ioto/use-echarts echarts
```

## Quick Start

The demos below are runnable and appear above the code snippets. In SSR contexts, demos render on the client side.

### Using the Composable (`useEcharts`)

<DemoMinimal />

```vue
<script setup lang="ts">
import { useEcharts } from '@ioto/use-echarts'

const { EChartComponent, setOptions } = useEcharts({})

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

### Using the Component (`ECharts.vue`)

<DemoResize label="Container width" />

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

## Key Features

- **Auto Resize**: ResizeObserver triggers chart resize when the container changes.
- **Slot Support**: `header`, `footer`, and default slots for overlays.
- **Lifecycle Management**: Handles disposal and updates automatically.

## More Demos

<DemoSlots title="Chart with Header/Footer" subtitle="Auto-avoids regions" footerText="Updated: 2024-01-01" />

```vue
<template>
  <ECharts :options="options" style="height: 360px;">
    <template #header>
      <div>Custom header</div>
    </template>
    <template #footer>
      <div>Updated: 2024-01-01</div>
    </template>
  </ECharts>
</template>
```

<DemoOverlay label="Total Assets" value="9,823" />

```vue
<template>
  <ECharts :options="donutOption" style="height: 360px;">
    <div class="center-overlay">9,823</div>
  </ECharts>
</template>
```

## Docs Dev & Publish

### Local Preview

```bash
npm install
npm run docs:dev
```

### Build & Preview

```bash
npm run docs:build
npm run docs:preview
```

### GitHub Pages

1. Open repository Settings.
2. Go to **Pages**.
3. Set **Build and deployment** > **Source** to **GitHub Actions**.
4. Push to `main` or `master` to trigger deployment.

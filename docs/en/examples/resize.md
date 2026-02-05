# Responsive Resize

`@ioto/use-echarts` integrates `ResizeObserver`, so the chart resizes with its container without manual `resize()` calls.

## Demo

Resize the container width to see the chart adapt.

<DemoResize label="Container width" />

```vue
<template>
  <div :style="{ width: containerWidth + 'px', height: '400px' }">
    <ECharts :options="options" />
  </div>
</template>
```

## How it works

```ts
const ro = new ResizeObserver(() => {
  instance?.resize();
});
ro.observe(containerRef);
```

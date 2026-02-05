# 容器自适应

`@ioto/use-echarts` 内部集成了 `ResizeObserver`，这意味着你不再需要手动监听窗口 `resize` 事件或者手动调用 `echartsInstance.resize()`。

## 特性说明

- **自动感知**: 无论是因为窗口缩放、侧边栏收起，还是通过 CSS 动画改变了容器大小，组件都能实时捕捉并更新图表尺寸。
- **性能优化**: 内部处理了防抖与销毁逻辑，确保性能开销最小。

## 示例演示

当你拖动浏览器窗口大小，或者改变下面容器的宽度时，图表会自动填充可用空间。

<DemoResize />

```vue
<template>
  <!-- 改变这个 div 的宽度，图表会自动随之改变 -->
  <div :style="{ width: containerWidth + 'px', height: '400px' }">
    <ECharts :options="options" />
  </div>
</template>
```

## 实现原理

组件在挂载时会创建一个 `ResizeObserver` 实例并观察根元素：

```ts
const ro = new ResizeObserver(() => {
  instance?.resize();
});
ro.observe(containerRef);
```

# Slot 布局避让

组件提供了 `header` 和 `footer` 插槽，允许你在图表容器内放置自定义的标题、工具栏或底栏。

## 布局逻辑

图表容器采用 Flex 布局（Column 方向）。当你插入 `header` 或 `footer` 时，中间存放 ECharts 实例的容器会自动占据剩余空间，且由于集成了 `ResizeObserver`，它能确保 ECharts 实例始终填满该动态分配的区域。

## 示例演示

<DemoSlots />

## 示例代码

```vue
<template>
  <ECharts :options="options" style="height: 500px; border: 1px solid #eee">
    <template #header>
      <div style="padding: 10px; background: #f9f9f9; border-bottom: 1px solid #eee">
        <h3 style="margin: 0">自定义标题</h3>
        <small>图表内容会自动避让此区域</small>
      </div>
    </template>

    <template #footer>
      <div style="padding: 10px; text-align: right; color: #999">
        数据更新于：2024-01-01
      </div>
    </template>
  </ECharts>
</template>
```

## 优势

- **无需计算**: 你不需要手动减去 header/footer 的高度来设置图表高度。
- **结构清晰**: 将业务 UI 与图表内容解耦，保持 HTML 结构语义化。

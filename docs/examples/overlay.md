# 默认 Slot 叠加内容

默认插槽的内容会以绝对定位的方式覆盖在图表正上方。这在制作环形图（Donut Chart）并在中心显示总数或描述文字时非常有用。

## 示例场景：环形图中心文字

通过设置图表 `series` 的 `radius` 为环形，并在默认插槽中放置居中的 HTML 元素。

## 示例演示

<DemoOverlay />

## 示例代码

```vue
<template>
  <div style="height: 400px; position: relative">
    <ECharts :options="donutOption">
      <!-- 默认插槽内容将覆盖在图表上 -->
      <div class="center-overlay">
        <div class="total-label">总资产</div>
        <div class="total-value">9,823</div>
      </div>
    </ECharts>
  </div>
</template>

<style scoped>
.center-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none; /* 确保不影响图表的鼠标事件 */
}

.total-label {
  font-size: 14px;
  color: #666;
}

.total-value {
  font-size: 28px;
  font-weight: bold;
  background: linear-gradient(135deg, #4f8ef7 0%, #74c0fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 6px 14px rgba(79, 142, 247, 0.35);
}
</style>
```

## 注意事项

- **层级**: 默认插槽的 `z-index` 高于图表 Canvas/SVG。
- **交互**: 建议为叠加层设置 `pointer-events: none`，以免拦截图表的 Tooltip 触发或点击事件。

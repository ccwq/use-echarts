# Overlay Content

Use the default slot to place HTML content over the chart. This is perfect for donut charts with centered text.

<DemoOverlay label="Total Assets" value="9,823" />

```vue
<template>
  <ECharts :options="donutOption" style="height: 360px;">
    <div class="center-overlay">9,823</div>
  </ECharts>
</template>
```

## Notes

- **Layering**: The overlay sits above the chart canvas.
- **Interaction**: Set `pointer-events: none` to avoid blocking tooltips.

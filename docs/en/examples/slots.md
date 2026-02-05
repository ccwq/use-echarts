# Slot Layout

Use `header` and `footer` slots to place UI around the chart. The chart area automatically avoids these regions.

<DemoSlots title="Chart with Header/Footer" subtitle="Auto-avoids regions" footerText="Updated: 2024-01-01" />

```vue
<template>
  <ECharts :options="options" style="height: 500px; border: 1px solid #eee">
    <template #header>
      <div>Custom header</div>
    </template>
    <template #footer>
      <div>Updated: 2024-01-01</div>
    </template>
  </ECharts>
</template>
```

## Benefits

- **No manual sizing**: The chart area automatically adjusts.
- **Clear structure**: Business UI stays separate from chart content.

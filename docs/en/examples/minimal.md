# Minimal Line Chart

This is the most basic example showing how to render a simple line chart.

<DemoMinimal />

## Configuration

```ts
const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: { type: 'value' },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }
    ]
};
```

::: tip
The chart automatically resizes with its container.
:::

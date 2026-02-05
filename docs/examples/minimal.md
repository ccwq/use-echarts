# 极简折线图

这是一个最基础的示例，展示了如何使用 `useEcharts` 渲染一个简单的折线图。

## 演示

<DemoMinimal />

## 配置代码

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
在文档环境中，图表组件会自动响应父容器的大小。
:::

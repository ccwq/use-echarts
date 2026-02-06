# use-echarts

一个面向 Vue 3 的 ECharts 封装组件 + 组合式 API（`useEcharts`），提供插槽布局与容器尺寸监听，方便在业务中快速接入图表。

English documentation: `README.md`.

## 安装

```bash
npm i use-echarts echarts
```

本包使用 peerDependencies，请在宿主项目中安装对应依赖。

## 快速开始

```ts
import { useEcharts } from "use-echarts";

const { EChartComponent, setOptions } = useEcharts({});

setOptions({
    series: [{ type: "bar", data: [1, 2, 3] }],
});
```

在 Vue 组件中渲染 `EChartComponent` 即可。

## API

### `useEcharts(options?)`

返回：

- `EChartComponent`：用于渲染图表的组件
- `setOptions(options)`：设置 option 对象或 `setOption` 参数数组
- `getOptions()`：获取最近一次设置的 options
- `getInstance()`：获取 ECharts 实例（ready 前为 `null`）

## 依赖说明（peerDependencies）

- `vue`（Vue 3）
- `echarts`

可选依赖：

- `echarts-gl`
- `echarts-liquidfill`

## SSR 说明

该库依赖浏览器 API（如 `ResizeObserver`），需要在客户端环境运行。

## 本地开发

```bash
npm i
npm test
npm run build
```

## 发布（npm + GitHub）

建议流程：

1. 更新版本号（semver）
2. 运行 `npm run build` 与 `npm test`
3. 运行 `npm run pack:check` 检查发布内容
4. 执行 `npm publish`
5. 打 git tag，并在 GitHub 创建 Release（整理变更说明）

## License

MIT，见 `LICENSE`。

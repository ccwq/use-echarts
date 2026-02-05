# use-echarts

Vue 3 ECharts wrapper component + composable (`useEcharts`) for building charts with a clean API, slot-based layout, and resize handling.

For Chinese documentation, see: `README.zh-CN.md`.

## Install

```bash
npm i use-echarts echarts
```

This package uses peer dependencies.

## Quick Start

```ts
import { useEcharts } from "use-echarts";

const { EChartComponent, setOptions } = useEcharts({});

setOptions({
    series: [{ type: "bar", data: [1, 2, 3] }],
});
```

Render `EChartComponent` in Vue.

## API

### `useEcharts(options?)`

Returns:

- `EChartComponent`: Vue component that renders the chart
- `setOptions(options)`: sets ECharts option object or `setOption` args array
- `getOptions()`: gets last set options
- `getInstance()`: returns ECharts instance or `null` before ready

## Peer Dependencies

- `vue` (Vue 3)
- `echarts`

Optional:

- `echarts-gl`
- `echarts-liquidfill`

## SSR

This library uses browser APIs (e.g. `ResizeObserver`) and must run on the client.

## Development

```bash
npm i
npm test
npm run build
```

## Release

Checklist:

1. Update version (semver)
2. Run `npm run build` and `npm test`
3. Run `npm run pack:check`
4. Publish: `npm publish`
5. Create git tag and GitHub release notes

## License

MIT. See `LICENSE`.

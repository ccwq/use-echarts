# Repository Guidelines

## 项目结构与模块组织
- `src/`：核心源码与对外暴露入口。
  - `src/ECharts.vue`：ECharts 包装组件（Vue SFC，`lang="pug"` + `lang="ts"` + `lang="less"`），负责实例创建、尺寸监听与插槽布局。
  - `src/useEcharts.tsx`：组合式封装（TSX），将组件封装为可复用的组合式 API，并提供 `setOptions/getOptions` 等方法。
- 目前未发现测试目录或构建配置文件，说明该仓库更像可被宿主项目直接引入的组件/工具模块。
 - 如需新增模块，优先放在 `src/` 下，并保持与现有组件同级，避免过早引入复杂目录层级。

## 构建、测试与本地开发命令
- 仓库内未提供 `package.json` 或脚本定义，因此没有固定的 `build/test/dev` 命令可直接运行。
- 实际开发与调试通常应在宿主项目中完成，请使用宿主项目现有脚本，例如：`pnpm dev`、`npm run build`（以宿主项目为准）。
- 若需要安装依赖，请参照源码注释与 import：`vue`、`echarts`、`echarts-gl`、`echarts-liquidfill`、`lodash`。如宿主项目使用其他包管理器，请保持一致。
 - 本仓库不约束 Node 版本，请遵循宿主项目的运行时与锁文件策略。

## 编码风格与命名约定
- 缩进使用 4 个空格，避免使用 Tab；保持与现有文件风格一致。
- 组件命名采用 PascalCase（如 `ECharts`），组合式函数采用 camelCase 且以 `use` 前缀（如 `useEcharts`）。
- 事件回调与变量命名清晰明确：如 `handleReady`、`echartsInstRef`，优先表达意图而不是实现细节。
- 若新增类型定义，请使用显式类型别名并置于文件顶部，便于维护与复用。
 - 若新增 Props，请在 `EChartsProps` 中补充说明，并避免使用过于宽泛的 `any`。

## 测试指南
- 当前仓库未包含测试框架与用例，因此无法直接运行单元测试。
- 如需补充测试，建议以宿主项目的测试栈为准，并遵循其命名与目录规范（例如 `*.spec.ts` 或 `*.test.ts`）。
- 若引入可测试逻辑（如 options 处理、事件绑定），可先抽离为纯函数后再编写测试。

## 架构概览
- `useEcharts` 负责维护 `options` 与实例引用，并暴露 `EChartComponent` 作为可渲染组件。
- `ECharts.vue` 在 `onMounted` 中初始化实例并通过 `watch` 更新配置，`ResizeObserver` 负责容器变化时的 `resize`。
- 事件流向：外部通过 `props.on` 传入监听器，内部统一注册到实例；实例准备完成后通过 `ready` 向外部返回引用。

## 提交与 PR 规范
- 当前目录不是 Git 仓库，无法从历史记录推断提交规范与分支策略。
- 若在宿主项目中提交，建议采用简明动词开头的提交信息（如 `feat: add resize handling` 或 `fix: avoid null ref`）。
- PR 应包含：变更原因、影响范围、使用方式说明；如涉及 UI 变更，请提供截图或录屏。

## 额外说明（配置与使用）
- `ECharts.vue` 在 `ready` 事件中返回实例，可用于外部注册事件与二次控制；`useEcharts` 也会在回调中缓存实例引用。
- 组件使用插槽扩展头部、内容与底部区域，扩展时请保持结构一致，避免破坏 `ResizeObserver` 的尺寸计算。
- `options` 支持数组形式以透传 `setOption` 参数；若传对象则会合并并启用 `darkMode`，请注意与主题设置的协同。
- 简单使用示例（宿主项目中）：

```tsx
const { EChartComponent, setOptions } = useEcharts({});
setOptions({ series: [{ type: "bar", data: [1, 2, 3] }] });
```

## 配置与兼容性提示
- 组件依赖浏览器 API（如 `ResizeObserver`），若在 SSR 场景使用需确保仅在客户端渲染。
- 若在 `onMounted` 之前调用 `setOptions`，当前实现会先缓存配置，实例创建后自动应用，无需额外等待逻辑。

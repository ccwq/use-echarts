## Context

当前仓库提供了一个基于 Vue 的 ECharts 封装（`src/ECharts.vue` + `src/useEcharts.tsx`），但缺少作为可发布 npm 包所需的工程化要素：标准化构建产物（`dist/`）、清晰的对外导出与类型声明、双语文档、测试用例，以及面向 GitHub / npm 的发布约定。

该变更目标是把“可直接被宿主项目引用的源码模块”升级为“可开源发布的前端 packages”，并确保在常见消费方式下（Vite/Webpack、TS/JS、Vue 3）可稳定使用。

约束与现状：

- 代码体量小，核心输出以库形式发布更合适，而不是应用打包。
- 组件依赖浏览器 API（如 `ResizeObserver`），SSR 场景需在文档中明确限制。
- 依赖生态：`vue`、`echarts`（以及可选的 `echarts-gl`、`echarts-liquidfill`）更适合作为 `peerDependencies`，避免重复打包与版本冲突。

## Goals / Non-Goals

**Goals:**

- 提供 Vite library mode 构建：输出 ESM/CJS（或按需要仅 ESM）与 `.d.ts` 类型声明。
- 明确包的 exports：提供稳定的入口（例如 `import { useEcharts, ECharts } from <pkg>`）。
- 完整的开源资料：中英文 `README.md`（安装、快速上手、API、示例、FAQ、贡献与发布）、`LICENSE`。
- 引入测试并提供可运行的用例：优先测试纯逻辑（例如 `useEcharts` 的 options 管理）与可模拟的组件行为。
- 给出 npm + GitHub 发布流程约定（版本号、tag、release notes/变更记录）。

**Non-Goals:**

- 不在本变更中引入大规模新功能（例如新增图表类型封装或复杂主题系统）。
- 不保证所有打包器/运行时的兼容性矩阵（例如 Vue2、老旧浏览器）；以 Vue3 + 现代构建为主。
- 不构建在线 demo 站点（可以作为后续独立 change）。

## Decisions

- 构建工具选择：使用 Vite 进行库构建。
  - 理由：与现代前端生态兼容，库模式配置简单；可结合 TypeScript 生成声明文件。
  - 备选：Rollup 直配、tsup。Vite 更贴近常见使用场景，维护成本更低。

- 产物与导出策略：
  - 采用 `exports` 字段定义入口与类型路径，避免深层路径依赖。
  - 对外暴露最小而完整的 API：`ECharts` 组件 + `useEcharts` 组合式，并导出必要类型。

- 依赖策略：
  - `vue`、`echarts` 设为 `peerDependencies`（并在 `devDependencies` 中提供本地开发版本）。
  - `echarts-gl`、`echarts-liquidfill` 作为可选 peer（或在 README 说明按需安装）。
  - 理由：避免将宿主项目的 Vue/ECharts 重复打包，引发多实例与体积膨胀。

- 测试策略：
  - 单元测试优先覆盖可纯测试部分：`useEcharts` 的状态管理与参数归一化逻辑（如果当前实现未抽离，先抽离纯函数）。
  - 组件测试以最小 DOM 环境验证渲染与生命周期，不在测试里真正创建 ECharts 实例（用 mock/stub 替代）。
  - 备选：Playwright 端到端验证实际渲染；作为后续增强。

- 文档策略：
  - 在同一份 `README.md` 中提供中英文分区，或采用 `README.md` + `README.zh-CN.md` 双文件（具体由 tasks 落地时确定）。
  - 明确：安装方式、peer 依赖、SSR 限制、常见坑（ResizeObserver、容器尺寸、setOption 合并行为）。

## Risks / Trade-offs

- [依赖版本冲突] → 通过 `peerDependencies` + README 指引降低冲突概率。
- [声明文件生成不一致] → 固化 d.ts 生成方式（插件或 `tsc --emitDeclarationOnly`）并在 CI 中校验。
- [测试可维护性] → 避免依赖真实 ECharts 渲染，使用 mock，保持单测稳定。
- [发布流程出错] → 在 README/脚本中明确发布步骤，并建议使用 GitHub Actions 作为后续自动化。

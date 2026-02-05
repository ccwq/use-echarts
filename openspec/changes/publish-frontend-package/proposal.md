## Why

将当前仓库里的 ECharts 封装以“可复用前端包”的形式开源，提供更标准的构建产物、文档与测试，使其可以在不同宿主项目中稳定集成，并可通过 npm 与 GitHub 进行分发与版本管理。

目前仓库更像源码片段/组件集合，缺少可发布的 dist、README 规范、自动化测试与发布流程；补齐这些能力能降低使用门槛并提升可信度。

## What Changes

- 新增基于 Vite 的库模式构建，产出可发布的 `dist/`（ESM/CJS 与类型声明）
- 增加开源发布所需的项目元信息与规范：`package.json`、License、GitHub 相关配置建议、npm 发布指南
- 编写中英文 README（使用方式、API、开发/构建/发布、常见问题）
- 引入测试框架并提供可运行的测试用例（覆盖核心组合式 API/组件行为的可测试部分）
- 明确对外导出入口与兼容性（Vue 版本、ECharts peerDependencies、SSR 注意事项）
- 编写gitignore和npmignore信息, 实现高效, 消除冗余

## Capabilities

### New Capabilities
- `vite-library-build`: 使用 Vite 以 library mode 构建并产出可发布的 dist（含 d.ts）
- `oss-readme-bilingual`: 提供面向开源用户的中英文 README（安装、示例、API、贡献/发布说明）
- `test-suite`: 提供基础测试工程与示例用例，保证关键 API 行为稳定
- `npm-github-release`: 提供 npm + GitHub 的发布工作流约定（版本、tag、变更记录、发布步骤）

### Modified Capabilities
<!-- none -->

## Impact

- 新增/调整文件：构建配置（Vite）、包元信息（package.json/exports/types）、README、License、测试目录与 CI 建议
- 依赖变化：新增 Vite 与测试相关依赖；可能需要将 `vue`、`echarts` 设为 peerDependencies
- API 影响：对外导出路径与产物格式会影响宿主项目的引用方式（需在 README 中明确）

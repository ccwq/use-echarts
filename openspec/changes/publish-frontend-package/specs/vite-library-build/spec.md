## ADDED Requirements

### Requirement: Library build outputs publishable artifacts
The package build system MUST produce publishable artifacts in `dist/` suitable for consumption by modern bundlers.

#### Scenario: Build generates JavaScript bundles
- **WHEN** the maintainer runs the build command
- **THEN** the system generates JavaScript bundles in `dist/` for library consumption (at least ESM)

#### Scenario: Build generates TypeScript declarations
- **WHEN** the maintainer runs the build command
- **THEN** the system generates `.d.ts` files that match the public API and are referenced by package exports

### Requirement: Package exports define stable entrypoints
The published package MUST define stable entrypoints via `package.json` exports so consumers do not rely on deep import paths.

#### Scenario: Consumer imports from package root
- **WHEN** a consumer imports from the package root (e.g. `import { useEcharts } from '<pkg>'`)
- **THEN** the import resolves without requiring deep file paths

#### Scenario: Type resolution works in TypeScript
- **WHEN** a consumer uses TypeScript with moduleResolution compatible with `exports`
- **THEN** type declarations resolve for each exported entrypoint

### Requirement: Externalize framework and chart runtime
The build MUST NOT bundle `vue` and `echarts` into the library output; they MUST be treated as external peer dependencies.

#### Scenario: Vue and ECharts are external
- **WHEN** the library is built
- **THEN** the output bundles do not include `vue` and `echarts` code

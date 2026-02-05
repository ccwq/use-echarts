## 1. Package Metadata & Exports

- [x] 1.1 Add root `package.json` for publishable library (name, version, description, license, author, keywords)
- [x] 1.2 Configure `exports` for stable entrypoints and types (root + subpath if needed)
- [x] 1.3 Set `vue` and `echarts` as `peerDependencies` (and keep local `devDependencies` for development)
- [x] 1.4 Add `files` whitelist and/or `.npmignore` to exclude dev-only content from npm package

## 2. Vite Library Build

- [x] 2.1 Add `vite.config.ts` for library mode build and externalize peers (`vue`, `echarts`, optional plugins)
- [x] 2.2 Add TypeScript build config for declarations (e.g. `tsconfig.build.json` + declaration output)
- [x] 2.3 Add npm scripts: `build`, `dev` (optional), `clean`, `prepublishOnly`
- [x] 2.4 Verify build outputs in `dist/` and can be imported by a sample consumer (manual smoke check)

## 3. Public API Surface

- [x] 3.1 Create `src/index.ts` (or equivalent) as the single public entrypoint re-exporting component, composable, and types
- [x] 3.2 Ensure no deep imports are required in README examples (match `exports`)
- [x] 3.3 Review SSR/client-only constraints and document recommended usage (client-only mount)

## 4. Documentation (Bilingual)

- [x] 4.1 Write English README section/file: install, quick start, API, peer deps, SSR notes, troubleshooting
- [x] 4.2 Write Chinese README section/file: same coverage as English, terminology consistent
- [x] 4.3 Add release guide: versioning (semver), build/test checklist, npm publish, git tag, GitHub release notes
- [x] 4.4 Add `LICENSE` file and link it from README

## 5. Repo Hygiene (gitignore/npmignore)

- [x] 5.1 Add/update `.gitignore` to avoid committing build outputs and local artifacts (`dist`, `node_modules`, logs)
- [x] 5.2 Add/update `.npmignore` (or `files`) to avoid publishing tests, configs, and local history folders

## 6. Tests

- [x] 6.1 Choose test runner/tooling (e.g. Vitest) and add minimal config
- [x] 6.2 Add unit tests for composable option state behavior (set/get/merge path) with deterministic assertions
- [x] 6.3 Add component-level tests using mocks/stubs (avoid real ECharts render)
- [x] 6.4 Add CI-friendly test command and ensure it exits non-zero on failures

## 7. Release Workflow (npm + GitHub)

- [x] 7.1 Add `CHANGELOG.md` (or define release notes convention) and document update rules
- [x] 7.2 Document and/or add scripts for `npm pack` smoke check prior to publish
- [x] 7.3 (Optional) Add GitHub Actions workflow for CI (build + test) and release (manual trigger)

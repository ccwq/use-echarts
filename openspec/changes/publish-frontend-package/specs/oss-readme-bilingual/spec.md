## ADDED Requirements

### Requirement: Provide bilingual README documentation
The repository MUST include end-user documentation in both Chinese and English that explains installation, usage, API, development, testing, and release workflow.

#### Scenario: Chinese documentation is accessible
- **WHEN** a user opens the repository on GitHub
- **THEN** Chinese documentation content is available (either in `README.md` or in a clearly linked `README.zh-CN.md`)

#### Scenario: English documentation is accessible
- **WHEN** a user opens the repository on GitHub
- **THEN** English documentation content is available (either in `README.md` or in a clearly linked `README.en.md`)

### Requirement: README includes practical integration guidance
The documentation MUST describe required peer dependencies, supported environments, and common pitfalls.

#### Scenario: Peer dependencies are documented
- **WHEN** a user follows the installation instructions
- **THEN** they can identify which dependencies must be installed by the consumer (e.g. `vue`, `echarts`)

#### Scenario: SSR limitation is documented
- **WHEN** a user plans to use the package in SSR
- **THEN** the README clearly states client-only constraints and recommended usage patterns

### Requirement: README includes publish steps
The documentation MUST include a release guide that covers versioning, tagging, and publishing to npm.

#### Scenario: Maintainer can follow release steps
- **WHEN** a maintainer wants to publish a new version
- **THEN** the README provides a step-by-step process to build, test, and publish

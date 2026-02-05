## ADDED Requirements

### Requirement: Provide runnable automated tests
The project MUST include automated tests that can be executed locally and in CI with a single command.

#### Scenario: Tests run successfully
- **WHEN** a maintainer runs the test command
- **THEN** the test runner executes and reports pass/fail status with a non-zero exit code on failures

### Requirement: Tests cover core public API behavior
The test suite MUST include coverage for core public API behaviors that can be validated without requiring a real browser chart render.

#### Scenario: useEcharts option state is tested
- **WHEN** the tests execute
- **THEN** they validate that options can be set/read in a deterministic way (with ECharts instance mocked as needed)

#### Scenario: Component lifecycle integration is testable
- **WHEN** the tests execute
- **THEN** they validate key lifecycle interactions (e.g. calling setOption on ready) using mocks/stubs

### Requirement: Tests are deterministic
Tests MUST be deterministic and MUST NOT depend on external network access.

#### Scenario: No network dependency
- **WHEN** tests run in a sandboxed CI environment
- **THEN** they do not make external network calls

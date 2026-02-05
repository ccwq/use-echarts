## ADDED Requirements

### Requirement: Define a reproducible release process
The project MUST define a reproducible release process for publishing to npm and creating a corresponding GitHub release/tag.

#### Scenario: Release steps are documented
- **WHEN** a maintainer prepares a release
- **THEN** they can follow documented steps to version, build, test, publish to npm, and create a tag/release

### Requirement: Release process includes versioning and changelog guidance
The release guidance MUST specify versioning conventions and where to record notable changes.

#### Scenario: Version bump is consistent
- **WHEN** a new release is created
- **THEN** the version bump follows semver and is reflected in git tags and npm package version

### Requirement: Ignore files are configured for clean publishing
The repository MUST include ignore configuration to prevent publishing unnecessary files to npm and to keep the working tree clean.

#### Scenario: npm package does not include dev-only files
- **WHEN** the package is packed/published
- **THEN** it excludes dev-only content (tests, configs not needed at runtime, local history)

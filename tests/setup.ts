// Minimal browser polyfills for component tests.

class ResizeObserver {
    observe() {
        // noop
    }

    unobserve() {
        // noop
    }

    disconnect() {
        // noop
    }
}

// @ts-expect-error - inject into global
globalThis.ResizeObserver = ResizeObserver;

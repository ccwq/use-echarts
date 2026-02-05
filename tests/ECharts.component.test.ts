import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";

// Mock ECharts runtime - we only care about integration points.
vi.mock("echarts", () => {
    const inst = {
        setOption: vi.fn(),
        resize: vi.fn(),
        on: vi.fn(),
        dispose: vi.fn(),
    };

    return {
        init: vi.fn(() => inst),
        default: {
            init: vi.fn(() => inst),
        },
    };
});

// optional plugins: avoid module resolution errors
vi.mock("echarts-liquidfill", () => ({}));
vi.mock("echarts-gl", () => ({}));

import ECharts from "../src/ECharts.vue";

describe("ECharts.vue", () => {
    it("emits ready on mount", async () => {
        const wrapper = mount(ECharts as any, {
            props: {
                options: {},
            },
        });

        // Flush initial microtasks/mount lifecycle.
        await wrapper.vm.$nextTick();
        await new Promise(resolve => setTimeout(resolve, 50));

        const ready = wrapper.emitted("ready");
        expect(ready).toBeTruthy();
        expect(ready?.length).toBe(1);
    });
});

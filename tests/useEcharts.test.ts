import { describe, expect, it } from "vitest";
import { useEcharts } from "../src/useEcharts";

describe("useEcharts", () => {
    it("setOptions/getOptions returns last value", () => {
        const { setOptions, getOptions } = useEcharts();

        expect(getOptions()).toBeUndefined();

        setOptions({ series: [{ type: "bar", data: [1, 2, 3] }] });
        expect(getOptions()).toEqual({ series: [{ type: "bar", data: [1, 2, 3] }] });

        const args = [{ xAxis: {} }, { notMerge: true }];
        setOptions(args);
        expect(getOptions()).toStrictEqual(args);
    });

    it("getInstance returns null before ready", () => {
        const { getInstance } = useEcharts();
        expect(getInstance()).toBeNull();
    });
});

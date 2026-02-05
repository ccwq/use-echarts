import Echarts from "./ECharts.vue";
import { defineComponent, ref, unref } from "vue";
 
export type EChartsInstance = {
    setOption: (...args: any[]) => any;
    resize: (...args: any[]) => any;
    on: (...args: any[]) => any;
    dispose: () => void;
};

export type UseEchartsOptions = {
    // reserved for future options
};

export type UseEchartsSetOptions = Record<string, any> | unknown[];

export const useEcharts = (options: UseEchartsOptions = {}) => {
    void options;

    const ecOptions = ref<UseEchartsSetOptions | undefined>(undefined);
    const echartsInstRef = ref<EChartsInstance | null>(null);

    const handleReady = (inst: unknown) => {
        echartsInstRef.value = inst as EChartsInstance;
    };

    const EChartComponent = defineComponent({
        name: "UseEchartsComponent",
        setup(_props, { slots }) {
            return () => (
                <Echarts onReady={handleReady} options={ecOptions.value}>
                    {slots}
                </Echarts>
            );
        },
    });

    const setOptions = (next: UseEchartsSetOptions) => {
        ecOptions.value = next;
    };

    const getOptions = () => {
        return unref(ecOptions.value);
    };

    const getInstance = () => {
        return unref(echartsInstRef);
    };

    return {
        EChartComponent,
        setOptions,
        getOptions,
        getInstance,
    };
};

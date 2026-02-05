<template lang="pug">
.ECharts(ref="rootEl" :style="styles")
    .echarts-header: slot(name="header")
    .echarts-body
        .chart-node

        // 为了方便覆盖一些特效在图表
        slot
    .echarts-footer: slot(name="footer")

</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, onBeforeUnmount, onMounted, ref, watch, computed } from "vue";
import * as Echarts from "echarts";

//@ts-ignore
import _ from "lodash";

const loadOptionalEchartsPlugins = async () => {
    try {
        await import("echarts-liquidfill");
    } catch {
        // optional
    }

    try {
        await import("echarts-gl");
    } catch {
        // optional
    }
};

export interface EChartsProps {
    throttleDelay?: number;
    options?: Record<string, any> | unknown[];
    on?: Record<string, any>;
}

export default defineComponent({
    name: 'ECharts',
    emits: {
        ready: (inst: unknown, echarts: typeof Echarts) => true
    },
    props:{
        throttleDelay:{
            type:Number,
            default: 16,
        },

        options:{
            type:[Object, Array],
            default:()=>({})
        },
        on:{
            type:Object,
            default:()=>({}),
        }
    },
    setup(props, {emit}){
        const m = getCurrentInstance()?.proxy;
        const rootEl = ref<HTMLDivElement|null>(null)

        const headerHeight = ref(0);
        const footerHeight = ref(0);

        const styles = computed(() => `--header-height:${headerHeight.value}px;--footer-height:${footerHeight.value}px;`);

        onMounted(async () => {

            await loadOptionalEchartsPlugins();

            // 初始化
            const dom = rootEl.value!.querySelector(".chart-node") as HTMLElement;
            const inst = Echarts.init(dom, "dark",{
                // renderer:"svg",
            });
            //-----------------

            // 赋值
            watch(() => props.options, (options) => {

                // 精确更新
                if (Array.isArray(options)) {
                    const setOptionsPrams = options

                    //@ts-ignore
                    inst.setOption(...setOptionsPrams);
                }

                // 全局更新
                else {
                    inst.setOption({
                        ...options,
                        darkMode:true,
                    });
                }

            }, {immediate: true});
            //-----------------

            // 尺寸变化
            const deInstResize = _.throttle((wh: {width: number, height: number}) => inst.resize(wh), props.throttleDelay);
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    const {width, height} = entry.contentRect
                    const classes = entry.target.classList;
                    if (classes.contains("echarts-header")) {
                        headerHeight.value = height;
                    } else if (classes.contains("echarts-footer")) {
                        footerHeight.value = height;
                    } else if (classes.contains("echarts-body")) {
                        deInstResize({width, height})
                    }
                }
            });
            //-- 尺寸变化

            // await new Promise(r => setTimeout(r, 0));

            const header = rootEl.value!.querySelector(".echarts-header");
            const footer = rootEl.value!.querySelector(".echarts-footer");
            const body = rootEl.value!.querySelector(".echarts-body");
            headerHeight.value = header?.clientHeight || 0;
            footerHeight.value = footer?.clientHeight || 0;

            resizeObserver.observe(body!)
            resizeObserver.observe(header!)
            resizeObserver.observe(footer!)

            inst.resize({width: body!.clientWidth, height: body!.clientHeight})

            // 外部绑定事件
            if (props.on) {
                Object.keys(props.on).forEach(eventName => {
                    inst.on(eventName, props.on[eventName])
                });
            }

            emit("ready", inst, Echarts);

            onBeforeUnmount(() => {
                resizeObserver.disconnect()
                inst.dispose();
            })
            //-----------------
        })


        return {
            styles,
            rootEl,
            footerHeight,
            headerHeight,
        }
    }
});
</script>
<style lang="less">
.ECharts{
    position: relative;
    min-height: calc(160px * var(--design-scale, 1));

    .echarts-body{
        position: absolute;
        width: 100%;
        height: calc(100% - var(--header-height) - var(--footer-height));
        left: 0;
        right: 0;
        top: var(--header-height);
        z-index: 2;
    }
    .chart-node{
        position: absolute;
        inset: 0;
    }

    .echarts-header{
        overflow: hidden;
    }
    .echarts-footer{
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    &.__with_effect_element{
        position: relative;
        .__chart_effect{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            z-index: -1;
        }
    }
}
</style>

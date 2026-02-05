import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "node:path";

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "UseEcharts",
            formats: ["es", "cjs"],
            fileName: (format) => (format === "cjs" ? "index.cjs" : "index.js"),
        },
        rollupOptions: {
            external: [
                "vue",
                "echarts",
                "echarts-gl",
                "echarts-liquidfill",
                "lodash",
            ],
            output: {
                exports: "named",
            },
        },
    },
});

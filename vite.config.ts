import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "node:path";

export default defineConfig({
    plugins: [
        {
            name: 'inline-vue-styles',
            enforce: 'pre',
            transform(code, id) {
                if (id.endsWith('.vue')) {
                    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
                    let match;
                    let styles = '';
                    while ((match = styleRegex.exec(code)) !== null) {
                        styles += match[1];
                    }
                    if (styles) {
                        const styleInjectCode = `
                            if (typeof document !== 'undefined') {
                                const style = document.createElement('style');
                                style.textContent = \`${styles.replace(/[\n\r]/g, ' ').replace(/\`/g, '\\`')}\`;
                                document.head.appendChild(style);
                            }
                        `;
                        code = code.replace('</script>', styleInjectCode + '</script>');
                    }
                }
                return code;
            }
        },
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
            plugins: [
                {
                    name: 'remove-css-assets',
                    generateBundle(options, bundle) {
                        for (const fileName in bundle) {
                            if (bundle[fileName].type === 'asset' && fileName.endsWith('.css')) {
                                delete bundle[fileName];
                            }
                        }
                    }
                }
            ]
        },
    },
});

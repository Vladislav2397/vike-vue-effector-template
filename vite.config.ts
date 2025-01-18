import {fileURLToPath, URL} from 'node:url'
import {telefunc} from 'telefunc/vite'
import md from 'unplugin-vue-markdown/vite'
import vike from 'vike/plugin'
import {defineConfig} from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vike({
            prerender: true,
        }),
        telefunc(),
        vue({
            include: [/\.vue$/, /\.md$/],
        }),
        md({}),
    ],
    resolve: {
        alias: {
            '#': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(
                new URL('./src/components', import.meta.url)
            ),
            '@layouts': fileURLToPath(
                new URL('./src/layouts', import.meta.url)
            ),
            '@services': fileURLToPath(new URL('./services', import.meta.url)),
            '@utils': fileURLToPath(new URL('./utils', import.meta.url)),
        },
    },
})

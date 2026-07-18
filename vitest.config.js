const path = require('path')
const react = require('@vitejs/plugin-react')
const { defineConfig } = require('vitest/config')

module.exports = defineConfig({
    plugins: [react()],
    // Next.js (via SWC) allows JSX inside plain .js files; Vite's default
    // esbuild transform does not. Opt .js/.jsx source files into the JSX
    // loader so component files don't need renaming to .jsx just to test.
    esbuild: {
        loader: 'jsx',
        include: /\.(js|jsx)$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: { '.js': 'jsx' },
        },
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.jsx'],
        globals: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
})

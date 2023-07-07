import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteSvg from 'vite-plugin-svgr';
import tsConfigVite from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  plugins: [
    react({
      exclude: /\.stories\.(tsx|jsx)?$/,
      jsxImportSource: '@emotion/react',
      jsxRuntime: 'classic',
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
      include: '**/*.tsx',
    }),
    tsConfigVite(),
    viteSvg(),
  ],
  css: {
    modules: {
      generateScopedName: '[folder]_[local]_[hash:base64:5]',
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  define: {
    process_env: process.env,
  },
  server: {
    strictPort: true,
    host: true,
    port: 9090,
  },
  root: 'src',
  publicDir: '../public',
  envDir: '../../.',
  base: '',
  build: {
    outDir: '../build',
    assetsDir: './assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',

        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
}));

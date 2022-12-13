import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteImagemin from '@madguy/vite-plugin-imagemin'

export default defineConfig(({ mode }) => {
  const IS_LIB = mode === 'lib'
  return {
    build: {
      assetsInlineLimit: 0,
      lib: IS_LIB
        ? {
            entry: 'src/main.ts',
            name: 'imagemin',
            formats: ['iife'],
          }
        : undefined,
    },
    publicDir: IS_LIB ? 'public-lib' : 'public',
    resolve: {
      alias: {
        '@@': __dirname,
      },
    },
    define: {
      'process.env': process.env ?? {},
    },
    plugins: [
      vue(),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  }
})

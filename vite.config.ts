import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'GpuMC',
      fileName: 'gpu-mc',
      formats: ['es'],
    },
    rollupOptions: {
      // three is a peer dep — never bundle it
      external: ['three'],
    },
    sourcemap: true,
    minify: false, // keep readable during dev
  },
})
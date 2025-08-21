import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.woff2'],
  build: {
    outDir: 'milanuncious'
  },
  plugins: [react(), svgr()]
})

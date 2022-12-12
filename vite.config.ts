import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@layouts', replacement: '/src/layouts' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@services', replacement: '/src/services' },
      { find: 'types', replacement: '/src/types' },
      { find: '@widgets', replacement: '/src/widgets' },
      { find: '@hooks', replacement: '/src/hooks' },
    ],
  },
})

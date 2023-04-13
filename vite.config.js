import {defineConfig} from 'vite'
import ViteYaml from '@modyfi/vite-plugin-yaml';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteYaml(), tsconfigPaths()],
  base: "/portfolio/",
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
    // host: true, // needed for the Docker Container port mapping to work
    // strictPort: true,
    // port: 8080,
  // }
})

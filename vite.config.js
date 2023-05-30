import {defineConfig, loadEnv} from 'vite'
import ViteYaml from '@modyfi/vite-plugin-yaml';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {

    const env = loadEnv(mode, process.cwd(), '')

    return {
      plugins: [react(), ViteYaml(), tsconfigPaths()]
      // base: "/portfolio/"
    }
  }
)

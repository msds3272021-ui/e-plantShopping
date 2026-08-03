import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/msds3272021-ui/e-plantShopping.git",
  plugins: [react()],
})

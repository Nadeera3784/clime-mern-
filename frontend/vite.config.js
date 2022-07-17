import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   hmr: {
  //       clientPort: 3030,
  //   },
  // }
})

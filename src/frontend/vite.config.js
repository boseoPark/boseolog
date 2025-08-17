import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../main/resources/static'), // 빌드 결과를 Spring Boot static 폴더로
    emptyOutDir: true, // 기존 파일 삭제 후 새로 빌드 
  },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// 把 <your-repo-name> 改成你 GitHub 上的 repo 名稱
// 例如 repo 叫 apple-style-blog，就寫 "/apple-style-blog/"
export default defineConfig({
  plugins: [react()],
  base: "/vibeCoding_ken2/" // 替換成你的 repo 名稱
});
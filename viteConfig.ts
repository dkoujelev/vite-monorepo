import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export const defaultConfig = defineConfig({
  plugins: [reactRefresh()],
});

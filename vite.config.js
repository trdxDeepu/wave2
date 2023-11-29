
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import react from 'vite-plugin-react'; // Add this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
});

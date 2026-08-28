import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const deploymentEnvironment = process.env.VERCEL_ENV || 'local';

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_DEPLOYMENT_ENV': JSON.stringify(deploymentEnvironment),
  },
  transformIndexHtml(html) {
    if (deploymentEnvironment !== 'preview') return html;
    return html.replace('<meta name="theme-color"', '<meta name="robots" content="noindex, nofollow" />\n    <meta name="theme-color"');
  },
});

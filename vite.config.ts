import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		VitePWA({
			registerType: 'prompt',
			// includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
			manifest: {
				name: 'Endavu App',
				short_name: 'Endavu',
				description: 'Endavu - Financial peace of mind',
				theme_color: '#ffffff',
				icons: [
					{
						"src": "/pwa-192x192.png",
						"sizes": "192x192",
						"type": "image/png",
						"purpose": "any"
					},
					{
						"src": "/pwa-512x512.png",
						"sizes": "512x512",
						"type": "image/png",
						"purpose": "any"
					},
					{
						"src": "/pwa-maskable-192x192.png",
						"sizes": "192x192",
						"type": "image/png",
						"purpose": "maskable"
					},
					{
						"src": "/pwa-maskable-512x512.png",
						"sizes": "512x512",
						"type": "image/png",
						"purpose": "maskable"
					}
				]
			},
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url)),
			'@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
		}
	},
	server: {
		port: 5500
	}
})

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin';
import path from 'path'
import electron from 'vite-plugin-electron'
import { resolve } from 'path'
export default defineConfig({
	base: './',
	plugins: [
		vue(),
    electron({
      // 确保主进程入口路径正确
      // entry: resolve(__dirname, 'dist-electron/background.js'), 
      entry: resolve(__dirname, 'src/background.js'), 
    }),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	optimizeDeps: {
		include: ['schart.js']
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~': '/src/assets'
		}
	},
	define: {
		__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true",
	},
	css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use  "./src/styles/variables.scss";`, // 引入全局变量或者mixins
				
      }
    }, 
		postcss: {
      plugins: [
        // 配置px转viewport插件
        postcssPxToViewport({
          viewportWidth: 1920,    // 设计稿宽度
          viewportHeight: 1080,   // 设计稿高度
          unitPrecision: 5,       // 转换精度
          viewportUnit: 'vw',     // 默认转换为vw
          selectorBlackList: [],  // 需要忽略的选择器
          minPixelValue: 1,       // 最小转换像素值
          mediaQuery: false,      // 是否在媒体查询中转换
          exclude: [],            // 需要排除的文件
          propList: ['*']         // 所有属性都转换
        })
      ]
    },
  },
	server: {
    proxy: {
      // 使用 proxy 实例
      '/java': {
        target: 'http://192.168.10.30:9090',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
				rewrite: (path) => path.replace(/^\/java/, '')
      }
    }
  }
});

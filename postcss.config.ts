import type { PostcssConfiguration } from 'postcss-load-config';
import pxToViewport from 'postcss-px-to-viewport-8-plugin';

const config: PostcssConfiguration = {
  plugins: [
    pxToViewport({
      viewportWidth: 1920,    // 1920px设计稿宽度
      viewportHeight: 1080,   // 1080px设计稿高度
      unitPrecision: 5,       // 转换后的数值保留5位小数
      viewportUnit: 'vw',     // 默认转换为vw单位
      selectorBlackList: [],  // 不需要转换的选择器
      minPixelValue: 1,       // 小于1px的数值不转换
      mediaQuery: false,      // 不在媒体查询中转换px
      exclude: [/node_modules/], // 排除node_modules目录
      propList: ['*'],        // 需要转换的属性，*表示所有
    })
  ]
};

export default config;

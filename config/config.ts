import { defineConfig } from 'umi';

import routes from './routes';

import * as path from 'path';

const pxtorem = require('postcss-pxtorem');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  hash: false,
  history: {
    type: 'hash',
  },
  title: ' ',
  antd: {},
  dva: {
    hmr: true,
  },
  targets: {
    android: 4,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  define: {
    'process.env.PLATFORM': process.env.PLATFORM,
    'process.env.PLATFORM_ENV': process.env.PLATFORM_ENV,
  },
  extraPostCSSPlugins: [
    // pxtorem({
    //   rootValue: 32,
    //   propList: ['*'],
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 2
    // }),
  ],
  routes,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@rokku/design',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});

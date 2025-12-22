/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { env } = process
const publicPath = env.NODE_ENV === 'production' ? env.MB_PUBLIC_PATH : '/'
env.VUE_APP_ASSETS = `${env.MB_ROOT}${publicPath}`

const stylesPath = './src/assets/styles'

module.exports = {
  publicPath,

  productionSourceMap: false,

  pluginOptions: { lintStyleOnBuild: true },

  css: {
    extract: true,
    loaderOptions: {
      sass: {
        additionalData: `
@use 'sass:math';
@use 'sass:map';
@import '${stylesPath}/variables';
@import '${stylesPath}/mixins';
`
      }
    }
  },

  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue3-lazyload': {
        root: 'Vue3Lazyload',
        commonjs: 'vue3-lazyload',
        commonjs2: 'vue3-lazyload',
        amd: 'vue3-lazyload'
      },
      'vue-dragscroll': {
        root: 'VueDragscroll',
        commonjs: 'vue-dragscroll',
        commonjs2: 'vue-dragscroll',
        amd: 'vue-dragscroll'
      }
    },
    optimization: { splitChunks: false },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html'
      })
    ]
  }
}

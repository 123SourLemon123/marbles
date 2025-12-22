/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

const { env } = process
const publicPath = env.NODE_ENV === 'production' ? env.MB_PUBLIC_PATH : '/'
env.VUE_APP_ASSETS = `${env.MB_ROOT}${publicPath}`

const stylesPath = './src/assets/styles'

module.exports = {
  publicPath,

  productionSourceMap: false,

  pluginOptions: { lintStyleOnBuild: true },

  css: {
    extract: false,
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
    optimization: { splitChunks: false },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'public/index.html',
        inlineSource: '.(js|css)$'
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
  }
}

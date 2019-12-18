'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dynamicRouter',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8888,  // 端口
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  configureWebpack: config => {
    config.resolve = {
      // 设置别名
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')  // 移除 prefetch 插件
    config.plugins.delete('prefetch')  // 移除 preload 插件
  }
}

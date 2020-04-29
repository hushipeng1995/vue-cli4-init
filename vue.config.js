const path = require('path')
function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.baidu.com',
        changeOrigin: true
      }
    }
  },
  //   配置
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias.set('@', resolve('src'))
    // 压缩代码
    config.optimization.minimize(true)
    // 使用cdn引入
    config.externals({
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      axios: 'axios'
    })
  },
  //   引入全局变量
  css: {
    //   提取css代码
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/style/common.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
}

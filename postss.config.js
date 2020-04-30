// pxtorem 配置 兼容vant组件
module.exports = ({ file }) => {
  let isVant = file && file.dirname && file.dirname.indexOf('vant') > -1
  let rootValue = isVant ? 37.5 : 75
  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: rootValue,
        propList: ['*']
      }
    }
  }
}

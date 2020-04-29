// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  production: {
    baseURL: 'http://',
    authBaseURL: ''
  },
  //  开发环境
  development: {
    baseURL: 'http://',
    authBaseURL: ''
  },
  //测试环境
  test: {
    baseURL: 'http://',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]

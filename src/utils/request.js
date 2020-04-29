import axios from 'axios'
import config from '../config/index'

const service = axios.create({
  // api的base_url
  baseURL: config.baseURL,
  //   请求超时时间
  timeout: 5000
})
service.interceptors.request.use(
  config => {
    //   可以自定义config配置
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

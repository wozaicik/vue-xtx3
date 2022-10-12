// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据 2. 处理token失效
// 4. 导出一个函数调用，调用当前的axios实例发请求，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://apipc-xiaotuxian-front-devtest.itheima.net/'
const instace = axios.create({
// axios的一些配置，baseURL timeout
  baseURL,
  timeout: 5000
})

instace.interceptors.request.use(config => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有token就在头部携带
  //  1.获取用户信息
  const { profile } = store.state.user
  // 2. 判断是否有token
  if (profile.token) {
    // 3. 设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }

  return config
}, err => {
  return Promise.reject(err)
})

// res=>res.data 取出data数据，将来调用接口的时候 直接拿到的就是后台的数据
instace.interceptors.response.use(res => res.data, err => {
  // 401 状态码，进入该函数
  if (err.response && err.response.status === 401) {
    // 1.清空本地无效用户信息
    // 2.跳转到登录页码
    // 3.跳转需要传参(当前的路由地址) 给登录页
    store.commit('user/setUser', {})
    // 当前路由地址
    // 组件：$route.path
    // 组件：$route.fullpath 完整地址
    // 在js模块中，router.currentRoute.fullPath 就是当前路由地址  ref响应式数据
    // router.currentRoute.value.fullPath
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    // encodeURIComponent 将数据转换为url编码 防止解析地址出现问题
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// instance请求返回的是一个promise
// 请求工具函数
export default (url, method, submitData) => {
// 负责发请求：请求地址，请求方式，提交的数据
  return instace({
    url,
    method,
    // 1. 如果是get请求，需要使用params来传递submitData
    // 2. 如果不是get请求，需要使用data来传递submitData
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

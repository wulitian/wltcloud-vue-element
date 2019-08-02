/**
 * Created by bootdo.
 */
import axios from 'axios'
import store from "../vuex/store"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    if (window.localStorage.getItem('Authorization')) {
      config.headers.Authorization = window.localStorage.getItem('Authorization')
    }
    store.state.loading = true
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data && (response.data.error == '403'||response.data.error == '407')) {
    store.state.loading = false
    localStorage.removeItem("Authorization")
    window.location.href = '/'
  }
  return response;
}, function (error) {
  store.state.loading = false
  return Promise.reject(error)
})


//基地址
export const base = process.env.API_ROOT

//通用方法
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}
export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}

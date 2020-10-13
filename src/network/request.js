import axios from 'axios'

// Method 3:
export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
    // method: get
    // headers: {}
  })

  // 2. axios拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    config.log(err)
  })
  // 2.2响应拦截
  instance.interceptors.response(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  /**
   * instance本身返回值就是Promise（所以才可以instance.then().catch()）
   * （Promise本身也是new Promise.then().catch()）
   */
  return instance(config) 
}

// Method 3 - 其他文件中如何调用:
// import {request} from 'network/request'
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })




/**
 *      其他复杂方法参考
*/
// Method 1:
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config)
//     .then(res => {
//       // 将请求的结果通过success把res回调出去
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }
// Method 1 - 其他文件中如何调用:
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// Method 2:
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }
// Method 2 - 其他文件中如何调用:
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
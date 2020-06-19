import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  // transformRequest: [function (data) {
  //   // `transformRequest` 允许在向服务器发送前，修改请求数据
  //   // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  //   return qs.stringify(data)
  //   // 结合create_headers里的内容，在这里又新增一条信息sex=man
  //   // 因此network中查看的结果是：name=xiaoming&age=12&sex=man
  // }],
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    console.log('进入请求拦截器')
    console.log(store.getters.token)
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['SecurityAuthorization'] = getToken()
      // config.headers['SecurityAuthorization'] = "SecurityToken@JHbNsuW5oqKGI+CcbbPbPoyp2n2sM7xweHipdsenQkxsufDhzTkhyUV4iaEYNC+AGGj1aXLe5kqTZ2MmbC6e2gZg2XZ8vUzvOCpfTf0sndbPtyU9W0Tj8stKmdQf0fodEGMMpyJFJDbaX5IyUYuJ9zYhAyKgu3Ev5PFc9R2Ij7TIfu3WjSCKp/VaSMDSpc7U"
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return res
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

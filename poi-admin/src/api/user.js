import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://test-liuwa.hupovip.net/account-users/login',
    method: 'post',
    data
  })
}


export function user(data) {
  return request({
    url: 'http://test-liuwa.hupovip.net/user',
    method: 'get',
    params: { ...data }
    // data
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
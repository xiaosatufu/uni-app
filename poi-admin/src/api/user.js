import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/account-users/login',
    method: 'post',
    data
  })
}


export function user(data) {
  return request({
    url: '/user',
    method: 'get',
    params: { ...data }
    // data
  })
}

export function adminUser(data) {
  return request({
    url: '/admin/users',
    method: 'get',
    params: { ...data }
    // data
  })
}

// /admin/users/{id}/enable


export function userDisable(id) {
  return request({
    url: `/admin/users/${id}/disable`,
    method: 'put',
    // params: { ...data }
    // data
  })
}
export function userEnable(id) {
  return request({
    url: `/admin/users/${id}/enable`,
    method: 'put',
    // params: { ...data }
    // data
  })
}

export function userDetail(id) {
  return request({
    url: `/admin/users/${id}/show`,
    method: 'get'
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

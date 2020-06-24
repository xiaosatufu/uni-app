import request from '@/utils/request'

export function comments(data) {
    return request({
        url: '/admin/comments',
        method: 'get',
        params: { ...data }
    })
}

export function isHidecomment(id) {
    return request({
        url: `/admin/comments/${id}/hide`,
        method: 'put'
    })
}

export function commentDetail(id) {
    return request({
        url: `/admin/comments/${id}/show`,
        method: 'get'
    })
}
export function getUserId(name) {
    return request({
        url: `/admin/comments/get/${name}`,
        method: 'get'
    })
}





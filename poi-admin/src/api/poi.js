import request from '@/utils/request'

export function poiList(data) {
    return request({
        url: '/poi/admin',
        method: 'get',
        params: { ...data }
    })
}
export function createPoi(data) {
    return request({
        url: '/poi/admin',
        method: 'post',
        data
    })
}

export function poiDetail(id) {

    return request({
        url: `/poi/admin/${id}`,
        method: 'get'
    })
}
export function poiEdit(id, data) {

    return request({
        url: `/poi/admin/${id}`,
        method: 'put', data
    })
}






export function user() {
    return request({
        url: '/user',
        method: 'get'
    })
}
export function comments() {
    return request({
        url: '/comments',
        method: 'get'
    })
}
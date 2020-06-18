import request from '@/utils/request'

export function poiList(data) {
    return request({
        url: 'http://test-liuwa.hupovip.net/poi/admin',
        method: 'get',
        params: { ...data }
    })
}
export function createPoi(data) {
    return request({
        url: 'http://test-liuwa.hupovip.net/poi/admin',
        method: 'post',
        data
    })
}


export function user() {
    return request({
        url: 'http://test-liuwa.hupovip.net/user',
        method: 'get'
    })
}
export function comments() {
    return request({
        url: 'http://test-liuwa.hupovip.net/comments',
        method: 'get'
    })
}
import request from '@/utils/request'

export function poiList(data) {
    return request({
        url: 'http://test-liuwa.hupovip.net/poi/admin',
        method: 'get',
        params: { ...data }
    })
}
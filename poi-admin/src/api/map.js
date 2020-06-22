import request from '@/utils/request'
export function searchMap(data) {
    return request({
        url: '/place/ws/geocoder/v1/',
        method: 'get',
        params: { ...data }
    })
}


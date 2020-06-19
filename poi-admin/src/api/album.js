import request from '@/utils/request'

export function photoAlbums(data) {
    return request({
        url: 'http://test-liuwa.hupovip.net/admin/photoAlbums',
        method: 'get',
        params: { ...data }
    })
}
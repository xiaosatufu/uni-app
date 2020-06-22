import request from '@/utils/request'

export function photoAlbums(type) {
    return request({
        url: `http://test-liuwa.hupovip.net/admin/photoAlbums?type=${type}`,
        method: 'get'
    })
}

export function photoSaveAlbums(data) {
    return request({
        url: `http://test-liuwa.hupovip.net/admin/photoAlbums`,
        method: 'post',
        data
    })
}






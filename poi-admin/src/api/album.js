import request from '@/utils/request'

export function photoAlbums(type) {
    return request({
        url: `/admin/photoAlbums?type=${type}`,
        method: 'get'
    })
}

export function photoSaveAlbums(data) {
    return request({
        url: `/admin/photoAlbums`,
        method: 'post',
        data
    })
}

export function getWalkAlbums(fromid){
    return request({
        url: `/admin/photoAlbums/walkAlbums?fromId=${fromid}`,
        method: 'get'
    })
}







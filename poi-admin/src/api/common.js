import request from '@/utils/request'

export function upload(data) {
    return request({
        url: 'http://test-liuwa.hupovip.net/app/upload/',
        method: 'post',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        data

        // params: { type }
    })
}
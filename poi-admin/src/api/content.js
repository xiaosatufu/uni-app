import request from '@/utils/request'

export function comments(data) {
    return request({
        url: 'http://test-liuwa.hupovip.net/admin/comments',
        method: 'get',
        params: { ...data }
    })
}


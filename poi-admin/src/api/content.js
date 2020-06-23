import request from '@/utils/request'

export function comments(data) {
    return request({
        url: '/admin/comments',
        method: 'get',
        params: { ...data }
    })
}


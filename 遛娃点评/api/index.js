import request from '@/common/request.js'
import {
	formatGetUri
} from '@/common/util.js'

const api = {}
const PORT1 = 'baseinfo'
// POST请求方式
api.register = params => request.globalRequest(`${PORT1}/mobile/signUp`, 'POST//必须大写，为了兼容其他应用', params, 1)
// GET请求方式
api.register = params => request.globalRequest(`${PORT1}/mobile/signUp${formatGetUri(params)}`, 'GET //必须大写，为了兼容其他应用', {},
	1)



//图片上传


api.upload = params => request.globalRequest(`app/upload`, 'POST', params,3)

//发送验证码
api.userSendCode = params => request.globalRequest(`user/sendCode`, 'POST', params)
//登录
api.authLogin = params => request.globalRequest(`auth/login`, 'POST', params)
//poi列表
api.poiApp = params => request.globalRequest(`poi/app${formatGetUri(params)}`, 'GET', {}, 1)


//poi 详细

api.poiAppDetail = params => request.globalRequest(`poi/app/${params}`, 'GET', {}, 1)

//收藏

api.poiAppCollect = params => request.globalRequest(`poi/app/${params.id}/collect`, 'POST', params, 1)


//获取评论
api.poiComments = params => request.globalRequest(`app/comments${formatGetUri(params)}`, 'GET', {}, 1)
//发布点评
api.poiPushComment = params => request.globalRequest(`app/comments`, 'POST', params, 1)
//创建标签
api.poiPushCommentTags = params => request.globalRequest(`app/comments/create`, 'GET', {}, 1)
//评论详情
api.poiCommentDetail = params => request.globalRequest(`app/comments/${params.id}/show`, 'GET', {}, 1)
//点赞
api.poiCommentLike = params => request.globalRequest(`app/comments/${params.commentId}/like`, 'PUT', params, 1)
//取消点赞
api.poiCommentLikeCancel = params => request.globalRequest(`app/comments/${params.commentId}/likeCancel`, 'PUT', {}, 1)







export default api

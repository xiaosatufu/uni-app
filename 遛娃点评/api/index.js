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

//发送验证码
api.userSendCode = params => request.globalRequest(`user/sendCode`, 'POST', params)
//登录
api.authLogin = params => request.globalRequest(`auth/login`, 'POST', params)
//poi列表
api.poiApp = params => request.globalRequest(`poi/app${formatGetUri(params)}`, 'GET', {}, 1)


//poi 详细

api.poiAppDetail = params => request.globalRequest(`poi/app/${params}`, 'GET', {}, 1)


export default api

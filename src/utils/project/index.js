import './interceptors' //自执行：请求响应拦截处理
import * as user from './user'
import * as token from './token'
import registerComponent from './registerComponent.js'
import md from './md.js'
import * as crypto from './crypto.js'
import * as copyToClipboard from './copyToClipboard'

export default {
    registerComponent,
    md,
    ...crypto,
    ...user,
    ...token,
    ...copyToClipboard
}
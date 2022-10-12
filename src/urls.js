//数据请求接口的地址前缀（已完成数据对接的接口）接口文档中提供的地址不包含 SERVER_API
const SERVER_API = WISOFT_CONFIG.sApiServer;
//数据请求接口的地址前缀（数据用前端工程中的模拟文件）
const SERVER_STATIC = process.env.BASE_URL + '_data/';

/* 路径配置：p*-页面路径；d*-数据请求路径 */
export const URLS_COM = {
    BASE_URL: process.env.BASE_URL, //根目录
    //<img :src="URLS_COM.BASE_URL + '_data/icon/' + oDesc.desc" />
    // d_lastVer: SERVER_API + 'index/getVersion.json',//向服务器请求最新版本号
    d_login: SERVER_API + 'sso/login', //登录请求
    d_getTokenWithTicket: SERVER_API + 'sso/getTokenWithTicket', //根据 ticket 获取 token
    d_getUser: SERVER_API + 'sso/getUser', //获取登录信息
    d_logout: SERVER_API + 'sso/logout', //退出登录
    d_upload: SERVER_API + 'file/upload', //上传材料
    d_preMd: SERVER_API + 'file/previewText', //预览md文件
    d_downloadcl: SERVER_API + 'frame/nfm/download/', //下载材料
    d_appauth_tree: SERVER_STATIC + 'frame/ams/appAndAuthTree.json', // 用户菜单
    i_pre: SERVER_API + 'file/previewPic?id=', //预览图片
    d_watermark: SERVER_API + 'getWaterMarkInfo', //水印数据
};

export const URLS_DEMO = {
    d_pagelist: SERVER_STATIC + "demo/pagelist.json", //分页数据
    d_bmlist: SERVER_STATIC + "demo/findAllBussinessOusByZone.json", //查询部门
};
export const URLS_FWGL = { //服务管理
    //获取api定义参数
    d_getApiDefParams: SERVER_API + 'dict/getApiDefParams',
    //服务申请记录
    d_apply: SERVER_API + 'apply/apply', //申请
    d_searchApply: SERVER_API + 'apply/searchApply', //分页查询服务(API)申请记录
    d_search: SERVER_API + 'userRelate/search', //服务(API)查询:已审核通过的api记录
    d_getApiList: SERVER_API + 'apply/getApiList', //根据申请记录ID查询API
    d_cancelApply: SERVER_API + 'apply/cancelApply', //取消申请
    d_deleteApply: SERVER_API + 'apply/delete', //删除申请
    d_audit: SERVER_API + 'apply/audit', //服务申请审核
    d_unappliedApilist: SERVER_API + 'apply/unappliedApiList', //获取未申请过的API的列表
    d_getResultsList: SERVER_API + 'apply/getResultsList', //获取返回api字段配置
    //服务管理
    d_listapigroup: SERVER_API + 'apimanager/listapigroup', //查询api分组
    d_saveorupdateapigroup: SERVER_API + 'apimanager/saveorupdateapigroup', //保存或修改Api分组
    d_deleteapigroup: SERVER_API + 'apimanager/deleteapigroup', //删除api分组
    d_pageapi: SERVER_API + 'apimanager/pageapi', //分页查询api信息
    d_deleteapi: SERVER_API + 'apimanager/deleteapi', //删除api
    d_registerapi: SERVER_API + 'apimanager/registerapi', //注册api
    d_deployapi: SERVER_API + 'apimanager/deployapi', //发布api
    d_takedownapi: SERVER_API + 'apimanager/takedownapi', //下架api
    d_saveorupdateapibase: SERVER_API + 'apimanager/saveorupdateapibase', //保存或修改API基本信息
    d_saveorupdateapirequestdef: SERVER_API + 'apimanager/saveorupdateapirequestdef', //保存或修改API请求定义信息
    d_saveorupdateapiparamters: SERVER_API + 'apimanager/saveorupdateapiparamters', //保存或修改API参数信息
    d_deleteapiparamters: SERVER_API + 'apimanager/deleteapiparamters', //删除API参数
    d_saveorupdateapiservicedef: SERVER_API + 'apimanager/saveorupdateapiservicedef', //保存或更新API后端定义
    d_saveorupdateapiresponsedef: SERVER_API + 'apimanager/saveorupdateapiresponsedef', //保存或更新API响应定义
    d_saveorupdateapiresults: SERVER_API + 'apimanager/saveorupdateapiresults', //保存或更新响应响应字段
    d_deleteapiresults: SERVER_API + 'apimanager/deleteapiresults', //删除响应字段
    d_saveorupdateapierrorcode: SERVER_API + 'apimanager/saveorupdateapierrorcode', //保存或更新错误码
    d_deleteapierrorcode: SERVER_API + 'apimanager/deleteapierrorcode', //删除错误代码
    d_saveorupdateapiaccessrule: SERVER_API + 'apimanager/saveorupdateapiaccessrule', //保存或更新API限流规则
    d_deleteapiaccessrule: SERVER_API + 'apimanager/deleteapiaccessrule', //删除API流控规则
    d_getapiallbyid: SERVER_API + 'apimanager/getapiallbyid', //根据api id获取api所有信息
    d_auditapi: SERVER_API + 'apimanager/auditapi', //审核api
    d_findAllForApiReg: SERVER_API + 'apiCategory/findAllForApiReg', //获取服务分类
    //根据apiid查询信息
    d_getapibasebyid: SERVER_API + 'apimanager/getapibasebyid', //根据API id获取API基本信息
    d_getapireqdefbyid: SERVER_API + 'apimanager/getapireqdefbyid', //根据API id获取API请求定义
    d_getapiparameterbyid: SERVER_API + 'apimanager/getapiparameterbyid', //根据API id获取API参数信息
    d_getapiservicedefbyid: SERVER_API + 'apimanager/getapiservicedefbyid', //根据API id获取API后端定义
    d_getapirespdefbyid: SERVER_API + 'apimanager/getapirespdefbyid', //根据API id获取API响应定义
    d_geterrorcodebyid: SERVER_API + 'apimanager/geterrorcodebyid', //根据API id获取API错误码
    d_getapiaccessrulebyid: SERVER_API + 'apimanager/getapiaccessrulebyid', //根据API id 获取API限流规则
    d_getapiresultsbyid: SERVER_API + 'apimanager/getapiresultsbyid', //根据API id 获取响应字段
    d_listorg: SERVER_API + 'xtgl/address/listorg', //获取当前机构下的服务地址列表
    //错误码管理
    d_listerrorcode: SERVER_API + 'errorcode/listerrorcode', //错误码list
    d_saveorupdateerrorcode: SERVER_API + 'errorcode/saveorupdateerrorcode', //错误码保存或修改
    d_deleteerrorcode: SERVER_API + 'errorcode/deleteerrorcode', //删除错误码管理
    d_exporterrcode: SERVER_API + 'errorcode/exportExcel', //错误码导出
    //服务地址维护
    d_addressall: SERVER_API + 'xtgl/address/all', //查询所有服务地址
    d_addresssearch: SERVER_API + 'xtgl/address/search', //分页请求服务地址
    d_addressdelete: SERVER_API + 'xtgl/address/delete', //删除服务分组
    d_addresssave: SERVER_API + 'xtgl/address/save', //保存或修改服务地址
    //访问规则配置
    d_rulesave: SERVER_API + 'strategyRule/save', //添加修改规则
    d_setIpList: SERVER_API + 'strategyRule/setIpList', //配置策略项
    d_rulesearch: SERVER_API + 'strategyRule/search', //分页查询访问规则
    d_bindedApiList: SERVER_API + 'strategyRule/bindedApiList', //查询已绑定的API
    d_unbindApiList: SERVER_API + 'strategyRule/unbindApiList', //获取未绑定的API列表
    d_bindApi: SERVER_API + 'strategyRule/bindApi', //绑定api
    d_unbindApi: SERVER_API + 'strategyRule/unbindApi', //解绑API
    d_ruledelete: SERVER_API + 'strategyRule/delete', //删除规则
    d_getAllProvider: SERVER_API + 'organization/getAllProvider', //请求所有机构
    //流控配置
    d_lkpzsearch: SERVER_API + 'app/search', //APP分页查询
    d_pageappauthapi: SERVER_API + 'appstrategy/pageappauthapi', //分页查询appauthapi
    d_getappstrategybyid: SERVER_API + 'appstrategy/getappstrategybyid', //根据apiid获取应用+api限流策略
    d_saveorupdateappstrategy: SERVER_API + 'appstrategy/saveorupdateappstrategy', //保存或者更新app+api限流
    d_appstrategy: SERVER_API + 'appstrategy/enabledisableappstrategy', //启用禁用流控
    //网关流控配置新
    d_ageadmindevstrategy: SERVER_API + 'devstrategy/pageadmindevstrategy', //获取开发者流控状态
    d_pageadminapistrategy: SERVER_API + 'devstrategy/pageadminapistrategy', // 获取开发者下的api流控状态
    d_getadmindevstragegybyid: SERVER_API + 'devstrategy/getadmindevstragegybyid', //获取管理员对开发者流控
    d_saveadmindevstrategy: SERVER_API + 'devstrategy/saveadmindevstrategy', //保存或修改管理员开发者流控
    d_disableorenableadmindevstrategy: SERVER_API + 'devstrategy/disableorenableadmindevstrategy', //开启或者关闭管理员对开发者流控
    //集市流控配置
    d_pagedevappstrategy: SERVER_API + 'devappapirule/pagedevappstrategy', //获取开发者下的应用
    d_disableorenabledevappstrategy: SERVER_API + 'devappapirule/disableorenabledevappstrategy', //开启或者关闭开发者对app流控
    d_pagedevappapistrategy: SERVER_API + 'devappapirule/pagedevappapistrategy', //分页查询获取开发者某个应用下的API+ API限流信息+ 限流是否开启
    d_savedevappapistrategy: SERVER_API + 'devappapirule/savedevappapistrategy', //保存或者修改开发者对API的限流信息
    d_getdevappapistragegybyid: SERVER_API + 'devappapirule/getdevappapistragegybyid', //根据开发者id + 应用id + api id 获取流控信息
    //调用量统计
    d_apiUsed: SERVER_API + 'sas/apiUsed', //调用量统计
    d_api_list: SERVER_API + 'apimanager/listapi', //查询api列表
    //热点服务
    d_hotapi: SERVER_API + 'apimanager/pageHotApi', //查询热点服务
    d_setApiHotSort: SERVER_API + 'apimanager/setApiHotSort', //设置热度值
}
export const URLS_JGGL = { //机构管理
    d_save: SERVER_API + 'organization/save', //保存机构
    d_delete: SERVER_API + 'organization/delete', //删除机构
    d_search: SERVER_API + 'organization/search', //分页查询机构
    d_changeStatus: SERVER_API + 'organization/changeStatus', //接入机构管理禁用
    d_audit: SERVER_API + 'organization/audit', //机构审核
    d_info: SERVER_API + 'organization/info', //查询机构信息
    d_createCode: SERVER_API + 'organization/createCode', //请求短码
}
export const URLS_YYGL = { //应用管理
    d_table: SERVER_API + 'app/search', //表格数据
    d_all: SERVER_API + 'organization/all', //机构下拉框
    d_getAllConsumer: SERVER_API + 'organization/getAllConsumer', //服务商的获取机构
    d_save: SERVER_API + 'app/save', //保存应用
    d_findall: SERVER_API + 'trade/findAll', //服务领域数据
    d_delete: SERVER_API + 'app/delete', //删除应用
    d_disableenableapp: SERVER_API + 'app/disableenableapp', //启用禁用应用
    d_unauth: SERVER_API + 'app/unauth', //检索app未授权过的api信息
    d_search: SERVER_API + 'userRelate/search', //接口开通列表
    d_deleteRelate: SERVER_API + 'userRelate/delete', //移除接口开通记录
    d_assignApiForOrg: SERVER_API + 'userRelate/assignApiForOrg', //接口开通：给机构批量分配API
    d_authorize: SERVER_API + 'userRelate/authorize', //接口开通：数据权限
    d_auth_add: SERVER_API + 'app/auth/add', //添加授权信息
    d_unauthForAdmin: SERVER_API + 'app/unauthForAdmin', //检索app未授权过的api信息
    d_forAdmin: SERVER_API + 'app/auth/search', //检索授权过的api信息
    d_category_findall: SERVER_API + 'apiCategory/findAll', //分类查询全部
    d_category_save: SERVER_API + 'apiCategory/save', //保存
    d_category_changeStatus: SERVER_API + 'apiCategory/changeStatus', //启用禁用
    d_category_parent: SERVER_API + 'apiCategory/findParentAll', //父级下拉框
    d_category_search: SERVER_API + 'apiCategory/search', //接口分类列表
    d_category_delete: SERVER_API + 'apiCategory/delete', //接口列表数据删除
    d_trade_save: SERVER_API + 'trade/save', //保存
    d_trade_changeStatus: SERVER_API + 'trade/changeStatus', //服务分类启用禁用
    d_trade_parent: SERVER_API + 'trade/findParentAll', //父级下拉框
    d_trade_search: SERVER_API + 'trade/search', //接口分类列表
    d_trade_delete: SERVER_API + 'trade/delete', //接口列表数据删除
    d_useCase_save: SERVER_API + 'useCase/save', //保存
    d_useCase_changeStatus: SERVER_API + 'useCase/changeStatus', //服务分类启用禁用
    d_useCase_parent: SERVER_API + 'useCase/findParentAll', //父级下拉框
    d_useCase_search: SERVER_API + 'useCase/search', //接口分类列表
    d_useCase_delete: SERVER_API + 'useCase/delete', //接口列表数据删除
    d_usecase_findall: SERVER_API + 'useCase/findAll', //服务场景
    d_examine: SERVER_API + 'app/audit', //应用审核
    d_sendemail: SERVER_API + 'appFile/save', //发送邮件
    d_getByAppId: SERVER_API + 'appFile/getByAppId', //根据应用id查询应用审核附件记录
    d_filedownload: SERVER_API + 'file/download', //下载附件
    d_yygl_forAdmin: SERVER_API + 'app/auditRecord/info', //检索授权过的api信息（新增加接口）
    d_yygl_key: SERVER_API + 'app/getAppKey', //一键生成密钥
    d_yygl_copykey: SERVER_API + 'app/findKeyByAppId', //一键复制密钥
}
export const URLS_JGRYGL = { //机构人员管理
    d_save: SERVER_API + 'orgUser/save', //保存机构人员信息
    d_search: SERVER_API + 'orgUser/search', //分页查询机构人员信息
    d_delete: SERVER_API + 'orgUser/delete', //删除机构人员信息
    d_reset_role: SERVER_API + 'orgUser/resetRole', //将人员权限设置成为既是服务使用者又提供者
    d_provider_delete: SERVER_API + 'providerRelate/delete', //批量移除关联关系
    d_provider_assignApiForOrg: SERVER_API + 'providerRelate/assignApiForOrg', //给用户批量分配API
    d_provider_noRelated: SERVER_API + 'providerRelate/searchNoRelated', //查询未关联的API
    d_provider_related: SERVER_API + 'providerRelate/searchRelated', //查询已关联的API
}

export const URLS_RZCX = { // 日志查询
    d_rzcx: SERVER_API + 'log/access'
}

export const URLS_ZXCS = { // 在线测试
    d_app_list: SERVER_API + 'app/curdevapps', // 查询app列表
    d_org_list: SERVER_API + 'organization/getAllProvider', // 查询服务商列表
    d_group_list: SERVER_API + 'apimanager/listapigroup', // 查询api分组
    d_api_list: SERVER_API + 'apimanager/listapi', // 查询api列表
    d_api_detail: SERVER_API + 'apimanager/getapiallbyid', // api详情
    d_token: SERVER_API + 'debug/gettoken', // 获取token
    d_log_byreq: SERVER_API + 'debug/getlogbyreqid' // 根据reqid请求日志信息
}
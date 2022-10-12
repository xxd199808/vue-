import wiv from '@/utils/wiv/index.js';

//TODO 前端开发时修改
let PROD_DATA = false; //数据是否来自服务器，build 版本将强制设为 true

//初始化配置：window.WISOFT_CONFIG
const fInitConfig = function() {
    const BASE_URL = process.env.BASE_URL, //前端工程地址
        sHost = location.origin + '/';
    const oConfigUrl = {
        //后端服务工程的访问地址，从协议名到后端工程名 apig/，前端模拟数据路径对应：public/_json/
        xc: sHost + 'apigapi/', //现场：url 参数 mode=xc
        cs: sHost + 'beaver/', //测试：url 参数 mode=cs
        ht: sHost + 'beaver/', //后台（朱晓帆）：url 参数 mode=ht
        proxy: BASE_URL + 'beaver/', //联调，将通过代理映射到联调服务
        local: BASE_URL + '_json/' //本地测试数据
    };
    const PROD_ENV = process.env.NODE_ENV === 'production'; //是否是 build 生成的版本
    let sMode,
        sServerPath; //后端服务的工程访问地址

    if (PROD_ENV) { //build 模式
        // 从 url 获取 mode，默认为 xc：现场
        sMode = wiv.utils.fGetUrlParams().mode || 'xc';
        PROD_DATA = true;
    }
    else { //前端开发模式：联调/本地
        sMode = PROD_DATA ? 'proxy' : 'local';
    }
    sServerPath = oConfigUrl[sMode];

    window.WISOFT_CONFIG = {
        PROD_DATA: PROD_DATA, //是否访问后端服务请求数据
        PROD_ENV: PROD_ENV, // 是否打包生成
        sApiServer: sServerPath,
        sZxcsServer: PROD_DATA ? '/runtime/' : '/_json/', // 在线测试地址前缀
        //-- 项目特殊处理 BEGIN
        //环境预警项目中，前端开发时，需要将 frame 接口映射到 frame/
        //sFrameServer: PROD_ENV ?
        //    sServerPath : sServerPath.replace(/vuePrj\/$/, 'frame/')
        //-- 项目特殊处理 END
    };
}

//从服务端请求配置，扩展 window.WISOFT_CONFIG
const fRequestConfig = function() {
    return new Promise(function(fResolve, fReject) {
        //从约定的请求地址获取服务配置
        //wiv.utils.fRequest({
        //    //获取配置的接口地址
        //    url: WISOFT_CONFIG.sApiServer + 'front/getConfig'
        //}).then(({ data: oData }) => {
        //    //合并请求返回的配置
        //    Object.assign(WISOFT_CONFIG, {
        //        server_type: oData.server_type,
        //        sCasLogin: oData.sCasLogin,
        //        sAmapKey: oData.sAmapKey,
        //        //处理 link 为 oLink
        //        oLink: wiv.utils.fArr2Hash({
        //            data: oData.link || [],
        //            keyField: 'name',
        //            valField: 'url'
        //        })
        //    });

        fResolve();
        //});
    });
};

fInitConfig();

export { fRequestConfig }
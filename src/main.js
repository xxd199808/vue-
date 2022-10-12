/**
 * url 参数
 * mode（仅当不同环境中服务部署的 path 不同时才需要配置）：不传为现场, 测试 cs，后台 ht。项目中将根据此配置决定请求地址的前缀
 */
//自执行初始化配置文件，必须立刻引入
import { fRequestConfig } from './utils/config.js';

import Vue from 'vue'
//第三方插件
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

//wiv 组件库（来源 wivPro）
import './utils/wiv/theme/index.css';
import wiv from './utils/wiv/index.js';
//项目资源
import './assets/font/iconfont/iconfont.css'; // 图标字体文件
import './assets/css/common.less'; //公用less（请在项目工具、项目路由之前引入，防止因为路由引入 views 中的 vue，导致其中的样式在 common.less 之前生效）
import utilsProject from './utils/project/index'; //项目工具
import App from './App.vue';
import router from './router';
import store from './store';
import config from '../package.json'
//if (!WISOFT_CONFIG.showlog && console) {
//    //生产环境，禁用打印输出
//    console.error = console.log = function() {};
//}

//事件订阅
Vue.prototype.$EventBus = new Vue();
Vue.prototype.G_API = {
    ...utilsProject
};
//生产环境不显示vue的提示
Vue.config.productionTip = false;

//安装插件
Vue.use(ElementUI, { size: 'small' });
Vue.use(wiv, {
    pagebar: {
        percount: 10, //每页显示的数据条数
        render: ['flex1', 'prev', 'page', 'next', 'total', 'go', 'flex1'],
        toolTxts: ['<i class="el-icon-d-arrow-left"></i>', '<i class="el-icon-arrow-left"></i>', '<i class="el-icon-arrow-right"></i>', '<i class="el-icon-d-arrow-right"></i>']
    },
    request: {
        argToJson: true
    }
});
// 全局变量增加方法
Object.assign(_WI, {
    ...wiv.utils
})
//根据分辨率设置html字号
//wiv.utils.fSetRootFontsize(1920, 0);
console.log('version:', config.version)
fRequestConfig().then(function() {
    new Vue({
        store,
        router,
        render: (h) => h(App)
    }).$mount('#app');
});
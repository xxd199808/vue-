<template>
    <div class="flex-col">
    </div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import { URLS_ZXCS } from '@/urls.js';
    export default {
        //**** el, name
        //**** components, directives
        //**** extends, mixins, provide/inject
        //**** props, data, computed
        props: ['code'],
        data() {
            return {
                oForm: {//选择框初值
                    org: '',//服务商
                    group: '',//分组
                    app: '',// 
                    api: '',//api
                },
                oCurApi: {},// 当前选择的api信息
                sRouteCode: '',// 当前选择api的routeCode
                oParams: {// 编辑的请求配置
                    query: [],
                    head: [],
                    body: [],
                    parameterpath: []
                },
                aAppData: [],// app选项
                aOrgData: [],// 服务商选项
                aGroupData: [],// 分组选项
                aApiData: [],// api选项
                sActiveTab: 'query',// 选中的tab页
                oResult: {},//右边展示区域数据
                sUserType: '',
            }
        },
        computed: {
            //sUserType() {// 用户类型，根据页面判断
            //    switch (this.code) {
            //        case 'APIG-ZXCS-ZXCS':// 管理员
            //            return 'ADMIN'
            //        case 'MPS-FWTGS-ZXCS':// 提供商
            //            return 'PROVIDER'
            //        case 'MPS-YYJRF-ZXCS'://开发者
            //            return 'DEVELOPER'
            //    }
            //    return 'DEVELOPER'
            //}
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
            switch (this.code) {// 用户类型，根据页面判断
                case 'APIG-ZXCS-ZXCS':// 管理员
                    this.sUserType = 'ADMIN';
                    this.fRequestOrgList();
                    this.fRequestApiList();
                    break;
                case 'MPS-FWTGS-ZXCS':// 提供商
                    this.sUserType = 'PROVIDER';
                    this.fRequestGroupList();
                    this.fRequestApiList();
                    break;
                default://开发者
                    this.sUserType = 'DEVELOPER'
                    this.fRequestAppList();
            }

        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
            //*** 开放给父子组件的接口方法
            //*** 事件响应函数
            fOrgChange() {// 服务商改变事件
                this.oForm.api = '';
                this.oCurApi = {};
                this.oResult = {};
                this.fRequestApiList();
            },
            fGroupChange() {// 分组改变事件
                this.oForm.api = '';
                this.oCurApi = {};
                this.oResult = {};
                this.fRequestApiList();
            },
            fAppChange() {// app改变事件
                if (!this.oForm.app) {
                    this.oForm.api = '';
                    this.oCurApi = {};
                    this.oResult = {};
                    this.aApiData = [];
                } else {
                    this.oForm.api = '';
                    this.oCurApi = {};
                    this.oResult = {};
                    this.fRequestApiList();
                }

            },
            fApiChange() {//api修改
                this.oCurApi = {};
                this.oResult = {};
                this.oParams = {// 编辑的请求配置
                    query: [],
                    head: [],
                    body: [],
                    parameterpath: []
                };
                if (this.oForm.api) {
                    this.fRequestApiDetail();
                }
            },
            fSendBtnClick() {//发送按钮点击事件
                if (this.sUserType === 'DEVELOPER' && !this.oForm.app) {
                    this.$WIV.fShowMsg('请先选择APP!', {
                        type: 'warning'
                    });
                    return;
                }
                this.oResult = {};
                // 获取token
                this.$WIV.fRequest({
                    url: URLS_ZXCS.d_token,
                    data: {
                        type: this.sUserType,
                        appId: this.oForm.app.split(';')[0],
                        apiId: this.oForm.api
                    }
                }).then(({ data }) => {
                    this.fSendRequest(data)
                })
            },
            fAddParam() {// 新增参数按钮点击事件
                this.oParams[this.sActiveTab].push({
                    name: '',
                    val: '',
                    description: ''
                });
            },
            fDelParam(oData, nIndex) {//删除新增参数
                this.oParams[this.sActiveTab].splice(nIndex, 1);
            },
            //*** 其他
            fRequestOrgList() {// 请求服务商选项
                this.$WIV.fRequest({
                    url: URLS_ZXCS.d_org_list,
                    data: {}
                }).then(({ data }) => {
                    this.aOrgData = data || [];
                })
            },
            fRequestGroupList() {// 请求分组选项
                this.$WIV.fRequest({
                    url: URLS_ZXCS.d_group_list,
                    data: {}
                }).then(({ data }) => {
                    this.aGroupData = data || [];
                })
            },
            fRequestAppList() {// 请求APP选项
                this.$WIV.fRequest({
                    url: URLS_ZXCS.d_app_list,
                    data: {}
                }).then(({ data }) => {
                    this.aAppData = data || [];
                })
            },
            fRequestApiList() {//根据服务商机构获取对应的api
                this.$WIV.fRequest({
                    url: URLS_ZXCS.d_api_list,
                    data: {
                        groupId: this.oForm.group,
                        orgId: this.oForm.org,
                        appId: this.oForm.app.split(';')[1],
                        userType: this.sUserType
                    }
                }).then(({ data }) => {
                    this.aApiData = data || [];
                })
            },
            fRequestApiDetail() {// 获取api详情
                this.$WIV.fRequest({
                    url: URLS_ZXCS.d_api_detail,
                    data: {
                        apiBaseId: this.oForm.api
                    }
                }).then(({ data }) => {
                    this.oCurApi = data.apiRequestDef || {};
                    this.sRouteCode = data.routeCode || '';
                    data.apiParameters.forEach((oParams) => {
                        if (oParams.paramType === 'NORMAL') {
                            this.oParams[(oParams.req_param_position || '').toLowerCase()].push({
                                name: oParams.req_param_name || '',
                                val: oParams.req_param_default_val || '',
                                descritpion: oParams.req_param_comment || ''
                            })
                        }
                    })
                })
            },
            fSendRequest(sToken) {// 发送请求获取请求结果
                let oCurApi = this.oCurApi;
                let oParams = this.oParams;
                let sUrl = WISOFT_CONFIG.sZxcsServer + this.sRouteCode + oCurApi.fullPath; // 替换path param 添加query
                let oQuery = {};// 设置query参数
                let oBody = {}; // 设置body参数
                let oHeader = {// 设置header参数
                    'X-APIG-TOKEN': sToken,
                    'X-APIG-TIMESTAMP': Date.now(),
                    'X-APIG-NONCE': this.$WIV.fGenerateGuid({
                        pattern: 'xxxxxyyxxxxx'
                    }),
                };

                oParams['head'].forEach(p => {
                    if (p.name) {
                        oHeader[p.name] = p.val;
                    }
                })
                oParams['query'].forEach(p => {
                    if (p.name) {
                        oQuery[p.name] = p.val;
                    }
                })
                oParams['parameterpath'].forEach(p => {
                    if (p.name) {
                        sUrl = sUrl.replace('{' + p.name + '}', p.val);
                    }
                })
                sUrl += '?' + qs.stringify(oQuery);
                if (oCurApi.req_body_type) {
                    oHeader['content-type'] = oCurApi.req_body_type;
                }
                if (oHeader['content-type'] === 'application/json') {
                    oParams['body'].forEach(p => {
                        if (p.name) {
                            oBody[p.name] = p.val;
                        }
                    })
                } else {
                    oBody = new FormData();
                    for (let oItem of oParams['body']) {
                        if (oItem.name) {
                            oBody.append(oItem.name, oItem.val);
                        }
                    }
                }
                this.fDoSend(oCurApi.req_method, sUrl, oBody, oHeader);
                //} else {
                //    this.$message({ showClose: true, message: msg, type: 'warning' });
                //}
            },
            fDoSend(method, url, data, header) {
                axios({
                    method: method,
                    url: url,
                    data: data,
                    headers: header,
                    _test: true
                }).then((response) => {
                    this.fGetLog(response.headers['apig-header-requestid'], 10);
                }).catch((err) => {
                    let rid = err.response.headers['apig-header-requestid'];
                    if (rid) {
                        this.fGetLog(rid, 10);
                    } else {
                        this.$message({ showClose: true, message: '请查看接口是否已上线', type: 'warning' });
                    }
                });
            },
            fGetLog(request_id, time) {
                this.$WIV.fRequest({
                    url: URLS_ZXCS.d_log_byreq,
                    data: {
                        requestId: request_id,
                        userType: this.sUserType
                    }
                }).then(({ data }) => {
                    if (!data) {
                        if (time > 0) {
                            setTimeout(() => {
                                this.fGetLog(request_id, --time);
                            }, 1000);
                        }
                        return;
                    }
                    this.oResult = {
                        ...data
                    };
                });
            },
            fTimeFormatter(cellValue) {
                return cellValue ? this.$WIV.fDate2Str.date2Str(new Date(cellValue), 'yyyy-MM-dd HH:mm:ss') : '-';
            },
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .api-input {
        width: 320px;
        /deep/.el-input__inner {
            border-radius: 0;
            border-right: none;
        }
    }
    .api-send-btn {
        //margin-left: 5px;
        border-radius: 0 8px 8px 0;
        //border-left: none;
    }
    .zxcs-table {
        /deep/thead th {
            font-size: 14px;
        }
        /deep/.el-input--small .el-input__inner {
            height: 30px;
            line-height: 28px;
            padding: 0 8px;
            border-radius: 4px;
        }
    }
    .zxcs-param-btn,
    .zxcs-param-btn:focus,
    .zxcs-param-btn:active {
        width: 20px;
        height: 20px;
        padding: 0;
        border-radius: 50%;
    }
    .el-divider--vertical {
        height: 100%;
        margin: 0 16px;
    }
</style>

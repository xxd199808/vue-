<template>
    <div class="mainpage">
        <el-row :gutter="5">
            <el-col :span="12">
                <el-select v-model="api_group_id"
                           filterable
                           clearable
                           placeholder="请选择分组"
                           @change="findApi"
                           style="width:200px">
                    <el-option v-for="item in groups"
                               :key="item.id"
                               :label="item.name"
                               :value="item.id"></el-option>
                </el-select>
                <el-select v-model="api_base_id"
                           filterable
                           clearable
                           placeholder="请选择Api"
                           @change="searchApiDef"
                           style="width:200px">
                    <el-option v-for="item in apis"
                               :key="item.api_base_id"
                               :label="item.name"
                               :value="item.api_base_id">
                        <span style="float: left">{{ item.name }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.base_path+item.req_path }}</span>
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="12"
                    style="text-align: right">

            </el-col>
        </el-row>
        <el-row :gutter="20"
                v-show="showForm"
                style="margin-top:10px">
            <el-col :span="12">
                <el-input v-model="path"
                          disabled>
                    <template slot="prepend">{{apiRequestDef.req_method}}</template>
                    <el-button slot="append"
                               @click='send'>发送</el-button>
                </el-input>
                <el-form ref="apiForm"
                         label-width="100px"
                         label-suffix=':'>
                    <el-tabs v-model="activeTab"
                             @tab-click="tabClick">
                        <el-tab-pane label="Params"
                                     name="query"></el-tab-pane>
                        <el-tab-pane label="Headers"
                                     name="head"></el-tab-pane>
                        <el-tab-pane label="Body"
                                     name="body"
                                     v-if="'GET'!=apiRequestDef.req_method"></el-tab-pane>
                        <el-tab-pane label="Paths"
                                     name="parameterPath"></el-tab-pane>
                    </el-tabs>
                    <div v-for="(p,index) in apiParameters"
                         :key="p.id">
                        <el-form-item :label="p.req_param_name"
                                      v-show="p.req_param_position==activeTab"
                                      :required="p.req_param_notnull">
                            <span slot="label">
                                <el-input v-if="p._newParam"
                                          v-model="p.req_param_name"></el-input>
                                <span v-else>{{p.req_param_name}}</span>
                            </span>
                            <el-input v-model="p._val">
                                <el-button slot="append"
                                           v-if='p.req_param_default_val!=null && ""!=p.req_param_default_val'
                                           @click="setDefaultVal(p)">默认值</el-button>
                                <el-button slot="append"
                                           v-else
                                           @click="apiParameters.splice(index,1)">删除</el-button>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div style="margin-top:5px;">
                        <el-button size="small"
                                   type="primary"
                                   plain
                                   @click="addParam">添加参数</el-button>
                    </div>
                </el-form>
            </el-col>
            <el-col :span="12">
                <el-descriptions :column="1"
                                 border
                                 v-show="showDescrip">
                    <el-descriptions-item label="request_id">{{log.request_id}}</el-descriptions-item>
                    <el-descriptions-item label="请求时间"> {{log.request_arrive_fmt}}</el-descriptions-item>
                    <el-descriptions-item label="请求地址"> {{log.request_api}}</el-descriptions-item>
                    <el-descriptions-item label="原始请求header">{{log.original_request_header}}</el-descriptions-item>
                    <el-descriptions-item label="最终请求header">{{log.modified_request_header}}</el-descriptions-item>
                    <el-descriptions-item label="原始请求body">{{log.original_request_body}}</el-descriptions-item>
                    <el-descriptions-item label="最终请求body">{{log.modified_request_body}}</el-descriptions-item>
                    <el-descriptions-item label="响应时间">{{log.response_time_fmt}}</el-descriptions-item>
                    <el-descriptions-item label="状态码">{{log.response_code}}</el-descriptions-item>
                    <el-descriptions-item label="后端请求地址">{{log.route_to}}</el-descriptions-item>
                    <el-descriptions-item label="响应内容">{{log.response_content}}</el-descriptions-item>
                    <el-descriptions-item label="耗时">{{log.elapsed_time_fmt}}</el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    //import Vue from 'vue'
    //import axios from 'axios'
    //import { URLS_GATE, URLS_LOG } from '@/urls.js'
    //import dataFormat from '@/utils/common/dataFormat.js'
    //import { fGetToken } from '@/utils/common/requestWithToken'
    export default {
        name: "apidebug",
        data() {
            return {
                api_group_id: '',
                api_base_id: '',
                groups: [],
                apis: [],
                apiRequestDef: {},
                apiParameters: [],
                activeTab: 'query',
                showForm: false,
                log: {},
                showDescrip: false,
            };
        },
        created() {
            this.findAllApiGroup();
        },
        computed: {
            path() {
                return this.apiRequestDef.base_path + this.apiRequestDef.req_path;
            }
        },
        methods: {
            findAllApiGroup() {
                this.G_API.fRequest({
                    ajaxOpts: { url: URLS_GATE.d_findAllApiGroup }
                }).then((data) => {
                    this.groups = data;
                });
            },
            findApi() {
                this.clearApi();
                if (this.api_group_id.length > 0) {
                    let sobj = { pageSize: Number.MAX_SAFE_INTEGER, pageNum: 1, group_id: this.api_group_id };
                    this.G_API.fRequest({
                        ajaxOpts: { url: URLS_GATE.d_searchApiDef, data: sobj }
                    }).then((data) => {
                        this.apis = data.pageData;
                    });
                }
            },
            clearApi() {
                this.api_base_id = '';
                this.apis = [];
                this.log = {};
                this.showForm = false;
                this.showDescrip = false;
            },
            searchApiDef() {
                this.showForm = false;
                this.showDescrip = false;
                this.activeTab = 'query';
                this.apiRequestDef = {};
                this.apiParameters = [];
                this.log = {};
                if (this.api_base_id.length > 0) {
                    this.G_API.fRequest({
                        ajaxOpts: { url: URLS_GATE.d_searchApiDef + "/" + this.api_base_id }
                    }).then((data) => {
                        this.apiRequestDef = data.apiRequestDef || {};//api请求定义
                        this.apiParameters = data.apiParameters || [];//api请求入参定义和对应后端的参数映射
                        this.showForm = true;
                    });
                }
            },
            tabClick(tab, event) {

            },
            setDefaultVal(p) {
                Vue.set(p, '_val', p.req_param_default_val);
            },
            timeFormatter(row, column, cellValue, index) {
                return cellValue ? dataFormat.date2Str(new Date(cellValue), 'yyyy-MM-dd HH:mm:ss') : '-';
            },
            send() {
                this.showDescrip = false;
                let isValid = true;
                let msg = '';
                let params = { 'query': [], 'head': [], 'body': [], 'parameterPath': [] };
                this.apiParameters.forEach(p => {
                    let pname = p.req_param_name;
                    let pval = p._val;
                    if (p._newParam && msg == '') {
                        if (pname == null || pname.length == 0) {
                            msg = '添加参数名不能为空';
                            isValid = false;
                        } else if (pval == null || pval == '') {
                            msg = '添加参数值不能为空';
                            isValid = false;
                        }
                    }
                    if (p.req_param_notnull && (pval == null || pval == '') && msg == '') {
                        msg = pname + '不能为空';
                        isValid = false;
                    }
                    params[p.req_param_position].push({ name: pname, val: pval });
                });
                if (isValid) {
                    let method = this.apiRequestDef.req_method;
                    let url = this.path; // 替换path param 添加query
                    let data = {}; // 设置body参数
                    let header = {}; // 设置header参数

                    params['head'].forEach(p => {
                        header[p.name] = p.val;
                    })
                    params['body'].forEach(p => {
                        data[p.name] = p.val;
                    })
                    params['parameterPath'].forEach(p => {
                        url = url.replace('{' + p.name + '}', p.val);
                    })
                    url += ('?' + params['query'].flatMap(p => p.name + '=' + p.val).join('&'));

                    header['content-type'] = this.apiRequestDef.req_body_type;

                    this.doSend(method, url, data, header);
                } else {
                    this.$message({ showClose: true, message: msg, type: 'warning' });
                }
            },
            doSend(method, url, data, header) {
                let token = fGetToken();
                header[token.tokenField] = token.token
                if (header['content-type'] == null) {
                    delete header['content-type']
                } else if ('application/json' != header['content-type']) {
                    let formData = new FormData();
                    for (let key in data) {
                        formData.append(key, data[key]);
                    }
                    data = formData;
                }
                axios({
                    method: method,
                    url: url,
                    data: data,
                    headers: header
                })
                    .then((response) => {
                        this.getLog(response.headers.beaver_request_id, 10);
                    })
                    .catch((err) => {
                        let rid = err.response.headers.beaver_request_id;
                        if (rid) {
                            this.getLog(rid, 10);
                        } else {
                            this.$message({ showClose: true, message: '请查看接口是否已上线', type: 'warning' });
                        }
                    });
            },
            getLog(request_id, time) {
                let that = this;
                setTimeout(function () {
                    that.G_API.fRequest({
                        showloading: false,
                        ajaxOpts: {
                            url: URLS_LOG.d_getLog + '/' + request_id
                        }
                    }).then((data) => {
                        if (data == null) {
                            if (time > 0) {
                                that.getLog(request_id, --time);
                            }
                        } else {
                            data.request_arrive_fmt = that.timeFormatter(null, null, data.request_arrive);
                            data.response_time_fmt = that.timeFormatter(null, null, data.response_time);
                            data.elapsed_time_fmt = data.elapsed_time / 1000 + '秒';
                            that.log = data;
                            that.showDescrip = true;
                            if (time > 0 && (data.original_request_header == null || data.original_request_header == '')) {
                                that.getLog(request_id, --time);
                            }
                        }
                    });
                }, 1000);
            },
            addParam() {
                this.apiParameters.push({ req_param_name: '', req_param_position: this.activeTab, _newParam: true })
            }
        }
    };
</script>

<style>
    .mainpage {
        margin: 10px;
    }
    .searchText {
        width: 300px;
    }
    .searchBtn {
        margin-left: 5px;
    }
    .switchStyle .el-switch__label {
        position: absolute;
        display: none;
        color: #fff;
    }
    .switchStyle .el-switch__label--left {
        z-index: 9;
        left: 20px;
    }
    .switchStyle .el-switch__label--right {
        z-index: 9;
        left: -4px;
    }
    .switchStyle .el-switch__label.is-active {
        display: block;
    }
    .switchStyle.el-switch .el-switch__core,
    .el-switch .el-switch__label {
        width: 70px !important;
    }

    .el-input.is-disabled .el-input__inner {
        color: #606266;
        cursor: auto;
    }
    #pane-apiwg-apidebug {
        overflow-y: auto;
    }
</style>
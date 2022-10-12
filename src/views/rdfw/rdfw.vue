<template>
    <div class="flex-col">
        <div class="panel flex-col flex1">
            <div class="panel-body flex-col flex1">
                <div class="filter-bar _between">
                    <div>
                    </div>
                    <el-form ref="formfilter"
                             :inline="true"
                             class="api-form">
                        <el-form-item>
                            <el-select clearable
                                       v-model="oSearch.sOrgId"
                                       placeholder="请选择机构">
                                <el-option v-for="item in aJgList"
                                           :key="item.id"
                                           :label="item.orgName"
                                           :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input clearable
                                      v-model="oSearch.apiName"
                                      placeholder="请输入API名称"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"
                                       @click="fResetTable">查询</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="flex1">
                    <el-table :data="aTableData"
                              stripe
                              height="100%">
                        <el-table-column property="name"
                                         label="API名称">
                        </el-table-column>
                        <el-table-column property="callAddress"
                                         label="路径">
                        </el-table-column>
                        <el-table-column property="comment"
                                         label="备注">
                        </el-table-column>
                        <el-table-column property="requestMethod"
                                         label="请求模式"
                                         align="center"
                                         width="100">
                        </el-table-column>
                        <el-table-column property="update_time"
                                         label="更新时间"
                                         width="100"
                                         align="center">
                        </el-table-column>
                        <el-table-column property="hotSort"
                                         label="置顶值"
                                         align="center">
                        </el-table-column>
                        <el-table-column property="hotValue"
                                         label="热度值"
                                         align="center">
                        </el-table-column>
                        <el-table-column label="操作"
                                         align="center"
                                         width="220">
                            <template slot-scope="{row}">
                                <el-button @click="fTableBtnClick('edit',row)">
                                    置顶设置
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <wiv-pagebar ref="pagebar"
                             @after-flip="fAfterFlip"></wiv-pagebar>
            </div>
        </div>
        <wiv-dialog :visible.sync="bEditDialog"
                    title="设置置顶值"
                    width="300px">
            <div class="wiv-dialog">
                <div class="wiv-dialog-body flex1 flex-col">
                    <div class="panel flex1">
                        <div class="panel-body">
                            <el-form label-width="80px"
                                     :model="oForm"
                                     :rules="oRules"
                                     ref="form">
                                <el-form-item label="置顶值:"
                                              prop="nHotSort">
                                    <el-input type="number"
                                              v-model="oForm.nHotSort"></el-input>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
                <div class="wiv-dialog-foot">
                    <el-button type="primary"
                               @click="fShFootBtnClick('commit')">确定</el-button>
                    <el-button @click="fShFootBtnClick('cancel')">取消</el-button>
                </div>
            </div>
        </wiv-dialog>
    </div>
</template>

<script>
    import { URLS_FWGL } from '@/urls.js'
    export default {
        //**** el, name
        //**** components, directives
        components: {
        },
        //**** extends, mixins, provide/inject
        //**** props, data, computed
        props: {
            code: {
                type: String
            }
        },
        data() {
            return {
                oSearch: {//搜索条件
                    apiName: '',//api名称
                    sOrgId: '',//绑定的机构id
                },
                aTableData: [],//表格数据
                aJgList: [],//机构列表下拉框数据
                oCheckData: {},
                bEditDialog: false,//编辑弹框是否显示
                oForm: {
                    nHotSort: 0
                },
                oRules: {
                    nHotSort: []
                }
            }
        },
        computed: {
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
            this.fJgListRequest()
        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
            //*** 开放给父子组件的接口方法
            fAfterFlip(aData) {//分页条组件
                this.aTableData = aData;

            },
            //*** 事件响应函数
            fTableBtnClick(sVal, oTable) {//表格按钮点击事件
                this.oCheckData = oTable;
                this.oForm.nHotSort = JSON.parse(JSON.stringify(this.oCheckData)).hotSort
                this.bEditDialog = true;
            },
            fShFootBtnClick(sType) {
                switch (sType) {
                    case 'commit':
                        this.$refs.form.validate((valid) => {
                            if (valid) {
                                this.fSetHotSortRequest()
                            }
                        })
                        break;
                    case 'cancel':
                        this.bEditDialog = false
                        break;

                }
            },
            fResetTable() {//重置表格
                this.$refs.pagebar.fReset({
                    url: URLS_FWGL.d_hotapi,
                    args: {
                        apiName: this.oSearch.apiName,
                        orgId: this.oSearch.sOrgId,
                    }
                });
            },
            fJgListRequest() {//机构下拉框列表数据选择
                this.$WIV.fRequest({
                    url: URLS_FWGL.d_getAllProvider,
                }).then(({ data: res }) => {
                    this.aJgList = res;
                    this.fResetTable()
                })
            },
            fSetHotSortRequest() {//设置热度值
                this.$WIV.fRequest({
                    url: URLS_FWGL.d_setApiHotSort,
                    data: {
                        id: this.oCheckData.id,
                        hotSort: this.oForm.nHotSort
                    }
                }).then(({ data: res }) => {
                    this.bEditDialog = false;
                    this.fResetTable()
                })
            }
            //*** 其他
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .api-form {
        text-align: right;
    }
</style>

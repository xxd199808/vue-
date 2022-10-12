<template>
    <div>
        <el-alert title="最新示例：Git\front\frame\vuePrjHtgl"
                  type="warning"
                  :closable="false"
                  show-icon>
        </el-alert>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">
                    <div class="panel-head-l-icon"></div>按钮
                </div>
            </div>
            <div class="panel-body">
                <el-row>
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                </el-row>
                <br />
                <el-row>
                    <el-button disabled>默认按钮</el-button>
                    <el-button type="primary"
                               disabled>主要按钮</el-button>
                    <el-button type="success"
                               disabled>成功按钮</el-button>
                    <el-button type="info"
                               disabled>信息按钮</el-button>
                    <el-button type="warning"
                               disabled>警告按钮</el-button>
                    <el-button type="danger"
                               disabled>危险按钮</el-button>
                </el-row>
                <br />
                <el-row>
                    <el-button plain>默认按钮</el-button>
                    <el-button type="primary"
                               plain>主要按钮</el-button>
                    <el-button type="success"
                               plain>成功按钮</el-button>
                    <el-button type="info"
                               plain>信息按钮</el-button>
                    <el-button type="warning"
                               plain>警告按钮</el-button>
                    <el-button type="danger"
                               plain>危险按钮</el-button>
                </el-row>
                <br />
                <el-row>
                    <el-button plain
                               disabled>默认按钮</el-button>
                    <el-button type="primary"
                               plain
                               disabled>主要按钮</el-button>
                    <el-button type="success"
                               plain
                               disabled>成功按钮</el-button>
                    <el-button type="info"
                               plain
                               disabled>信息按钮</el-button>
                    <el-button type="warning"
                               plain
                               disabled>警告按钮</el-button>
                    <el-button type="danger"
                               plain
                               disabled>危险按钮</el-button>
                </el-row>
            </div>
        </div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">
                    <div class="panel-head-l-icon"></div>顶部过滤表单
                </div>
            </div>
            <div class="panel-body">
                <div class="filter-bar">
                    <el-form ref="formfilter"
                             :model="oForm"
                             :inline="true">
                        <el-form-item label="学校名称:">
                            <el-input v-model="oForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="地址:">
                            <el-input v-model="oForm.dwdz"></el-input>
                        </el-form-item>
                        <el-form-item label="类型:">
                            <el-select v-model="oForm.lx"
                                       placeholder="请选择">
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">查询</el-button>
                            <el-button type="success">新建</el-button>
                            <el-button>导出</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">
                    <div class="panel-head-l-icon"></div>分页列表
                </div>
            </div>
            <div class="panel-body">
                <el-table :data="aTable"
                          stripe>
                    <el-table-column label="序号"
                                     type="index"
                                     :index="nListStartNo"
                                     align="center"
                                     width="80">
                    </el-table-column>
                    <el-table-column property="name"
                                     label="学校名称"
                                     align="center">
                    </el-table-column>
                    <el-table-column label="操作"
                                     align="center"
                                     width="300">
                        <template slot-scope="oRow">
                            <el-button type="text"
                                       icon="el-icon-view"
                                       @click="fTableBtnClick('view', oRow.row)"></el-button>
                            <el-button type="text"
                                       icon="el-icon-edit"
                                       disabled
                                       @click="fTableBtnClick('edit', oRow.row)"></el-button>
                            <el-button type="text"
                                       icon="el-icon-delete"
                                       @click="fTableBtnClick('delete', oRow.row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <wiv-pagebar ref="pagebar"
                             @after-flip="fAfterFlip"></wiv-pagebar>
            </div>
        </div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">表单</div>
            </div>
            <div class="panel-body">
                <el-form ref="form"
                         :model="oForm"
                         label-width="120px">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item prop="name"
                                          label="学校名称：">
                                <el-input v-model="oForm.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="联系人：">
                                <el-input v-model="oForm.lxr"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">标签页</div>
            </div>
            <div class="panel-body">
                <el-tabs v-model="sActiveTab"
                         class="_badge">
                    <el-tab-pane name="first">
                        <template slot="label">
                            <el-badge :value="99"
                                      class="item">
                                用户管理
                            </el-badge>
                        </template>
                        用户管理
                    </el-tab-pane>
                    <el-tab-pane name="second">
                        <template slot="label">
                            <el-badge :value="99"
                                      class="item"
                                      type="primary">
                                配置管理
                            </el-badge>
                        </template>
                        配置管理
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import { URLS_DEMO } from '@/urls';
    export default {
        data() {
            return {
                nListStartNo: 0,//当前页数据的开始序号（从1开始）
                aTable: [],
                oForm: {},
                sActiveTab: 'first',
                nNum: 0
            };
        },
        mounted() {
            this.$refs.pagebar.fReset({
                url: URLS_DEMO.d_pagelist
            });
        },
        methods: {
            //表格按钮点击事件
            fTableBtnClick(sType, oRow) {
                console.log(sType, oRow.name);
            },
            fAfterFlip(aData, oPageApi) {
                this.aTable = aData;
                this.nListStartNo = oPageApi.startno;
            }
        }
    };
</script>

<style lang="less" rel="stylesheet" scoped>
</style>
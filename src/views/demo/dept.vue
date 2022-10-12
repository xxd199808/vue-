<template>
    <div>
        <div class="bm">
            <div class="bm-la">
                <el-dropdown placement="top-start"
                             ref="dropdown"
                             trigger="click">
                    <el-button type="primary"
                               plain>
                        {{sLa}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <div class="bm-la-window">
                            <comp-dept @my-part="fGetPartInfo"
                                       ref="partla" />
                        </div>
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="bm-la-out">
                    <el-button @click="fBtnBackClick"
                               type="primary"
                               plain>返回</el-button>
                </div>
            </div>
            <div class="bm-city">
                <comp-dept ref="part" />
            </div>
        </div>
    </div>
</template>

<script>
    import { URLS_DEMO } from '@/urls.js';
    import CompDept from '@/components/project/dept.vue';
    export default {
        //**** el, name
        //**** components, directives, filters
        components: {
            CompDept
        },
        //**** props, data, computed
        data() {
            return {
                sLa: '',//下拉框选择的值
            }
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
            this.fRequestBm();
        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
            //*** 开放给父子组件的接口方法
            fGetPartInfo(oItem) {//获取子组件传回的参数
                this.sLa = oItem.orgshortname;
                this.$refs.dropdown.hide();
            },
            //*** 事件响应函数
            fBtnBackClick() {//点击返回
                console.log('点击返回');
            },
            //*** 其他

            //请求部门
            fRequestBm() {
                this.$WIV.fRequest({
                    url: URLS_DEMO.d_bmlist
                }).then(({ data: oData }) => {
                    this.$refs.part.fGetBmData(oData);
                    this.$refs.partla.fGetBmData(oData);
                })
            }
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .bm {
        width: 100%;
        background: #fff;
    }
    .bm-la {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 8px;
        border-bottom: solid 2px #eee;
    }
    .bm-la-window {
        width: 730px;
        height: 300px;
        padding: 10px;

        background: #fff;
        overflow-y: auto;
        z-index: 100;
    }
    .bm-city {
        width: 100%;
        padding: 5px 8px;
    }
</style>

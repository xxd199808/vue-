<template>
    <div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">
                    <div class="panel-head-l-icon"></div>导入MD
                </div>
                <div class="panel-head-r">
                    <comp-import type=".md"
                                 @import-success="fImportSuccess">
                        <el-button type="primary">导入MD</el-button>
                    </comp-import>
                </div>
            </div>
            <div class="panel-body doc-md"
                 v-html="sMDHtml">
            </div>
        </div>
    </div>
</template>

<script>
    import CompImport from '@/components/project/import.vue'
    export default {
        //**** el, name
        //**** components, directives
        components: {
            CompImport
        },
        //**** extends, mixins, provide/inject
        //**** props, data, computed
        data() {
            return {
                sMDHtml: ''
            }
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
            //*** 开放给父子组件的接口方法
            //*** 事件响应函数
            fImportSuccess(sFileText) {
                this.sMDHtml = this.G_API.md.render(sFileText)
            }
            //*** 其他
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
</style>

<template>
    <div class="watermark">
        <div class="watermark-row"
             v-for="nRowIdx in 10"
             :style="{marginLeft: - nRowIdx * 100 + 'px'}"
             :key="nRowIdx">
            <div class="watermark-item"
                 v-for="nItemIdx in 10"
                 :key="nRowIdx + nItemIdx">
                <div class="watermark-text">{{oInfo.pid}} {{oInfo.time}} {{oInfo.ip}} 网关管理系统 {{oTab.code}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { URLS_COM } from '@/urls.js'
    export default {
        //**** el, name
        //**** components, directives
        //**** extends, mixins, provide/inject
        //**** props, data, computed
        data() {
            return {
                oTab: {},
                oInfo: {}
            }
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
            this.$EventBus.$on('tab-change', this.fTabChange);
            this.fRequest();
        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
            //*** 开放给父子组件的接口方法
            //*** 事件响应函数
            //*** 其他
            fTabChange(oTab) {
                this.oTab = oTab;
            },
            fRequest() {
                this.$WIV.fRequest({
                    url: URLS_COM.d_watermark
                }).then(({ data }) => {
                    this.oInfo = data || {};
                })
            }
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .watermark {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        overflow: hidden;
        z-index: 1;
        pointer-events: none;
    }
    .watermark-row {
        display: flex;
    }
    .watermark-item {
        flex-shrink: 0;
        width: 400px;
        height: 400px;
        line-height: 300px;
        //color: transparent;
        transform: rotateZ(-30deg);
        overflow: visible;
    }
    .watermark-text {
        width: 1000px;
        color: #ccc;
        font-size: 20px;
        font-weight: bold;
        text-shadow: 1px 1px 2px #000, -1px -1px 2px #fff;
    }
</style>

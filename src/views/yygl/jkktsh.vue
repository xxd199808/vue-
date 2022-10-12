<template>
    <div class="flex-col">
    </div>
</template>

<script>
    import { URLS_FWGL, URLS_YYGL } from '@/urls.js'
    const aZt = [
        {
            value: '0',
            label: '待审核'
        },
        {
            value: '1',
            label: '审核通过'
        }, {
            value: '2',
            label: '审核不通过'
        }
    ];
    export default {
        //**** el, name
        //**** components, directives
        components: {
            SubExamine, SubLookup
        },
        //**** extends, mixins, provide/inject
        //**** props, data, computed
        data() {
            return {
            }
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
            this.fGetOrgDataRequest();
        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
</style>

<template>
    <div class="flex-col">
    </div>
</template>

<script>
    import { URLS_YYGL, URLS_FWGL } from '@/urls.js'
    export default {
        //**** el, name
        //**** components, directives
        components: {
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
            this.fGetOrgDataRequest()
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

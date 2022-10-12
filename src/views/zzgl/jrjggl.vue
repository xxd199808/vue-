<template>
    <div class="flex-col">
    </div>
</template>

<script>
    import { URLS_JGGL } from '@/urls.js'
    export default {
        //**** el, name
        //**** components, directives
        components: {
            SubCreate,
            SubExamine
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
            this.fResetPagebar();
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

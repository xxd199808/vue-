<template>
    <component :is="bSubMenu ? 'el-submenu' : 'el-menu-item'"
               popper-class="hami-sidemenu-poper"
               :popper-append-to-body="true"
               :index="sMenuIdx">
        <template v-if="bSubMenu">
            <template slot="title">
                <i :class="[oMenu.icon,'hami-sidemenu-icon']"></i>
                <span class="hami-sidemenu-txt">{{oMenu.name}}</span>
            </template>
            <sub-menu-item v-for="(oSubMenu,nSubMenuIdx) in oMenu.children"
                           :oMenu="oSubMenu"
                           :sMenuIdx="sMenuIdx+'-'+nSubMenuIdx"
                           :key="oSubMenu.code"></sub-menu-item>
        </template>
        <template v-else>
            <i :class="[oMenu.icon,'hami-sidemenu-icon']"></i>
            <span slot="title"
                  class="hami-sidemenu-txt">{{oMenu.name}}</span>
        </template>
    </component>
</template>

<script>
    export default {
        name: 'SubMenuItem',
        props: ['oMenu', 'sMenuIdx'],
        data() {
            return {
            }
        },
        computed: {
            bSubMenu() {// 是否是分组
                return this.oMenu.children && this.oMenu.children.length;
            }
        },
        mounted() {
        },
        methods: {
        }
    };
</script>

<style lang="less">
</style>

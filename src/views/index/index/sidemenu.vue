<template>
    <div class="hami-sidemenu"
         :class="{_collapse: bCollapse}">
        <div class="hami-sidemenu-top">
            <slot name="top">
                <div></div>
            </slot>
            <div class="hami-sidemenu-toggle el-icon-back"
                 v-if="showCollapse"
                 @click="bCollapse = !bCollapse"></div>
        </div>
        <el-scrollbar class="hami-sidemenu-con">
            <el-menu :unique-opened="uniqueOpened"
                     :collapse="bCollapse"
                     :default-active="sDefaultActive"
                     @select="fMenuClick"
                     @open="fMenuToggle"
                     @close="fMenuToggle">
                <sub-menu-item v-for="(oMenu,nMenuIdx) in aMenu"
                               :oMenu="oMenu"
                               :sMenuIdx="nMenuIdx+''"
                               :key="oMenu.code"></sub-menu-item>
            </el-menu>
        </el-scrollbar>
        <div class="hami-sidemenu-bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
    import SubMenuItem from './menu-item'
    export default {
        name: 'HamiSidemenu',
        components: {
            SubMenuItem
        },
        props: {
            defaultCode: {// 默认选中菜单的code
                type: String
            },
            autoSelect: {
                type: Boolean,
                default: true
            },
            uniqueOpened: {// 是否只能打开一个分组
                type: Boolean,
                default: false
            },
            showCollapse: {// 是否显示收起按钮
                type: Boolean,
                default: true
            },
            initCollapse: {//初始化时是否收起
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                aMenu: [],// 菜单数据
                bCollapse: false,// 是否收起
                sDefaultActive: ''// 默认打开的菜单
            };
        },
        mounted() {
            this.$EventBus.$on('tab-change', this.fTabChange);
            this.bCollapse = this.initCollapse;
        },
        beforeDestroy() {
            this.$EventBus.$off('tab-change', this.fTabChange);
        },
        methods: {
            fSetMenu(aData) {// 赋值菜单数据
                let sCurMenu = this.$route.query.code || this.defaultCode
                this.aMenu = aData;
                if (sCurMenu) {
                    this.sDefaultActive = this.fGetIndex(aData, sCurMenu.toLocaleLowerCase(), '');
                    if (this.sDefaultActive) {
                        this.fMenuClick(this.sDefaultActive)
                        return;
                    }
                }
                if (!this.sDefaultActive && this.autoSelect) {// 没有
                    this.sDefaultActive = this.fGetFirstIndex(aData).substring(1);
                    this.fMenuClick(this.sDefaultActive)
                }
            },
            fMenuClick(sIndex) {// 菜单点击事件
                let oMenu;
                sIndex.split('-').map((sIdx) => {
                    oMenu = oMenu ? oMenu.children[sIdx] : this.aMenu[sIdx]
                })
                this.$emit('menu-click', oMenu);
            },
            fMenuToggle(sIndex) {// 菜单分组展开收起事件
                let oMenu;
                sIndex.split('-').map((sIdx) => {
                    oMenu = oMenu ? oMenu.children[sIdx] : this.aMenu[sIdx]
                })
                this.$emit('menu-toggle', oMenu);
            },
            fTabChange(oTab) {
                this.sDefaultActive = this.fGetIndex(this.aMenu, oTab.code.toLocaleLowerCase())
            },
            fGetIndex(aData, sCode, sIdx) {// 获取菜单code对应的index值
                let sRst = '',
                    sIndex;
                aData.map((oMenu, nMenuIdx) => {
                    sIndex = sIdx ? sIdx + '-' + nMenuIdx : nMenuIdx + ''
                    if (oMenu.code.toLocaleLowerCase() === sCode) {
                        sRst = sIndex
                    } else {
                        if (oMenu.children && oMenu.children.length) {
                            let sTemp = this.fGetIndex(oMenu.children, sCode, sIndex);
                            if (sTemp) {
                                sRst = sTemp
                            }
                        }
                    }
                });
                return sRst
            },
            fGetFirstIndex(aData) {
                if (aData && aData.length) {
                    return '-0' + this.fGetFirstIndex(aData[0].children)
                }
                return ''
            }
        }
    };
</script>

<style lang="less">
    .hami-sidemenu {
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 100%;
        background: #d9ecff;
        transition: width 0.3s;
        user-select: none;
        &._collapse {
            width: 64px;
            .hami-sidemenu-toggle {
                transform: rotateZ(180deg);
            }
        }
        .el-menu {
            background: transparent;
            border-right: none;
        }
        .el-menu-item,
        .el-submenu__title {
            //禁止换行
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            /* 省略号 */
            word-break: normal;
            /* 防止被父级 wordwrap 样式影响 */
            word-wrap: normal;
        }
        .el-submenu__icon-arrow {
            right: 8px;
            margin-top: -6px;
        }
        .el-menu-item,
        .el-submenu .el-menu-item {
            min-width: 0;
            padding-right: 8px;
        }
        .el-menu--collapse {
            .el-submenu__title > span {
                display: none;
            }
            .el-submenu__icon-arrow {
                display: none;
            }
        }
    }
    .hami-sidemenu-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
    }
    .hami-sidemenu-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        border-radius: 50%;
        border: 1px solid #303133;
        cursor: pointer;
    }
    .hami-sidemenu-con {
        flex: 1;
        height: 0;
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }

    .hami-sidemenu {
        position: relative;
        background: #263d5c;
        .el-submenu__title,
        .el-submenu__title i,
        .el-menu-item,
        .el-menu-item i {
            color: #fff;
        }
        .el-submenu__title:hover,
        .el-menu-item:hover {
            background: lighten(#263d5c, 10%);
            color: #fff;
        }
        .el-menu-item.is-active {
            color: #fff;
            background: linear-gradient(to right, #81f1ff, #1a9df1, #1277fb);
            //i {
            //    color: #fff;
            //}
        }
        &._collapse .hami-sidemenu-toggle {
            transform: none;
            background-image: url("~@/assets/images/common/hamigua/icon_fold.png");
        }
        .el-submenu .el-menu {
            background: #1a304e;
        }
    }
    .hami-sidemenu-top {
        height: 0;
    }
    .hami-sidemenu-toggle {
        position: absolute;
        left: 100%;
        top: 50%;
        width: 16px;
        height: 103px;
        margin: -51px 0 0;
        background: url("~@/assets/images/common/hamigua/icon_unfold.png") left
            center no-repeat;
        border-radius: 0;
        color: transparent;
        border: none;
        z-index: 10;
    }
</style>

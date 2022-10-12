<template>
    <div class="hami-index index flex-col">
        <div class="index-header"
             slot="header">
            <div class="index-header-l">
                <img class="index-header-logo"
                     src="~@/assets/images/views/index/index/logo.png" />
                <img class="index-header-title"
                     src="~@/assets/images/views/index/index/title.png" />
            </div>
            <div class="index-header-r">
                <el-dropdown trigger="click"
                             @command="fDropDownClick">
                    <div class="index-header-user">
                        {{oUserInfo.name}}
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown"
                                      class="index-header-dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="flex-row flex1">
            <sub-sidemenu ref="sidemenu"
                          class="hami-index-sidemenu"
                          @menu-click="fMenuClick"></sub-sidemenu>
            <div class="flex1">
                <el-tabs class="hami-index-tab"
                         v-model="sCurTab"
                         type="card"
                         v-show="aTabs.length"
                         @tab-click="fChangeTab"
                         @tab-remove="fRemoveTab">
                    <el-tab-pane v-for="(oTab) in aTabs"
                                 :key="oTab.code"
                                 :label="oTab.name"
                                 :name="oTab.code"
                                 :closable="oTab.closable !== false">
                        <div slot="label"
                             class="hami-index-tab-label"
                             @contextmenu.stop.prevent="fTabContextMenu(oTab)">
                            {{oTab.name}}
                            <el-dropdown trigger="click"
                                         class="hami-index-tab-dropdown"
                                         placement="bottom"
                                         :ref="'tab-dropdown-' + oTab.code"
                                         @command="fHandleCommand(oTab,...arguments)">
                                <span></span>
                                <el-dropdown-menu slot="dropdown"
                                                  class="hami-index-tab-dropdown-menu">
                                    <el-dropdown-item command="refresh">刷新</el-dropdown-item>
                                    <el-dropdown-item command="close">关闭</el-dropdown-item>
                                    <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
                                    <el-dropdown-item command="closeAll">关闭所有</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <component :is="oTab.router"
                                   class="page"
                                   :key="oTab.key || oTab.code"
                                   :code="oTab.code"
                                   :data="oTab.data"
                                   :auths="oTab.auths"></component>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <comp-watermark></comp-watermark>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import MENU from '@/utils/menu.js'
    import SubSidemenu from './index/sidemenu.vue'
    import CompWatermark from '@/components/project/watermark.vue'

    export default {
        components: {
            SubSidemenu, CompWatermark
        },
        data() {
            return {
                sCurTab: '', // 当前选中的tab
                aTabs: [] // 当前打开的tab数组
            }
        },
        computed: {
            ...mapState(['oUserInfo'])
        },
        mounted() {
            this.G_API.fReqUserInfo()
                .then(() => {
                    this.fRequestMenu();
                })

            this.$EventBus.$on('tab-add', this.fAddTab)
        },
        beforeDestroy() {
            this.$EventBus.$off('tab-add', this.fAddTab)
        },
        methods: {
            fDropDownClick(sCommand) {// 下拉菜单项点击
                //console.log(sCommand)
                switch (sCommand) {
                    case 'logout':
                        this.G_API.fLogout();
                        break;
                }
            },
            fHomeClick() {// 首页点击

            },
            fMessageClick() {// 消息点击

            },
            fMenuClick(oMenu) { // 菜单点击
                // console.log(oMenu)
                if (oMenu.type === 'group') {
                    // 分组菜单点击无效
                    return;
                }
                switch (oMenu.menuType) {
                    case 'link':
                        window.open(oMenu.url, '_blank')
                        break;
                    case 'frame':
                    case 'project':
                        this.fAddTab(oMenu)
                        //this.$HAMI.authority = (oMenu.auths || []).map((oAuth) => { return oAuth.code })
                        break;
                }
            },
            fAddTab(oMenu) { // 新增tab
                let sCode = oMenu.code,
                    bHasTab = false; // 是否已经打开该tab
                this.aTabs.forEach((oTab) => {
                    if (oTab.code === sCode) {
                        bHasTab = true;
                        Object.assign(oTab, {
                            name: oMenu.name,
                            code: oMenu.code,
                            router: oMenu.menuType === 'frame' ? 'hami-' + oMenu.router : oMenu.code,
                            auths: (oMenu.auths || []).map((oAuth) => { return oAuth.code }),
                            data: oMenu.data
                        })
                    }
                })
                if (!bHasTab) { // 如果已经打开了该tab，则不添加，直接切换到该tab
                    this.aTabs.push({
                        name: oMenu.name,
                        code: oMenu.code,
                        key: new Date().getTime(),
                        router: oMenu.menuType === 'frame' ? 'hami-' + oMenu.router : oMenu.code,
                        auths: (oMenu.auths || []).map((oAuth) => { return oAuth.code }),
                        data: oMenu.data
                    });
                }
                this.sCurTab = oMenu.code;
                this.$EventBus.$emit('tab-change', {
                    name: oMenu.name,
                    code: oMenu.code,
                })
            },
            fRemoveTab(sRemoveTab) { // 移除tab
                let aNowTabs = this.aTabs,
                    sCurrentTab = '',
                    sCurrentTabName = '',
                    oNextTab;
                if (this.sCurTab === sRemoveTab) { // 如果删除的是当前tab
                    aNowTabs.forEach((oTab, nTabIdx) => {
                        if (oTab.code === sRemoveTab) {
                            // 切换当前tab为后一个或者前一个
                            oNextTab = aNowTabs[nTabIdx + 1] || aNowTabs[nTabIdx - 1];
                            if (oNextTab) {
                                sCurrentTab = oNextTab.code
                                sCurrentTabName = oNextTab.name
                            }
                        }
                    })
                    this.sCurTab = sCurrentTab;
                    this.$EventBus.$emit('tab-change', {
                        name: sCurrentTabName,
                        code: sCurrentTab
                    })
                }
                this.aTabs = aNowTabs.filter(tab => tab.code !== sRemoveTab);
            },
            fChangeTab(oTab) {// tab切换事件
                if (oTab.code !== this.sCurTab) {
                    this.$EventBus.$emit('tab-change', {
                        name: oTab.label,
                        code: oTab.name,
                    })
                }
            },
            fTabContextMenu(oTab) {// tab右键点击
                this.$refs['tab-dropdown-' + oTab.code][0].show();
            },
            fHandleCommand(oTab, sCommand) {// tab右键下拉菜单点击
                switch (sCommand) {
                    case 'close':
                        this.fRemoveTab(oTab.code);
                        break;
                    case 'closeOther':
                        this.aTabs = [oTab];
                        break;
                    case 'closeAll':
                        this.sCurTab = '';
                        this.aTabs = [];
                        this.$EventBus.$emit('tab-change', {
                            name: '',
                            code: ''
                        })
                        break;
                    case 'refresh':
                        oTab.key = new Date().getTime()
                        break;
                }
            },
            fRequestMenu() { // 请求菜单
                const NODE_ENV = process.env.NODE_ENV;
                let aMenu = MENU;
                switch (NODE_ENV) {
                    case 'production':
                        aMenu = MENU[0].children;
                        break;
                    case 'apig':// 联调apig
                        aMenu = MENU.slice(0, 1);
                        break;
                    case 'mps':// 联调mps
                        aMenu = MENU.slice(1, 2);
                        break;
                }
                this.fImportComponents(aMenu);
                this.$refs.sidemenu.fSetMenu(aMenu);
            },
            fImportComponents(aMenu) { // 动态引入组件
                aMenu.map((oMenu) => {
                    if (oMenu.children && oMenu.children.length) {
                        this.fImportComponents(oMenu.children)
                    } else {
                        if (oMenu.menuType === 'project') {
                            this.G_API.registerComponent(oMenu);
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .index {
        min-width: 1200px;
        //min-height: 650px;
    }
    .index-header {
        display: flex;
        justify-content: space-between;
        height: 80px;
        background: linear-gradient(
            to right,
            #263d5c 13%,
            #2058a5 58%,
            #1db6e5 110%
        );
    }
    .index-header-l {
        display: flex;
        align-items: center;
        padding-left: 60px;
    }
    .index-header-logo {
        height: 53px;
        margin-right: 15px;
    }
    .index-header-title {
        height: 40px;
    }
    .index-header-r {
        display: flex;
        align-items: center;
        padding-right: 30px;
        font-size: 14px;
        color: #fff;
    }
    .index-header-btn {
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding: 10px;
        color: #fff;
        cursor: pointer;
        &:hover {
            opacity: 0.75;
        }
        i {
            font-size: 23px;
        }
        /deep/.el-badge__content {
            border: none;
            &.is-fixed {
                top: 0;
                right: 0;
                transform: translateY(-50%) translateX(50%);
            }
        }
    }
    .index-header-btn-text {
        margin-left: 10px;
    }
    .index-header-user {
        display: flex;
        align-items: center;
        height: 30px;
        margin-left: 20px;
        color: #fff;
        cursor: pointer;
        &:hover {
            opacity: 0.75;
        }
        .el-icon-caret-bottom {
            margin-left: 10px;
        }
    }
</style>
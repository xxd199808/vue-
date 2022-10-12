<template>
    <div class="transfer"
         :class="{'_fixed-height': height}"
         :style="{height: height}">
        <div class="transfer-block">
            <el-input v-model="sSourceFilter"
                      class="transfer-ipt"
                      :placeholder="filtertips" />
            <div class="transfer-table">
                <el-table :data="aSoureView"
                          ref="source"
                          :show-header="showHeader"
                          :row-class-name="filtertype==='top'?fSourceRowClass:undefined"
                          :height="height?'100%':undefined">
                    <el-table-column v-if="checkable"
                                     type="selection"
                                     :selectable="fSelectable"
                                     width="55">
                    </el-table-column>
                    <slot />
                    <el-table-column label="操作"
                                     width="60"
                                     align="center">
                        <template slot-scope="{row}">
                            <el-button icon="el-icon-plus"
                                       :disabled="row._disabled"
                                       @click="fSelect(row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 底部操作按钮 -->
            <div class="transfer-foot"
                 v-if="checkable">
                <template v-if="!showHeader">
                    <!-- 只在不显示表头时显示辅助按钮 -->
                    <!-- 未使用 checkbox 实现的考虑：需要两个表格抛出 selectionChange 事件，修改全选和半选状态、判断时需要排除 disabled 的数据。checkbox 选中值变化时再调用表格方法修改列表选中状态，代码比较多。等有实际使用需要时再添加 -->
                    <el-button @click="fCheckAll('source')">全选</el-button>
                    <el-button @click="fUncheckAll('source')">全不选</el-button>
                    <div class="transfer-flex1"></div>
                </template>
                <el-button type="primary"
                           plain
                           @click="fSelectAllClick">添加选中项</el-button>
            </div>
        </div>
        <div class="transfer-block">
            <el-input v-model="sTargetFilter"
                      class="transfer-ipt"
                      :placeholder="filtertips" />
            <div class="transfer-table">
                <el-table :data="aTargetView"
                          ref="target"
                          :show-header="showHeader"
                          :row-class-name="filtertype==='top'?fTargetRowClass:undefined"
                          :height="height?'100%':undefined">
                    <el-table-column v-if="checkable"
                                     type="selection"
                                     :selectable="fSelectable"
                                     width="55">
                    </el-table-column>
                    <slot />
                    <el-table-column label="操作"
                                     width="60"
                                     align="center">
                        <template slot-scope="{row}">
                            <el-button icon="el-icon-minus"
                                       :disabled="row._disabled"
                                       @click="fUnselect(row)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 底部操作按钮 -->
            <div class="transfer-foot"
                 v-if="checkable">
                <template v-if="!showHeader">
                    <!-- 只在不显示表头时显示辅助按钮 -->
                    <el-button @click="fCheckAll('target')">全选</el-button>
                    <el-button @click="fUncheckAll('target')">全不选</el-button>
                    <div class="transfer-flex1"></div>
                </template>
                <el-button type="primary"
                           plain
                           @click="fUnselectAllClick">删除选中项</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            height: {//高度，不传则自适应内容
                type: String,
            },
            showHeader: {//是否显示表头
                type: Boolean,
                default: false
            },
            data: { // 原数据
                type: Array,
                default: () => []
            },
            value: { // 选中的数据（v-model 双向绑定）
                type: Array,
                default: () => []
            },
            checkable: {// 是否支持勾选添加
                type: Boolean,
                default: false
            },
            //-- 过滤
            filterable: {// 是否显示过滤框
                type: Boolean,
                default: false
            },
            filtertips: {// 关键字输入框的提示文字
                type: String,
                default: '请输入关键字',
            },
            filtertype: {// 过滤方式：hide 隐藏不匹配的项，top 置顶匹配项
                type: String,
                default: 'hide'
            },
            //-- 数据源字段配置
            props: Object, // 配置属性，详见 data 中的 oProps
        },
        data() {
            const oProps = {
                key: 'id', // 数据项唯一标识
                filter: 'name',// 过滤关键字字段，可传 String/Array<String>
                disabled: 'disabled', // 是否禁用，可传 String/Function(oItem)。作为方法时，返回值为 true 表示 oItem 为禁用。
                ...this.props
            };

            return {
                oProps: oProps,
                sSourceFilter: '',// 数据源过滤框
                sTargetFilter: '',// 选中数据过滤框
            }
        },
        computed: {
            aData() {// 源数据 处理disabled，生成关键词过滤字典
                const filterField = this.oProps.filter;
                return this.data.map((oData) => {
                    return {
                        ...oData,
                        _disabled: this.fHandleDisabled(oData),
                        _filter: this.$WIV.fGetFilterDicionary(oData, {
                            fields: filterField
                        })
                    }
                })
            },
            aSource() {// 源数据中过滤目标数据
                let sKeyField = this.oProps.key;
                let aTargetKeys = this.aTarget.map((oTarget) => {// 目标数据的key
                    return oTarget[sKeyField]
                })
                return this.aData.filter((oData) => {
                    return aTargetKeys.indexOf(oData[sKeyField]) === -1
                })
            },
            aSoureView() {// 过滤后的源数据
                if (this.filtertype === 'top') {//置顶匹配项数据
                    const aSourceView = [],
                        aNoMatch = [];
                    this.aSource.map((oSource) => {
                        if (this.fFilter(oSource._filter, this.sSourceFilter.toLocaleUpperCase())) {
                            aSourceView.push(oSource);
                        }
                        else {
                            aNoMatch.push(oSource);
                        }
                    });
                    aSourceView.push(...aNoMatch);
                    return aSourceView;
                }
                else {//只保留匹配的项
                    return this.aSource.filter((oSource) => {
                        return this.fFilter(oSource._filter, this.sSourceFilter.toLocaleUpperCase())
                    })
                }
            },
            aTarget() {// 目标数据
                const filterField = this.oProps.filter;
                return this.value.map((oData) => {// 处理disabled
                    return {
                        ...oData,
                        _disabled: this.fHandleDisabled(oData),
                        _filter: this.$WIV.fGetFilterDicionary(oData, {
                            fields: filterField
                        })
                    }
                })
            },
            aTargetView() { // 过滤后的目标数据
                if (this.filtertype === 'top') {//置顶匹配项数据
                    const aTargetView = [],
                        aNoMatch = [];
                    this.aTarget.map((oTarget) => {
                        if (this.fFilter(oTarget._filter, this.sTargetFilter.toLocaleUpperCase())) {
                            aTargetView.push(oTarget);
                        }
                        else {
                            aNoMatch.push(oTarget);
                        }
                    });
                    aTargetView.push(...aNoMatch);
                    return aTargetView;
                }
                else {//只保留匹配的项
                    return this.aTarget.filter((oTarget) => {
                        return this.fFilter(oTarget._filter, this.sTargetFilter.toLocaleUpperCase());
                    })
                }
            },
            // fitertype='top' 源数据中匹配项的个数
            nSourceMatchLen() {
                return this.sSourceFilter ? this.aSource.filter((oSource) => {
                    return this.fFilter(oSource._filter, this.sSourceFilter.toLocaleUpperCase())
                }).length : 0;
            },
            // fitertype='top' 目标数据中匹配项的个数
            nTargetMatchLen() {
                return this.sTargetFilter ? this.aTarget.filter((oTarget) => {
                    return this.fFilter(oTarget._filter, this.sTargetFilter.toLocaleUpperCase());
                }).length : 0;
            },
        },
        mounted() {
        },
        methods: {
            // 接口
            // 事件
            fSelectAllClick() {// 向选中框中添加全部勾选的数据
                const aSelection = this.$refs.source.selection.map((oItem) => {
                    return this.fSelect(oItem, false);//添加选中项，但不触发回调
                });
                this.$emit('input', [...this.value, ...aSelection]);
            },
            fUnselectAllClick() {// 从选中框中删除全部勾选的数据
                const sKeyField = this.oProps.key,
                    aSelection = this.$refs.target.selection;
                const aSelectKeys = aSelection.map((oItem) => {// 目标数据的key
                    return oItem[sKeyField];
                })
                const aNewValue = this.value.filter((oItem) => {
                    //移出目标框中的勾选项
                    return aSelectKeys.indexOf(oItem[sKeyField]) === -1;
                });
                this.$emit('input', aNewValue);
            },
            // 方法
            fCheckAll(sType) {// 勾选全部数据
                this.$refs[sType].clearSelection();//先清空选中，再切换选中
                this.$refs[sType].toggleAllSelection();
            },
            fUncheckAll(sType) {// 取消勾选全部数据
                this.$refs[sType].clearSelection();
            },
            fSelect(oData, bTriggerCb = true) {// 向选中框中添加全部勾选的数据
                const sKeyField = this.oProps.key,
                    sKey = oData[sKeyField];// 要添加数据的key值
                let oOriData;
                for (let oItem of this.data) {
                    if (oItem[sKeyField] === sKey) {
                        oOriData = oItem;
                        break;
                    }
                }
                bTriggerCb && this.$emit('input', [...this.value, oOriData]);
                return oOriData;
            },
            fUnselect(oData) {// 从选中框中删除数据
                let sKeyField = this.oProps.key,
                    sKey = oData[sKeyField];// 要删除数据的key值
                let aNewValue = this.value.filter((oItem) => {
                    return oItem[sKeyField] !== sKey
                });
                this.$emit('input', aNewValue)
            },
            fHandleDisabled(oData) {// 获取disabled
                let disabled = this.oProps.disabled;
                if (typeof (disabled) === 'string') {
                    return oData[disabled]
                }
                return disabled(oData)
            },
            fSelectable(oRow) {
                return !oRow._disabled;
            },
            fFilter(aTxt, sFilterTxt) {// 过滤方法
                if (!sFilterTxt) {
                    return true;
                }
                return aTxt.some((sTxt) => {
                    return sTxt.indexOf(sFilterTxt) > -1
                })
            },
            //fitertype='top' 生成匹配行的样式名
            fSourceRowClass({ row, rowIndex }) {
                if (rowIndex < this.nSourceMatchLen) {
                    return '_match';
                }
                return '';
            },
            //fitertype='top' 生成匹配行的样式名
            fTargetRowClass({ row, rowIndex }) {
                if (rowIndex < this.nTargetMatchLen) {
                    return '_match';
                }
                return '';
            },
        }
    }
</script>

<style lang="less" rel="stylesheet">
    //穿梭框
    @table-border-color: #dcdfe6;
    //兼容问题：使用flex布局时，ie11中，初始化数据较少时，表格不会撑满宽度 => 改为 float+百分比布局
    .transfer {
        //去掉横向边框
        //.el-table td.el-table__cell,
        //.el-table th.el-table__cell.is-leaf {
        //    border-bottom-color: transparent;
        //}
        .l_clear();
    }
    .transfer-block {
        display: flex;
        flex-direction: column;
        float: left;
        width: 50%;
        &:first {
            padding-right: 10px;
        }
        & + & {
            padding-left: 10px;
        }
    }
    .transfer-ipt {
        margin-bottom: 10px;
    }
    .transfer-table {
        border: 1px solid @table-border-color;
        border-bottom: none;
        .el-table__row._match {
            color: @c_main;
        }
    }
    .transfer-foot {
        display: flex;
        padding: 4px 14px;
        border: 1px solid @table-border-color;
        border-top: none;
        background: #f7f9fc;
    }
    .transfer-flex1 {
        flex: 1;
    }
    //定高的样式处理
    .transfer._fixed-height {
        .transfer-block {
            height: 100%;
        }
        .transfer-table {
            flex: 1;
            border-bottom: 1px solid @table-border-color;
            //去掉 overflow:auto 后，定高的情况不显示滚动条
            overflow: auto;
        }
    }
</style>
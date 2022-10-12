<template>
    <div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">穿梭框</div>
            </div>
            <div class="panel-body">
                <el-button type="primary"
                           @click="fGetData">获取选中的项</el-button>
                <comp-transfer ref="transfer"
                               :data="aSource"
                               height="300px"
                               v-model="aSelect">
                    <el-table-column prop="name"
                                     label="名称"
                                     align="left">
                    </el-table-column>
                </comp-transfer>
            </div>
        </div>
    </div>
</template>

<script>
    import CompTransfer from '@/components/project/transfer.vue';
    const DATA = {
        aSource: Array.from({ length: 10 },
            (sKey, nVal) => ({
                id: nVal + 1, //固定传key属性名，key 为数据的唯一性标识
                name: `备选项${nVal + 1}`, //可配置
                disabled: nVal > 6 //固定传disabled属性名，disabled 表示该项数据是否禁止转移
            })),
        aSelect: [
            {
                id: 1, //固定传key属性名，key 为数据的唯一性标识
                name: `备选项1`, //可配置
                disabled: true //固定传disabled属性名，disabled 表示该项数据是否禁止转移
            },
            {
                id: 11, //固定传key属性名，key 为数据的唯一性标识
                name: `备选项11`, //可配置
                disabled: false //固定传disabled属性名，disabled 表示该项数据是否禁止转移
            }
        ]
    };
    export default {
        components: {
            CompTransfer
        },
        data() {
            return {
                aSource: DATA.aSource,//可选数据源
                aSelect: DATA.aSelect,//已选的数据
            };
        },
        methods: {
            //获取选中的项
            fGetData() {
                console.log('已选择：', this.aSelect);
            }
        }
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .el-button {
        margin-bottom: 20px;
    }
</style>

<template>
    <!-- 说明：代码中框住的部分为编辑表格逻辑，一般不需要修改，如： -->
    <!-- //-- 可编辑表格 -- global -->
    <!-- //--------------- global -->

    <div>
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">可编辑表格(单行)</div>
            </div>
            <div class="panel-body">
                <el-form ref="edittableForm"
                         label-width="0"
                         :model="oEdittableForm">
                    <el-table class="edittable-table"
                              :data="aListView"
                              stripe>
                        <el-table-column type="index"
                                         label="序号"
                                         align="center"
                                         width="70">
                        </el-table-column>
                        <el-table-column prop="name"
                                         label="姓名"
                                         align="center">
                            <template slot-scope="{row}">
                                <!-- 新增/修改 -->
                                <el-form-item v-if="row._edittableRowtype"
                                              :prop="row._edittableRowtype + '.name'"
                                              :rules="oRules.name">
                                    <el-input v-model="oEdittableForm[row._edittableRowtype].name"></el-input>
                                </el-form-item>
                                <!-- 查看 -->
                                <template v-else>{{row.name}}</template>
                            </template>
                        </el-table-column>
                        <el-table-column prop="age"
                                         label="年龄"
                                         align="center">
                            <template slot-scope="{row}">
                                <!-- 新增/修改 -->
                                <el-form-item v-if="row._edittableRowtype"
                                              :prop="row._edittableRowtype + '.age'"
                                              :rules="oRules.age">
                                    <el-input v-model="oEdittableForm[row._edittableRowtype].age"></el-input>
                                </el-form-item>
                                <!-- 查看 -->
                                <template v-else>{{row.age}}</template>
                            </template>
                        </el-table-column>
                        <el-table-column prop="phone"
                                         label="手机"
                                         align="center">
                            <template slot-scope="{row}">
                                <!-- 新增/修改：_edittableType: 'newRow' 或 'modifyRow' -->
                                <el-form-item v-if="row._edittableRowtype"
                                              :prop="row._edittableRowtype + '.phone'"
                                              :rules="oRules.phone">
                                    <el-input v-model="oEdittableForm[row._edittableRowtype].phone"></el-input>
                                </el-form-item>
                                <!-- 查看 -->
                                <template v-else>{{row.phone}}</template>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作"
                                         align="center">
                            <template slot-scope="oItem">
                                <!-- el-form-item 容器的作用是保持所有行高统一 -->
                                <el-form-item>
                                    <!-- 新增状态 -->
                                    <el-button type="success"
                                               v-if="oItem.row._edittableRowtype === 'newRow'"
                                               @click="fEditTableBtnClick('saveNew',oItem)">新增</el-button>
                                    <!-- 修改状态 -->
                                    <template v-else-if="oItem.row._edittableRowtype === 'modifyRow'">
                                        <el-button plain
                                                   @click="fEditTableBtnClick('saveModify',oItem)">保存</el-button>
                                        <el-button plain
                                                   type="danger"
                                                   @click="fEditTableBtnClick('cancelModify',oItem)">取消</el-button>
                                    </template>
                                    <!-- 查看状态 -->
                                    <template v-else>
                                        <el-button plain
                                                   @click="fEditTableBtnClick('modify',oItem)">修改</el-button>
                                        <el-button plain
                                                   icon="el-icon-delete"
                                                   type="danger"
                                                   @click="fEditTableBtnClick('delete',oItem)"></el-button>
                                    </template>
                                </el-form-item>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    const oDefaultRow = { name: '', age: '', phone: '' };//新增行的默认数据

    //-- 可编辑表格 -- global
    //_edittableType 必须与 oEdittableForm 中的属性名一致
    const EDITROW_PLACEMENT = { _edittableRowtype: 'modifyRow' },//修改行占位数据
        NEWROW_PLACEMENT = { _edittableRowtype: 'newRow' };//新增行占位数据
    //--------------- global
    export default {
        data() {
            const fGetValidateRule = this.$WIV.fGetValidateRule; //获取验证工厂函数

            return {
                oRules: {//编辑表格中的行验证规则
                    name: [
                        fGetValidateRule('required')
                    ],
                    age: [
                        fGetValidateRule('int'), fGetValidateRule('numberRange', [0, undefined])
                    ]
                },
                aList: [],//列表数据（不包含未保存的修改）
                //-- 可编辑表格 -- data
                oEdittableForm: {
                    //编辑中的数据对象，分别放入表单中
                    modifyRow: null,//编辑行数据
                    newRow: null,//新增行数据
                },
                nModifyRowIdx: -1,//正在编辑的行索引，计算属性中需要根据 nModifyRowIdx 判断要换位的数据
                //--------------- data
            }
        },
        computed: {
            //-- 可编辑表格 -- computed
            oValidateFields() {
                const aModifyRow = [],
                    aNewRow = [];
                Object.keys(this.oRules).forEach(function (sField) {
                    aModifyRow.push('modifyRow.' + sField);
                    aNewRow.push('newRow.' + sField);
                });
                return {
                    modifyRow: aModifyRow,
                    newRow: aNewRow
                };
            },
            //列表中实际显示的数据（新增行和修改行数据都被设置为占位数据）
            aListView() {
                const aListView = [
                    ...this.aList,
                    NEWROW_PLACEMENT//始终显示新增行（实际编辑数据为：oEdittableForm.newRow）
                ];
                if (this.nModifyRowIdx !== -1) {//若有修改行，则将显示数组中的数据替换为占位行（实际编辑数据为：oEdittableForm.modifyRow）
                    aListView[this.nModifyRowIdx] = EDITROW_PLACEMENT;
                }
                return aListView;
            }
            //--------------- computed
        },
        mounted() {
            this.fRequestList();//请求列表数据
        },
        methods: {
            //-- 可编辑表格 -- methods 代码段在页面中不需要修改（除文字描述）
            //事件：编辑表格的操作按钮点击
            fEditTableBtnClick(sType, oData) {
                switch (sType) {
                    case 'saveNew': //新增一行
                        //验证新增行
                        this.fValidateForm('newRow', () => {
                            this.aList.push(this.oEdittableForm.newRow);//新增行加到数据列表
                            this.fResetNewRow();
                        });
                        break;
                    case 'modify': //修改某行
                        if (this.nModifyRowIdx !== -1) {//其他行正在修改
                            this.$message({ message: '请先完成修改的行' });
                        }
                        else {//拷贝当前行数据到表单对象
                            this.oEdittableForm.modifyRow = JSON.parse(JSON.stringify(oData.row));//修改行应用到数据列表
                            this.nModifyRowIdx = oData.$index;
                        }
                        break;
                    case 'delete': //删除某行
                        this.aList.splice(oData.$index, 1);
                        if (this.nModifyRowIdx !== -1 &&
                            oData.$index < this.nModifyRowIdx) {
                            //删除行在修改行之前，修改行索引需要减1
                            this.nModifyRowIdx -= 1;
                        }
                        //编辑状态不提供删除操作，因此不需要判断当前修改行被删除的情况
                        break;
                    case 'saveModify': //保存此行
                        //验证修改行
                        this.fValidateForm('modifyRow', () => {
                            this.aList.splice(this.nModifyRowIdx, 1, this.oEdittableForm.modifyRow);
                            this.oEdittableForm.modifyRow = null;
                            this.nModifyRowIdx = -1;
                        });
                        break;
                    case 'cancelModify': //取消编辑
                        this.oEdittableForm.modifyRow = null;
                        this.nModifyRowIdx = -1;
                        break;
                }
            },
            //重置新增行数据
            fResetNewRow() {
                this.oEdittableForm.newRow = JSON.parse(JSON.stringify(oDefaultRow));
            },
            //保存前验证当前编辑数据
            fValidateForm(sEdittableRowtype, fCb) {
                let bSuccess = true;//是否验证通过
                //验证指定状态的表单的数据
                this.$refs.edittableForm.validateField(this.oValidateFields[sEdittableRowtype],
                    sErrorMessage => {
                        if (sErrorMessage) {
                            bSuccess = false;//验证不通过
                        }
                    });
                if (bSuccess) {//验证通过
                    fCb && fCb();
                }
            },
            //--------------- methods
            //请求列表数据
            fRequestList() {
                this.fResetNewRow();//数据重置时，新增行数据也需要重置
                //列表数据赋值
                this.aList = [
                    { name: '1', age: '1', phone: '11111111111' },
                    { name: '2', age: '2', phone: '22222222222' },
                ];
            },
        }
    }
</script>

<style lang="less" rel="stylesheet" scoped>
</style>

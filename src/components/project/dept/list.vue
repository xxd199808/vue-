<template>
    <div class="deptlist">
        <div class="deptlist-item"
             v-if="sShow==='0'">
            <div class="deptlist-item-part _zm">
                <span class="deptlist-zm-span">A</span>---<span class="deptlist-zm-span">G</span>
            </div>
            <div class="deptlist-part-item">
                <p class="deptlist-part-name"
                   v-for="(oPart,nInd) in oPartList.AtoG"
                   :key="nInd"
                   @click="fPartClick(oPart)">
                    {{oPart.orgshortname}}</p>
            </div>
            <div class="deptlist-item-part _zm">
                <span class="deptlist-zm-span">H</span>---<span class="deptlist-zm-span">N</span>
            </div>
            <div class="deptlist-part-item">
                <p class="deptlist-part-name"
                   v-for="(oPart,nInd) in oPartList.HtoN"
                   :key="nInd"
                   @click="fPartClick(oPart)">
                    {{oPart.orgshortname}}</p>
            </div>
            <div class="deptlist-item-part _zm">
                <span class="deptlist-zm-span">O</span>---<span class="deptlist-zm-span">T</span>
            </div>
            <div class="deptlist-part-item">
                <p class="deptlist-part-name"
                   v-for="(oPart,nInd) in oPartList.OtoT"
                   :key="nInd"
                   @click="fPartClick(oPart)">
                    {{oPart.orgshortname}}</p>
            </div>
            <div class="deptlist-item-part _zm">
                <span class="deptlist-zm-span">U</span>---<span class="deptlist-zm-span">Z</span>
            </div>
            <div class="deptlist-part-item">
                <p class="deptlist-part-name"
                   v-for="(oPart,nInd) in oPartList.UtoZ"
                   :key="nInd"
                   @click="fPartClick(oPart)">
                    {{oPart.orgshortname}}</p>
            </div>
        </div>
        <div class="deptlist-item"
             v-else>
            <div class="deptlist-item-part">
                <p class="deptlist-part-name"
                   v-for="(oPart,nInd) in aPartData"
                   :key="nInd"
                   @click="fPartClick(oPart)">{{oPart.orgshortname}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        //**** el, name
        //**** components, directives, filters
        //**** props, data, computed
        data() {
            return {
                sShow: '',//按字母或者政府序列展示
                aPartData: [],//不同分类对应的数据
                oPartList: {}
            }
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
            //*** 开放给父子组件的接口方法
            fGetLeiData(aData, sLei) {//获取父组件传来的数据和类型
                this.sShow = sLei;
                this.aPartData = aData || [];
                this.fPartListHandle();
            },
            //*** 事件响应函数
            fPartClick(oItem) {//部门点击
                this.$emit('my-ment', oItem);
            },
            fPartListHandle() {//将部门按照不同的字母分类进行处理
                let sHead = '';
                this.oPartList = {
                    AtoG: [],
                    HtoN: [],
                    OtoT: [],
                    UtoZ: [],
                };
                this.aPartData.forEach(oItem => {
                    sHead = oItem.org.split('')[0].toUpperCase();
                    if (sHead >= 'A' && sHead <= 'G') {
                        this.oPartList.AtoG.push(oItem);
                    }
                    if (sHead >= 'H' && sHead <= 'N') {
                        this.oPartList.HtoN.push(oItem);
                    }
                    if (sHead >= 'O' && sHead <= 'T') {
                        this.oPartList.OtoT.push(oItem);
                    }
                    if (sHead >= 'U' && sHead <= 'Z') {
                        this.oPartList.UtoZ.push(oItem);
                    }
                });
            },
            //*** 其他
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .deptlist {
        width: 100%;
        margin: 5px 0;
    }
    .deptlist-item {
        width: 100%;
    }
    .deptlist-item-part {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 5px;
        font-size: 16px;
        line-height: 1.8;
        border-top: 2px solid #3a5899;
        &._zm {
            color: #005491;
            background: #fbfbfd;
            border: 1px solid #cdd3e6;
            border-top: 2px solid #3a5899;
        }
    }
    .deptlist-part-name {
        margin: 8px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    .deptlist-zm-span {
        color: #f00;
    }
    .deptlist-part-item {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        min-height: 37px;
    }
</style>

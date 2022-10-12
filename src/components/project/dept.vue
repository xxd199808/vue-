<template>
    <div class="dept">
        <div class="bm-city-item">
            <button type="button"
                    class="bm-city-area"
                    :class="sCityCode===oItem.code?'_active':''"
                    v-for="(oItem,nIndex) in aCity"
                    :key="nIndex"
                    :title="oItem.name"
                    @click="fHandleClick(oItem)">{{oItem.name}}</button>
        </div>
        <div class="dept-pinyin">
            <span class="dept-pinyin-title"><span class="dept-title-style">拼音</span>首字母查找：</span>
            <p class="dept-zm"
               v-for="(sZm,nIndex) in aZm"
               :key="nIndex"
               :class="sLetter===sZm?'_active':''"
               @mouseenter="fZmHover(sZm)">{{sZm}}</p>
        </div>
        <el-alert type="info"
                  :closable="false">
            <ul class="dept-pinyin-part">
                <li class="dept-part-li"
                    v-for="(oPart,nIndx) in aZmList"
                    :key="nIndx"
                    @click="fPartClick(oPart)">{{oPart.orgshortname}}</li>
            </ul>
        </el-alert>
        <div class="dept-box">
            <div class="dept-box-btn">
                <el-tabs v-model="sLei"
                         type="card"
                         @tab-click="fPartChangeClick">
                    <el-tab-pane label="按字母"
                                 name="0"></el-tab-pane>
                    <el-tab-pane label="按政府序列"
                                 name="1"></el-tab-pane>
                </el-tabs>
            </div>
            <comp-list ref="lei"
                       @my-ment="fPartClick" />
        </div>
    </div>
</template>

<script>

    import CompList from './dept/list.vue';
    export default {
        //**** el, name
        //**** components, directives, filters
        components: {
            CompList
        },
        //**** props, data, computed
        data() {
            return {
                aZm: [],//存放26个英文字母
                sLetter: 'A',//默认字母选A
                aZmList: [],//不同首字母对应的不同的部门
                oChildrenData: {},//存放从父组件传来的值
                sLei: '0',//类别切换
                sCityCode: '',//城市的code值
                aCity: [],//城市列表
                oAllData: {},//获取传来的数据
            }
        },
        //**** watch
        //**** 生命周期钩子：mounted, updated, beforeDestroy 等
        mounted() {
            this.fGetAllLetter();
        },
        beforeDestroy() {
        },
        //**** methods
        methods: {
            //*** 开放给父子组件的接口方法
            fGetBmData(oData) {
                this.aCity = oData.zoneList || [];
                this.sCityCode = this.aCity.length > 0 ? this.aCity[0].code : null;
                this.oAllData = { ...oData };
                this.fGetCityPartData();
            },
            //*** 事件响应函数
            fPartClick(oItem) {//部门点击
                this.$emit('my-part', oItem);
            },
            fZmHover(sVal) {//字母悬浮
                this.sLetter = sVal;
                this.fHandleData(sVal);
            },
            fPartChangeClick(sVal) {//类型点击切换
                this.sLei = sVal.index;
                switch (this.sLei) {
                    case '0':
                        this.$refs.lei.fGetLeiData(this.oChildrenData.zm, '0');
                        break;
                    case '1':
                        this.$refs.lei.fGetLeiData(this.oChildrenData.zfxl, '1');
                        break;
                }
            },
            fHandleClick(oTabs) {//选择城市点击
                this.sCityCode = oTabs.code;
                this.sLei = '0';
                this.fGetCityPartData();
            },
            //*** 其他
            fGetCityPartData() {//获取城市部门对应的数据
                let aOulist = this.oAllData.oulist,
                    aSortlist = this.oAllData.sortlist;
                this.oChildrenData = {
                    zm: [],
                    zfxl: []
                };
                aOulist.forEach(oItem => {
                    if (this.sCityCode === null) {
                        this.oChildrenData.zm.push(oItem);
                    }
                    else if (oItem.idareaCode === this.sCityCode) {
                        this.oChildrenData.zm.push(oItem);
                    }
                });
                aSortlist.forEach(oItem => {
                    if (this.sCityCode === null) {
                        this.oChildrenData.zfxl.push(oItem);
                    }
                    else if (oItem.idareaCode === this.sCityCode) {
                        this.oChildrenData.zfxl.push(oItem);
                    }
                });
                this.$refs.lei.fGetLeiData(this.oChildrenData.zm, '0');
                this.fHandleData('A');
            },
            fGetAllLetter() {//获得26个英文字母
                for (let i = 0; i < 26; i++) {
                    this.aZm.push(String.fromCharCode((65 + i)));
                }
            },
            fHandleData(sHeader) {//处理数据获取首字母相同的部门数据
                let aDepartZm = this.oChildrenData.zm,
                    sShouZm = '';
                this.aZmList = [];
                aDepartZm.forEach(oItem => {
                    sShouZm = (oItem.org.split('')[0]).toUpperCase();
                    if (sShouZm === sHeader) {
                        this.aZmList.push(oItem);
                    }
                });
            },
        }
        //**** template, render
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .dept {
        width: 100%;
    }
    .dept-pinyin {
        display: flex;
        align-items: center;
        width: 100%;
        height: 28px;
    }
    .dept-pinyin-title {
        font-size: 14px;
        color: #000;
    }
    .dept-title-style {
        color: #f00;
    }
    .dept-zm {
        position: relative;
        height: 100%;
        margin: 0 6px;
        line-height: 28px;
        text-align: center;
        color: #3a5899;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            color: #f00;
        }
        &._active {
            color: #f00;
            &::after {
                position: absolute;
                left: 0px;
                bottom: -1px;
                display: block;
                content: "";
                width: 14px;
                height: 6px;
                background: url(~@/assets/images/components/project/dept/arrow-bg.png)
                    no-repeat;
            }
        }
    }
    .dept-pinyin-part {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        min-height: 39px;
        padding: 0 6px;
    }
    .dept-part-li {
        margin: 8px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
    .dept-box {
        width: 100%;
        margin-top: 10px;
    }
    .dept-box-btn {
        display: flex;
        width: 100%;
    }
    .dept-btn-item {
        width: 94px;
        height: 30px;
        border: solid 1px #cdd3e6;
        border-top: 2px solid #3a5899;
        background: #fbfbfd;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
        &._active {
            font-weight: bold;
            border-color: #fff;
            border-top-color: #f60;
            background: #fff;
        }
    }
    .bm-city-item {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .bm-city-area {
        width: 94px;
        height: 34px;
        margin: 5px 5px 0 0;
        border: 1px solid #bfbfbf;
        background: url(~@/assets/images/components/project/dept/item.png) no-repeat
            right 0 bottom 0;
        padding: 0 2px;
        cursor: pointer;
        .l_nowrap();
        &:hover {
            opacity: 0.8;
        }
        &._active {
            border-color: #5cb85c;
            background: url(~@/assets/images/components/project/dept/item-g.png)
                no-repeat right 0 bottom 0;
        }
    }
</style>

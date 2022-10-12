<template>
    <div class="demo">
        <div class="panel">
            <div class="panel-head">
                <div class="panel-head-l">上传demo</div>
            </div>
            <div class="panel-body">
                <el-tag class="demo-tag">type不传则不限制文件类型 传image则限制只能传图片</el-tag><br />
                <el-tag class="demo-tag">multiple默认是true，即可以选择多个文件上传</el-tag>
                <div class="flex-row">
                    <comp-upload type="image"
                                 :multiple="false"
                                 class="demo-btn"
                                 @upload-success="fUploadSuccess">
                        <el-button type="success">单图片上传</el-button>
                    </comp-upload>
                    <comp-upload class="demo-btn"
                                 @upload-success="fUploadSuccess">
                        <el-button type="success">多文件上传</el-button>
                    </comp-upload>
                </div>
                <div class="flex-row">
                    <div class="demo-image"
                         v-for="(oFile, nIdx) in aFiles"
                         :key="nIdx">
                        <el-image fit="scale-down"
                                  :src="sFileSrcPre + oFile.id"
                                  :preview-src-list="aPreviewList"></el-image>
                        <span class="demo-delete el-icon-close"></span>
                    </div>
                </div>

                <el-tag class="demo-tag">头像上传</el-tag>
                <div class="flex-row">
                    <comp-upload class="demo-avatar"
                                 :multiple="false"
                                 @upload-success="fUploadAvatarSuccess">
                        <div class="avatar-upload">
                            <el-image v-if="sAvatarSrc"
                                      :src="sFileSrcPre + sAvatarSrc"
                                      class="avatar-img"
                                      fit="cover">
                            </el-image>
                            <i v-else
                               class="el-icon-plus"></i>
                        </div>
                    </comp-upload>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CompUpload from '@/components/project/upload.vue'
    import { URLS_COM } from '@/urls'
    export default {
        components: {
            CompUpload
        },
        data() {
            return {
                aFiles: [],
                sFileSrcPre: URLS_COM.i_pre,
                sAvatarSrc: ''
            };
        },
        computed: {
            aPreviewList() {
                return this.aFiles.map((oFile) => {
                    return this.sFileSrcPre + oFile.id
                })
            }
        },
        mounted() {
        },
        methods: {
            fUploadSuccess(oFile) {
                console.log(oFile)
                this.aFiles.push(oFile)
            },
            fUploadAvatarSuccess(oFile) {// 头像上传
                this.sAvatarSrc = oFile.id
            }
        }
    };
</script>

<style lang="less" rel="stylesheet" scoped>
    .demo-tag {
        margin: 5px 0;
    }
    .demo-btn {
        margin: 10px;
    }
    .demo-image {
        position: relative;
        width: 100px;
        height: 100px;
        margin: 10px;
        box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.2);
        .el-image {
            width: 100%;
            height: 100%;
        }
    }
    .demo-delete {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        line-height: 1;
        transform: translate(40%, -40%);
        border-radius: 50%;
        border: 1px solid #fff;
        background: #ff5500; //红色
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            opacity: @e_active_opacity;
        }
    }
    .demo-avatar {
        width: 100px;
        height: 100px;
        margin: 10px;
    }
</style>
<template>
    <el-upload class="upload"
               ref="upload"
               :action="sUrl"
               :show-file-list="false"
               :headers="oHeaders"
               :accept="sAccept"
               :multiple="multiple"
               :disabled="disabled"
               :before-upload="fBeforeUpload"
               :on-success="fUploadSuccess"
               :on-error="fUploadError">
        <slot></slot>
    </el-upload>
</template>
<script>
    import { URLS_COM } from '@/urls'
    export default {
        props: {
            type: {// 上传类型 image-图片 默认不限制 可直接传入accept,如 '.xls,.xlsx'
                type: String,
                default: ''
            },
            multiple: {// 是否可以多选
                type: Boolean,
                default: true
            },
            maxSize: {// 上传图片最大大小，单位M
                type: Number,
                default: 5
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                sUrl: URLS_COM.d_upload + (WISOFT_CONFIG.PROD_DATA ? '' : '.json'),
                oHeaders: {
                    [this.G_API.sTokenField]: this.G_API.fGetToken()
                },
            }
        },
        computed: {
            sAccept() {
                switch (this.type) {
                    case 'image':
                        return '.jpg,.jpeg,.gif,.png,.bmp'
                    default:
                        return this.type
                }
            }
        },
        mounted() {
        },
        methods: {
            fBeforeUpload(oFile) {
                if (oFile.size / 1024 / 1024 > this.maxSize) {
                    this.$message.error('上传文件大小不能超过 ' + this.maxSize + 'M')
                    return false;
                }
                this.$WIV.fShowLoading({
                    key: 'uploadfile',
                    content: '上传中...'
                });
                return true
            },
            fUploadSuccess({ success, msg, data }) {
                //console.log(success, msg, data)
                this.$WIV.fHideLoading({
                    key: 'uploadfile',
                });
                if (success !== true) {
                    this.$message.error(msg || '上传失败');
                    this.$emit('upload-error', msg);
                    return;
                }
                this.$emit('upload-success', data);
            },
            fUploadError(err) {
                this.$WIV.fHideLoading({
                    key: 'uploadfile',
                });
                this.$message.error(err);
                this.$emit('upload-error', err);
            }
        }
    }
</script>
<style lang="less">
    .upload {
        display: flex;
        align-items: center;
        .el-upload {
            width: 100%;
            height: 100%;
            cursor: pointer;
            overflow: hidden;
        }
    }
</style>
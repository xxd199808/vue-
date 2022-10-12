<template>
    <el-upload class="upload"
               ref="upload"
               action=""
               :show-file-list="false"
               :headers="oHeaders"
               :accept="sAccept"
               :multiple="false"
               :auto-upload="false"
               :disabled="disabled"
               :on-change="fFileChange">
        <slot></slot>
    </el-upload>
</template>
<script>
    export default {
        props: {
            type: {// 上传类型 image-图片 默认不限制 可直接传入accept,如 '.xls,.xlsx'
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                oHeaders: {
                    [this.G_API.sTokenField]: this.G_API.fGetToken()
                }
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
            fFileChange(oFile, aFileList) {
                let reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.error) {
                        this.$WIV.fShowMsg('文件加载失败!', { type: 'warning' })
                    } else {
                        this.$emit('import-success', reader.result)
                    }
                };
                reader.readAsText(oFile.raw);// element内部封装了一层，所以要 .raw
                return false
            }
        }
    }
</script>
<style lang="less">
</style>
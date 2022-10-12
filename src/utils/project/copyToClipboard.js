import { utils } from '@/utils/wiv/index.js';
const { fShowMsg } = utils;

const fCopyToClipboard = function(str) {
    const sSuccessMessage = '复制成功',
        sErrorMessage = '该浏览器不支持点击复制到剪切板';
    console.log(navigator, navigator.clipboard);
    if (navigator && navigator.clipboard) {
        navigator.clipboard.writeText(str).then(() => {
            fShowMsg(sSuccessMessage)
        }, () => {
            fShowMsg(sErrorMessage)
        })
        return;
    }
    const dTextarea = document.createElement('textarea');
    dTextarea.style.position = 'fixed';
    dTextarea.style.top = '0';
    dTextarea.style.left = '0';
    dTextarea.style.width = '20px';
    dTextarea.style.height = '20px';
    dTextarea.style.opacity = '0';
    dTextarea.style.zIndex = '-1';
    dTextarea.value = str;
    document.body.appendChild(dTextarea);
    dTextarea.select();
    try {
        var bRst = document.execCommand('copy');
        // console.log(bRst, 'execCommand', dTextarea.value)
        if (bRst) {
            fShowMsg(sSuccessMessage)
        } else {
            fShowMsg(sErrorMessage)
        }
    } catch (err) {
        fShowMsg(sErrorMessage)
    }
    document.body.removeChild(dTextarea);

}
export {
    fCopyToClipboard
}
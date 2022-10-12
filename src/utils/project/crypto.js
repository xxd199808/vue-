// 加密解密
import { sm2 } from 'sm-crypto';
// 加密
export function doEncrypt(oArg) {
    var publicKey = "0420a377c6908d0035bab54ad06b2853bd8948de0d6261073f66ae3b949f2b17ac489cc9bdc1304bc00fe7cbd3b7ea80a5eb942c4fc0a92ea8ef3a5b69fac38fe4";
    const cipherMode = 1;
    const bVerify = sm2.verifyPublicKey(publicKey); // 验证公钥
    let encryptData = '';
    if (bVerify) {
        encryptData = sm2.doEncrypt(JSON.stringify(oArg), publicKey, cipherMode); // 加密数据
    }

    return encryptData
}
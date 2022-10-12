<template>
    <div class="login-wrap">
        <img class="login-bg"
             src="~@/assets/images/views/index/login/bg.png" />
        <div class="login-con">
            <div class="login-logo"></div>
            <div class="login-tit"></div>
            <div class="login-form"
                 @keyup.enter="fInputKeyupEnter">
                <div class="login-label">用户名</div>
                <input type="text"
                       class="login-input"
                       v-model="oForm.account" />
                <div class="login-label">密码</div>
                <input type="password"
                       class="login-input"
                       v-model="oForm.password" />
                <div class="login-tips">{{sTip}}</div>
                <div class="login-btn"
                     @click="fLoginBtnClick">登 录</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { URLS_COM } from '@/urls.js'
    import { fSetToken } from '@/utils/project/token.js';
    export default {
        name: 'login',
        data() {
            return {
                oForm: {
                    account: '',
                    password: ''
                },
                sTip: ''
            }
        },
        methods: {
            //输入框回车抬起事件
            fInputKeyupEnter(e) {
                this.fLogin(e);
            },
            //登录按钮点击事件
            fLoginBtnClick(e) {
                this.fLogin(e);
            },
            //登录
            fLogin(e) {
                if (!this.oForm.account) {
                    this.sTip = '请输入用户名';// 设置提示消息
                    return;
                }
                if (!this.oForm.password) {
                    this.sTip = '请输入密码';// 设置提示消息
                    return;
                }
                e.target.blur();
                const EncryptData = this.G_API.doEncrypt(this.oForm);
                //登录请求
                this.$WIV.fRequest({
                    url: URLS_COM.d_login,
                    data: EncryptData,
                    headers: {
                        'Content-Type': 'application/json;charset:utf-8;'
                    },
                }, {
                    argToJson: true
                }).then(({ data: sToken }) => {
                    fSetToken(sToken);
                    this.$router.push({
                        name: 'index'
                    })
                });
            }
        }
    }
</script>

<style lang="less" rel="stylesheet" scoped>
    .login-wrap {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 1200px;
        min-height: 650px;
        background: linear-gradient(
            to bottom,
            #1db6e5 0,
            #2058a5 50%,
            #234471 100%
        );
        overflow: hidden;
    }
    .login-bg {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .login-con {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 506px;
        z-index: 1;
    }
    .login-logo {
        height: 112px;
        margin-bottom: 35px;
        background: url("~@/assets/images/views/index/index/logo.png") center
            no-repeat;
        background-size: auto 100%;
    }
    .login-tit {
        height: 58px;
        margin-bottom: 40px;
        background: url("~@/assets/images/views/index/index/title.png") center
            no-repeat;
    }
    .login-form {
        margin: 0 0 30px;
        padding: 25px 74px 45px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.46);
    }
    .login-label {
        margin: 20px 0 0;
        line-height: 26px;
        color: #fff;
        font-size: 18px;
    }
    .login-input {
        width: 100%;
        height: 48px;
        margin: 8px 0 0;
        padding: 0 20px;
        border-radius: 8px;
        background: #fff;
        font-size: 18px;
        outline: none;
    }
    .login-tips {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        font-size: 16px;
        color: red;
    }

    .login-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 55px;
        border-radius: 8px;
        background: #fd551f;
        font-size: 24px;
        color: #fff;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
</style>

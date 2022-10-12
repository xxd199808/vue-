export default [
{
    "code": "APIG",
    "name": "APIG",
    "type": "group",
    "icon": "el-icon-folder",
    "children": [
    {
        "name": "服务管理",
        "code": "APIG-FWGL",
        "type": "group",
        "icon": "el-icon-folder",
        "children": [
        {
            "code": "APIG-FWGL-FWGL",
            "name": "服务管理",
            "type": "menu",
            "menuType": "project",
            "router": "fwgl/fwgl.vue",
            "icon": "el-icon-menu"
        },
        {
            "code": "APIG-RDFW-RDFW",
            "name": "热点服务管理",
            "type": "menu",
            "menuType": "project",
            "router": "rdfw/rdfw.vue",
            "icon": "el-icon-menu"
        }, ]
    },
    {
        "name": "应用管理",
        "code": "APIG-YYGL",
        "type": "group",
        "icon": "el-icon-folder",
        "children": [
        {
            "code": "APIG-YYGL-YYGL",
            "name": "应用管理",
            "type": "menu",
            "menuType": "project",
            "router": "yygl/yygl.vue",
            "icon": "el-icon-menu"
        }, ]
    },
    {
        "name": "平台运行管理",
        "code": "APIG-PTYXGL",
        "type": "group",
        "icon": "el-icon-folder",
        "children": [
            {
                "code": "APIG-ZZGL-JRJGGL",
                "name": "机构注册审核",
                "type": "menu",
                "menuType": "project",
                "router": "zzgl/jrjggl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-FWGL-FWFBSH",
                "name": "服务发布审核",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/fwgl.vue",
                "icon": "el-icon-menu"
            }, {
                "code": "APIG-YYGL-JKKTSH",
                "name": "接口开通审核",
                "type": "menu",
                "menuType": "project",
                "router": "yygl/jkktsh.vue",
                "icon": "el-icon-menu"
            }, {
                "code": "APIG-YYGL-JKKTGL",
                "name": "接口开通管理",
                "type": "menu",
                "menuType": "project",
                "router": "yygl/jkktgl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-FWGL-FWGZPZ",
                "name": "访问规则配置",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/fwgzpz.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-LKPZ-LKPZNEW",
                "name": "流控配置",
                "type": "menu",
                "menuType": "project",
                "router": "lkpz/lkpz.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-YYGL-HYFLGL",
                "name": "行业分类管理",
                "type": "menu",
                "menuType": "project",
                "router": "yygl/jkflgl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-FWGL-FWFLGL",
                "name": "服务分类管理",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/fwflgl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-FWGL-CJFLGL",
                "name": "场景分类管理",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/cjflgl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-FWGL-CWMGL",
                "name": "错误码管理",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/cwmgl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-ZXCS-ZXCS",
                "name": "在线测试",
                "type": "menu",
                "menuType": "project",
                "router": "zxcs/zxcs.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-YXGL-SSYXJK",
                "name": "实时运行监控",
                "type": "menu",
                "menuType": "link",
                "url": "http://172.16.16.222:3000/d/rYdddlPWk4/wang-guan-yun-xing-shi-shi-jian-kong?orgId=1&kiosk=tv",
                "icon": "el-icon-menu"
            },
            {
                "code": "APIG-RZCX-RZCX",
                "name": "日志查询",
                "type": "menu",
                "menuType": "project",
                "router": "rzcx/rzcx.vue",
                "icon": "el-icon-menu"
            },

        ]
    }, ]
},
{
    "code": "MPS",
    "name": "MPS",
    "type": "group",
    "icon": "el-icon-folder",
    "children": [
    {
        "name": "服务提供商",
        "code": "MPS-FWTGS",
        "type": "group",
        "icon": "el-icon-folder",
        "children": [
            {
                "code": "MPS-FWGL-FWGZGL",
                "name": "服务分组管理",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/fwfzgl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "MPS-FWGL-FWGL",
                "name": "服务管理",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/fwgl.vue",
                "icon": "el-icon-menu"
            },

            {
                "code": "MPS-FWGL-FWDZWH",
                "name": "服务地址维护",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/fwdzwh.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "MPS-FWGL-CWMGL",
                "name": "错误码管理",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/cwmgl.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "MPS-JGRYGL-TGZ",
                "name": "组织管理",
                "type": "menu",
                "menuType": "project",
                "router": "jgrygl/jgrygl_tgz.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "MPS-FWGL-DYLTJ",
                "name": "调用量统计",
                "type": "menu",
                "menuType": "project",
                "router": "fwgl/dyltj.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "MPS-FWTGS-ZXCS",
                "name": "在线测试",
                "type": "menu",
                "menuType": "project",
                "router": "zxcs/zxcs.vue",
                "icon": "el-icon-menu"
            },
            {
                "code": "MPS-FWTGS-RZCX",
                "name": "日志查询",
                "type": "menu",
                "menuType": "project",
                "router": "rzcx/rzcx.vue",
                "icon": "el-icon-menu"
            }
        ]
    },
    {
        "name": "应用接入方",
        "code": "MPS-YYJRF",
        "type": "group",
        "icon": "el-icon-folder",
        "children": [
        {
            "code": "MPS-YYJRF-SYZ",
            "name": "组织管理",
            "type": "menu",
            "menuType": "project",
            "router": "jgrygl/jgrygl_syz.vue",
            "icon": "el-icon-menu"
        },
        {
            "code": "MPS-YYJRF-FWSQJL",
            "name": "服务申请",
            "type": "menu",
            "menuType": "project",
            "router": "fwgl/fwsqjl.vue",
            "icon": "el-icon-menu"
        },
        {
            "code": "MPS-YYJRF-FWCX",
            "name": "服务查询",
            "type": "menu",
            "menuType": "project",
            "router": "fwgl/fwcx.vue",
            "icon": "el-icon-menu"
        },
        {
            "code": "MPS-YYJRF-YYGL",
            "name": "应用管理",
            "type": "menu",
            "menuType": "project",
            "router": "yygl/yygl.vue",
            "icon": "el-icon-menu"
        },
        {
            "code": "MPS-YYJRF-ZXCS",
            "name": "在线测试",
            "type": "menu",
            "menuType": "project",
            "router": "zxcs/zxcs.vue",
            "icon": "el-icon-menu"
        },
        {
            "code": "MPS-YYJRF-RZCX",
            "name": "日志查询",
            "type": "menu",
            "menuType": "project",
            "router": "rzcx/rzcx.vue",
            "icon": "el-icon-menu"
        },
        {
            "code": "MPS-LKPZ-LKPZNEW",
            "name": "流控配置",
            "type": "menu",
            "menuType": "project",
            "router": "lkpzmps/lkpz.vue",
            "icon": "el-icon-menu"
        }, ]
    }, ]
},
{
    "id": "demo",
    "code": "DEMO",
    "name": "DEMO",
    "type": "group",
    "icon": "el-icon-folder",
    "children": [
    {
        "id": "demo-class",
        "code": "DEMO-CLASS",
        "name": "公共样式",
        "type": "menu",
        "menuType": "project",
        "router": "demo/class.vue",
        "icon": "el-icon-menu"
    },
    {
        "id": "demo-dept",
        "code": "DEMO-DEPT",
        "name": "部门选择",
        "type": "menu",
        "menuType": "project",
        "router": "demo/dept.vue",
        "icon": "el-icon-menu"
    },
    {
        "id": "demo-edittable",
        "code": "DEMO-EDITTABLE",
        "name": "可编辑表格",
        "type": "menu",
        "menuType": "project",
        "router": "demo/edittable.vue",
        "icon": "el-icon-menu"
    },
    {
        "id": "demo-transfer",
        "code": "DEMO-TRANSFER",
        "name": "穿梭框",
        "type": "menu",
        "menuType": "project",
        "router": "demo/transfer.vue",
        "icon": "el-icon-menu"
    },
    {
        "id": "demo-upload",
        "code": "DEMO-UPLOAD",
        "name": "上传",
        "type": "menu",
        "menuType": "project",
        "router": "demo/upload.vue",
        "icon": "el-icon-menu"
    },
    {
        "id": "demo-import",
        "code": "DEMO-IMPORT",
        "name": "导入文件",
        "type": "menu",
        "menuType": "project",
        "router": "demo/import.vue",
        "icon": "el-icon-menu"
    }]
}, ];
## 服务管理

#### 4.保存或修改API基本信息

/beaver/apimanager/saveorupdateapibase

request json
```json
{
    "id": "8dadec17-5b0f-420c-90ee-66f1d7db5af0",
    "name": "zyb测试API",
    "api_group_id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
    "auth_method": "access_token",
    "comment": null,
    "logoNfmId": null,
    "orgId": "d0991719-6d66-4156-b5cc-a159ef144e17",
    "update_time": "2021-12-14 16:11:44"
}
```

resp json

```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "8dadec17-5b0f-420c-90ee-66f1d7db5af0",
        "name": "zyb测试API",
        "api_group_id":"6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
        "auth_method": "access_token",
        "comment": null,
        "logoNfmId": null,
        "orgId": "d0991719-6d66-4156-b5cc-a159ef144e17",
        "update_time": "2021-12-14 16:11:44",
        "status": 0
    }
}
```



#### 5.保存或修改API请求定义信息
POST
/beaver/apimanager/saveorupdateapirequestdef

request json
```json
{
    "id": "f7c6fbe4-2a28-41d5-81e1-23cf0c3d27f5",
    "api_base_id": "d069964a-d404-46c3-82eb-aad315031ff0",
    "req_protocals": "HTTP",
    "req_method": "PUT",
    "req_body_type": "multipart/form-data",
    "base_path": "/",
    "req_path": "775hjkj",
    "req_mode": 9,
    "fullPath": "/775hjkj"
}
```

resp doc
```json
{
    "id": "f7c6fbe4-2a28-41d5-81e1-23cf0c3d27f5",
    //api base id
    "api_base_id": "d069964a-d404-46c3-82eb-aad315031ff0",
    //支持的协议类型 HTTP/HTTPS
    "req_protocals": "HTTP",
    //请求方法类型 GET/POST/PUT/DELETE
    "req_method": "PUT",
    //body中的参数数据类型
    "req_body_type": "multipart/form-data",
    //分组请求path
    "base_path": "/",
    //请求path
    "req_path": "775hjkj",
    //入参模式，1:入参映射  9:入参透传
    "req_mode": 9,
    "fullPath": "/775hjkj"
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "89a24dfb-5801-4af3-b0ec-56176327406d",
        "api_base_id": "d069964a-d404-46c3-82eb-aad315031ff0",
        "req_protocals": "HTTP",
        "req_method": "PUT",
        "req_body_type": "multipart/form-data",
        "base_path": "/",
        "req_path": "775hjkj",
        "req_mode": 9,
        "fullPath": "/775hjkj"
    }
}
```


#### 6.保存或修改API参数信息

/beaver/apimanager/saveorupdateapiparamters

request json
```json
{
    "id": "9db989f8-2dfe-4763-94a9-8046ba19f5b8",
    "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
    "req_param_name": "67",
    "req_param_position": "parameterPath",
    "req_param_type": "String",
    "req_param_notnull": true,
    "req_param_default_val": "67",
    "req_param_example": "67",
    "req_param_comment": "67",
    "serv_param_name": "673",
    "serv_param_position": "parameterPath",
    "paramType": "NORMAL",
    "nameNotChanged": true
}
```

doc json
```json
{
    //主键 为空表示新增
    "id": "9db989f8-2dfe-4763-94a9-8046ba19f5b8",
    "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
    //入参名称
    "req_param_name": "67",
    //入参位置
    "req_param_position": "parameterPath",
    //入参类型
    "req_param_type": "String",
    //入参必填
    "req_param_notnull": true,
    //入参默认值
    "req_param_default_val": "67",
    //入参实例
    "req_param_example": "67",
    //入参备注
    "req_param_comment": "67",
    //服务端映射的参数名称
    "serv_param_name": "673",
    //服务端映射的参数位置
    "serv_param_position": "parameterPath",
    //参数类型 NORMAL 普通参数 CONSTANT 常量参数 SYSTEM 网关系统参数
    "paramType": "NORMAL",
    "nameNotChanged": true
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "9db989f8-2dfe-4763-94a9-8046ba19f5b8",
        "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
        "req_param_name": "67",
        "req_param_position": "parameterPath",
        "req_param_type": "String",
        "req_param_notnull": true,
        "req_param_default_val": "67",
        "req_param_example": "67",
        "req_param_comment": "67",
        "serv_param_name": "673",
        "serv_param_position": "parameterPath",
        "paramType": "NORMAL",
        "nameNotChanged": false
    }
}
```

#### 7. 删除API参数
POST
/beaver/apimanager/deleteapiparamters

baseInfoId=7d5bdeac-e181-4843-aab6-19714804de35
pid=9db989f8-2dfe-4763-94a9-8046ba19f5b8
paramType=NORMAL


resp json
```json
{
    "success": true,
    "code": 204,
    "msg": "删除成功",
    "data": null
}
```

#### 8.保存或更新API后端定义
POST

/beaver/apimanager/saveorupdateapiservicedef

request json
```json
{
    "id": "acd51756-34d3-42a5-8b61-a2067fc98856",
    "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
    "service_url": "http://192.168.1.66:8889",
    "service_path": "/67test",
    "service_method": "POST",
    "service_expire": 67
}
```

doc
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "acd51756-34d3-42a5-8b61-a2067fc98856",
        "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
        //服务地址
        "service_url": "http://192.168.1.66:8889",
        //服务请求路径
        "service_path": "/67test",
        //请求类型
        "service_method": "POST",
        //过期时间
        "service_expire": 67
    }
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "acd51756-34d3-42a5-8b61-a2067fc98856",
        "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
        "service_url": "http://192.168.1.66:8889",
        "service_path": "/67test",
        "service_method": "POST",
        "service_expire": 67
    }
}
{
    "success": false,
    "code": 500,
    "msg": "API服务端信息已经存在,不能新增",
    "data": null
}
```

#### 9.保存或更新API响应定义
POST
/beaver/apimanager/saveorupdateapiresponsedef
request json
```json
{
    "id":"98d96267-e5e8-4f41-a883-42d251b4c2b4",
    "apiBaseId":"7d5bdeac-e181-4843-aab6-19714804de35",
    "respType":"application/json",
    "respExample":"{\"success\":false,\"code\":400,\"msg\":\"API服务端信息已经存在,不能新增\",\"data\":{\"id\":\"123\",\"name\":\"123\"}}",
    "successFlag":"success",
    "successVal":"true",
    "dataFlag":"data"
}
```
doc json
```json
{
    "id":"98d96267-e5e8-4f41-a883-42d251b4c2b4",
    "apiBaseId":"7d5bdeac-e181-4843-aab6-19714804de35",
    //响应数据类型
    "respType":"application/json",
    //响应示例
    "respExample":"{\"success\":false,\"code\":400,\"msg\":\"API服务端信息已经存在,不能新增\",\"data\":{\"id\":\"123\",\"name\":\"123\"}}",
    //成功标志位
    "successFlag":"success",
    //成功实例值
    "successVal":"true",
    //数据标志位
    "dataFlag":"data"
}
```


resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "98d96267-e5e8-4f41-a883-42d251b4c2b4",
        "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
        "respType": "application/json",
        "respExample": "{\"success\":false,\"code\":400,\"msg\":\"API服务端信息已经存在,不能新增\",\"data\":{\"id\":\"123\",\"name\":\"123\"}}",
        "successFlag": "success",
        "successVal": "true",
        "dataFlag": "data"
    }
}
```

#### 10.保存或更新响应响应字段
POST
/beaver/apimanager/saveorupdateapiresults


resp json
```json
{
    "id":"",
    "apiBaseId":"7d5bdeac-e181-4843-aab6-19714804de35",
    "resultCode":"name",
    "resultDesc":"属性值"
}
```
doc json
```json
{
    "id":"",
    "apiBaseId":"7d5bdeac-e181-4843-aab6-19714804de35",
    //返回值code
    "resultCode":"name",
    //返回值描述
    "resultDesc":"属性值"
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "cc78c034-09ab-4ac4-a2ee-84b717f1882a",
        "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
        "resultCode": "name",
        "resultDesc": "属性值"
    }
}
```

#### 11. 删除响应字段
POST
/beaver/apimanager/deleteapiresults
baseInfoId=7d5bdeac-e181-4843-aab6-19714804de35
apiResId=9db989f8-2dfe-4763-94a9-8046ba19f5b8

resp json
```json
{
    "success": true,
    "code": 204,
    "msg": "删除成功",
    "data": null
}
```

#### 12.保存或更新错误码
POST
/beaver/apimanager/saveorupdateapierrorcode

request json
```json
{
    "id":"",
    "apiBaseId":"7d5bdeac-e181-4843-aab6-19714804de35",
    "errCode":"8002",
    "errMsg":"服务维护中2",
    "description":"测试错误码2",
    "orgId":"d0991719-6d66-4156-b5cc-a159ef144e17"
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "f5c48423-8656-4f89-863e-f55d03e3bf0e",
        "errCode": "8002",
        "errMsg": "服务维护中2",
        "description": "测试错误码2",
        "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
        "orgId": "d0991719-6d66-4156-b5cc-a159ef144e17"
    }
}
```

#### 13 删除错误代码
POST
/beaver/apimanager/deleteapierrorcode

baseInfoId=7d5bdeac-e181-4843-aab6-19714804de35
apiErrId=cc78c034-09ab-4ac4-a2ee-84b717f1882a

resp json
```json
{
    "success": true,
    "code": 204,
    "msg": "删除成功",
    "data": null
}
```

#### 14.保存或更新API限流规则
POST
/beaver/apimanager/saveorupdateapiaccessrule

request json
```json
{
    "id":"",
    "apiBaseInfoId":"7d5bdeac-e181-4843-aab6-19714804de35",
    "limitPerDay":80,
    "tps":"1000",
    "accessStartTime":"2021-12-14 16:11:05",
    "accessEndTime":"2022-10-01 16:11:05"
}
```

doc json
```json
{
    "id":"",
    "apiBaseInfoId":"7d5bdeac-e181-4843-aab6-19714804de35",
    //每日调用量限制
    "limitPerDay":80,
    //tps
    "tps":"1000",
    //允许访问开始时间
    "accessStartTime":"2021-12-14 16:11:05",
    //允许访问结束时间
    "accessEndTime":"2022-10-01 16:11:05"
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "bf499421-5016-4a19-8c87-9b10d5b28d0b",
        "apiBaseInfoId": "7d5bdeac-e181-4843-aab6-19714804de35",
        "limitPerDay": 80,
        "tps": 1000,
        "accessStartTime": "2021-12-14 16:11:05",
        "accessEndTime": "2022-10-01 16:11:05"
    }
}
```

#### 15.删除API流控规则
POST
/beaver/apimanager/deleteapiaccessrule
apiBaseId=7d5bdeac-e181-4843-aab6-19714804de35
accessRuleId=bf499421-5016-4a19-8c87-9b10d5b28d0b

resp json
```json
{
    "success": true,
    "code": 204,
    "msg": "删除成功",
    "data": null
}
```

#### 16.根据api id 获取 api所有信息
POST
/beaver/apimanager/getapiallbyid
apiBaseId=7d5bdeac-e181-4843-aab6-19714804de35

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "apiBase": {
            "id": "7d5bdeac-e181-4843-aab6-19714804de35",
            "name": "67",
            "api_group_id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
            "auth_method": null,
            "comment": null,
            "logoNfmId": null,
            "orgId": null,
            "update_time": "2021-12-14 16:11:05",
            "status": 1
        },
        "apiRequestDef": {
            "id": "6d16b486-1278-424f-bb6f-8f183ff27f78",
            "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
            "req_protocals": "HTTPS",
            "req_method": "POST",
            "req_body_type": "multipart/form-data",
            "base_path": "/",
            "req_path": "67",
            "req_mode": 9,
            "fullPath": "/67"
        },
        "apiParameters": [
            {
                "id": "5c13bc13-0719-4c69-9bfa-10055bbdd8cb",
                "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
                "req_param_name": "测试常量参数",
                "req_param_position": "parameterPath",
                "req_param_type": "String",
                "req_param_notnull": true,
                "req_param_default_val": "67",
                "req_param_example": "67",
                "req_param_comment": "67",
                "serv_param_name": "673",
                "serv_param_position": "parameterPath",
                "paramType": "CONSTANT",
                "nameNotChanged": false
            }
        ],
        "apiServiceDef": {
            "id": "acd51756-34d3-42a5-8b61-a2067fc98856",
            "api_base_id": "7d5bdeac-e181-4843-aab6-19714804de35",
            "service_url": "http://192.168.1.66:8889",
            "service_path": "/67test",
            "service_method": "POST",
            "service_expire": 67
        },
        "apiErrorCodes": [
            {
                "id": "742525d2-3fc7-4edf-9157-6f8a0aa90389",
                "errCode": "8003",
                "errMsg": "服务维护中",
                "description": "测试错误码",
                "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
                "orgId": "d0991719-6d66-4156-b5cc-a159ef144e17"
            },
            {
                "id": "4b6320f1-a655-43c8-b716-ab0477ea1911",
                "errCode": "8002",
                "errMsg": "服务维护中2",
                "description": "测试错误码2",
                "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
                "orgId": "d0991719-6d66-4156-b5cc-a159ef144e17"
            }
        ],
        "apiResponseDef": {
            "id": "98d96267-e5e8-4f41-a883-42d251b4c2b4",
            "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
            "respType": "application/json",
            "respExample": "{\"success\":false,\"code\":400,\"msg\":\"API服务端信息已经存在,不能新增\",\"data\":{\"id\":\"123\",\"name\":\"123\"}}",
            "successFlag": "success",
            "successVal": "true",
            "dataFlag": "data"
        },
        "apiResults": [
            {
                "id": "8baa1b69-3753-4cdd-b539-9da4a8a529ad",
                "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
                "resultCode": "id",
                "resultDesc": "主键"
            },
            {
                "id": "f2d30683-3996-49aa-bb97-8f3e34659dea",
                "apiBaseId": "7d5bdeac-e181-4843-aab6-19714804de35",
                "resultCode": "name",
                "resultDesc": "属性值"
            }
        ],
        "apiAccessRule": {
            "id": "af19863e-4063-477b-8150-fcb6bb765ef1",
            "apiBaseInfoId": "7d5bdeac-e181-4843-aab6-19714804de35",
            "limitPerDay": 80,
            "tps": 1000,
            "accessStartTime": "2021-12-14 16:11:05",
            "accessEndTime": "2022-10-01 16:11:05"
        }
    }
}
```

#### 17.删除API
POST
/beaver/apimanager/deleteapi

apiId=7d5bdeac-e181-4843-aab6-19714804de35

resp json
```json
{
    "success": true,
    "code": 204,
    "msg": "删除成功",
    "data": null
}
{
    "success": false,
    "code": 500,
    "msg": "已发布的API不能删除",
    "data": null
}
```

#### 18.分页查询API信息


/beaver/apimanager/pageapi

request json
```json
{
    "percount": 5,
    "curpage": 1,
    "groupId": "",
    "apiName": "6",
    "startTime": "2020-12-15 00:00:00",
    "endTime": "2022-12-13 00:00:00"
}
```

resp doc json
```json
{
    //api id 
    "id": "8dadec17-5b0f-420c-90ee-66f1d7db5af0",
    //api 名称
    "name": "68",
    //api 分组 id
    "api_group_id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
    //安全认证方式 access_token
    "auth_method": null,
    //备注
    "comment": null,
    //logo id
    "logoNfmId": null,
    //组织机构id
    "orgId": null,
    //更新时间
    "update_time": "2021-12-14 16:11:44",
    //0 待审核  1 审核通过未发布 2 已发布 3 已下架
    "status": 1
}
```
resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "totalcount": 11,
        "totalPages": 2,
        "percount": 5,
        "curpage": 1,
        "retlist": [
            {
                "id": "577bc6ed-f6b7-4b63-b07f-1269a863f941",
                "name": "6iuk",
                "api_group_id": "4878d5a9-5d43-41f2-a6bd-a539c08b80ea",
                "auth_method": null,
                "comment": null,
                "logoNfmId": null,
                "orgId": null,
                "update_time": "2021-12-15 12:47:07",
                "status": 0
            },
            {
                "id": "0f057d57-af25-48c5-8200-38afb84e09b3",
                "name": "69",
                "api_group_id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
                "auth_method": null,
                "comment": null,
                "logoNfmId": null,
                "orgId": null,
                "update_time": "2021-12-14 16:12:51",
                "status": 1
            },
            {
                "id": "35c4f6f6-ddae-4398-a51e-428ececbf992",
                "name": "65",
                "api_group_id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
                "auth_method": null,
                "comment": null,
                "logoNfmId": null,
                "orgId": null,
                "update_time": "2021-12-14 16:10:33",
                "status": 1
            },
            {
                "id": "3057d166-2b93-49f0-b9f2-494081c9c8ca",
                "name": "63",
                "api_group_id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
                "auth_method": null,
                "comment": null,
                "logoNfmId": null,
                "orgId": null,
                "update_time": "2021-12-14 16:10:02",
                "status": 1
            },
            {
                "id": "b4671cfb-6b6e-4819-bc4c-7794d82a5fb8",
                "name": "62",
                "api_group_id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
                "auth_method": null,
                "comment": null,
                "logoNfmId": null,
                "orgId": null,
                "update_time": "2021-12-14 16:09:27",
                "status": 1
            }
        ],
        "pageNumber": 1
    }
}
```

#### 19.注册API
POST
/beaver/apimanager/registerapi


resp json
```json
{
    "success": true,
    "code": 204,
    "msg": null,
    "data": null
}
```

#### 20.发布API
POST
/beaver/apimanager/deployapi


resp json
```json
{
    "success": true,
    "code": 204,
    "msg": null,
    "data": null
}
```

#### 21.下架API
POST 
/beaver/apimanager/takedownapi


resp json
```json
{
    "success": true,
    "code": 204,
    "msg": null,
    "data": null
}
```

#### 22.审核API
POST
/beaver/apimanager/registerapi


resp json
```json
{
    "success": true,
    "code": 204,
    "msg": null,
    "data": null
}
```
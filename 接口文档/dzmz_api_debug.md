### 1.平台管理员获取token

/beaver/debug/gettoken

需以平台管理员身份登录

```json
{
    "type":"ADMIN"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "",
    "data": "bIL8LRiiFcVS2zgkBZlZA.hC2m1i71RYqHmT7lWrLTfg.Z5k1VnfM5fOz7YAQ4wEA"
}
```


### 2.服务提供者获取token

/beaver/debug/gettoken

以服务提供者登录

```json
{
    "type":"PROVIDER"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": "",
    "data": "IYVV6wAUrbaOHH1Tc2Ny0g.xnIdAVkNZRrgy2AcYajFg.0NGnLVZdwmALYZQFxvbgg"
}
```

### 3.开发者获取测试token

/beaver/debug/gettoken

需以开发者身份登录

```json
{
    "type":"DEV",
    "appId":"zuedriP2"
}
```
{
    "success": true,
    "code": 200,
    "msg": "",
    "data": "NKbuC9XtUuY2aDmRwZZDQ.Ydb9FziOTRlT550Qe6DGtA.ELp0v6YOGLD2QCDn8Q8eA"
}


### 4.管理员获取Api分组
/beaver/apimanager/listapigroup

request
```json
{}
```

```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "d8cf7105-76a1-4f65-944d-01d888e609d4",
            "name": "测试分组1",
            "base_path": "/t1",
            "comment": "测试分组",
            "create_time": null,
            "create_by": null,
            "orgId": "0"
        },
        {
            "id": "36993e47-b395-4688-8a04-7dbd9def548c",
            "name": "zhuxinpei",
            "base_path": "/zxp",
            "comment": "test1",
            "create_time": null,
            "create_by": null,
            "orgId": "0"
        },
        {
            "id": "75197032-d80e-410c-b1d7-8c38edea243d",
            "name": "xss",
            "base_path": "/user",
            "comment": "xss",
            "create_time": null,
            "create_by": null,
            "orgId": "0"
        },
        {
            "id": "4e42156b-ea10-47f9-a548-4fe234f44798",
            "name": "111",
            "base_path": "/2222",
            "comment": "333",
            "create_time": null,
            "create_by": null,
            "orgId": "4eba92ed-5789-40cb-a4c6-6026f627682b"
        },
        {
            "id": "4f1c3f478949431194b8ee18e316de11",
            "name": "test",
            "base_path": "/test",
            "comment": "test",
            "create_time": "2022-05-06 10:15:39",
            "create_by": "dzztest2",
            "orgId": "e28214cda8af4a5a97ba0f9d96889068"
        },
        {
            "id": "dd8c54b3e3bd41d78af4e31e7ebcba66",
            "name": "5555",
            "base_path": "/5555",
            "comment": "5555",
            "create_time": "2022-05-05 20:19:42",
            "create_by": "superadmin",
            "orgId": "0"
        },
        {
            "id": "4c8ad59c1e244fd080449083304f2a95",
            "name": "jinyu",
            "base_path": "/jinyu",
            "comment": "jinyu",
            "create_time": "2022-05-05 16:49:12",
            "create_by": "jinyu",
            "orgId": "baa30c425165482fa96422fe38cbb1a0"
        },
        {
            "id": "7a9a4098c427430f8fcdd4e6df4c8e38",
            "name": "1",
            "base_path": "/aa",
            "comment": "1",
            "create_time": "2022-05-05 13:57:14",
            "create_by": "superadmin",
            "orgId": "0"
        },
        {
            "id": "ebb801b2-da21-4cf3-87d2-df56794772e9",
            "name": "mygroup",
            "base_path": "/mygroup",
            "comment": "我的分组",
            "create_time": "2022-05-05 09:58:06",
            "create_by": "王统帅",
            "orgId": "4a0db5b8-8434-4c71-b54b-3ea31be85574"
        },
        {
            "id": "5ceacd62-2ec3-4590-b729-dec919cff9de",
            "name": "测试分组",
            "base_path": "/test",
            "comment": "ga1test",
            "create_time": "2022-05-04 15:55:32",
            "create_by": "ga1",
            "orgId": "edee9d63-1f75-4dba-a6c6-73447c30770e"
        },
        {
            "id": "939c694f-77dc-4245-b24e-ccd8dbcd8978",
            "name": "地图服务",
            "base_path": "/",
            "comment": "地图服务分组",
            "create_time": "2022-05-04 14:01:53",
            "create_by": "ga1",
            "orgId": "edee9d63-1f75-4dba-a6c6-73447c30770e"
        },
        {
            "id": "cb202ee4-0fcb-4854-b622-69981115e283",
            "name": "地图服务",
            "base_path": "/",
            "comment": "接入地图服务",
            "create_time": "2022-05-04 13:36:32",
            "create_by": "ga",
            "orgId": "3be1bf73-e981-481d-8aaf-873215b6196f"
        },
        {
            "id": "2597d87f-1261-4c35-8b8f-f3f6994db74d",
            "name": "nnnn",
            "base_path": "/zzzz",
            "comment": "zzzzz2222",
            "create_time": "2022-04-30 16:54:00",
            "create_by": "1",
            "orgId": "e7ccf32f-c9dd-4615-bbe0-7eb9817f158c"
        },
        {
            "id": "9e65308f-17de-4d61-8b13-fbb73b7a647a",
            "name": "1222",
            "base_path": "/1222",
            "comment": "1122",
            "create_time": "2022-04-30 16:53:50",
            "create_by": "1",
            "orgId": "e7ccf32f-c9dd-4615-bbe0-7eb9817f158c"
        },
        {
            "id": "a0d70754-902f-4794-b634-0f77e81f6401",
            "name": "osadasda",
            "base_path": "/qjsoqjasdsa",
            "comment": "asdsadqdas",
            "create_time": "2022-04-30 14:33:01",
            "create_by": null,
            "orgId": "4eba92ed-5789-40cb-a4c6-6026f627682b"
        }
    ]
}
```

### 5.服务提供商获取api分组

/mps/apimanager/listapigroup

request
```json
{}
```

```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "4c8ad59c1e244fd080449083304f2a95",
            "name": "jinyu",
            "base_path": "/jinyu",
            "comment": "jinyu",
            "create_time": "2022-05-05 16:49:12",
            "create_by": "jinyu",
            "orgId": "baa30c425165482fa96422fe38cbb1a0"
        }
    ]
}
```

### 6.管理员获取api

/beaver/apimanager/listapi

request json
```json
{
    "orgId":"4c8ad59c1e244fd080449083304f2a95"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "ccd28146e64e457c9fb8f742f9b9bccc",
            "name": "金鱼的服务",
            "api_group_id": "4c8ad59c1e244fd080449083304f2a95",
            "apiCategory": "111",
            "auth_method": "access_token",
            "comment": "金鱼",
            "logoNfmId": "b43a9a6f8dae494fb2027bb565ba0d36",
            "orgId": "baa30c425165482fa96422fe38cbb1a0",
            "callAddress": null,
            "update_time": "2022-05-05 16:53:16",
            "status": 2,
            "apiGroupName": null,
            "requestMethod": null,
            "envType": 1
        }
    ]
}
```

### 7.服务商获取api

/mps/apimanager/listapi

request json
```json
{
    "groupId":"4c8ad59c1e244fd080449083304f2a95"
}
```

```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "ccd28146e64e457c9fb8f742f9b9bccc",
            "name": "金鱼的服务",
            "api_group_id": "4c8ad59c1e244fd080449083304f2a95",
            "apiCategory": "111",
            "auth_method": "access_token",
            "comment": "金鱼",
            "logoNfmId": "b43a9a6f8dae494fb2027bb565ba0d36",
            "orgId": "baa30c425165482fa96422fe38cbb1a0",
            "callAddress": null,
            "update_time": "2022-05-05 16:53:16",
            "status": 2,
            "apiGroupName": null,
            "requestMethod": null,
            "envType": 1
        }
    ]
}
```

### 8.开发者获取api

/mps/apimanager/listapi

request json
```json
{
    "orgId":"314eca56-ff44-489e-a2d0-c4361bc3a082"
}
```

resp
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "585062d5-f5c4-4784-8b62-c7547de22c32",
            "name": "111",
            "api_group_id": "ec27c0b8-9e08-431c-8c1f-69ab2db5ac17",
            "apiCategory": "1233123123|ttt5t5",
            "auth_method": "access_token",
            "comment": "2222",
            "logoNfmId": "",
            "orgId": "0",
            "callAddress": null,
            "update_time": "2022-04-29 13:26:53",
            "status": 2,
            "apiGroupName": null,
            "requestMethod": null,
            "envType": 1
        },
        {
            "id": "56e8c294-7a97-4298-8722-d1789ae92a1e",
            "name": "获取区县代码",
            "api_group_id": "cb202ee4-0fcb-4854-b622-69981115e283",
            "apiCategory": "32454343",
            "auth_method": "access_token",
            "comment": "获取区县代码",
            "logoNfmId": "",
            "orgId": "3be1bf73-e981-481d-8aaf-873215b6196f",
            "callAddress": null,
            "update_time": "2022-05-05 14:05:31",
            "status": 2,
            "apiGroupName": null,
            "requestMethod": null,
            "envType": 1
        },
        {
            "id": "06b2f0c4-c09c-44fc-9f7b-fae0289d7d7f",
            "name": "test001",
            "api_group_id": "5ceacd62-2ec3-4590-b729-dec919cff9de",
            "apiCategory": "111|1233123123",
            "auth_method": "access_token",
            "comment": "test001",
            "logoNfmId": "",
            "orgId": "edee9d63-1f75-4dba-a6c6-73447c30770e",
            "callAddress": null,
            "update_time": "2022-05-04 16:28:44",
            "status": 2,
            "apiGroupName": null,
            "requestMethod": null,
            "envType": 1
        }
    ]
}
```


### 9.获取开发者拥有的app

mps/app/curdevapps

request
```json
{}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "ef1b30b6-4205-48d0-a185-ea357dff6f1f",
            "name": "app",
            "comment": "aaaaa",
            "appid": "GqsnCJcD",
            "appSecret": "4ecf28ec34bb498f87baede413e7ed58",
            "serverSecret": "47313ea923554e8e83adbe5580004afc",
            "status": null,
            "createTime": "2022-04-30 17:44:11",
            "createBy": "8bca1ae4-be45-447c-9190-ef8d5df1aff7",
            "orgId": "4eba92ed-5789-40cb-a4c6-6026f627682b",
            "logo": "",
            "isEncry": "0",
            "tradeId": "1",
            "tradeName": "电子",
            "useCase": "身份验证",
            "auditState": "1",
            "auditRemark": "aaaa",
            "auditUser": null,
            "auditTime": "2022-04-30 17:45:11",
            "updatedTime": null,
            "updatedBy": null,
            "disableReason": null,
            "deleteFlag": "0"
        }
    ]
}
```

### 10.获取机构list
/beaver/organization/getAllProvider

```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "314eca56-ff44-489e-a2d0-c4361bc3a082",
            "orgName": "市公安局"
        },
        {
            "id": "13155ce1-7500-476d-b592-8ae5abbaec56",
            "orgName": "123"
        },
        {
            "id": "17c215f6-a105-4ec5-8434-e303096ce2aa",
            "orgName": "httpbin"
        },
        {
            "id": "2d8bdf64-e45e-468e-b9de-b6294984cdc2",
            "orgName": "提供商one"
        },
        {
            "id": "1c6b64d5-7f74-41b6-8486-20de82c6d116",
            "orgName": "dsadasd"
        },
        {
            "id": "7a5cd66a-75aa-47bb-b33a-c14ab179d838",
            "orgName": "wisoft"
        },
        {
            "id": "e7ccf32f-c9dd-4615-bbe0-7eb9817f158c",
            "orgName": "1111111111"
        },
        {
            "id": "65b7611ab602428cb591e69384d55688",
            "orgName": "电子证test"
        }
    ]
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

### 11.根据requestid查询api调用日志

/beaver/debug/getlogbyreqid
```json
{
    "reqId":"r1"
}
```

resp
```json
{
    "success": true,
    "code": 200,
    "msg": "",
    "data": {
        "requestId": "r1",
        "appId": "appId",
        "appName": "appName",
        "apiName": "apiName",
        "devId": null,
        "devName": "devName",
        "providerId": null,
        "providerName": "providerName",
        "gateWayServerNote": null,
        "requestIp": "request_ip",
        "requestApi": "request_api",
        "requestApiId": null,
        "requestMethod": "request_method",
        "requestArrive": "2022-05-06 17:54:04.514",
        "requestContent": "request_content",
        "originalRequestHeader": "original_request_header",
        "modifiedRequestHeader": null,
        "originalRequestBody": "original_request_body",
        "modifiedRequestBody": null,
        "routeTo": null,
        "responseTime": "2022-05-06 17:54:10.876",
        "responseCode": 200,
        "responseContent": "response_content",
        "elapsedTime": 5000
    }
}
```

header中request 名称

apig-header-requestid
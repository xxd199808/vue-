#### 错误码list

POST
/beaver/errorcode/listerrorcode

req json
```json
{
    "orgId:"SYSTEM"
}
```

response json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "845ebd74-952d-42f8-814f-752f240323bb",
            "code": "404",
            "codeMsg": "resource not found",
            "codeDesc": "错误描述",
            "orgId": "SYSTEM"
        },
        {
            "id": "fe19cc00-bff2-4781-94cd-fd200d98737a",
            "code": "403",
            "codeMsg": "forbbiden",
            "codeDesc": "错误描述",
            "orgId": "SYSTEM"
        }
    ]
}
```

#### 错误码保存或者修改

/beaver/errorcode/saveorupdateerrorcode

req json
```json
{
"id":"",
"code":"403",
"codeMsg":"forbbiden",
"codeDesc":"错误描述",
"orgId":"SYSTEM"
}
```
resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "fe19cc00-bff2-4781-94cd-fd200d98737a",
        "code": "403",
        "codeMsg": "forbbiden",
        "codeDesc": "错误描述",
        "orgId": "SYSTEM"
    }
}
```


### 错误码删除
```json
/beaver/errorcode/deleteerrorcode

request json
```json
{
    "id":"c6fbe53d-e7e2-459c-91d5-22a41762ec05"
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": null
}
```
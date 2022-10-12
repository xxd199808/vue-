## 分组管理

####  1.list 查询Api 分组

> beaver/apimanager/listapigroup

请求参数 无

resp doc json
```json
{
    "id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
    //分组名称
    "name": "分组名称",
    //请求路径
    "base_path": "/",
    //备注
    "comment": "分组备注",
    //创建时间
    "create_time": "2021-12-13 10:31:44",
    //创建人
    "create_by": ""
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": [
        {
            "id": "6ee4d939-4ed5-4c7e-88e5-6c9c76858be3",
            "name": "分组名称",
            "base_path": "/",
            "comment": "分组备注",
            "create_time": "2021-12-13 10:31:44",
            "create_by": ""
        },
        {
            "id": "2bfe1009-2471-47ee-a38b-3af9ae4a0f3c",
            "name": "111111111111111",
            "base_path": "/",
            "comment": "122222222222222222233334444",
            "create_time": "2021-12-13 14:16:53",
            "create_by": ""
        },
        {
            "id": "a3075c9f-9960-4f8b-818b-f3c2f0a4a1a5",
            "name": "1213",
            "base_path": "/",
            "comment": "顶顶顶顶",
            "create_time": "2021-12-13 14:55:34",
            "create_by": ""
        },
        {
            "id": "d3783a9c-f189-4c8c-85a8-ae8f0cbcb5eb",
            "name": "分分组",
            "base_path": "/",
            "comment": "分分组分分组分分组分分组分分组33333",
            "create_time": "2021-12-14 10:20:36",
            "create_by": ""
        },
        {
            "id": "6ff2f884-c366-4212-8342-9b10996377d5",
            "name": "再分组",
            "base_path": "/",
            "comment": null,
            "create_time": "2021-12-14 16:22:58",
            "create_by": ""
        },
        {
            "id": "4878d5a9-5d43-41f2-a6bd-a539c08b80ea",
            "name": "dfdfd",
            "base_path": "/",
            "comment": "的范德萨范德萨发生的",
            "create_time": "2021-12-15 12:40:27",
            "create_by": ""
        },
        {
            "id": "b5d23b95-d6ef-4e43-aac1-4489681784c2",
            "name": "bbb",
            "base_path": "/",
            "comment": null,
            "create_time": "2021-12-15 16:26:36",
            "create_by": ""
        },
        {
            "id": "382136a7-27bc-4299-8f0a-8f5cb2f66d0e",
            "name": "ttt",
            "base_path": "/",
            "comment": null,
            "create_time": "2021-12-15 16:37:36",
            "create_by": ""
        },
        {
            "id": "04fed9c3-d9d7-40f7-8d6d-d288f4569ac5",
            "name": "周曦测试",
            "base_path": "/zxtest",
            "comment": "周曦测试",
            "create_time": "2021-12-21 16:24:14",
            "create_by": ""
        },
        {
            "id": "de175cbd-0743-4dd1-93b5-e6d3d55a485a",
            "name": "测试分组",
            "base_path": "/test",
            "comment": null,
            "create_time": "2022-04-13 13:21:13",
            "create_by": ""
        },
        {
            "id": "e6086336-e41e-4311-8eb8-a8a8bb1097d8",
            "name": "ABC",
            "base_path": "/A",
            "comment": "测试",
            "create_time": "2021-12-07 17:12:44",
            "create_by": "superadmin"
        },
        {
            "id": "ea92276b-e61d-43e4-8b2e-40e133886bea",
            "name": "ABCD",
            "base_path": "/AB",
            "comment": "测试3",
            "create_time": "2021-12-07 17:12:44",
            "create_by": "superadmin1"
        }
    ]
}
```

#### 2.保存或修改Api分组

id为空表示新增
request json
```json
{
    "id":"ea92276b-e61d-43e4-8b2e-40e133886bea",
    "name": "ABCD",
    "base_path": "/AB",
    "comment": "测试3",
    "create_time": "2021-12-07 17:12:40",
    "create_by": "superadmin1"
}
```

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": null,
    "data": {
        "id": "ea92276b-e61d-43e4-8b2e-40e133886bea",
        "name": "ABCD",
        "base_path": "/AB",
        "comment": "测试3",
        "create_time": "2021-12-07 17:12:44",
        "create_by": "superadmin1"
    }
}
```

#### 3.删除Api分组

请求参数 groupId

resp json
```json
{
    "success": true,
    "code": 200,
    "msg": "删除成功",
    "data": null
}
```
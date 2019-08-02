import Mock from 'mockjs';
const Random = Mock.Random
const base = process.env.API_ROOT
Random.date('yyyy-MM')
Random.image('200x100', '#00405d', '#FFF', 'Mock.js')

const test =  Mock.mock(base+'/api/test','post',(req)=> {
  var params = JSON.parse(req.body);
  console.log(params.pageNo);
  const testData = {
    "msg": "查询成功",
    "code": 0,
    "data": [
      {
        "id": 1,
        "projectId": 1,
        "name": "123131",
        "order": 1
      },
      {
        "id": 2,
        "projectId": 2,
        "name": "freizu",
        "order": 1
      },
      {
        "id": 3,
        "projectId": 2,
        "name": "123123",
        "order": 123
      },
      {
        "id": 4,
        "projectId": 2,
        "name": "11",
        "order": 11
      },
      {
        "id": 5,
        "projectId": 7,
        "name": "王贵才1",
        "order": 2
      },
      {
        "id": 6,
        "projectId": 8,
        "name": "人口",
        "order": 2
      },
      {
        "id": 8,
        "projectId": 8,
        "name": "车辆",
        "order": 2
      },
      {
        "id": 9,
        "projectId": 8,
        "name": "123",
        "order": 1
      }
    ]
  }
  return testData
});
//查询
const  selectApiList =  Mock.mock(base+'/api/document/list', {
  'msg':'操作成功',
  'code':'0',
  'data|10':[
    {
      "id": 10,
      "img":'@image',
      "projectId": 8,
      "groupId": 9,
      "name": "123",
      "status": 0,
      "starLevel": 0,
      "requestUrl": "123",
      "requestMethod": "POST",
      "requestHeaders": "[]",
      "queryParams": "[]",
      "responseDatatypeId": 0,
      "responseParams": null,
      "successRespType": "JSON",
      "successRespExample": "",
      "failRespType": "JSON",
      "failRespExample": "",
      "remark": "",
      "addTime": "2019-06-12 11:04:56",
      "updateTime": "2019-06-12 11:04:56",
      "pageNo": 0,
      "pageSize": 0,
      "store": "1",
      "userId": 0,
      "isshow":false,
    },
  ],
  "count": 100,
});
//分类接口
const  dictList =  Mock.mock(base+'/api/group/list', {
  "msg": "查询成功",
  "code": 0,
  "data": [
    {
      "id": 1,
      "projectId": 1,
      "name": "123131",
      "order": 1
    },
    {
      "id": 2,
      "projectId": 2,
      "name": "freizu",
      "order": 1
    },
    {
      "id": 3,
      "projectId": 2,
      "name": "123123",
      "order": 123
    },
    {
      "id": 4,
      "projectId": 2,
      "name": "11",
      "order": 11
    },
    {
      "id": 5,
      "projectId": 7,
      "name": "王贵才1",
      "order": 2
    },
    {
      "id": 6,
      "projectId": 8,
      "name": "人口",
      "order": 2
    },
    {
      "id": 8,
      "projectId": 8,
      "name": "车辆",
      "order": 2
    },
    {
      "id": 9,
      "projectId": 8,
      "name": "123",
      "order": 1
    }
  ]
});
export {
  test,
  selectApiList,
  dictList,
}

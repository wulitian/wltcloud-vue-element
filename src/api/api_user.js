/**
 * Created by bootdo.
 * 用户相关api
 */
import * as API from './'

export default {
  method1:params => {
    return API.POST('/api/test', params)
  },
  method2:params =>{
    return API.GET('/mobile/api/login2',params)
  },
  method3:params =>{
    return API.GET('/mobile/api/login3/'+ params)
  },
}

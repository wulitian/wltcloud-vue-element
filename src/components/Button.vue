<template>
  <div class="hello">
    <el-button type="primary" plain round size="mini" icon="el-icon-edit"></el-button>
    <el-button type="primary" @click="test">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</template>

<script>
import Api from '@/api/api_user.js'
import mock from '@/mock/mock.js'
export default {
  name: 'Button',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    async test() {
      let params = {
        'pageNo':1,
        'pageSize':10
      }
      try {
        const result = await Api.method1(params)
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
</style>

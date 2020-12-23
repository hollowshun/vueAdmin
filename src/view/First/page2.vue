<template>
  <div>
    <el-button @click="test1">json请求1</el-button>
    <el-button @click="test2">json请求2</el-button>
    <!-- <el-button @click="test3">json请求3</el-button> -->
  </div>
</template>

<script>
import { apiAddress } from "../../http/api/user";
export default {
  data() {
    return {};
  },

  methods: {
    // 请求url（post） 写在组件里
    test1() {
      this.$http.user
        .test1('post',{
          page: 1,
          size: 3
        })
        .then(res => {
          console.log("123", res);
          this.$message.success('请求成功')
        })
    },
    // url 统一管理
    test2() {
      this.$http.user
        .test2({
          page: 1,
          size: 3
        })
        .then(res => {
          console.log("123", res);
           this.$message.success('请求成功')
        })
    },
    // 表单提交形式,此接口不是真实接口，只是写法demo
    test3() {
      this.$http.user
        .test3({
          page: 1,
          size: 3
        })
        .then(res => {
          console.log("123", res);
           this.$message.success('请求成功')
        })
    },
  }
  //created(){}
};
</script>
<style lang="less" scoped></style>

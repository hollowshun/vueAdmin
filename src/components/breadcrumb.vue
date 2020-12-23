<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <el-breadcrumb-item v-for="(item,index)  in levelList" :key="index">
          {{item.name}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      // const first = matched[0]
      // if (first && first.name != '/First/page1') {
      //   console.log(123)
      //   matched = [{ path: '/First/page1', name: '首页' }].concat(matched)
      // }
      this.levelList = matched
    }
  }
}
</script>

<style lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 40px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>

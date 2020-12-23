<template>
  <el-container>
    <!--左侧导航-->
    <el-aside width="auto">
      <left-nav></left-nav>
    </el-aside>
    <el-container>
      <!--头部-->
      <el-header height="auto" style="padding:0">
        <top-nav></top-nav>
      </el-header>
      <!--右侧内容区-->
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftNav from "../components/leftNav.vue";
import topNav from "../components/topNav.vue";
export default {
  components: { topNav, LeftNav },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped></style>

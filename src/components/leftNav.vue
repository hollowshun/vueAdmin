<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item>
        <img :class="[isCollapse ? 'logoImg' : '']" src="../assets/images/logo.png" alt="公司logo" />
        <div class="comName" v-show="!isCollapse">admin</div>
      </el-menu-item>

      <el-menu-item class="collapse">
        <i v-if="isCollapse" @click="switchCollapse(false)" class="el-icon-s-unfold"></i>
        <i v-else @click="switchCollapse(true)" class="el-icon-s-fold"></i>
      </el-menu-item>
      <div v-for="(option, index) in $router.options.routes" :key="index">
        <div v-if="option.path == $store.getters.topNavState">
          <el-menu-item v-for="(item, idx) in option.children" :key="idx" :index="item.path">
            <svg-icon :icon-class="item.icon"></svg-icon>
            <span v-show="!isCollapse">{{ item.name }}</span>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      defaultActive: this.$route.path,
      leftNavList: [],
      topPath: ""
    };
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.setLeftNav();
      }, 0);
    }
  },
  methods: {
    switchCollapse(flage) {
      this.isCollapse = flage;
    },
    setLeftNav() {
      let topPath = this.$store.getters.topNavState,
        activePath = this.$route.path,
        routerList = this.$router.options.routes,
        item = routerList.filter((item, index) => {
          if (item.path == topPath) {
            return item;
          }
        });
      if (activePath == topPath) {
        this.defaultActive = item[0].children[0].path;
      } else {
        this.defaultActive = this.$route.path;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.setLeftNav();
    }, 0);
  }
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
.el-menu-vertical-demo {
  height: 100vh;
}

img {
  width: 30px;
  height: 30px;
  float: left;
  margin-top: 16px;
}
.logoImg {
  width: 20px;
  height: 20px;
}
.comName {
  float: left;
  margin-left: 15px;
  line-height: 60px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}

.collapse {
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
/deep/ .el-menu-item-group__title {
  padding: 0px !important;
}
</style>

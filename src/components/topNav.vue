<template>
  <div>
    <div class="content">
      <div class="content_item1">
        <el-menu
          :default-active="$store.getters.topNavState"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item v-for="(item, index) in topNav" :key="index" :index="item.path">
            <svg-icon :icon-class="item.icon"></svg-icon>
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </div>
      <div class="content_item2" @click="fullScreen">
        <svg-icon icon-class="全屏"></svg-icon>
      </div>
      <div class="content_item3">
        <div class="logOut">
          <el-dropdown placement="bottom" @command="handleCommand" trigger="click" style="margin-right:20px">
            <span class="el-dropdown-link">
              <i class="el-icon-user-solid"></i>
              {{ userInfo.name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
              <el-dropdown-item command="forgetPassword">忘记密码</el-dropdown-item>
              <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="topNav_breadcrumb">
      <Breadcrumb />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/breadcrumb'
import {mapGetters} from 'vuex'
export default {
  components:{
    Breadcrumb
  },
  data() {
    return {
      topNav: [],
      isfullScreen:true
    };
  },
  computed: {
     ...mapGetters(['userInfo'])
   },
  watch: {
    $route: function(to, from) {
      // 路由改变时执行
      //console.info("to.path:" + to.path);
      this.fetchNavData();
    }
  },
  methods: {
    getTopNav() {
      let routers = this.$router.options.routes;
      this.topNav = routers.filter((item, idx) => {
        if (item.children) {
          return item;
        }
      });
    },
    fetchNavData() {
      // 初始化菜单激活项
      let cur_path = this.$route.path, //获取当前路由
        routers = this.$router.options.routes, // 获取路由对象
        topNavState = "";
      routers.forEach((element, index) => {
        if (element.path == cur_path) {
          topNavState = element.path;
        } else {
          let children = element.children;
          if (children) {
            children.forEach((item, idx) => {
              if (item.path == cur_path) {
                topNavState = element.path;
                // leftNavState = item.path;
              }
            });
          }
        }
      });

      this.$store.commit("setTopNavState", topNavState);
    },
    handleCommand(command) {
      switch (command) {
        case 'userInfo':
          console.log('个人信息')
          break;
        case 'forgetPassword':
          console.log('个人信息')
          break;
        default:
          this.$confirm("确定要退出吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
            .then(() => {
              this.$message.success('退出成功')
              localStorage.removeItem("user");
              this.$router.push("/login");
            })
            .catch(() => {
              // this.$message({
              //   type: "info",
              //   message: "已取消"
              // });
            });
          break;
      }
    },
    fullScreen () {
      if (this.isfullScreen) {
        var docElm = document.documentElement
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen()
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen()
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen()
        }
        this.isfullScreen = false
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.isfullScreen = true
      }
    },

  },
  // watch: {
  //   $route() {
  //     console.log("top");
  //     this.fetchNavData();
  //   }
  // },
  created() {
    this.getTopNav();
    this.fetchNavData();
  }
};
</script>
<style lang="less" scoped>
.content {
  height: 60px;
  width: 100%;
  display: flex;
  // padding-right: 20px;
}
.content_item1{
  flex-grow: 1;
}
.content_item2{
  background: #545c64;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  width: 60px;
}
.content_item3{
  min-width: 100px;
}
.logOut {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: rgb(84, 92, 100);
  text-align: right;
  cursor: pointer;
  i {
    color: #fff;
  }
  span {
    color: #fff;
  }
}
.topNav_breadcrumb{
  box-shadow: 0px 1px 10px #ccc;
}
</style>

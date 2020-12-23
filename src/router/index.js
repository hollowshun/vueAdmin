import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home'
import login from '../view/login'
import NotFound from '../view/404'
import Firstpage1 from '../view/First/page1.vue'
import Firstpage2 from '../view/First/page2.vue'
import Firstpage3 from '../view/First/page3.vue'
import Secondpage1 from '../view/Second/page1.vue'
import Secondpage2 from '../view/Second/page2.vue'
import Secondpage3 from '../view/Second/page3.vue'
import Thirdpage1 from '../view/Third/page1.vue'
import Thirdpage2 from '../view/Third/page2.vue'
import Thirdpage3 from '../view/Third/page3.vue'
import Fourthpage1 from '../view/Fourth/page1.vue'
import Fourthpage2 from '../view/Fourth/page2.vue'
import Fourthpage3 from '../view/Fourth/page3.vue'
import Fifthpage1 from '../view/Fifth/page1.vue'
import Fifthpage2 from '../view/Fifth/page2.vue'
import Fifthpage3 from '../view/Fifth/page3.vue'

Vue.use(Router)
let publicRoutes = [{
  path: '/login',
  name: 'login',
  component: login
}, {
  path: '/',
  name: '',
  component: home,
  redirect: '/First/page1',
}, {
  path: '/First',
  name: 'First',
  component: home,
  icon: '类目 品类 分类 类别',
  children: [{
    path: '/First/page1',
    alias: '/First',
    name: 'Firstpage1',
    icon: '类目 品类 分类 类别',
    components: {
      default: Firstpage1,
    },
  }, {
    path: '/First/page2',
    name: 'Firstpage2',
    icon: '类目 品类 分类 类别',
    components: {
      default: Firstpage2,
    },
  }, {
    path: '/First/page3',
    name: 'Firstpage3',
    icon: '类目 品类 分类 类别',
    components: {
      default: Firstpage3,
    },
  }]
}, {
  path: '/Second',
  name: 'Second',
  component: home,
  icon: '类目 品类 分类 类别 (1)',
  children: [{
    path: '/Second/page1',
    alias: '/Second',
    name: 'Secondpage1',
    icon: '类目 品类 分类 类别',
    components: {
      default: Secondpage1,
    },
  }, {
    path: '/Second/page2',
    name: 'Secondpage2',
    icon: '类目 品类 分类 类别',
    components: {
      default: Secondpage2,
    },
  }, {
    path: '/Second/page3',
    name: 'Secondpage3',
    icon: '类目 品类 分类 类别',
    components: {
      default: Secondpage3,
    },
  }]
}, {
  path: '/Third',
  name: 'Third',
  component: home,
  icon: '类目 品类 分类 类别 (2)',
  children: [{
    path: '/Third/page1',
    alias: '/Third',
    name: 'Thirdpage1',
    icon: '类目 品类 分类 类别',
    components: {
      default: Thirdpage1,
    },
  }, {
    path: '/Third/page2',
    name: 'Thirdpage2',
    icon: '类目 品类 分类 类别',
    components: {
      default: Thirdpage2,
    },
  }, {
    path: '/Third/page3',
    name: 'Thirdpage3',
    icon: '类目 品类 分类 类别',
    components: {
      default: Thirdpage3,
    },
  }]
}, {
  path: '*',
  component: NotFound
}]

let adminRouter = [{
  path: '/Fourth',
  name: 'Fourth',
  component: home,
  icon: '类目 品类 分类 类别 (1)',
  children: [{
    path: '/Fourth/page1',
    alias: '/Fourth',
    name: 'Fourthpage1',
    icon: '类目 品类 分类 类别',
    components: {
      default: Fourthpage1,
    },
  }, {
    path: '/Fourth/page2',
    name: 'Fourthpage2',
    icon: '类目 品类 分类 类别',
    components: {
      default: Fourthpage2,
    },
  }, {
    path: '/Fourth/page3',
    name: 'Fourthpage3',
    icon: '类目 品类 分类 类别',
    components: {
      default: Fourthpage3,
    },
  }]
}, {
  path: '/Fifth',
  name: 'Fifth',
  component: home,
  icon: '类目 品类 分类 类别 (1)',
  children: [{
    path: '/Fifth/page1',
    alias: '/Fifth',
    name: 'Fifthpage1',
    icon: '类目 品类 分类 类别',
    components: {
      default: Fifthpage1,
    },
  }, {
    path: '/Fifth/page2',
    name: 'Fifthpage2',
    icon: '类目 品类 分类 类别',
    components: {
      default: Fifthpage2,
    },
  }, {
    path: '/Fifth/page3',
    name: 'Fifthpage3',
    icon: '类目 品类 分类 类别',
    components: {
      default: Fifthpage3,
    },
  }]
}]

let router = new Router({
  routes: publicRoutes,
  // adminRouter
})
router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('user'))
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   next() //如果路由中有meta的requireAuth，且为true，就不进行登录验证，否则进行登录验证
  // } else {
  if (user) {
    next()
  } else {
    if (to.path === "/login") {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
  // }
  // return
})

export default router

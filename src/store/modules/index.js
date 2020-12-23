// import Vue from 'vue'
const app = {
  state: {
    // 左侧菜单默认项
    topNavState: '',
    num1: 1,
  },
  mutations: {
    setTopNavState(state, data) {
      console.log(data)
      state.topNavState = data
      // Vue.set(state, 'topNavState', data)
    },
    incrementC(state, n = 1) {
      state.num1 += n
    },
    //箭头函数写法
    decrementC: (state, n = 1) => {
      state.num1 -= n
    }
  },
  actions: {

  }
}

export default app

// import Vue from 'vue'
const app = {
  state: {
    //防止刷新vuex值清空
    userInfo: JSON.parse(localStorage.getItem(`user`)),
    token: JSON.parse(localStorage.getItem(`token`)),
  },
  mutations: {
    //箭头函数写法
    SET_INFO: (state, data) => {
      state.userInfo = data
    },
    SET_TOKEN(state, data) {
      state.token = data
    },
  },
  actions: {

  }
}

export default app

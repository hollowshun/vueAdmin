const getters = {
  topNavState: state => state.index.topNavState,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
}
export default getters

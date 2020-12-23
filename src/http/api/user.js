import base from '../base'; // 导入接口域名列表
import request from '../http'; // 导入http中创建的axios实例

const user = {
  test1(url, params) {
    return request.post(`${base.BASE_URl}${url}`, params)
  },
  test2(params) {
    return request.post(`${base.BASE_URl}${'post'}`, params)
  },
  test3(params) {
    var form = new FormData();
    form.append("requestSystem", "");
    form.append("requestUri", "/post");
    form.append('requestData[page]', params.page);
    form.append('requestData[size]', params.size);
    return request.post(`${base.BASE_URl}`, form)
  }
};
export default user;

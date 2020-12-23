import {
  Notification,
  MessageBox
} from 'element-ui';
// import Vue from 'vue';
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
export default {
  getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000)
      .toLocaleString()
      .replace(/:\d{1,2}$/, ' ');
  },
  getTreeDeepArrCompany(key, treeData) {
    let arr = []; // 在递归时操作的数组
    let returnArr = []; // 存放结果的数组
    let depth = 0; // 定义全局层级
    // 定义递归函数
    function childrenEach(childrenData, depthN) {
      for (var j = 0; j < childrenData.length; j++) {
        depth = depthN; // 将执行的层级赋值 到 全局层级

        arr[depthN] = childrenData[j].name;

        if (childrenData[j].code == key) {
          // returnArr = arr; // 原写法不行, 因 此赋值存在指针关系
          returnArr = arr.slice(0, depthN + 1); //将目前匹配的数组，截断并保存到结果数组，
          break;
        } else {
          if (childrenData[j].child) {
            depth++;
            childrenEach(childrenData[j].child, depth);
          }
        }
      }
      return returnArr;
    }
    return childrenEach(treeData, depth);
  },
  getTreeDeepArrAddressName(key, treeData) {
    let arr = []; // 在递归时操作的数组
    let returnArr = []; // 存放结果的数组
    let depth = 0; // 定义全局层级
    // 定义递归函数
    function childrenEach(childrenData, depthN) {
      for (var j = 0; j < childrenData.length; j++) {
        depth = depthN; // 将执行的层级赋值 到 全局层级

        arr[depthN] = childrenData[j].code;

        if (childrenData[j].code == key) {
          // returnArr = arr; // 原写法不行, 因 此赋值存在指针关系
          returnArr = arr.slice(0, depthN + 1); //将目前匹配的数组，截断并保存到结果数组，
          break;
        } else {
          if (childrenData[j].child) {
            depth++;
            childrenEach(childrenData[j].child, depth);
          }
        }
      }
      return returnArr;
    }
    return childrenEach(treeData, depth);
  },
  // tips(type, title, message, duration = 3000) {
  //   Notification({
  //     title,
  //     message,
  //     type,
  //     duration
  //   });
  // },
  tips(type, title, message) {
    MessageBox.confirm(message, title, {
      confirmButtonText: this.getLocalStorage('yllanguage') == 'en' ? 'ok' : '确定',
      showCancelButton: false,
      type: type,
    }).catch(() => {});
  },
  setLocalStorage(item, value) {
    localStorage.setItem(item, value);
  },
  getLocalStorage(item) {
    return localStorage.getItem(item);
  },
  removeLocalStorage(item) {
    localStorage.removeItem(item);
  },
  // 判断是否是手机号
  isPoneAvailable(poneInput) {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(poneInput)) {
      return false;
    } else {
      return true;
    }
  },
  // 复制功能
  copyUrl(data) {
    let url = data;
    let oInput = document.createElement('input');
    oInput.value = url;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象;
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.remove()
  },
  // 动画到指定位置
  scrollAnimation(currentY, targetY) {
    let needScrollTop = targetY - currentY;
    let _currentY = currentY;
    setTimeout(() => {
      const dist = Math.ceil(needScrollTop / 10);
      _currentY += dist;
      window.scrollTo(_currentY, currentY);
      if (needScrollTop > 10 || needScrollTop < -10) {
        this.scrollAnimation(_currentY, targetY);
      } else {
        window.scrollTo(_currentY, targetY);
      }
    }, 1);
  },
};

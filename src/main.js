import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false
App.mpType = 'app'

// axios 的适配器，可以用来替换掉我们底层的axios的实现
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    // 通过适配器，把axios默认的使用xhr发送请求，换成使用wx.request发送请求
    wx.request({
      url: config.url,
      method: config.method,
      header: config.headers,
      data: config.params ? config.params : config.data, // 这种写法是为了兼容GET/POST
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}
// 配置axios
axios.defaults.baseURL = 'https://www.zhengzhicheng.cn/'
Vue.prototype.$axios = axios
const app = new Vue(App)
app.$mount()

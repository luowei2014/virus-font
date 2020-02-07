import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import echarts from 'echarts'

axios.defaults.baseURL = "http://localhost:88/";
Vue.prototype.$http = axios
Vue.prototype.$echarts=echarts
Vue.config.productionTip = false
Vue.use(echarts)

new Vue({
  render: h => h(App),
}).$mount('#app')

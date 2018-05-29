// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Schart from './Schart'
import Schart2 from './Schart2'
//Vue.prototype.$http = axios;
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css' //该样式文件需要单独引入
// Vue.use(ElementUI);
//import myLiang from './components/liang'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Schart2)
  // components: { App },
  // template: '<App/>'
})

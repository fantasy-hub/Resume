import Vue from 'vue'
import VueRouter from 'vue-router'
//Collapse 折叠面板效果是什么样
import {
  Collapse,
  CollapseItem
} from 'element-ui'
import App from './App.vue'
//leancloud有什么用
import AV from 'leancloud-storage'
import routes from './router.config.js'
import store from './store.js'

Vue.use(VueRouter);
Vue.use(Collapse);
Vue.use(CollapseItem);
//这些是怎么来的
var APP_ID = 'wpQEOBCwtRID86ejGVuX7z3h-gzGzoHsz';
var APP_KEY = 'mpKEkzNB6DVq7yRbRaohyorw';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
const router = new VueRouter({
  //对于所有路由导航，简单地让页面滚动到顶部。这个功能只在HTML5 history模式下可用
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
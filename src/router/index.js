import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      component: resolve => require(['../components/index.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/home',
          component: resolve => require(['../components/page/home.vue'], resolve),
          meta: {title: '首页'}
        },
        {
          path: '/introduce',
          component: resolve => require(['../components/page/introduce.vue'], resolve),
          meta: {title: '联盟介绍'}
        }
      ]
    }
  ]
})

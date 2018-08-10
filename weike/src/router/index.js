import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login'], resolve)
    },
    {
      path:'/404',
      component:resolve => require(['@/components/404/404.vue'], resolve)
    },
    {
      path:'*',
      redirect:'/404'
    },
    {
      path:'/',
      meta:{auth:true},
      name:'home',
      component:resolve => require(['@/components/home/home.vue'], resolve)
    }
  ]
});

// 全局路由守卫
router.beforeEach((to,from,next) => {
  // 判断路由是否需要登陆权限
  if(to.meta.auth){
    // token值
    if(true) {
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
})

export default router

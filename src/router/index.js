import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  linkActiveClass:"active",
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
      redirect:"/home",
      component:resolve => require(['@/components/home/home.vue'], resolve),
      children:[
        {
          path:'/shou',
          meta:{auth:true},
          name:'shou',
          component:resolve => require(['@/components/shou/shou.vue'], resolve)
        },
        {
          // 学习详情
          path:'/study',
          meta:{auth:true},
          name:'study',
          component:resolve => require(['@/components/study/study.vue'], resolve)
        },
        {
          // 班级详情
          path:'/details',
          meta:{auth:true},
          name:'details',
          component:resolve => require(['@/components/details/details.vue'], resolve)
        },
        {
          // 更多课程
          path:'/more_course',
          meta:{auth:true},
          name:'more_course',
          component:resolve => require(['@/components/more_course/more_course.vue'], resolve)
        },
        {
          // 更多班级
          path:'/more_class',
          meta:{auth:true},
          name:'more_class',
          component:resolve => require(['@/components/more_class/more_class.vue'], resolve)
        },
        {
          // 更多老师
          path:'/more_teacher',
          meta:{auth:true},
          name:'more_teacher',
          component:resolve => require(['@/components/more_teacher/more_teacher.vue'], resolve)
        },
        {
          // 资讯
          path:'/msg',
          meta:{auth:true},
          name:'msg',
          component:resolve => require(['@/components/msg/msg.vue'], resolve)
        }
      ]
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

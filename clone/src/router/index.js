import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            component: r => { require(['../components/login'], r) }
        },
        {
            path: '/403',
            component: r => { require(['../components/403'], r) }
        },
        {
            path: '/404',
            component: r => { require(['../components/404'], r) }
        },
        {
            path: '/',
            meta: { auth: true },
            component: r => { require(['../components/layout'], r) },
            children: [{
                    path: '',
                    meta: { auth: true },
                    redirect: '/home'
                },
                {
                    path: '/home',
                    meta: { auth: true },
                    name: '首页',
                    component: r => { require(['../components/home'], r) }
                },
                {
                    path: '/changelog',
                    meta: { auth: true },
                    name: '更新日志',
                    component: r => { require(['../components/changelog'], r) }
                },
                {
                    path: '/changedta',
                    meta: { auth: true },
                    name: '修改资料',
                    component: r => { require(['../components/changedata'], r) }
                }
            ]
        },
        {
            path: '*',
            redirect: '/L404'
        }
    ]
})
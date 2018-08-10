import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 共享组件
const login = r => require.ensure([], () => r(require('@/components/Login')), 'login')
const erro = r => require.ensure([], () => r(require('@/components/404')), 'erro')
const layout = r => require.ensure([], () => r(require('@/components/Layout')), 'layout')
const home = r => require.ensure([], () => r(require('@/components/home')), 'home')

// 更新日志
const changelog = r => require.ensure([], () => r(require('@/components/Changelog')), 'changelog')

// 客户关系
const crm = r => require.ensure([], () => r(require('@/pages/crm/crm')), 'crm')
const mouse = r => require.ensure([], () => r(require('@/pages/crm/mouse/mouse')), 'mouse')

// 组织
const base = r => require.ensure([], () => r(require('@/pages/org/org')), 'org')
const org = r => require.ensure([], () => r(require('@/pages/org/org')), 'org')
const school = r => require.ensure([], () => r(require('@/pages/org/school/school')), 'school')
const users = r => require.ensure([], () => r(require('@/pages/org/users/users')), 'users')

// 后台管理
const admin = r => require.ensure([], () => r(require('@/pages/admin/admin')), 'admin')
const role = r => require.ensure([], () => r(require('@/pages/admin/role/role')), 'role')
const privilege = r => require.ensure([], () => r(require('@/pages/admin/privilege/privilege')), 'privilege')

// 修改资料
const changepdata = r => require.ensure([], () => r(require('@/components/Changedata')), 'changepdata')

export default new Router({
	// mode: 'history',
  routes: [
  	{
        path: '/login',
        component: login,
    },
	{
        path: '/404',
        component: erro,
    },
    {
	    path: '/',
		meta: { auth: true },
	    component: layout,
	    children:[
	    	{
				path: '',
				redirect: '/home',
			},
			{
				path: '/home',
				meta: { auth: true },
				name: '首页',
				component: home
			},
			{
				path: '/crm',
				meta: { auth: true },
				component: crm,
				children:[
					{
						path: 'mouse',
						meta: { auth:true },
						name: '鼠标码',
						component: mouse
					}
				]
			},
			{
				path: '/base',
				// meta: { auth: true },
				component: base,
				children:[
					{
						path: 'school',
						// meta: { auth:true },
						name: '学校管理',
						component: school
					}
				]
			},
			{
				path: '/org',
				// meta: { auth: true },
				component: base,
				children:[
					{
						path: 'school',
						// meta: { auth:true },
						name: '学校管理',
						component: school
					},
					{
						path: 'users',
						// meta: { auth:true },
						name: '用户管理',
						component: users
					}
				]
			},
			{
				path: '/admin',
				// meta: { auth:true },
				component: admin,
				children:[
					{
						path: 'role/privilege',
						// meta: { auth:true },
						name: '权限分配',
						component: role
					},
					{
						path: 'privilege',
						// meta: { auth:true },
						name: '权限管理',
						component: privilege
					}
				]
			},
			{
				path: '/changelog',
				// meta: { auth:true },
				name: '更新日志',
				component: changelog
			},
			{
				path: '/changedata',
				// meta: { auth:true },
				name: '修改资料',
				component: changepdata
			}
	    ]
    },
    {
    	path: '*',
    	redirect:'/404'
    }
  ]
})

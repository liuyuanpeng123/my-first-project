import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '概况',
                    noAuth: true,
                },
                // component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue'),
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/kanban',
                name: 'kanban',
                meta: {
                    title: '看板管理',
                    noAuth: true,
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/kanban/kanban.vue'),
            },
            {
                path: '/region',
                name: 'region',
                meta: {
                    title: '区域管理',
                    noAuth: true,
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/region/index.vue'),
            },
            {
                path: '/system-user', 
                name: 'system-user',
                meta: {
                    title: '用户管理',
                    permiss: '21',
                },
                component: () => import(/* webpackChunkName: "system-user" */ '../views/system/user.vue'),
            },
            {
                path: '/system-role',
                name: 'system-role',
                meta: {
                    title: '角色管理',
                    permiss: '22',
                },
                component: () => import(/* webpackChunkName: "system-role" */ '../views/system/role.vue'),
            },
            {
                path: '/system-menu',
                name: 'system-menu',
                meta: {
                    title: '菜单管理',
                    permiss: '23',
                },
                component: () => import(/* webpackChunkName: "system-menu" */ '../views/system/menu.vue'),
            },
            {
                path: '/system-dep',
                name: 'system-dep',
                meta: {
                    title: '科室管理',
                    permiss: '24',
                },
                component: () => import(/* webpackChunkName: "system-menu" */ '../views/system/dep.vue'),
            },
            {
                path: '/ucenter',
                name: 'ucenter',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "ucenter" */ '../views/pages/ucenter.vue'),
            },
            
            {
                path: '/model-1',
                name: 'model-1',
                meta: {
                    title: '看板1',
                    permiss: '28',
                },
                component: () => import(/* webpackChunkName: "statistic" */ '../views/models/model1.vue'),
            },
        ],
    },
    {
        path: '/model1',
        name: 'model-1',
        meta: {
            title: '看板1',
            permiss: '28',
        },
        component: () => import(/* webpackChunkName: "statistic" */ '../views/models/model1.vue'),
    },
    {
        path: '/model2',
        name: 'model-2',
        meta: {
            title: '看板2',
            permiss: '28',
        },
        component: () => import(/* webpackChunkName: "statistic" */ '../views/models/model2.vue'),
    },
    {
        path: '/model3',
        name: 'model-3',
        meta: {
            title: '看板3',
            permiss: '28',
        },
        component: () => import(/* webpackChunkName: "statistic" */ '../views/models/model3.vue'),
    },
    {
        path: '/login',
        meta: {
            title: '登录',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/pages/login.vue'),
    },
    {
        path: '/register',
        meta: {
            title: '注册',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "register" */ '../views/pages/register.vue'),
    },
    {
        path: '/reset-pwd',
        meta: {
            title: '重置密码',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "reset-pwd" */ '../views/pages/reset-pwd.vue'),
    },
    {
        path: '/403',
        meta: {
            title: '没有权限',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/pages/403.vue'),
    },
    {
        path: '/404',
        meta: {
            title: '找不到页面',
            noAuth: true,
        },
        component: () => import(/* webpackChunkName: "404" */ '../views/pages/404.vue'),
    },
    { path: '/:path(.*)', redirect: '/404' },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    const role = localStorage.getItem('vuems_name');
    const permiss = usePermissStore();

    if (!role && to.meta.noAuth !== true) {
        next('/login');
    } else if (typeof to.meta.permiss == 'string' && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done();
});

export default router;

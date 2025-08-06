// router/index.ts
// import  { RouteRecordRaw ,createRouter, createWebHashHistory, } from 'vue-router'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Cookies from 'js-cookie'
// import http from '../utils/http'


/* Home */
import Home from '../views/home.vue';

// 定义菜单数据类型
interface MenuItem {
  id: number;
  uri: string;
  title: string;
  icon: string;
  extension: string;
  childrens: MenuItem[];
}

// 生成路由配置项
function createRouteItem(menuItem: MenuItem, isRoot = false): RouteRecordRaw  {
  const { uri, title, icon, extension, childrens } = menuItem;
  
  // 处理组件加载
  const component = isRoot 
    ? Home 
    : () => import(`@/views/${extension}`);
  
  // 递归处理子菜单
  const children = childrens.map(child => createRouteItem(child));
  
  // 生成路由配置
  const routeItem: RouteRecordRaw  = {
    path: uri,
    component,
    meta: { title, icon },
    children: children.length > 0 ? children : undefined
  };
  
  // 如果有子菜单，添加重定向
  if (children.length > 0) {
    routeItem.redirect = `/${children[0].path}`;
  }
  
  return routeItem;
}

// 处理菜单数据并生成路由配置
function generateRoutes(menuData: MenuItem[]): RouteRecordRaw [] {
  return menuData
    .filter(item => item.id !== 100 && item.uri)
    .map(item => {
      const routeItem = createRouteItem(item, true);
      
      // 检查是否已存在相同路径的路由
      const exists = constantRoutes.some(route => route.path === routeItem.path);
      return exists ? null : routeItem;
    })
    .filter(route => route !== null) as RouteRecordRaw [];
}

// 基础路由配置
export const constantRoutes: RouteRecordRaw [] = [
  {
    path: '/login',
    component: () => import('../views/pages/login.vue')
  },
  {
    path: '/404',
    component: () => import('../views/pages/404.vue')
  },
  {
    path: '/',
    component: Home,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '控制面板',
      component: () => import('@/views/dashboard/index.vue'),
      meta: { title: '控制面板', icon: 'ri-bar-chart-box-fill' }
    }]
  }
];

// 路由管理器
export const RouteManager = {
  // 初始化动态路由
  initRoutes() {
    console.log('开始初始化动态路由');
    const cr3 = localStorage.getItem('cr3');
    
    if (!cr3) {
      console.log('没有获取到路由配置');
      // this.hasAdminMenu();
      return constantRoutes;
    }
    
    try {
      const menuData = JSON.parse(cr3) as MenuItem[];
      console.log('解析菜单数据:', menuData);
      
      // 生成动态路由并添加到基础路由
      const dynamicRoutes = generateRoutes(menuData);
      constantRoutes.push(...dynamicRoutes);
      
      console.log('生成的路由配置:', dynamicRoutes);
      return constantRoutes;
    } catch (error) {
      console.error('解析路由配置失败:', error);
      return constantRoutes;
    }
  },
  
  // 获取管理员菜单
  hasAdminMenu() {
    // http.get('/java/AdminMenu/hasAllForJSON', '', (res: any) => {
    //   console.log('获取管理员菜单:', res);
    //   const data = res.data as MenuItem[];
    //   const str = JSON.stringify(data);
    //   localStorage.setItem('cr3', str);
    //   resetRouter();
    // });
  }
};

// 创建路由实例
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
  routes: constantRoutes
});

// const router = createRouter();

// // 重置路由
// export function resetRouter() {
//   console.log('重置路由');
//   const newRouter = createRouter();
//   router.matcher = newRouter.matcher; // 重置路由匹配器
//   RouteManager.initRoutes();
// }

export default router;
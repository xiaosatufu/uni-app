import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统首页', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/poi',
  //   component: Layout,
  //   alwaysShow: false, //一直显示根路由
  //   meta: { title: 'POI' },
  //   children: [
  //     {
  //       path: 'management',
  //       name: 'poiManagement',
  //       component: () => import('@/views/poi/management.vue'),
  //       meta: { title: 'POI管理' },
  //       children: [{
  //         path: 'create',
  //         name:'poiCreate',
  //         component: () => import('@/views/poi/create.vue'),
  //         meta: {
  //           title: '新增POI'
  //         },
  //         hidden: true
  //       }]
  //     },
  //   ]
  // },
  {
    path: '/poi',
    component: Layout,
    redirect: '/poi/management',
    alwaysShow: false, //一直显示根路由
    meta: {
      title: 'POI管理'
    },
    children: [{
      path: 'management',
      component: () => import('@/views/poi/management.vue'),
      meta: {
        activeMenu: '/poi'

        //   title: 'POI管理'
      },
      hidden: true,
      alwaysShow: true, //一直显示根路由
      children: [{
        path: 'create',
        component: () => import('@/views/poi/create.vue'),
        meta: {
          title: '新增POI',
          activeMenu: '/poi'
        },
        hidden: true,
        alwaysShow: true, //一直显示根路由
      }, {
        path: 'detail',
        component: () => import('@/views/poi/create.vue'),
        meta: {
          title: '查看POI',
          activeMenu: '/poi'
        },
        hidden: true,
        alwaysShow: true, //一直显示根路由
      }, {
        path: 'edit',
        component: () => import('@/views/poi/create.vue'),
        meta: {
          title: '编辑POI',
          activeMenu: '/poi'
        },
        hidden: true,
        alwaysShow: true, //一直显示根路由
      }]
    }]
  },
  {
    path: '/album',
    component: Layout,
    redirect: '/album/management',
    meta: {

      title: '相册管理'
    },
    children: [{
      path: 'management',
      component: () => import('@/views/album/management.vue'),
      meta: {
        // title: '相册管理'
        activeMenu: '/album'
      },
      hidden: true,
      children: [{
        path: 'business',
        component: () => import('@/views/album/business.vue'),
        meta: {
          title: '商家相册',

          activeMenu: '/album'
        }
      }, {
        path: 'children',
        component: () => import('@/views/album/children.vue'),
        meta: {
          title: '遛娃相册',

          activeMenu: '/album'
        }
      }]
    }]
  },

  {
    path: '/content',
    component: Layout,
    redirect: '/content/management',
    children: [{
      path: 'management',
      component: () => import('@/views/content/management.vue'),
      meta: {
        title: '内容管理'
      }
    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/management',
    children: [{
      path: 'management',
      component: () => import('@/views/user/management.vue'),
      meta: {
        title: '用户管理'
      }
    }]
  },
  {
    path: '/marketing',
    component: Layout,
    redirect: '/marketing/tool',
    children: [{
      path: 'tool',
      component: () => import('@/views/marketing/tool.vue'),
      meta: {
        title: '营销工具'
      }
    }]
  },


  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

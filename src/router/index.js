import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/explore',
    component: () => import('@/views/index/Index.vue'),
    children: [
      {
        path: 'explore',
        component: () => import('@/views/index/Explore.vue')
      },
      {
        path: 'podcast',
        component: () => import('@/views/index/Podcast.vue')
      },
      {
        path: 'mine',
        component: () => import('@/views/index/Mine.vue')
      },
      {
        path: 'follow',
        component: () => import('@/views/index/Follow.vue')
      },
      {
        path: 'community',
        component: () => import('@/views/index/Community.vue')
      },
    ]
  }
]

const routeNotFound = {
  path: '/:pathMatch(.*)*',
  component: () => import('@/views/not-found/Index.vue')
}

routes.push(routeNotFound)

const routeConfig = {
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
  }
}

const router = createRouter(routeConfig)

export default router
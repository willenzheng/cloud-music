import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/index/Index.vue')
  }
]

const routeNotFound = {
  path: '/:pathMatch(.*)*',
  component: () => import('../views/not-found/index.vue')
}

routes.push(routeNotFound)

const routeConfig = {
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    console.log(to, from, savePosition)
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
  }
}

const router = createRouter(routeConfig)

export default router
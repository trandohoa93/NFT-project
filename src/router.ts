import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true'

  const requiresAuth = ['/profile', '/shopcart', '/contact'].includes(to.path)

  const redirectToLogin = { path: '/auth/login' }

  if (to.query.verify === 'true' && !isAuthenticated)
    next(redirectToLogin)
  else if (to.path === '/auth/login' && isAuthenticated)
    next({ path: '/' })
  else if (requiresAuth && !isAuthenticated)
    next(redirectToLogin)
  else
    next()
})

export default router

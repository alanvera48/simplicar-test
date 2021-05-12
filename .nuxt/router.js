import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7f4b8678 = () => interopDefault(import('..\\pages\\vehiculos\\index.vue' /* webpackChunkName: "pages/vehiculos/index" */))
const _3418a02c = () => interopDefault(import('..\\pages\\vehiculos\\_id.vue' /* webpackChunkName: "pages/vehiculos/_id" */))
const _e44945bc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/vehiculos",
    component: _7f4b8678,
    name: "vehiculos"
  }, {
    path: "/vehiculos/:id",
    component: _3418a02c,
    name: "vehiculos-id"
  }, {
    path: "/",
    component: _e44945bc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

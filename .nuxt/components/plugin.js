import Vue from 'vue'

const components = {
  Footer: () => import('../..\\components\\Footer\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Header: () => import('../..\\components\\Header\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Home: () => import('../..\\components\\Home\\Home.vue' /* webpackChunkName: "components/home" */).then(c => c.default || c),
  VehiculosVehiculoCard: () => import('../..\\components\\Vehiculos\\VehiculoCard.vue' /* webpackChunkName: "components/vehiculos-vehiculo-card" */).then(c => c.default || c),
  Vehiculos: () => import('../..\\components\\Vehiculos\\Vehiculos.vue' /* webpackChunkName: "components/vehiculos" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

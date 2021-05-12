export { default as Footer } from '../..\\components\\Footer\\Footer.vue'
export { default as Header } from '../..\\components\\Header\\Header.vue'
export { default as Home } from '../..\\components\\Home\\Home.vue'
export { default as VehiculosVehiculoCard } from '../..\\components\\Vehiculos\\VehiculoCard.vue'
export { default as Vehiculos } from '../..\\components\\Vehiculos\\Vehiculos.vue'

export const LazyFooter = import('../..\\components\\Footer\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHome = import('../..\\components\\Home\\Home.vue' /* webpackChunkName: "components/home" */).then(c => c.default || c)
export const LazyVehiculosVehiculoCard = import('../..\\components\\Vehiculos\\VehiculoCard.vue' /* webpackChunkName: "components/vehiculos-vehiculo-card" */).then(c => c.default || c)
export const LazyVehiculos = import('../..\\components\\Vehiculos\\Vehiculos.vue' /* webpackChunkName: "components/vehiculos" */).then(c => c.default || c)

<template>
<div class="card">
  <div>
    <img :img-src="`${imgUrl}${vehiculo.gallery[0].large}`">
  </div>
  <span>{{vehiculo.model}}</span>
  <hr>
  <div class="precio-box">
    <span>PRECIO DESDE</span>
    <span class="precio">{{vehiculo.amount + ' ' + vehiculo.currency.toUpperCase()}}</span>
  </div>
  <hr>
  <div class="detalle">
    <p><nuxt-link :to="`vehiculos/${index}`" @click="getVehiculo(index)">VER DETALLE DE MODELO</nuxt-link></p>
    <i class="fas fa-arrow-right"></i>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt recusandae sequi, corrupti</p>
</div>
</template>
<script>
export default {
name: "VehiculoCard",
data() {
return{
imgUrl: 'https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/'
}
},
props:{
vehiculo: {
type: Object,
require: true,
default: {}
},
index: Number
},
methods:{
getVehiculo(index) {
this.$store.dispatch('store/getVehiculo', this.$route.params.id)
}
}
};
</script>
<style >
</style>
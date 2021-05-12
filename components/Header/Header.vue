<template>
  <header>
    <img class="" src="~assets/nissan-logo.png" href="/" alt="logo">
    <nav class="nav-sec">
      <h2>Nissan</h2>
      <ul>
        <li><nuxt-link to="/vehiculos">VEHICULOS</nuxt-link></li>
        <li><a href="" to="#" >DESCUBRI NISSAN</a></li>
      </ul>
    </nav>
    <div class="input">
      <div>
        <fa-icon :icon="['fas', 'search']" />
        <input type="text" class="input-header" placeholder="BUSCAR POR MODELO VEHICULO">
      </div>
    </div>
    <div class="toggle no-active" v-on:click="toggle">
      <fa-icon :icon="['fas', 'bars']" />
    </div>
  </header><!-- /header -->
</template>
<script>
  export default {
  name: 'Header',
  methods: {
    toggle(){
      const d = document;
      let $nav = d.querySelector('.nav-sec');
      $nav.classList.toggle('toggle')     
    }

  }

  };
</script>
<style>
  
</style>

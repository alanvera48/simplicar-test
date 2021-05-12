<template>
  <section>
    <div class="title">
      <h2>¿CUAL VA A SER TU PROXIMO NISSAN?</h2>
    </div>
    <div class="selection-box">
      <div class="selections">
        <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>CARROCERIA</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>MODELO</option>
            <option value="1">MODELO</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <select class="form-select" aria-label="Default select example">
            <option selected>PRECIO</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="orden">
        <div class="orden-div">
          Ordenar:
          <div>
            <select class="form-select" aria-label="Default select example">
              <option value="1" selected>PRECIO MAS BAJO</option>
              <option value="2">PRECIO MEDIO</option>
              <option value="3">PRECIO MAS ALTO</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="box-cards">
        <div class="card">
        <div>
          <img src="~assets/car-card.png">
        </div>
        <span>MARCH</span>
        <hr>
        <div class="precio-box">
          <span>PRECIO DESDE</span>
          <span class="precio">US$ 15.990</span>
        </div>
        <hr>
        <div class="detalle">
          <p>VER DETALLE DE MODELO</p>
          <i class="fas fa-arrow-right"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt recusandae sequi, corrupti</p>
      </div>
      <VehiculoCard
        v-for="(vehiculo, index) in vehiculos"
        :key="vehiculo.id"
        :index="index"
        :vehiculo="vehiculo"
      />
    </div>
  </section>
</template>

<script>
import VehiculoCard from "./VehiculoCard";
import { mapState } from "vuex";

export default {
  name: "Vehiculos",
  components: { VehiculoCard },
  computed: {
    ...mapState({
      vehiculos: state => state.store.vehiculos
    })
  },
  async mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start();
      await this.$store.dispatch("store/getVehiculos");
      this.$nuxt.$loading.finish();
    });
  }
};
</script>

<style scoped>
.vehiculos {
  width: 100%;
}

.vehiculos-header {
  width: 100%;
  height: 20vh;
  background-color: rgb(204, 204, 204);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 3vw;
}

.vehiculos-filtros {
  margin: 0vh 5vw;
}

.vehiculos-filtros-bottom {
  display: flex;
}

.vehiculos-catalogo {
  width: 100%;
  margin: 5vh 0vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#dropdown-ordenar {
  align-self: flex-end;
}

@media screen and (max-width: 800px) {
  .vehiculos-catalogo {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .vehiculos-header {
    height: 15vh;
  }

  .vehiculos-filtros {
    display: none;
  }
}
</style>

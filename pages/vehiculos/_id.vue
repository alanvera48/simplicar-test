<!-- <template>
  <VehiculoDetalle :vehiculo="vehiculo"/>
</template>

<script>
import VehiculoDetalle from "@/components/Vehiculos/VehiculoDetalle.vue";

export default {
  components:{ VehiculoDetalle },
  async asyncData({ store, route }) {
    const vehiculo = await store.dispatch('store/getVehiculo', route.params.id)
    return { vehiculo }    
  }
}
</script>

<style>

</style> -->
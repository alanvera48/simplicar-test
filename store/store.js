const PROXY_URL = "http://localhost:8010/proxy";

export const state = () => ({
  vehiculos: [],
  vehiculo: {}
});

export const mutations = {
  setVehiculos(state, payload) {
    state.vehiculos = payload;
  },
  setVehiculo(state, payload) {
    state.vehiculo = payload;
  }
};

export const actions = {
  async getVehiculos({ commit }) {
    try {      
      const vehiculos = await this.$axios.$get(`${PROXY_URL}/product`);
      commit("setVehiculos", vehiculos.results);
    } catch (error) {
      console.log(error);
    }
  },
  async getVehiculo({ commit, state, dispatch }, id) {
    try {
      // const vehiculo = await this.$axios.$get(`${PROXY_URL}/product/${id}`);
      
      //local
      if(!state.vehiculos.length) {
        await dispatch('getVehiculos')        
      }
      const vehiculo = state.vehiculos[id];           
      commit("setVehiculo", vehiculo);
      return vehiculo
    } catch (error) {
      console.log(error);
    }
  },
  async lead({ commit }, userInfo) {
    try {
      console.log("entro");
      const res = await this.$axios.$get(`${PROXY_URL}/lead`, userInfo);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};

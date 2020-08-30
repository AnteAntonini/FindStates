import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);


const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: window.localStorage
  })

export const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    strict: true,
    state: {
        favStates: []
    },
    getters: {
        getFavStates: state => {
            return state.favStates;
        }
    },
    mutations: {
        selectedState: (state, payload) => {                        
            state.favStates = payload;
            console.log(state.favStates);
        }
    },  
    actions: {

    }
});
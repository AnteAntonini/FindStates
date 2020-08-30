import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
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
        }
    },  
    actions: {

    }
});
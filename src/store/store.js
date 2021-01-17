import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        darkMode: false
    },
    getters: {

    },
    mutations: {
        toggleAppMode: state => {
            state.darkMode = !state.darkMode;
        }
    },
    actions: {
        toggleAppMode: context => {
            context.commit('toggleAppMode');
        }
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        darkMode: localStorage.getItem('mode') === 'dark' || false
    },
    getters: {

    },
    mutations: {
        toggleAppMode: state => {
            state.darkMode = !state.darkMode;
            if (state.darkMode){
                localStorage.setItem('mode', 'dark');
            }else{
                localStorage.setItem('mode', 'light');
            }
        }
    },
    actions: {
        toggleAppMode: context => {
            context.commit('toggleAppMode');
        }
    }
})
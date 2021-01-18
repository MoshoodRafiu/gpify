import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        darkMode: localStorage.getItem('mode') === 'dark' || false,
        grades: JSON.parse(localStorage.getItem('myGrades')) || [
            {
                'grade': 'A',
                'points': 5,
                'from': 70,
                'to': 100,
                'active': true,
                'removable': false
            },
            {
                'grade': 'B',
                'points': 4,
                'from': 60,
                'to': 69,
                'active': true,
                'removable': false
            },
            {
                'grade': 'C',
                'points': 3,
                'from': 50,
                'to': 59,
                'active': true,
                'removable': false
            },
            {
                'grade': 'D',
                'points': 2,
                'from': 45,
                'to': 49,
                'active': true,
                'removable': false
            },
            {
                'grade': 'E',
                'points': 1,
                'from': 40,
                'to': 44,
                'active': true,
                'removable': false
            },
            {
                'grade': 'F',
                'points': 0,
                'from': 0,
                'to': 39,
                'active': true,
                'removable': false
            },
        ]
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
        },
        updateGrade: (state, payload) => {
            if (payload.data.from < payload.data.to){
                state.grades[payload.index] = payload.data;
                localStorage.setItem('myGrades', JSON.stringify(state.grades));
            }
        },
        toggleGrade: (state, payload) => {
            state.grades[payload].active = !state.grades[payload].active;
            localStorage.setItem('myGrades', JSON.stringify(state.grades));
        },
        resetGrading: state => {
            state.grades = [
                {
                    'grade': 'A',
                    'points': 5,
                    'from': 70,
                    'to': 100,
                    'active': true,
                    'removable': false
                },
                {
                    'grade': 'B',
                    'points': 4,
                    'from': 60,
                    'to': 69,
                    'active': true,
                    'removable': false
                },
                {
                    'grade': 'C',
                    'points': 3,
                    'from': 50,
                    'to': 59,
                    'active': true,
                    'removable': false
                },
                {
                    'grade': 'D',
                    'points': 2,
                    'from': 45,
                    'to': 49,
                    'active': true,
                    'removable': false
                },
                {
                    'grade': 'E',
                    'points': 1,
                    'from': 40,
                    'to': 44,
                    'active': true,
                    'removable': false
                },
                {
                    'grade': 'F',
                    'points': 0,
                    'from': 0,
                    'to': 39,
                    'active': true,
                    'removable': false
                },
            ]
        }
    },
    actions: {
        toggleAppMode: context => {
            context.commit('toggleAppMode');
        },
        updateGrade: (context, payload) => {
            context.commit('updateGrade', payload);
        },
        toggleGrade: (context, payload) => {
            context.commit('toggleGrade', payload)
        },
        resetGrading: context => {
            context.commit('resetGrading');
            localStorage.removeItem('myGrades');
        }
    }
})
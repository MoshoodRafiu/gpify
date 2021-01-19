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
        ],
        courses: JSON.parse(localStorage.getItem('myCourses')) || []
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
            if (payload.data.from && payload.data.to && payload.data.from < payload.data.to){
               return;
            }
            state.grades[payload.index] = payload.data;
            localStorage.setItem('myGrades', JSON.stringify(state.grades));
        },
        updateCourse: (state, payload) => {
            state.courses[payload.index] = payload.data;
            localStorage.setItem('myCourses', JSON.stringify(state.courses));
        },
        toggleGrade: (state, payload) => {
            state.grades[payload].active = !state.grades[payload].active;
            localStorage.setItem('myGrades', JSON.stringify(state.grades));
        },
        toggleCourse: (state, payload) => {
            state.courses[payload].active = !state.courses[payload].active;
            localStorage.setItem('myCourses', JSON.stringify(state.courses));
        },
        addGrade: state => {
            let newGrade = {
                'grade': '',
                'points': '',
                'from': '',
                'to': '',
                'active': true,
                'removable': true
            }
            state.grades.unshift(newGrade);
            localStorage.setItem('myGrades', JSON.stringify(state.grades));
        },
        addCourse: state => {
            let newCourse = {
                'course': '',
                'grade': '',
                'unit': '',
                'active': true,
            }
            state.courses.unshift(newCourse);
            localStorage.setItem('myCourses', JSON.stringify(state.courses));
        },
        removeGrade: (state, payload) => {
            state.grades.splice(payload, 1);
            localStorage.setItem('myGrades', JSON.stringify(state.grades));
        },
        removeCourse: (state, payload) => {
            state.courses.splice(payload, 1);
            localStorage.setItem('myCourses', JSON.stringify(state.courses));
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
        },
        clearCourses: state => {
            state.courses = [];
        }
    },
    actions: {
        toggleAppMode: context => {
            context.commit('toggleAppMode');
        },
        updateGrade: (context, payload) => {
            context.commit('updateGrade', payload);
        },
        updateCourse: (context, payload) => {
            context.commit('updateCourse', payload);
        },
        toggleGrade: (context, payload) => {
            context.commit('toggleGrade', payload)
        },
        toggleCourse: (context, payload) => {
            context.commit('toggleCourse', payload)
        },
        resetGrading: context => {
            context.commit('resetGrading');
            localStorage.removeItem('myGrades');
        },
        clearCourses: context => {
            context.commit('clearCourses');
            localStorage.removeItem('myCourses');
        },
        addGrade: context => {
            context.commit('addGrade');
        },
        addCourse: context => {
            context.commit('addCourse');
        },
        removeGrade: (context, payload) => {
            context.commit('removeGrade', payload);
        },
        removeCourse: (context, payload) => {
            context.commit('removeCourse', payload);
        }
    }
})